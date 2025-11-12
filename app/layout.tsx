"use client"
import type { Metadata } from "next";
import Nav from "./components/navbar/nav";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://unpkg.com/augmented-ui@2/augmented-ui.min.css"
        precedence="default"
      ></link>
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <Nav />
            {children}
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
