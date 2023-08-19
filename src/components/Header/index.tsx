'use client';

import { useSession } from 'next-auth/react';
import Logo from '../Logo';
import Link from 'next/link';

const authLinks = [
  {
    id: '154654',
    name: 'Blogs',
    url: '/blogs',
  },
  {
    id: '816541',
    name: 'Postar',
    url: '/blogs/add',
  },
  {
    id: '541257',
    name: 'Perfil',
    url: '/profile',
  },
  {
    id: '164895',
    name: 'Pesquisar',
    url: '/search',
  },
];

const nonAuthLinks = [
  {
    id: '132145',
    name: 'Blogs',
    url: '/blogs',
  },
  {
    id: '945621',
    name: 'Entrar',
    url: '/login',
  },
  {
    id: '465212',
    name: 'Registrar',
    url: '/register',
  },
];

export default function Header() {
  const { status } = useSession();

  return (
    <header className="sticky w-full bg-gray-100">
      <nav className="flex items-center justify-between bg-transparent px-8 py-4">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-4 p-2">
          {(status === 'authenticated' ? authLinks : nonAuthLinks).map(
            (item) => (
              <Link
                href={item.url}
                key={item.id}
                className="text-lg font-semibold text-gray-900 duration-300 hover:text-violet-600"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}
