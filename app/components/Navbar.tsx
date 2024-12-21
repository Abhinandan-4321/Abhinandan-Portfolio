import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { cn } from '@/lib/utils'; // assuming you have a utility for conditional classnames

const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/abhinandan-gupta-b9293a294/',
      label: 'Linkedin',
      Icon: SiLinkedin,
    },
    {
      link: 'https://github.com/Abhinandan-4321',
      label: 'GitHub',
      Icon: SiGithub,
    },
    {
      link: 'https://www.instagram.com/abhinandangupta1805/',
      label: 'Instagram',
      Icon: SiInstagram,
    },
  ];

  return (
    <nav className={cn('py-10 flex flex-row justify-between w-full', className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Abhinandan 👩🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link
              href={social.link}
              key={index}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-7 h-7 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
