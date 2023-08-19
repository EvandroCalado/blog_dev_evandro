'use client';

import {
  InstagramLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import Logo from '../Logo';
import Link from 'next/link';

const links = [
  {
    link: 'https://www.instagram.com/dev_evandro',
    icon: InstagramLogoIcon,
  },
  {
    link: 'https://github.com/EvandroCalado',
    icon: GitHubLogoIcon,
  },
  {
    link: 'https://www.linkedin.com/in/evandro-calado',
    icon: LinkedInLogoIcon,
  },
];

const IconContainer = (props: { icon: any }) => {
  return (
    <props.icon className="h-8 w-8 cursor-pointer duration-200 hover:text-violet-600" />
  );
};

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      <hr className="my-4 w-full" />
      <div className="flex flex-col px-20 py-4 xs:gap-8 md:gap-6">
        <div className="flex items-center xs:flex-col xs:justify-start md:flex-row md:justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex gap-6 p-2">
            {links.map((link) => (
              <Link key={link.link.toString()} href={link.link} target="_blank">
                <IconContainer icon={link.icon} />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-center md:text-xl [&>span]:mr-4">
            <span>{new Date().getFullYear()}</span>
            <span>© Todos os direntos reservados</span>
            <span className="font-bold">Evandro Calado</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
