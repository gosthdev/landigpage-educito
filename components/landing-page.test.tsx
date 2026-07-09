import { describe, it, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { LandingPage } from "@/components/landing-page";

// next/image no funciona tal cual en jsdom: lo reemplazamos por un <img> simple.
// Usamos React.createElement (sin JSX) para evitar problemas del parser dentro del mock.
vi.mock("next/image", () => ({
  default: (props: any) => {
    const { fill, priority, sizes, ...rest } = props;
    return React.createElement("img", rest);
  },
}));

// Valor con el que se configuró NEXT_PUBLIC_REDIRECT_URL en vitest.setup.ts
const REDIRECT_URL = "https://app.telar.test";

describe("LandingPage", () => {
  // 1) SMOKE: la página monta y muestra la marca y el titular principal.
  it("renderiza la marca y el titular del hero", () => {
    // Arrange
    render(<LandingPage />);

    // Act
    const brand = screen.getByText("TELAR");
    const headline = screen.getByText("Arte Textil Digitalizado");

    // Assert
    expect(brand).toBeInTheDocument();
    expect(headline).toBeInTheDocument();
  });

  // 2) DATOS: se renderizan las 3 features con su título.
  it("muestra las tres features del producto", () => {
    // Arrange
    const expectedTitles = [
      "Inventario Inteligente",
      "Gestión de Producción",
      "Análisis en Tiempo Real",
    ];
    const { container } = render(<LandingPage />);

    // Act
    const articles = container.querySelectorAll("article");

    // Assert
    expect(articles).toHaveLength(3);
    expectedTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  // 3) CARRUSEL: por defecto se muestra el primer testimonio.
  it("muestra el primer testimonio por defecto", () => {
    // Arrange
    render(<LandingPage />);

    // Act
    const author = screen.getByText("Elena Vargas");
    const quote = screen.getByText(/Antes pasaba más tiempo buscando hilos/);

    // Assert
    expect(author).toBeInTheDocument();
    expect(quote).toBeInTheDocument();
  });

  // 4) CARRUSEL: al hacer clic en el segundo punto cambia el testimonio activo.
  it("cambia el testimonio al hacer clic en el segundo indicador", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<LandingPage />);
    const secondDot = screen.getByLabelText("Ir al testimonio 2");

    // Act
    await user.click(secondDot);

    // Assert
    expect(screen.getByText("Carlos Mendez")).toBeInTheDocument();
    expect(
      screen.getByText(/Con los tableros de producción/)
    ).toBeInTheDocument();
  });

  // 5) CARRUSEL: el autoplay avanza al siguiente testimonio a los 6s.
  it("avanza automáticamente al siguiente testimonio tras 6 segundos", () => {
    // Arrange
    vi.useFakeTimers();
    render(<LandingPage />);
    expect(screen.getByText("Elena Vargas")).toBeInTheDocument();

    // Act
    act(() => {
      vi.advanceTimersByTime(6000);
    });

    // Assert
    expect(screen.getByText("Carlos Mendez")).toBeInTheDocument();
    vi.useRealTimers();
  });

  // 6) MENÚ MÓVIL: el botón alterna el estado aria-expanded.
  it("alterna el menú móvil con aria-expanded", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<LandingPage />);
    const menuButton = screen.getByRole("button", { name: "Abrir menú" });

    // Act
    const before = menuButton.getAttribute("aria-expanded");
    await user.click(menuButton);
    const after = menuButton.getAttribute("aria-expanded");

    // Assert
    expect(before).toBe("false");
    expect(after).toBe("true");
  });

  // 7) CONFIG: los enlaces de auth se construyen con NEXT_PUBLIC_REDIRECT_URL.
  it("construye los enlaces de login y registro con la URL de redirección", () => {
    // Arrange
    render(<LandingPage />);

    // Act
    const signIn = screen.getByRole("link", { name: "Iniciar sesión" });
    const register = screen.getByRole("link", { name: "Registrarse" });

    // Assert
    expect(signIn).toHaveAttribute("href", `${REDIRECT_URL}/sign-in`);
    expect(register).toHaveAttribute("href", `${REDIRECT_URL}/register`);
  });

  // 8) EFECTO SECUNDARIO: el botón de demo dispara un alert con el mensaje.
  it("muestra un alert al pedir la demo interactiva", async () => {
    // Arrange
    const user = userEvent.setup();
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<LandingPage />);
    const demoButton = screen.getByRole("button", {
      name: "Ver demo interactiva",
    });

    // Act
    await user.click(demoButton);

    // Assert
    expect(alertSpy).toHaveBeenCalledWith(
      "Demo solicitada. Te contactaremos en menos de 24h."
    );
    alertSpy.mockRestore();
  });

  // 9) DATOS: se muestran las tres métricas del hero.
  it("renderiza las métricas del hero", () => {
    // Arrange
    const expectedStats = ["12.5%", "100%", "+2.4M"];
    render(<LandingPage />);

    // Act & Assert
    expectedStats.forEach((stat) => {
      expect(screen.getByText(stat)).toBeInTheDocument();
    });
  });

  // 10) RENDER DINÁMICO: la matriz de tejido dibuja 40 celdas.
  it("dibuja la matriz de tejido con 40 celdas", () => {
    // Arrange
    const { container } = render(<LandingPage />);

    // Act
    const cells = container.querySelectorAll("div.aspect-square");

    // Assert
    expect(cells).toHaveLength(40);
  });
});