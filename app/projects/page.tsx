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
        <div className=" text-white p-10">
            <h1 className="text-3xl font-bold mb-5">Projects</h1>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {data.map((project) => (
                    <article key={project._id} className="overflow-hidden rounded-lg border border-gray-700 shadow-lg transition-transform transform hover:-translate-y-1">

                        <div className="p-6">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                                <h3 className="text-xl font-semibold mb-2 text-teal-400">{project.title}</h3>
                            </a>
                            {project.overview.split(/(?<=[.!?])\s+/).map((sentence, index) => (
                                <p key={index}>{sentence}</p>
                            ))}
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal-500 hover:text-teal-300">
                                Learn more
                                <span className="ml-1">&rarr;</span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
