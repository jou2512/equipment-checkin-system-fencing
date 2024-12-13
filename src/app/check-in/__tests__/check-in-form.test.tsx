import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CheckInForm } from "../check-in-form";
import { databases } from "@/lib/appwrite/config";
import { Weapon, useTournamentStore } from "@/lib/store/tournament-store";

jest.mock("@/lib/appwrite/config", () => ({
  databases: {
    listDocuments: jest.fn(),
    createDocument: jest.fn(),
  },
  COLLECTION_IDS: {
    checkableItems: "checkable-items",
    checkIns: "check-ins",
  },
}));

const mockTournament = {
  id: "tournament-1",
  name: "Test Tournament",
  activeWeapons: ["epee"] as Weapon[],
  itemConfigs: [
    {
      itemId: "1",
      maxQuantity: 2,
      required: true,
    },
  ],
};

const mockItems = [
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
];

describe("CheckInForm", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  beforeEach(() => {
    jest.clearAllMocks();
    const mockedListDocuments = databases.listDocuments as jest.MockedFunction<
      typeof databases.listDocuments
    >;
    mockedListDocuments.mockImplementation(() =>
      Promise.resolve({
        documents: mockItems,
        total: mockItems.length,
      })
    );
    useTournamentStore.setState({ currentTournament: mockTournament });
  });

  const renderForm = () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CheckInForm />
      </QueryClientProvider>
    );
  };

  it("displays available items for check-in", async () => {
    renderForm();

    await waitFor(() => {
      expect(screen.getByText("Epee")).toBeInTheDocument();
    });
  });

  it("handles item quantity input", async () => {
    const user = userEvent.setup();
    renderForm();

    await waitFor(() => {
      expect(screen.getByText("Epee")).toBeInTheDocument();
    });

    const input = screen.getByLabelText(/Epee/i) as HTMLInputElement;
    await user.type(input, "2");

    expect(input).toHaveValue(2);
  });

  it("prevents exceeding maximum quantity", async () => {
    const user = userEvent.setup();
    renderForm();

    await waitFor(() => {
      expect(screen.getByText("Epee")).toBeInTheDocument();
    });

    const input = screen.getByLabelText(/Epee/i) as HTMLInputElement;
    await user.type(input, "3");

    expect(input).toHaveValue(2); // Should be capped at max
  });

  it("submits check-in successfully", async () => {
    const mockedCreateDocument =
      databases.createDocument as jest.MockedFunction<
        typeof databases.createDocument
      >;
    mockedCreateDocument.mockImplementation(() =>
      Promise.resolve({
        $id: "check-in-1",
        $createdAt: "",
        $updatedAt: "",
        $permissions: [],
        $collectionId: "",
        $databaseId: "",
      })
    );

    const user = userEvent.setup();
    renderForm();

    await waitFor(() => {
      expect(screen.getByText("Epee")).toBeInTheDocument();
    });

    const input = screen.getByLabelText(/Epee/i);
    await user.type(input, "2");

    const submitButton = screen.getByRole("button", {
      name: /Submit Equipment/i,
    });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockedCreateDocument).toHaveBeenCalledWith(
        expect.any(String),
        "unique()",
        expect.objectContaining({
          weapon: "epee",
          items: [
            {
              itemId: "1",
              quantity: 2,
            },
          ],
          status: "checking",
        })
      );
    });
  });
});
