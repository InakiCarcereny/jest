import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "../app/components/Skills";

describe("<Skills />", () => {
  const skills: string[] = ["JavaScript", "React", "TypeScript"];

  it("renders the list", () => {
    render(<Skills />);
    const listItem = screen.getByRole("list");
    expect(listItem).toBeInTheDocument();
  });

  it("renders the skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  it("renders the login button", () => {
    render(<Skills />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  it("Not renders the login button", () => {
    render(<Skills />);
    const startCodingButton = screen.queryByRole("button", {
      name: "Start coding",
    });
    expect(startCodingButton).not.toBeInTheDocument();
  });

  it("Start coding button is eventualy displayed", async () => {
    const view = render(<Skills />);
    logRoles(view.container);
    // screen.debug()

    const startCodingButton = await screen.findByRole(
      "button",
      {
        name: "Start coding",
      },
      { timeout: 2000 }
    );
    // screen.debug()
    expect(startCodingButton).toBeInTheDocument();
  });
});
