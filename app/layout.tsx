import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Basil M. Al-Isa — Full-Stack Developer',
  description:
    'Full-stack developer with 5 years of experience building SaaS web applications with React, Next.js, Node.js, and TypeScript. Based in Vancouver, BC.',
  openGraph: {
    title: 'Basil M. Al-Isa — Full-Stack Developer',
    description:
      'Full-stack developer building SaaS and AI features with React, Next.js, Node.js, and TypeScript.',
    url: 'https://basil-kawak.github.io/',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-800 antialiased dark:bg-zinc-950 dark:text-zinc-200">
        {children}
      </body>
    </html>
  );
}
