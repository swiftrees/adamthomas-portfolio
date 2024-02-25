'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import LinkedIn from '@/icons/linkedin';
import Email from '@/icons/email';
import Button from '@/components/common/button';

const socials = [
  {
    icon: <Email />,
    href: 'mailto:adamthomas943@outlook.com',
    label: 'Email',
    handle: 'adamthomas943@outlook.com',
  },
  {
    icon: <LinkedIn />,
    href: 'https://instagram.com/swiftrees_',
    label: 'LinkedIn',
    handle: 'Adam Thomas',
  },
];

const ContactCard = ({
  icon,
  href,
  label,
  handle,
}: {
  icon: ReactNode;
  href: string;
  label: string;
  handle: string;
}) => (
  <div className="flex-1 overflow-hidden relative duration-700 border rounded-xl group lg:gap-8 border-emerald-600 ">
    <Link
      href={href}
      target="_blank"
      className="p-4 relative flex flex-col items-center gap-4 duration-700 group lg:gap-8 lg:py-24 lg:pb-48 lg:p-16"
    >
      <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border rounded-full text-gray-600 dark:text-zinc-200 border-emerald-500 ">
        {icon}
      </span>{' '}
      <div className="z-10 flex flex-col items-center">
        <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-gray-600 dark:text-zinc-200 group-hover:text-gray-400 dark:group-hover:text-white font-display">
          {handle}
        </span>
        <span className="mt-4 text-sm text-center text-gray-800 dark:text-zinc-400">
          {label}
        </span>
      </div>
    </Link>
  </div>
);

const ContactForm = () => {
  return (
    <div className="flex-1">
      <form className="mt-8">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={4}
            placeholder="How can I help you?"
          />
        </div>
        <Button variant="primary">Send Message</Button>
      </form>
    </div>
  );
};

const ContactTemplate = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 w-full">
      <h1 className="text-2xl font-bold mb-8">Contact</h1>

      <div className="mt-4 mb-8">
        <p>
          Interested in working together or have a question for me? Feel free to
          get in touch using the methods below.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-8 justify-around w-full gap-y-8">
        <ContactCard {...socials[0]} />

        <ContactForm />

        <ContactCard {...socials[1]} />
      </div>
    </div>
  );
};

export default ContactTemplate;
