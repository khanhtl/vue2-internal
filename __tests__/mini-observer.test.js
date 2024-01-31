import { observer, autorun } from "../reactive/mini-observer";
import { afterAll, describe, it, expect, vi } from "vitest";

const state = {
  count: 1,
};
observer(state);

describe("Getter Setter", () => {
  const consoleMock = vi
    .spyOn(console, "log")
    .mockImplementation(() => undefined);

  afterAll(() => {
    consoleMock.mockReset();
  });

  it("should log count is: 1", () => {
    autorun(() => console.log(`count is: ${state.count}`));
    expect(consoleMock).toHaveBeenLastCalledWith(`count is: 1`);
  });
  it("should log count is: 2", () => {
    state.count++;
    expect(consoleMock).toHaveBeenLastCalledWith(`count is: 2`);
  });
});
