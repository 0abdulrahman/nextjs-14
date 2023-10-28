import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const res = await fetch("https://api.thelanerealestate.com/api/authentication/login", {
          method: "POST",
          body: JSON.stringify({
            userName: credentials?.username,
            password: credentials?.password,
            rememberMe: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();
        if (!res.ok) throw new Error(user.message);
        if (user.success) return user.data;
        else return null;
        // const user = { username: "TheLaneOwner", password: "TheLaneOwner123!" };
        // if (credentials?.username === user.username && credentials?.password === user.password) return user;
        // else return null;
      },
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      return { ...token, ...user, name: "TheLane" };
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.expires = token.refreshTokenExpiration as string;
      session.user = token;
      return session;
    },
  },
};
