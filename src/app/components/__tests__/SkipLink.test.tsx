import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SkipLink from "../SkipLink";

describe("SkipLink", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    const main = document.createElement("main");
    main.id = "main-content";
    main.tabIndex = -1;
    document.body.appendChild(main);
  });

  it("renderiza el enlace para saltar contenido", () => {
    render(<SkipLink />);
    expect(screen.getByText(/saltar al contenido principal/i)).toBeInTheDocument();
  });

  it("mueve el foco al main al hacer click", async () => {
    const user = userEvent.setup();
    render(<SkipLink />);
    const main = document.getElementById("main-content");
    const focusSpy = vi.spyOn(main as HTMLElement, "focus");

    await user.click(screen.getByText(/saltar al contenido principal/i));
    expect(focusSpy).toHaveBeenCalled();
  });
});

