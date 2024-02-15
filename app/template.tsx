import Head from "next/head";
import Navbar from "../components/navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>Hyperstaker</title>
        <meta
          name="description"
          content="Predict which project will be the next big thing, and secure a vested interest in it."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
}
