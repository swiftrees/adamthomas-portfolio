'use client';

import Link from 'next/link';
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

const ContactCard = () => (
  <div className="flex-1 overflow-hidden relative duration-700 border rounded-xl group lg:gap-8 border-emerald-600 ">
    <div className="flex flex-col justify-center h-full">
      {socials.map((social, index) => (
        <>
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
              <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-gray-600 dark:text-zinc-200 group-hover:text-gray-400 dark:group-hover:text-white font-display">
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
        </>
      ))}
    </div>
  </div>
);

const ContactForm = () => {
  return (
    <div className="flex-1 overflow-hidden relative duration-700 border rounded-xl group lg:gap-8 border-emerald-600 ">
      <form className="mt-8 p-16">
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
    <div className="flex min-h-screen flex-col items-center p-4 w-full">
      <h1 className="text-2xl font-bold mb-8">Contact</h1>

      <div className="mt-4 mb-8 font-mono">
        <p>
          Interested in working together or have a question for me? Feel free to
          get in touch using the methods below.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-8 justify-around w-full gap-y-8">
        <ContactCard />

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactTemplate;
