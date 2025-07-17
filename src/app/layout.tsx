import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';g
import { PlanProvider } from '../contexts/PlanContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-white text-black">
        <Header />
        <PlanProvider>
          <main className="max-w-6xl mx-auto p-4">{children}</main>
        </PlanProvider>
        <Footer />
      </body>
    </html>
  );
}
