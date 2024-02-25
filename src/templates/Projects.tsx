'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const ProjectsTemplate = () => {
  const projects = [
    {
      title: 'HEYi',
      description: 'Create custom products using AI',
      tools: 'Built using Next JS, Tailwind CSS, Medusa JS, OpenAI, Replicate',
      imageUrl: './projects/HEYi.jpg',
      url: 'https://heyi.app',
    },
    {
      title: 'AI Background Removal Tool',
      description: 'Remove the background from any image',
      tools: 'Built using Next JS, Tailwind CSS, and Replicate',
      imageUrl: './projects/background-removal-tool.jpg',
      url: 'https://heyi.app/tools/ai-background-removal',
    },
    {
      title: 'AI Image Upscale Tool',
      description: 'Upscale images to improve quality',
      tools: 'Built using Next JS, Tailwind CSS, and Replicate',
      imageUrl: './projects/image-upscaler.jpg',
      url: 'https://heyi.app/tools/ai-image-upscaler',
    },
    {
      title: 'AI Image Restoration Tool',
      description: 'Restore old images and add colour',
      tools: 'Built using Next JS, Tailwind CSS, and Replicate',
      imageUrl: './projects/image-restoration-tool.jpg',
      url: 'https://heyi.app/tools/ai-image-restorer',
    },
    {
      title: 'The Product Poster',
      description: 'Post products from WooCommerce to Instagram',
      tools: 'Built using React, MUI, OpenAI, Replicate',
      imageUrl: './projects/the-product-poster.jpg',
    },
    {
      title: 'Tree of Gifts',
      description: 'Online Home & Gift Store UK',
      tools: 'Built using WordPress & WooCommerce',
      imageUrl: './projects/tree-of-gifts-uk.jpg',
      url: 'https://treeofgifts.co.uk',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="items-center">
      <h1 className="text-2xl font-bold text-center">Projects</h1>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url || ''}
              target={project.url ? '_blank' : ''}
            >
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.025 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="bg-white shadow-lg p-4 rounded-md cursor-pointer"
              >
                <img
                  className="mb-4"
                  src={project.imageUrl}
                  alt={`Project ${project.title}`}
                />
                <h2 className="text-lg font-bold mb-2 text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-1">{project.description}</p>
                <p className="text-sm text-gray-700">{project.tools}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectsTemplate;
