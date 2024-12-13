import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TournamentSetupForm from "../tournament-setup-form";
import { databases } from "@/lib/appwrite/config";
import { Models } from "appwrite";

// Properly type the mocked module
jest.mock("@/lib/appwrite/config", () => ({
  databases: {
    listDocuments: jest.fn(() => Promise.resolve({ documents: [], total: 0 })),
    createDocument: jest.fn(() => Promise.resolve({})),
  },
}));

const mockedDatabases = databases as jest.Mocked<typeof databases>;

const mockCheckableItems = [
  {
    id: "1",
    name: "Epee",
    forWeapons: ["epee"],
    $id: "1",
    $createdAt: "",
    $updatedAt: "",
    $permissions: [],
    $collectionId: "",
    $databaseId: "",
  },
  {
    id: "2",
    name: "Body Wire",
    forWeapons: ["epee", "foil"],
    $id: "2",
    $createdAt: "",
    $updatedAt: "",
    $permissions: [],
    $collectionId: "",
    $databaseId: "",
  },
] satisfies Models.Document[];

describe("TournamentSetupForm", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          staleTime: 0,
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
        },
      },
    });

    // Reset all mocks
    jest.resetAllMocks();

    // Set up mock
    (databases.listDocuments as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        documents: mockCheckableItems,
        total: mockCheckableItems.length,
      })
    );
  });

  afterEach(() => {
    queryClient.clear();
  });

  const renderForm = () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TournamentSetupForm />
      </QueryClientProvider>
    );
  };

  it("loads and displays checkable items", async () => {
    // Clear any existing queries
    queryClient.clear();

    // Set up the mock with logging
    (databases.listDocuments as jest.Mock).mockImplementation(() => {
      console.log("Mock listDocuments called");
      return Promise.resolve({
        documents: mockCheckableItems,
        total: mockCheckableItems.length,
      });
    });

    renderForm();

    // First wait for the API call
    await waitFor(
      () => {
        expect(databases.listDocuments).toHaveBeenCalled();
      },
      { timeout: 1000 }
    );

    // Then wait for the items to appear
    await waitFor(
      () => {
        const items = screen.getAllByRole("heading", { level: 3 });
        expect(items).toHaveLength(2);
        expect(items[0]).toHaveTextContent("Epee");
        expect(items[1]).toHaveTextContent("Body Wire");
      },
      { timeout: 1000 }
    );
  });

  it("allows tournament name input", async () => {
    renderForm();
    const user = userEvent.setup();

    const nameInput = screen.getByLabelText(
      /Tournament Name/i
    ) as HTMLInputElement;
    await user.type(nameInput, "Test Tournament");
    expect(nameInput).toHaveValue("Test Tournament");
  });

  it("handles weapon selection", async () => {
    renderForm();
    const user = userEvent.setup();

    const epeeCheckbox = screen.getByLabelText(/Epee/i) as HTMLInputElement;
    await user.click(epeeCheckbox);
    expect(epeeCheckbox).toBeChecked();
  });

  it("submits form with correct data", async () => {
    const mockedCreateDocument =
      databases.createDocument as jest.MockedFunction<
        typeof databases.createDocument
      >;
    mockedCreateDocument.mockImplementation(() =>
      Promise.resolve({
        $id: "new-id",
        $createdAt: "",
        $updatedAt: "",
        $permissions: [],
        $collectionId: "",
        $databaseId: "",
      } as Models.Document)
    );

    const user = userEvent.setup();
    renderForm();

    await user.type(
      screen.getByLabelText(/Tournament Name/i),
      "Test Tournament"
    );
    await user.click(screen.getByLabelText(/Epee/i));

    const quantityInputs = screen.getAllByLabelText(/Max Quantity/i);
    await user.type(quantityInputs[0], "2");

    await user.click(
      screen.getByRole("button", { name: /Create Tournament/i })
    );

    await waitFor(() => {
      expect(mockedCreateDocument).toHaveBeenCalledWith(
        expect.any(String),
        "unique()",
        expect.objectContaining({
          name: "Test Tournament",
          activeWeapons: ["epee"],
          itemConfigs: expect.arrayContaining([
            expect.objectContaining({
              itemId: "1",
              maxQuantity: 2,
            }),
          ]),
        })
      );
    });
  });

  it("handles API errors gracefully", async () => {
    // Clear React Query cache
    queryClient.clear();

    // Mock the createDocument to reject
    (databases.createDocument as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error("API Error"))
    );

    const user = userEvent.setup();
    renderForm();

    // Wait for initial load
    await waitFor(() => {
      expect(databases.listDocuments).toHaveBeenCalled();
    });

    // Fill and submit form
    await user.type(
      screen.getByLabelText(/Tournament Name/i),
      "Test Tournament"
    );
    await user.click(
      screen.getByRole("button", { name: /Create Tournament/i })
    );

    // Check for error message
    await waitFor(() => {
      expect(
        screen.getByText(/Error creating tournament/i)
      ).toBeInTheDocument();
    });
  });
});
