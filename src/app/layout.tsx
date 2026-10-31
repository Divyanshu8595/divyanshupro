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
  title: 'Divyanshu Tiwari | Product Builder, AI/ML & Data',
  description: 'Portfolio of Divyanshu Tiwari, a product-minded engineer combining AI/ML, data analytics, and software development to turn real-world problems into useful products.',
  keywords: ['Product Builder', 'Product-Minded Engineer', 'AI/ML Developer', 'Data Analytics', 'Portfolio', 'Divyanshu Tiwari'],
  authors: [{ name: 'Divyanshu Tiwari' }],
  openGraph: {
    title: 'Divyanshu Tiwari | Product Builder, AI/ML & Data',
    description: 'Building useful products through technology, data, and user understanding.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Divyanshu Tiwari Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divyanshu Tiwari | Product Builder, AI/ML & Data',
    description: 'Building useful products through technology, data, and user understanding.',
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
