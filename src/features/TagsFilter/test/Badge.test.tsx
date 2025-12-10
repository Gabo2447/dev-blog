import { cleanup, render, screen } from "@testing-library/react";
import Badge from "../components/Badge";

describe("Test `Badge` component", () => {
  afterEach(cleanup);

  // 1. Renderizar el contenido (children)
  it("Debe renderizar el contenido pasado como children", () => {
    render(<Badge>Hola mundo</Badge>);

    const badgeElement = screen.getByText("Hola mundo");
    expect(badgeElement).toBeInTheDocument();
  });

  it("Debe tener la clase `dark` cuando se pasa la prop `dark`", () => {
    render(<Badge className="dark">Modo oscuro</Badge>);

    const badgeElement = screen.getByText("Modo oscuro");
    expect(badgeElement).toHaveClass("dark");
  });
});
