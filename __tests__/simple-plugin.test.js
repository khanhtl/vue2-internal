import { Vue } from "../plugin/simple-plugin";
import { describe, it, expect } from "vitest";
import { createMockConsole } from "../utils";

const vm = new Vue({
  data: { count: 3 },
  rules: {
    count: {
      validate: (value) => value > 1,
      message: "count must be greater than one",
    },
  },
});

describe("Rules plugin", () => {
  const consoleMock = createMockConsole();
  it("should log count must be greater than one", () => {
    vm.count = 0;
    setTimeout(() => {
      expect(consoleMock).toHaveBeenLastCalledWith(
        `count must be greater than one`
      );
    }, 300);
  });
});
