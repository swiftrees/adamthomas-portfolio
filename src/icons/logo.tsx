"use client"
import { IconProps } from '@/types/icon';
import { motion } from 'framer-motion';

const LogoIcon: React.FC<IconProps> = ({
  size = '24',
  color = 'currentColor',
  ...attributes
}) => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 2,
        duration: 2, 
        ease: "easeInOut",
      },
    },
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...attributes}
    >
      <motion.path variants={pathVariants}
          initial="hidden"
          animate="visible" stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path variants={pathVariants}
          initial="hidden"
          animate="visible" d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      <motion.path variants={pathVariants}
          initial="hidden"
          animate="visible" d="M10 16v-6a2 2 0 1 1 4 0v6" />
      <motion.path variants={pathVariants}
          initial="hidden"
          animate="visible" d="M10 13h4" />
    </svg>
  );
};

export default LogoIcon;
