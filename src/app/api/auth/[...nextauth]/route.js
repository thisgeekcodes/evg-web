import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

const authHandler = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" }, // Force use of JWT sessions
  debug: true, // Enable debug logging for troubleshooting
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: { params: { scope: "identify email guilds" } },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        // Use account.providerAccountId as the Discord user id instead of token.sub
        token.id = account.providerAccountId || token.sub;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token?.accessToken;
      session.user.id = token?.id;
      return session;
    },
  },
});

export { authHandler as GET, authHandler as POST };
