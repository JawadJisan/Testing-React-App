import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PrimaryButton from "./PrimaryButton";

describe("PrimaryButton()", () => {
  it("should render correctly", () => {
    render(<PrimaryButton />);
    const element = screen.getByText("Click to Add");
    expect(element).toBeInTheDocument();
  });
  it("Should render correctly with the actionType if provided ", () => {
    render(<PrimaryButton actionType="Post" />);
    const element = screen.getByText();
    expect(element).toBeInTheDocument();
  });
});
