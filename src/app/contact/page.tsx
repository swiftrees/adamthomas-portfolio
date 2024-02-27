import ContactTemplate from '@/templates/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact  | Adam Thomas',
  description: 'Get in touch',
};

export default async function Contact() {
  return (
    <main className="flex flex-col items-center p-4 lg:p-24 justify-center mx-auto">
      <ContactTemplate />
    </main>
  );
}
