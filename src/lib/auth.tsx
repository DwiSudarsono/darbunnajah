import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/auth/signin`
    },
    async session({ session, user, token }) {

      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  },
  pages :{
    signOut : "/masuk"
  },
 
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
