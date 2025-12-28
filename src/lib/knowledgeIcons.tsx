import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import {
  SiReactquery,
  SiTypescript,
  SiReactrouter,
  SiExpress,
  SiJsonwebtokens,
  SiSequelize,
  SiApollographql,
  SiMongodb,
  SiExpo,
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { GrGraphQl, GrMysql } from 'react-icons/gr';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandReactNative } from 'react-icons/tb';

// Agregar aca en caso de querer añadir una tecnologia nueva...
export const knowledgeData = [
  {
    type: 'Frontend',
    stack: [
      { name: 'HTML', icon: FaHtml5, color: '#c7812c' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#0c5fad' },
      { name: 'JavaScript', icon: IoLogoJavascript, color: '#f7df1e' },
      { name: 'React', icon: FaReact, color: '#61dafb' },
      { name: 'Tanstack Query', icon: SiReactquery, color: '#ff4154' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'React Router', icon: SiReactrouter, color: '#ca4245' },
      { name: 'Zustand' },
    ],
  },
  {
    type: 'Backend',
    stack: [
      { name: 'NodeJS', icon: FaNodeJs, color: '#3c873a' },
      { name: 'Express', icon: SiExpress },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#4e941c' },
      { name: 'Sequelize', icon: SiSequelize, color: '#399af3' },
      { name: 'GraphQL', icon: GrGraphQl, color: '#e535ab' },
      { name: 'Apollo', icon: SiApollographql, color: '#311c87' },
    ],
  },
  {
    type: 'Base de datos',
    stack: [
      { name: 'PostgreSQL', icon: BiLogoPostgresql, color: '#336791' },
      { name: 'MySQL', icon: GrMysql, color: '#f29111' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    ],
  },
  {
    type: 'Móviles',
    stack: [
      { name: 'React Native', icon: TbBrandReactNative, color: '#61dafb' },
      { name: 'Expo', icon: SiExpo },
    ],
  },
  {
    type: 'Otras',
    stack: [
      { name: 'Git', icon: FaGitAlt, color: '#f05032' },
      { name: 'Docker', icon: FaDocker, color: '#2496ed' },
    ],
  },
];
