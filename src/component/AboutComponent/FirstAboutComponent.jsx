import { FaLaptopCode, FaServer, FaMobileAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const activities = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building modern and scalable web applications.',
    icon: <FaLaptopCode className="text-blue-400 text-4xl" />,
  },
  {
    id: 2,
    title: 'MERN Stack',
    description:
      'Developing full-stack applications using MongoDB, Express, React, and Node.js.',
    icon: <FaServer className="text-green-400 text-4xl" />,
  },
  {
    id: 3,
    title: 'Next.js & React Native',
    description:
      'Creating powerful frontend apps with Next.js and mobile apps with React Native.',
    icon: <FaMobileAlt className="text-purple-400 text-4xl" />,
  },
  {
    id: 4,
    title: 'Competitive Programming',
    description:
      'Solving DSA problems to improve logic & problem-solving skills.',
    icon: <FaCode className="text-yellow-400 text-4xl" />,
  },
];

const FirstAboutComponent = () => {
  return (
    <div className="text-white w-full flex flex-col items-start">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 relative inline-block">
        What I Am Doing
        <span className="block w-28 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mt-2"></span>
      </h2>

      {/* Activity Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 
            cursor-pointer hover:border-amber-400 transition-all hover:shadow-2xl hover:shadow-amber-400/30
            min-h-[250px] w-full flex-1"
          >
            {/* Icon */}
            <div className="p-5 bg-gray-900 rounded-2xl flex justify-center items-center shadow-md">
              {activity.icon}
            </div>

            {/* Text */}
            <div className="text-center flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold">{activity.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                {activity.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FirstAboutComponent;
