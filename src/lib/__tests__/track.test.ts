import { describe, it, expect, vi, beforeEach } from "vitest";
import { track, trackCTA, trackFormSubmit } from "../track";

describe("track helpers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (globalThis as unknown as { window?: unknown }).window = undefined;
  });

  it("envía evento genérico cuando existe gtag", () => {
    const mockGtag = vi.fn();
    (globalThis as unknown as { window: { gtag: typeof mockGtag } }).window = { gtag: mockGtag };
    track("test_event", { foo: "bar" });
    expect(mockGtag).toHaveBeenCalledWith("event", "test_event", { foo: "bar" });
  });

  it("trackCTA adjunta location y label", () => {
    const mockGtag = vi.fn();
    (globalThis as unknown as { window: { gtag: typeof mockGtag } }).window = { gtag: mockGtag };
    trackCTA("hero", "Quiero unirme");
    expect(mockGtag).toHaveBeenCalledWith(
      "event",
      "cta_clicked",
      expect.objectContaining({ location: "hero", label: "Quiero unirme" })
    );
  });

  it("trackFormSubmit incluye estado de éxito", () => {
    const mockGtag = vi.fn();
    (globalThis as unknown as { window: { gtag: typeof mockGtag } }).window = { gtag: mockGtag };
    trackFormSubmit("waitlist", true, { step: "1" });
    expect(mockGtag).toHaveBeenCalledWith(
      "event",
      "form_submitted",
      expect.objectContaining({ form_type: "waitlist", success: true, step: "1" })
    );
  });
});

