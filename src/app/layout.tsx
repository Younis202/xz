import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Outfit } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nobel Campus | International Study Abroad Programs',
  description: 'Find your perfect study abroad experience with Nobel Campus. Connect with top universities, unlock scholarships, and prepare for the adventure of a lifetime.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${outfit.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
