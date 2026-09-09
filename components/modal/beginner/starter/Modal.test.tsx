// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Modal } from "./Modal";
import '@testing-library/jest-dom/vitest';

describe("Beginner Modal", () => {
  it("does not render when closed", () => {
    render(
      <Modal
        isOpen={false}
        onClose={() => {}}
      />,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders when open", () => {
    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
      />,
    );

    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(
      screen.getByText("This is the settings modal."),
    ).toBeInTheDocument();
  });

  it("provides a close button", () => {
    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
      />,
    );

    expect(
      screen.getByRole("button", {
        name: /close settings/i,
      }),
    ).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <Modal
        isOpen={true}
        onClose={onClose}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: /close settings/i,
      }),
    );

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
