import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../app/hooks/useCounter";

describe("useCounter", () => {
  it("should increment the counter", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it("should increment the counter", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.inrement();
    });
    expect(result.current.count).toBe(1);
  });

  it("should decrement the counter", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
});
