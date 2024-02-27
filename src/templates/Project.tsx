'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ExternalLink from '@/icons/external';
import BackArrow from '@/icons/back';

type Feature = {
  text: string;
  imageUrl: string;
  imageAlt: string;
};

type Project = {
  id: string;
  title: string;
  url: string;
  video: string;
  image: string;
  shortDescription: string;
  description: string;
  features: Feature[];
};

const ProjectTemplate = ({ project }: { project: Project }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="w-full xl:w-2/3 mx-auto">
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 lg:p-24"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="bg-white p-2 rounded-lg w-full lg:w-2/3 aspect-video relative"
          >
            <Image src={selectedImage} alt="" fill />
            <button
              onClick={closeModal}
              className="absolute top-0 right-5 m-2 text-black"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      <Link href="/projects" className="flex my-6">
        <BackArrow className="mr-2" />
        Back
      </Link>
      <div className="flex w-full items-start justify-between mb-6">
        <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight">
          {project.title}
        </h1>

        <a
          href={project.url}
          rel="noreferrer noopener"
          className="inline-flex items-center bg-gray-200 text-black dark:bg-gray-800 dark:text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2"
        >
          View
          <span className="ml-2">
            <ExternalLink />
          </span>
        </a>
      </div>

      {project.video && (
        <iframe
          title="Placeholder Video"
          src={project.video}
          className="w-full lg:w-2/3 aspect-video mx-auto"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <div className="flex flex-col gap-y-12 mt-12 leading-7 text-zinc-400 font-mono">
        <div className="flex flex-col gap-y-4">            
          <p>{project.shortDescription}</p>
          <p>{project.description}</p>
        </div>
        {project.features.map((feature, index) => (
          <div key={index} className="flex w-full">
            <div
              key={index}
              className={`w-full flex flex-col lg:flex-row items-center gap-x-6 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              <div className="flex w-full lg:w-2/5 relative aspect-video cursor-pointer">
                <Image
                  src={feature.imageUrl}
                  alt={feature.imageAlt || project.title}
                  fill
                  onClick={() => openModal(feature.imageUrl)}
                />
              </div>
              <div className="flex-1">
                <p>{feature.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTemplate;
