import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismaDB from "@/lib/prismadb";
import { compare } from "bcrypt";

export default NextAuth({
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email or Password is required");
        }
        const user = await prismaDB.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user?.email || !user.hashedPassword) {
          throw new Error("Email does not exist.");
        }

        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SESSION_SECRET,
});
