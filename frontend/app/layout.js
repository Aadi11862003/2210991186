import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Social Media Analytics",
  description: "Real-time social media analytics platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-gray-100 min-h-screen bg-gradient-to-br from-dark to-dark-light">
        <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
        <Navigation />
        <main className="container mx-auto px-4 py-8 relative">{children}</main>
      </body>
    </html>
  );
}
