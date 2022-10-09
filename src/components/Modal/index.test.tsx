import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import Modal from ".";

describe('Modal', () => {
  afterEach(cleanup)
  it('should render modal', () => {
    render(<Modal title="Test" />)
    screen.getByRole('dialog')
  })
})