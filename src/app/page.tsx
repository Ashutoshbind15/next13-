export default function HomePage() {
  const urls = [
    "https://utfs.io/f/717f969c-6534-4954-a2cb-ca26074b0c30-zib4zi.webp",
    "https://utfs.io/f/67cadbf1-d5eb-4416-8599-73f65901f51d-11bysn.webp",
    "https://utfs.io/f/83b5b22f-45d6-480b-af80-f60d7e394c0c-wd646d.webp",
  ];

  const mockups = urls.map((url, idx) => ({
    id: idx,
    url,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-x-4">
        {mockups?.map((mockup) => (
          <div key={mockup.id} className="w-48">
            <img src={mockup.url} alt="mockup" className="w-full" />
          </div>
        ))}
        {mockups?.map((mockup) => (
          <div key={mockup.id} className="w-48">
            <img src={mockup.url} alt="mockup" className="w-full" />
          </div>
        ))}
        {mockups?.map((mockup) => (
          <div key={mockup.id} className="w-48">
            <img src={mockup.url} alt="mockup" className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
