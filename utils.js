import { afterAll, vi } from "vitest";

export function createMockConsole() {
  const consoleMock = vi
    .spyOn(console, "log")
    .mockImplementation(() => undefined);

  afterAll(() => {
    consoleMock.mockReset();
  });
  return consoleMock;
}
