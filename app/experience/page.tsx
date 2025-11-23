import { client } from "../lib/sanity";

interface Data {
    _createdAt: string;
    _type: string;
    position: string;
    startDate: string;
    endDate: string;
    _updatedAt: string;
    overview: string;
    company: string;
    _id: string;
}

async function getExperiences() {
    const query = `
    *[_type == "experience"] | order(startDate desc) {
        endDate, _createdAt, position, startDate, _id, _updatedAt, overview, _type, company
    }`;
    const data = await client.fetch(query);
    return data;
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
};

export default async function Experience() {
    const data: Data[] = await getExperiences();

    const splitSentences = (text: string) => {
        return text.split(/-\s*/).map(sentence => sentence.trim()).filter(Boolean);
    };

    return (
        <div className="py-24 px-4 relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-[-100px] w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="text-center mb-16">
                 <h2 className="text-teal-400 font-medium tracking-widest text-sm uppercase mb-2">Career Path</h2>
                 <h1 className="text-4xl md:text-5xl font-bold text-white">Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-400">Experience</span></h1>
            </div>

            <div className="relative border-l-2 border-white/10 ml-3 md:ml-0 md:pl-0 space-y-12">
                {data.map((exp) => (
                    <div key={exp._id} className="relative pl-8 md:pl-12 group">
                        
                        <span className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full bg-[#050505] border-4 border-teal-500 group-hover:border-teal-500 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></span>

                        <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-2">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
                                    {exp.position}
                                </h3>
                                <h4 className="text-lg font-medium text-teal-400 flex items-center gap-2">
                                    {exp.company}
                                </h4>
                            </div>
                            <span className="px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.1)]">
                                {formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : "Present"}
                            </span>
                        </div>

                        <div className="p-6 md:p-8 rounded-2xl bg-[#121212]/50 border border-white/5 backdrop-blur-sm group-hover:bg-[#121212]/80 group-hover:border-white/10 transition-all duration-300 shadow-xl">
                            <ul className="space-y-4">
                                {splitSentences(exp.overview).map((sentence, idx) => (
                                    <li key={idx} className="flex items-start text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                        <span className="mt-1.5 mr-3 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500 group-hover:bg-teal-500 transition-colors"></span>
                                        <span>{sentence}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}