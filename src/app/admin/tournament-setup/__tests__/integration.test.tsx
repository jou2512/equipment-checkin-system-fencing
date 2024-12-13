import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import TournamentSetupPage from "../page";
import { Models } from "appwrite";

// Setup MSW server
const server = setupServer(
  http.get("/api/checkable-items", () => {
    return HttpResponse.json({
      documents: [
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
      ] as Models.Document[],
      total: 1,
    });
  }),

  http.post("/api/tournaments", () => {
    return HttpResponse.json({
      $id: "new-tournament",
      $createdAt: "",
      $updatedAt: "",
      $permissions: [],
      $collectionId: "",
      $databaseId: "",
    } as Models.Document);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Tournament Setup Integration", () => {
  it("completes full tournament setup flow", async () => {
    render(<TournamentSetupPage />);

    // Wait for page to load
    await waitFor(() => {
      expect(screen.getByText(/Tournament Setup/i)).toBeInTheDocument();
    });

    // Fill in tournament details
    await userEvent.type(
      screen.getByLabelText(/Tournament Name/i),
      "Championship 2024"
    );
    await userEvent.click(screen.getByLabelText(/Epee/i));

    // Configure items
    const quantityInput = screen.getByLabelText(/Max Quantity/i);
    await userEvent.clear(quantityInput);
    await userEvent.type(quantityInput, "3");

    // Submit form
    await userEvent.click(
      screen.getByRole("button", { name: /Create Tournament/i })
    );

    // Verify success state
    await waitFor(() => {
      expect(
        screen.getByText(/Tournament created successfully/i)
      ).toBeInTheDocument();
    });
  });

  it("handles network errors appropriately", async () => {
    // Override default handler to simulate error
    server.use(
      http.post("/api/tournaments", () => {
        return HttpResponse.json(
          { error: "Internal Server Error" },
          { status: 500 }
        );
      })
    );

    render(<TournamentSetupPage />);

    // Fill and submit form
    await userEvent.type(
      screen.getByLabelText(/Tournament Name/i),
      "Test Tournament"
    );
    await userEvent.click(
      screen.getByRole("button", { name: /Create Tournament/i })
    );

    // Verify error handling
    await waitFor(() => {
      expect(
        screen.getByText(/Error creating tournament/i)
      ).toBeInTheDocument();
    });
  });
});
