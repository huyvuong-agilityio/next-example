import { rest } from "msw";

export const handlers = [
  rest.get("/api/user", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ name: "Vuong" }), ctx.delay(1000));
  }),
];
