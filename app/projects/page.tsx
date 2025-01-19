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
        <div className="p-10 mt-10">
            <h1 className="text-3xl font-bold mb-7">Projects</h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Data }) {
    const truncateOverview = (text: string) => {
        const maxLength = {
            base: 115,  // Mobil için
            md: 160,    // Orta boyutlu ekranlar için
            lg: 210     // Büyük ekranlar için
        };

        if (text.length <= maxLength.lg) return text;
        
        return (
            <>
                <span className="lg:hidden">{text.slice(0, maxLength.base).trim() + '...'}</span>
                <span className="hidden md:inline lg:hidden">{text.slice(0, maxLength.md).trim() + '...'}</span>
                <span className="hidden lg:inline">{text.slice(0, maxLength.lg).trim() + '...'}</span>
            </>
        );
    };

    return (
        <article className="bg-slate-600 dark:bg-slate-700 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 aspect-square flex flex-col border border-gray-200 dark:border-gray-700">
            <div className="p-4 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2 text-teal-400 dark:text-teal-400 truncate">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.title}
                    </a>
                </h3>
                <p className="text-gray-200 dark:text-gray-300 mb-4 flex-grow overflow-hidden">
                    {truncateOverview(project.overview)}
                </p>
            </div>
            <div className="mt-auto  p-3">
                <a href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center justify-center w-full py-2 px-4  font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-md transition-colors duration-300">
                    Learn more
                    <span className="ml-2">&rarr;</span>
                </a>
            </div>
        </article>
    );
}
