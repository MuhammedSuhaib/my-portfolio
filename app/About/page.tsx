import { Merienda, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function Timeline() {
    const levels = [
        { year: "2025-01", text: "Working on a presentation 'Learn Computing in 0 Day.'" },
        { year: "2025-01", text: "Completed front-end development training from GIAIC." },
        { year: "2024-08", text: "Developed an interest in internet security & backdoors." },
        { year: "2024", text: "Completed TypeScript course from GIAIC." },
        { year: "2023-12", text: "Taught basic computing to two young students." },
        { year: "2023-07", text: "Learned fundamentals of web development (HTML, CSS, JavaScript)." },
        { year: "2023-07", text: "Passed aptitude test at GIAIC." },
        { year: "2023", text: "Discovered AI-driven websites." },
        { year: "2023", text: "Learned Urdu typing." },
        { year: "2023", text: "Advanced skills in Photoshop." },
        { year: "2022-2023", text: "Enhanced design skills with Canva." },
        { year: "2021-2023", text: "Completed FSC (Pre-Engineering) from SM Science." },
        { year: "2020-2021", text: "Completed Graphic Designing course from DigiSkills." },
        { year: "2007-2021", text: "Completed CIT & Basics of Computing from SCOSIT School." },
        { year: "2007-2021", text: "Passed Matriculation from SCOSIT School." }
    ];
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-10 px-5 size-full ">
            <section className="max-w-3xl text-center text-white mb-10">
                <h1 className={`${merienda.className} text-5xl mb-4 text-white`}>About Me</h1>
                <p className={`${montserrat.className} text-lg text-gray-300 leading-relaxed`}>
                    I am a passionate self-learner and tech enthusiast with a growing interest in front-end
                    development, and design. Over the past few years, I have dedicated myself to
                    expanding my skill set through various courses and hands-on projects.
                </p>
                <p className={`${montserrat.className} mt-4 text-lg text-gray-300 leading-relaxed`}>
                    In 2025, I am working on a presentation titled
                    <strong> &quot;Learn Computing in 0 Days&quot;</strong>, aimed at helping beginners understand basic
                    computing concepts. Prior to that, I explored internet security and backdoors, which
                    sparked my fascination with the digital landscape.
                </p>
                <p className={`${montserrat.className} mt-4 text-lg text-gray-300 leading-relaxed`}>
                    My journey into tech began in 2023 when I took my first steps in web development
                    (HTML, CSS, JavaScript) and enhanced my skills with tools like Photoshop and Canva.
                    However, after diving into web development, I no longer focus on graphic design.
                </p>
                <p className={`${montserrat.className} mt-4 text-lg text-gray-300 leading-relaxed`}>
                    I am now diving deeper into technologies like TypeScript, Next.js, and preparing to explore
                    Agentic AI, Metaverse, and Cloud Computing. My journey is just beginning, and I&apos;m excited about
                    where it will take me.
                </p>
            </section>
            <h2 className={`${merienda.className} text-5xl text-white`}>My Timeline</h2>
            {levels.map((item, index) => (
                <div key={index} className="flex flex-col items-center py-5">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <div
                            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-cover bg-center flex justify-center items-center text-white font-bold text-sm sm:text-lg "
                            style={{ backgroundImage: `url(/OO.jpg)` }}
                        >
                            {item.year}
                        </div>
                        <div className="flex items-center gap-5 bg-white p-4 sm:p-5 rounded-md shadow-lg transition-all duration-500 hover:scale-105 text-center sm:text-left">
                            <p className="text-sm sm:text-lg text-black">{item.text}</p>
                        </div>
                    </div>
                    {index !== levels.length - 1 && (
                        <div className="w-1 bg-gray-300 h-12 sm:h-16 my-2"></div>
                    )}
                </div>
            ))}
            {/* Buttons  */}
            <p className="text-white text-lg mb-3">Click here for:</p>
            <section className="flex flex-col md:flex-row justify-center items-center  gap-10 mt-6">

                <a
                    href="https://www.linkedin.com/in/suhaib1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white hover:text-indigo-200 transition duration-300"
                >
                    <Image
                        src="/linkedin.png"
                        width={500}
                        height={172}
                        alt="LinkedIn"
                        className="w-14 h-10 "
                    />
                </a>
                <a
                    href="https://github.com/MuhammedSuhaib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white hover:text-indigo-200 transition duration-300"
                >
                    <Image
                        src="/git-logo.png"
                        width={920}
                        height={460}
                        alt="GitHub"
                        className="w-20 h-16 "
                    />
                </a>
                <Link href="/co" className="px-4 py-2 bg-[#ff5100] text-white rounded-md ">Contact Page</Link>
                <Link href="/" className="px-4 py-2 bg-[#5c0442] text-white rounded-md"> Back to Home</Link>
            </section>
        </div>
    );
}
