import { createClient } from "graphql-ws";

export const wsClient = createClient({
  url: "ws://localhost:3001/graphql",
});
