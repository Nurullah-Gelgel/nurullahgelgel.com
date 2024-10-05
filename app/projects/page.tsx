import { client } from "../lib/sanity";
import Image from 'next/image'; // Ensure correct import for Image component

interface Data {
    image: string;
    _createdAt: string;
    _type: string;
    title: string;
    _updatedAt: string;
    overview: string;
    _rev: string;
    link: string;
    _id: string;
}

async function getExperiences() {
    const query = `
    *[_type == "project"] {
 image,
_createdAt,
_type,
title,
_updatedAt,
overview,
_rev,
link,
_id,
}`;
    const data = await client.fetch(query);
    return data;
}

export default async function Projects() {
    const data: Data[] = await getExperiences();
    return (
        <div className="text-white p-10">
            <h1 className="text-3xl font-bold mb-5">Projects</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Data }) {
    return (
        <article className="dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 aspect-square flex flex-col">
            <div className="p-4 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2 text-teal-400 truncate">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.title}
                    </a>
                </h3>
                <p className="text-gray-800 dark:text-gray-300 mb-4 flex-grow overflow-hidden">
                    <span className="line-clamp-9">{project.overview}</span>
                </p>
            </div>
            <div className="p-4 mt-auto">
                <a href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center text-teal-500 hover:text-teal-300">
                    Learn more
                    <span className="ml-1">&rarr;</span>
                </a>
            </div>
        </article>
    );
}
