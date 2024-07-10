import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getImages } from "~/server/queries";
export const dynamic = "force-dynamic";

const ImageGalleryComponent = async () => {
  const images = await getImages();
  return (
    <div className="flex flex-wrap justify-center gap-x-4">
      {images?.map((mockup) => (
        <div key={mockup.id} className="flex w-48 flex-col items-center">
          <Image src={mockup.url} alt="mockup" width={200} height={200} />
          <div>{mockup.name}</div>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {
  return (
    <main className="">
      <SignedIn>
        <ImageGalleryComponent />
      </SignedIn>

      <SignedOut>Sign in</SignedOut>
    </main>
  );
}
