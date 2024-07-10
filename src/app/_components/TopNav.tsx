"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export const TopNav = () => {
  const rtr = useRouter();

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <div>Logo</div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <div className="flex items-center gap-x-3">
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              rtr.refresh();
            }}
          />
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  );
};
