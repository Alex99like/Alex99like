import { FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaNpm, FaYarn } from 'react-icons/fa'
import { SiNextdotjs, SiRedux, SiExpress, SiNestjs, SiGraphql, SiApollographql, SiPostgresql, SiMongodb, SiWebpack, SiVite, SiFigma, SiDocker } from 'react-icons/si'
import { FiFramer, } from 'react-icons/fi'
import { TbBrandReactNative } from 'react-icons/tb'


export const skillsData = [
  { name: 'JS', direction: ['all', 'frontend', 'backend'], type: 'Language', class: 'js', projects: 30 },
  { name: 'TS', direction: ['all', 'frontend', 'backend'], type: 'Language', class: 'ts', projects: 30 },
  { name: 'GIT', icon: FaGitAlt, direction: ['all', 'tools'], type: 'Tool', class: 'git', projects: 30 },
  { name: 'HTML', direction: ['all', 'frontend', 'backend'], type: 'Language', class: 'html', projects: 30 },
  { name: 'CSS', direction: ['all', 'frontend'], type: 'Style', class: 'css', projects: 30 },
  { name: 'SCSS', direction: ['all', 'frontend'], type: 'Style', class: 'scss', projects: 30 },
  { name: 'React', icon: FaReact, direction: ['all', 'frontend'], type: 'UI Lib', class: 'react', projects: 30 },
  { name: 'Next', icon: SiNextdotjs, direction: ['all', 'frontend'], type: 'Framework', class: 'next', projects: 30 },
  { name: 'Bootstrap', icon: FaBootstrap, direction: ['all', 'frontend'], type: 'UI Lib', class: 'bootstrap', projects: 30 },
  { name: 'Framer Motion', icon: FiFramer, direction: ['all', 'frontend'], type: 'UI Lib', class: 'framer', projects: 30 },
  { name: 'Redux', icon: SiRedux, direction: ['all', 'frontend'], type: 'Library', class: 'redux', projects: 30 },
  { name: 'React Native', icon: TbBrandReactNative, direction: ['all', 'frontend'], type: 'Framework', class: 'native', projects: 30 },

  { name: 'Node', icon: FaNodeJs, direction: ['all', 'backend'], type: 'API', class: 'node', projects: 30 },
  { name: 'Express', icon: SiExpress, direction: ['all', 'backend'], type: 'Library', class: 'express', projects: 30 },
  { name: 'NestJS', icon: SiNestjs, direction: ['all', 'backend'], type: 'Framework', class: 'nest', projects: 30 },
  { name: 'GraphQL', icon: SiGraphql, direction: ['all', 'backend'], type: 'Language', class: 'graphql', projects: 30 },
  { name: 'Apollo', icon: SiApollographql, direction: ['all', 'backend'], type: 'Lib', class: 'apollo', projects: 30 },
  { name: 'PostgreSQL', icon: SiPostgresql, direction: ['all', 'backend'], type: 'DB', class: 'postgres', projects: 30 },
  { name: 'Mongo', icon: SiMongodb, direction: ['all', 'backend'], type: 'DB', class: 'mongo', projects: 30 },

  { name: 'Docker', icon: SiDocker, direction: ['all', 'tools'], type: 'Tool', class: 'docker', projects: 30 },
  { name: 'WebPack', icon: SiWebpack, direction: ['all', 'tools'], type: 'Tool', class: 'webpack', projects: 30 },
  { name: 'VITE', icon: SiVite, direction: ['all', 'tools'], type: 'Tool', class: 'vite', projects: 30 },
  { name: 'Figma', icon: SiFigma, direction: ['all', 'tools'], type: 'Tool', class: 'figma', projects: 30 },
  { name: 'NPM', icon: FaNpm, direction: ['all', 'tools'], type: 'Tool', class: 'npm', projects: 30 },
  { name: 'YARN', icon: FaYarn, direction: ['all', 'tools'], type: 'Tool', class: 'yarn', projects: 30 },
]