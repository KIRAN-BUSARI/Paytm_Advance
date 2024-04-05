"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "../../../packages/ui/src/Appbar";

export default function Page(): JSX.Element {
  const session = useSession();
  return (
    <>
      <div className="">
        <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      </div>
      <div className="text-5xl items-center h-screen flex justify-center bg-clip-text from-neutral-100 to-neutral-500 text-transparent bg-gradient-to-b">Hello from User-app</div>
    </>
  );
}
