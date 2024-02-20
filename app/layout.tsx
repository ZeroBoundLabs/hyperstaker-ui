import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";

import { createTheme, ColorSchemeScript, MantineProvider } from "@mantine/core";

//const theme = createTheme({ colorScheme: "dark" });

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <ColorSchemeScript /> */}
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
      </body>
    </html>
  );
}
