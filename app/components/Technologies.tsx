import React from 'react';

const Technologies = () => {
    return (
        <div className="h-full bg-[#0f0f0f]/50 border border-white/5 backdrop-blur-xl rounded-3xl p-8 hover:border-teal-500/20 transition-all duration-500 flex flex-col">
            
 
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-12 h-1 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full"></span>
                Tools & Tech
            </h3>
            

            <div className="flex flex-wrap gap-3 content-start">
                
                
                <img className="hover:scale-105 transition-transform duration-300 shadow-lg shadow-green-500/10" alt="C#" src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" />
                
                <img className="hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/10" alt=".NET Core" src="https://img.shields.io/badge/.NET%20Core-5C2D91?style=for-the-badge&logo=.net&logoColor=white" />
                
                <img className="hover:scale-105 transition-transform duration-300 shadow-lg shadow-orange-500/10" alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300 shadow-lg shadow-green-600/10" alt="Spring Boot" src="https://img.shields.io/badge/spring%20boot-%236DB33F.svg?style=for-the-badge&logo=springboot&logoColor=white" />

                {/* --- Frontend Core --- */}
                <img className="hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-600/10" alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-400/10" alt="ReactJS" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
                <img className="hover:scale-105 transition-transform duration-300" alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
                <img className="hover:scale-105 transition-transform duration-300" alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300" alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300" alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300" alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300" alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white" />

                {/* --- Databases --- */}
                <img className="hover:scale-105 transition-transform duration-300" alt="Oracle" src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=Oracle&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300" alt="Postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300" alt="Microsoft SQL Server" src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300" alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />

                {/* --- DevOps & Tools --- */}
                <img className="hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/10" alt="Docker" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300" alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300" alt="Apache Maven" src="https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300" alt="Hibernate" src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white" />
                <img className="hover:scale-105 transition-transform duration-300" alt="JWT" src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" />
            </div>
        </div>
    );
};

export default Technologies;