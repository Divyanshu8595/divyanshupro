import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Divyanshu Tiwari — AI/ML Engineer & GenAI Developer',
  description: 'Portfolio of Divyanshu Tiwari — Computer Science graduate building intelligent systems with GenAI, RAG, and applied ML. GDG Campus Lead, Microsoft Imagine Cup Semifinalist.',
  keywords: ['AI/ML Engineer', 'GenAI Developer', 'Portfolio', 'Divyanshu Tiwari', 'RAG', 'Machine Learning'],
  authors: [{ name: 'Divyanshu Tiwari' }],
  openGraph: {
    title: 'Divyanshu Tiwari — AI/ML Engineer & GenAI Developer',
    description: 'Building intelligent systems that solve real problems. Explore my projects, skills, and experience.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Divyanshu Tiwari Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divyanshu Tiwari — AI/ML Engineer & GenAI Developer',
    description: 'Building intelligent systems that solve real problems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-body antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
