'use client';

import Link from 'next/link';
import LinkedIn from '@/icons/linkedin';
import Email from '@/icons/email';
import Button from '@/components/common/button';

const LINKEDIN_PROFILE = process.env.LINKEDIN_PROFILE || '';

const socials = [
  {
    icon: <LinkedIn />,
    href: LINKEDIN_PROFILE,
    label: 'LinkedIn',
    handle: 'Adam Thomas',
  },
  {
    icon: <Email />,
    href: 'mailto:adamthomas943@outlook.com',
    label: 'Email',
    handle: 'adamthomas943@outlook.com',
  },
];

const ContactCard = () => (
  <div className="flex-1 overflow-hidden relative duration-700 border rounded-xl lg:gap-8 bg-white dark:bg-gray-800 border-emerald-600">
    <div className="flex flex-col justify-center h-full">
      {socials.map((social, index) => (
        <div key={index} className="flex flex-col">
          <Link
            key={index}
            href={social.href}
            target="_blank"
            className="p-4 relative flex flex-col items-center gap-4 duration-700 group lg:gap-8 lg:py-12 lg:p-16"
          >
            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border rounded-full text-gray-600 dark:text-zinc-200 border-emerald-500 ">
              {social.icon}
            </span>{' '}
            <div className="z-10 flex flex-col items-center">
              <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-gray-600 dark:text-zinc-300 group-hover:text-gray-400 dark:group-hover:text-white font-display">
                {social.handle}
              </span>
              <span className="mt-4 text-sm text-center text-gray-800 dark:text-zinc-400">
                {social.label}
              </span>
            </div>
          </Link>
          {index !== socials.length - 1 && (
            <div className="self-center h-[1px] w-1/3 bg-emerald-600 opacity-50"></div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const ContactForm = () => {
  return (
    <div className="flex-1 overflow-hidden relative duration-700 border rounded-xl group lg:gap-8 border-emerald-600 ">
      <form className="mt-8 p-4 lg:p-16">
        <div className="mb-4">
          <label
            className="block text-gray-600 dark:text-zinc-200 text-sm font-bold mb-2"
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
            className="block text-gray-600 dark:text-zinc-200 text-sm font-bold mb-2"
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
            className="block text-gray-600 dark:text-zinc-200 text-sm font-bold mb-2"
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
    <div className="flex min-h-screen flex-col items-center md:p-4 w-full">
      <h1 className="text-3xl lg:text-6xl font-bold mb-2">Contact</h1>
      <p className="text-xl lg:text-3xl text-gray-600 dark:text-gray-400">
        Need to get in touch?
      </p>

      <div className="flex flex-col lg:flex-row gap-x-8 justify-center w-full gap-y-8 mt-8 max-w-3xl">
        <ContactCard />
      </div>
    </div>
  );
};

export default ContactTemplate;
