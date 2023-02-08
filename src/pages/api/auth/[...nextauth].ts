import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Role } from "../../../types";

export default NextAuth({
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user = token.user as any;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  secret: "123",
  session: {
    strategy: "jwt",
    // maxAge: 30 * 24 * 60 * 60,
    // updateAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "J Smith",
          email: "jsmith@example.com",
          role: Role.ADMIN,
        };

        return user;
      },
    }),
  ],
  // pages: {
  //   signIn: "/auth/login",
  // },
});
