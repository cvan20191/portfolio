import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

// Define interface for project data structure
interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

// Project data with proper typing
const projects: Project[] = [
  {
    name: 'Project 1',
    description: 'Description of project 1',
    imageUrl: 'https://source.unsplash.com/800x600/?coding',
    githubUrl: 'https://github.com/christianvan/project1',
  },
  {
    name: 'Project 2',
    description: 'Description of project 2',
    imageUrl: 'https://source.unsplash.com/800x600/?programming',
    githubUrl: 'https://github.com/christianvan/project2',
  },
  {
    name: 'Project 3',
    description: 'Description of project 3',
    imageUrl: 'https://source.unsplash.com/800x600/?technology',
    githubUrl: 'https://github.com/christianvan/project3',
  },
];

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero Section with Profile Image */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          <div className="text-left space-y-4 md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900">Christian Van</h1>
            <p className="text-xl text-gray-600">
              Computer Science Student at the University of Michigan
            </p>
            <p className="text-gray-600">
              Passionate about building innovative solutions and exploring new technologies.
            </p>
          </div>
          
          {/* Profile Image Container */}
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/profile.jpg"
                alt="Christian Van"
                fill
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: Project, index: number) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;