import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: 'Masters in Computer Science',
    institution: 'Birmingham City University',
    date: 'Aug 2022 - Sep 2023',
    location: 'Birmingham, UK',
    subjects: [
      'Advanced Algorithms & Data Structures',
      'Cloud Computing & DevOps',
      'Experience of Studying Abroad & Cultural Exposure',
    ],
  },
  {
    degree: 'B.Tech in Technology',
    institution: 'JIMS, GGSIPU',
    date: 'Jul 2017 - Aug 2021',
    location: 'Delhi, India',
    subjects: [
      'Software Engineering & System Design',
      'Artificial Intelligence & Machine Learning',
      'Industry Projects & Practical Implementation',
    ],
  },
];

const Education = () => {
  return (
    <div className="text-white w-full flex flex-col items-start mt-10">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 relative inline-block">
        Education
        <span className="block w-28 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mt-2"></span>
      </h2>

      <VerticalTimeline layout="1-column-left">
        {educationData.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.1)', // bg-white/10 effect
              backdropFilter: 'blur(10px)', // backdrop-blur-lg effect
              WebkitBackdropFilter: 'blur(10px)', // Safari support
              color: '#fff',
              boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
            }}
            contentArrowStyle={{
              borderRight: '7px solid rgba(255, 255, 255, 0.1)',
            }}
            date={edu.date}
            dateClassName="text-left text-sm sm:text-base text-gray-400"
            iconStyle={{ background: '#f59e0b', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="text-lg sm:text-xl font-semibold">{edu.degree}</h3>
            <h4 className="text-sm sm:text-base text-gray-400">
              {edu.institution} - {edu.location}
            </h4>
            <ul className="mt-2 text-gray-300 text-sm list-disc list-inside">
              {edu.subjects.map((subject, idx) => (
                <li key={idx}>{subject}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
