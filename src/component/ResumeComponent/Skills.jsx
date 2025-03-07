import { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaJs,
  FaPython,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNginx,
  SiCloudinary,
  SiCplusplus,
} from 'react-icons/si';

// Skill Data with Icons and Unique Colors
const skillsData = [
  {
    category: 'Languages',
    color: '#f59e0b',
    skills: [
      { name: 'JavaScript', icon: <FaJs />, percentage: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, percentage: 85 },
      { name: 'Python', icon: <FaPython />, percentage: 80 },
      { name: 'C++', icon: <SiCplusplus />, percentage: 75 },
    ],
  },
  {
    category: 'Web Stack',
    color: '#60a5fa',
    skills: [
      { name: 'React.js', icon: <FaReact />, percentage: 95 },
      { name: 'Node.js', icon: <FaNodeJs />, percentage: 88 },
      { name: 'Express.js', icon: <SiExpress />, percentage: 85 },
      { name: 'HTML5', icon: <FaHtml5 />, percentage: 90 },
      { name: 'CSS3', icon: <FaCss3 />, percentage: 87 },
    ],
  },
  {
    category: 'Databases',
    color: '#34d399',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, percentage: 80 },
      { name: 'MySQL', icon: <FaDatabase />, percentage: 85 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, percentage: 82 },
    ],
  },
  {
    category: 'Tools',
    color: '#f43f5e',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, percentage: 90 },
      { name: 'Docker', icon: <FaDocker />, percentage: 78 },
      { name: 'Nginx', icon: <SiNginx />, percentage: 75 },
      { name: 'Cloudinary', icon: <SiCloudinary />, percentage: 80 },
      { name: 'AWS S3', icon: <FaAws />, percentage: 85 },
    ],
  },
];

const Skills = () => {
  const [progress, setProgress] = useState({});
  const ref = useRef(null);

  // Animate progress when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setProgress({});
          skillsData.forEach((category) =>
            category.skills.forEach((skill, index) => {
              setTimeout(() => {
                setProgress((prev) => ({
                  ...prev,
                  [skill.name]: skill.percentage,
                }));
              }, index * 200);
            })
          );
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-white w-full flex flex-col items-start mt-10 px-5 sm:px-10"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 relative inline-block">
        Skills
        <span className="block w-28 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mt-2"></span>
      </h2>

      {/* Skills List - Column Layout */}
      <div className="flex flex-col gap-6 w-full">
        {skillsData.map((skillCategory, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full border border-white/20"
          >
            <h3
              className="text-xl font-semibold mb-5"
              style={{ color: skillCategory.color }}
            >
              {skillCategory.category}
            </h3>

            {/* Skill Progress */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
              {skillCategory.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="flex flex-col items-center">
                    <div
                      className="text-4xl mb-2"
                      style={{ color: skillCategory.color }}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-300">
                      {skill.name}
                    </p>
                  </div>
                  <div className="w-20 h-20">
                    <CircularProgressbar
                      value={progress[skill.name] || 70}
                      text={`${progress[skill.name] || 70}%`}
                      styles={buildStyles({
                        textColor: '#fff',
                        pathColor: skillCategory.color,
                        trailColor: '#1f2937',
                        textSize: '14px',
                        pathTransitionDuration: 0.2,
                      })}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
