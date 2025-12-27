import "./globals.css";
import "antd/dist/reset.css";
import Providers from "@/store/provider";
import AuthInitializer from "@/components/auth/AuthInitializer";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Providers>
          <AuthInitializer>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </AuthInitializer>
        </Providers>
      </body>
    </html>
  );
}
