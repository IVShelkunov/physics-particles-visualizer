import { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metadata: Metadata = {
    title: "Physics Particles Visualizer",
    description:
      "High-performance 2D physics simulation optimized with Quadtree algorithm.",
    openGraph: {
      title: "Physics Particles Visualizer",
      description:
        "High-performance 2D physics simulation optimized with Quadtree algorithm.",
      type: "website",
    },
  };
  return (
    <html lang="en">
      <body className="antialiased ">{children}</body>
    </html>
  );
}
