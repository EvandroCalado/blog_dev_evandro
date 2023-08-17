import './globals.css';
import type { Metadata } from 'next';
import Providers from '../utils/providers';

export const metadata: Metadata = {
  title: 'Blog Dev Evandro',
  description: 'Blog pessoal para projetos e estudos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col">
        <Providers>
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
