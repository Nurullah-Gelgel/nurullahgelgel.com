import Image from "next/image";
import UpstatementLogo from "../public/upstatement.png"; // örneğin logoyu bu şekilde import edebilirsiniz
import Nurullah from "../public/me.jpeg";
import { client } from "../lib/sanity";

interface Data {
  username: string;
  image: string;
  overview: string;
  _createdAt: string;
  _type: string;
  link: string;
  _id: string;
  _updatedAt: string;
  title: string;

  
}

async function getUser() {
  const query = `
 *[_type == "userInfo"] {
  username,
image,
overview,
_createdAt,
_type,
about,
technologies,
_id,
_updatedAt,
title
}`;
  const data = await client.fetch(query);
  return data;
}
export default async function About() {
    const data: Data[] = await getUser();

  return (
    <div className="bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-5">01. About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/me.jpeg" // Profil resminizin yolu
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="md:col-span-2 space-y-5">
        I am a versatile software developer with a strong passion for learning and working with diverse technologies. I have developed significant expertise in Java and JavaScript, as well as relational databases and data structures, through numerous web-based applications using Spring Boot and React.js during my initial three years of university. In my final year, I joined Ford Otosan, where I contributed to various projects involving .Net Core, SQL, PL/SQL, and JavaScript. I gained valuable experience in developing scalable web applications, managing databases, and creating user interfaces. Additionally, I learned to work effectively within a scrum team. I am eager to further enhance my skills and actively seek a dynamic environment to continue developing my programming expertise. 
         <p></p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="list-disc list-inside">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>SQL</li>
            <li>PL/SQL</li>
            <li>.Net Core</li>
            <li>HTML & (S)CSS</li>
            <li>JavaScript </li>
            <li>React</li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

