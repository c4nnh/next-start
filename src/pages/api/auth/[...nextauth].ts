import NextAuth from "next-auth";

export default NextAuth({
  callbacks: {
    session({ session }) {
      return session;
    },
  },
  providers: [],
  session: {
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
});
