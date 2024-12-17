import "@testing-library/jest-dom";

import { server } from "./src/app/mocks/node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
