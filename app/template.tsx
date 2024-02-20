import Navbar from "../components/navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <head>
        <link rel="icon" href="/favicon-16x16.png" type="image/png" />
      </head>

      <Navbar />
      {children}
    </div>
  );
}
