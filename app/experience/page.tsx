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
    *[_type == "experience"] {
        endDate,
        _createdAt,
        position,
        startDate,
        _id,
        _updatedAt,
        overview,
        _type,
        company
    }`;
    const data = await client.fetch(query);
    return data;
}

export default async function Experience() {
    const data: Data[] = await getExperiences();
    console.log("data", data);

    // Metni '-' işaretine göre ayıran fonksiyon
    const splitSentences = (text: string) => {
        // Metni '-' işaretine göre ayır
        return text.split(/-\s*/).map(sentence => sentence.trim()).filter(Boolean);
    };

    return (
        <div className="p-10 mt-16 mb-16">
            <h1 className="text-3xl font-bold mb-5">Where I’ve Worked</h1>
            <div className="flex flex-col md:flex-row">
               {/* <div className="flex flex-col md:w-1/4">
                    {data.map((exp) => (
                        <a key={exp._id} href={`#${exp.company}`} className="py-2 text-teal-400 hover:text-teal-600">
                            {exp.company}
                        </a>
                    ))}
                </div>*/}
                <div className="md:w-4/4 mt-6 md:mt-0" >
                    {data.map((exp) => (
                        <div key={exp._id} id={exp.company} className="mb-10">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 text-teal-500">
                                <h3 className="text-xl font-semibold mb-1 sm:mb-0">
                                    {exp.position} @ <span className="">{exp.company}</span>
                                </h3>
                                <p className="text-md">{exp.startDate} / {exp.endDate || "Present"}</p>
                            </div>
                            <ul className="list-disc list-inside space-y-2">
                                {splitSentences(exp.overview).map((sentence, index) => (
                                    <li key={index}>{sentence}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
