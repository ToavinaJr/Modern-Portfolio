import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiGraphql, SiNextdotjs, SiMongodb, SiC, SiCplusplus, SiRust } from 'react-icons/si';
import React from 'react';

const techStacks = [
  { icon: React.createElement(FaReact, { size: 40, className: "text-blue-500 dark:text-blue-300" }), name: 'React' , level: 'Intermediate'},
  { icon: React.createElement(SiTailwindcss, { size: 40, className: "text-teal-500 dark:text-teal-300" }), name: 'TailwindCSS', level: 'Intermediate' },
  { icon: React.createElement(SiNextdotjs, { size: 40, className: "text-black dark:text-white" }), name: 'Next.js', level: 'Beginner' },
  { icon: React.createElement(FaHtml5, { size: 40, className: "text-orange-500 dark:text-orange-300" }), name: 'HTML5', level: 'Advanced' },
  { icon: React.createElement(FaCss3Alt, { size: 40, className: "text-blue-600 dark:text-blue-300" }), name: 'CSS3', level: 'Advanced' },
  { icon: React.createElement(FaJs, { size: 40, className: "text-yellow-500 dark:text-yellow-300" }), name: 'JavaScript', level: 'Advanced' },
  { icon: React.createElement(FaNodeJs, { size: 40, className: "text-green-500 dark:text-green-300" }), name: 'Node.js', level: 'Beginner' },
  { icon: React.createElement(SiTypescript, { size: 40, className: "text-blue-600 dark:text-blue-300" }), name: 'TypeScript', level: 'Intermediate' },
  { icon: React.createElement(SiGraphql, { size: 40, className: "text-pink-600 dark:text-pink-300" }), name: 'GraphQL', level: 'Beginner' },
  { icon: React.createElement(SiMongodb, { size: 40, className: "text-green-600 dark:text-green-300" }), name: 'MongoDB', level: 'Beginner' },
  { icon: React.createElement(FaPython, { size: 40, className: "text-blue-500 dark:text-blue-300" }), name: 'Python', level: 'Intermediate' },
  { icon: React.createElement(SiC, { size: 40, className: "text-gray-700 dark:text-gray-300" }), name: 'C', level: 'Intermediate' },
  { icon: React.createElement(SiCplusplus, { size: 40, className: "text-blue-700 dark:text-blue-400" }), name: 'C++', level: 'Advanced' },
  { icon: React.createElement(SiRust, { size: 40, className: "text-orange-500 dark:text-orange-300" }), name: 'Rust', level: 'Beginner' },
  { icon: React.createElement(FaPhp, { size: 40, className: "text-indigo-500 dark:text-indigo-300" }), name: 'PHP', level: 'Intermediate' },
];

export default techStacks;