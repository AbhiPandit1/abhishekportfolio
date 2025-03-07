import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import { projects } from '../component/ProjectData';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 relative inline-block">
        Projects
        <span className="block w-28 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mt-2"></span>
      </h2>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="cursor-pointer p-4 border rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setSelectedProject(project)}
          >
            <video
              src={project.links.video}
              className="w-full h-48 object-cover rounded-lg"
              muted
              loop
              autoPlay
            />
            <h3 className="text-lg font-semibold mt-2 text-center text-white">
              {project.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        className="fixed inset-0 z-[1000] flex items-center justify-center"
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
          aria-hidden="true"
        />

        {/* Modal Content */}
        <DialogPanel
          className="relative p-6 w-11/12 max-w-4xl z-[1001]"
          style={{
            background: 'rgba(255, 255, 255, 0.1)', // bg-white/10 effect
            backdropFilter: 'blur(10px)', // backdrop-blur-lg effect
            WebkitBackdropFilter: 'blur(10px)', // Safari support
            color: '#fff',
            boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
          }}
        >
          {selectedProject && (
            <>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-white text-2xl"
              >
                <FaTimes />
              </button>

              <Dialog.Title className="text-2xl font-extrabold mb-6 text-center text-white ">
                {selectedProject.name}
              </Dialog.Title>

              <div className="w-full flex justify-center">
                <ReactPlayer
                  url={selectedProject.links.video}
                  controls
                  width="100%"
                  height="auto"
                />
              </div>

              <p className="mt-4 text-gray-200">
                {selectedProject.description}
              </p>

              <div className="flex gap-4 mt-6 justify-center">
                {selectedProject.links?.github ? (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                ) : (
                  <span className="text-red-500">GitHub Unavailable</span>
                )}

                {selectedProject.links?.live ? (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : (
                  <span className="text-red-500">Live Demo Unavailable</span>
                )}
              </div>
            </>
          )}
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Portfolio;
