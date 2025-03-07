import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Education from '../component/ResumeComponent/Education';
import Skills from '../component/ResumeComponent/Skills';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Avhi Infotech',
    date: 'Jan 2025 - Present',
    location: 'Bengaluru, India',
    description: [
      'Leading full-stack development for a scalable freelance talent marketplace using the MERN stack.',
      'Architecting microservices-based solutions to enhance modularity and maintainability.',
      'Implementing AWS EC2 for hosting and S3 for secure storage management.',
      'Configuring Nginx as a reverse proxy and load balancer.',
      'Enhancing React.js performance by reducing bundle size by 35%.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Nexgsol',
    date: 'Jun 2024 - Dec 2024',
    location: 'Remote, UK-based',
    description: [
      'Developed a MERN stack platform for personalized diet and workout plans, increasing user engagement by 25%.',
      'Integrated Stripe API for secure transactions, optimizing creator payout rate to 77%.',
      'Enhanced PDF generation using React PDF, cutting download time by 30%.',
      'Built scalable backend services with Node.js, reducing API response times by 40%.',
    ],
  },
  {
    title: 'Full Stack Developer (Contract)',
    company: 'Agile WordPress Solutions',
    date: 'Sep 2022 - Mar 2024',
    location: 'Remote, Delhi',
    description: [
      'Developed over 10 responsive full-stack websites, optimizing UI/UX for a 15% improvement in client satisfaction.',
      'Managed hosting and static assets using AWS EC2 and S3.',
      'Delivered 95% of projects on time and within budget through collaboration with cross-functional teams.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'InkRevenue',
    date: 'Oct 2021 - Sep 2022',
    location: 'Gurugram, Haryana',
    description: [
      'Led UI development with React.js, boosting user engagement by 20% and enhancing API performance by 30%.',
      'Developed cross-device responsive web applications.',
      'Optimized backend APIs with Node.js, reducing feature deployment time by 25%.',
    ],
  },
];

const WordHighlight = ({ text }) => {
  return text.split(' ').map((word, idx) => (
    <motion.span
      key={idx}
      className="relative inline-block px-1 cursor-pointer transition-all"
      whileHover={{ color: '#f59e0b' }}
    >
      {word}
      <span className="absolute inset-0 -z-10 flex justify-center items-center">
        <motion.div
          className="w-4 h-4 bg-amber-400 rounded-full opacity-0"
          whileHover={{ opacity: 1, scale: 2 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </span>
    </motion.span>
  ));
};

const Resume = () => {
  return (
    <div className="lg:px-0 max-w-6xl  w-full">
      {/* Heading */}
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white relative pb-2 mb-6">
        Work Experience
        <span className="absolute left-0 bottom-0 w-16 sm:w-36 md:w-48 h-1 bg-amber-400 rounded-full"></span>
      </h2>

      <VerticalTimeline layout="1-column-left">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work transform transition-all duration-300 cursor-pointer"
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.1)', // bg-white/10 effect
              backdropFilter: 'blur(10px)', // backdrop-blur-lg effect
              WebkitBackdropFilter: 'blur(10px)', // Safari support
              color: '#fff',
              boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
            }}
            contentArrowStyle={{ borderRight: '7px solid #1a1a1a' }}
            date={exp.date}
            dateClassName="text-left text-sm sm:text-base text-gray-400"
            iconStyle={{ background: '#f59e0b', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              <WordHighlight text={exp.title} />
            </h3>
            <h4 className="text-sm sm:text-base text-gray-400">
              <WordHighlight text={`${exp.company} - ${exp.location}`} />
            </h4>
            <ul className="mt-2 text-gray-300 text-sm list-disc list-inside">
              {exp.description.map((point, idx) => (
                <li key={idx}>
                  <WordHighlight text={point} />
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <Education />
      <Skills />
    </div>
  );
};

export default Resume;
