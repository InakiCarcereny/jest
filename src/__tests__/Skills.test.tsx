import { render, screen } from "@testing-library/react";
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
});
