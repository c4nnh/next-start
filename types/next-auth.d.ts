import { DefaultSession } from "next-auth";
import { Role } from "../src/types";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      role: Role;
    } & DefaultSession["user"];
  }
}
