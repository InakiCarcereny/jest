import { render, screen } from "@testing-library/react";
import { Users } from "../app/components/Users";

describe("<Users />", () => {
  it("renders the users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(users.length);
  });
});
