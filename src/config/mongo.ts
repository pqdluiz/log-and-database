import { credentials } from "./credentials";

export const mongo =
  `mongodb+srv://${credentials.name}:${credentials.password}@cluster0.roh3o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
