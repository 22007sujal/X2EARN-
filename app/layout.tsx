import type { Metadata } from "next";
import Nav from "./components/navbar/nav";


export const metadata: Metadata = {
  title: "X2EARN",
  description: "JUST REPOST AND EARN ON X",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <link rel="stylesheet" type="text/css" href="https://unpkg.com/augmented-ui@2/augmented-ui.min.css" precedence="default"></link>
      <body> 
        <Nav/>
        {children}
      </body>
    </html>
  );
}
