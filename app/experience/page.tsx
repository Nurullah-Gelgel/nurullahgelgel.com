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

// Tarih formatını düzenleyen yardımcı fonksiyon
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
};

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
                <div className="md:w-4/4 mt-6 md:mt-0" >
                    {data.map((exp) => (
                        <div key={exp._id} id={exp.company} className="mb-10">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 text-teal-500">
                                <h3 className="text-xl font-semibold mb-1 sm:mb-0">
                                    {exp.position} @ <span className="">{exp.company}</span>
                                </h3>
                                <p className="text-md">
                                    {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
                                </p>
                            </div>
                            <ul className="list-none space-y-2">
                                {splitSentences(exp.overview).map((sentence, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                        </svg>
                                        <span>{sentence}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
