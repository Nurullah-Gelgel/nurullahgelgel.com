import { client } from "../lib/sanity";
import Image from 'next/image';

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

async function getProjects() {
    const query = `*[_type == "project"] {
        image, _createdAt, _type, title, _updatedAt, overview, _rev, link, _id
    }`;
    const data = await client.fetch(query);
    return data;
}

export default async function Projects() {
    const data: Data[] = await getProjects();

    return (
        <div className="py-24 px-4 relative max-w-7xl mx-auto">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>

            <div className="text-center mb-16">
                <h2 className="text-teal-400 font-medium tracking-widest text-sm uppercase mb-2">Portfolio</h2>
                <h1 className="text-4xl md:text-5xl font-bold text-white">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Projects</span></h1>
            </div>
            
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Data }) {
    return (
        <article className="group relative rounded-2xl bg-[#121212]/60 border border-white/5 backdrop-blur-md overflow-hidden hover:border-teal-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.1)] flex flex-col h-[420px]">
            
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="p-8 flex flex-col h-full z-10">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-white group-hover:bg-teal-500/20 transition-all">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                </div>
                
                <div className="flex-grow overflow-y-auto pr-2 mb-6 
                    /* Scrollbar Stilleri */
                    [&::-webkit-scrollbar]:w-1.5 
                    [&::-webkit-scrollbar-track]:bg-transparent 
                    [&::-webkit-scrollbar-thumb]:bg-white/10 
                    [&::-webkit-scrollbar-thumb]:rounded-full 
                    hover:[&::-webkit-scrollbar-thumb]:bg-teal-500/50 
                    transition-colors">
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {project.overview}
                    </p>
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" 
                   className="mt-auto w-full py-3 px-6 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-teal-600 hover:border-teal-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn flex-shrink-0">
                    View Project
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </article>
    );
}