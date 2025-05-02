
import { Roboto, Lato, Montserrat } from 'next/font/google'; // Import requested fonts
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

// Setup requested fonts with variables
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Profile Canvas - Software Engineer Portfolio',
  description: 'Professional portfolio showcasing skills, projects, and experience of a software engineer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${lato.variable} ${montserrat.variable}`}>
      <body className={`min-h-screen flex flex-col font-sans antialiased bg-background text-foreground ${lato.className}`}> {/* Using Lato as default */}
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12">
          {children}
        </main>
        <Footer />
        <Toaster /> {/* Add Toaster for notifications */}
      </body>
    </html>
  );
}
