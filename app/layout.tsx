import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Talent",
  description:
    "Plateforme de détection et de mise en relation des talents du football.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
