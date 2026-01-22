const HomeTop = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        About Me
                    </h1>
                    <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A short introduction about who I am and what I do.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ikmaluddin</span> 👋
                        </h3>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            I am a <strong>Web Developer</strong> who loves building clean, responsive, and user-friendly websites.
                            I focus on turning ideas into real digital products with modern design and efficient code.
                        </p>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Currently, I’m learning and working with technologies like
                            <span className="font-medium text-gray-900 dark:text-white">
                                HTML, Tailwind CSS, JavaScript, PHP, and MySQL
                            </span>.
                            I enjoy improving my skills by building real projects and exploring new technologies.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">HTML</span>
                            <span className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">Tailwind CSS</span>
                            <span className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">JavaScript</span>
                            <span className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">PHP</span>
                            <span className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">MySQL</span>
                            <span className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">Bootstrap CSS</span>
                            <span className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">Python</span>
                            <span className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">React.JS</span>
                            <span className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">Next.JS</span>


                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl">

                        <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 -left-16 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl"></div>

                        <div className="relative z-10 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="w-5 h-2 rounded-full bg-blue-500"></span>
                                Quick Information
                            </h4>

                            <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40">
                                        🎓
                                    </span>
                                    <span>Student & Web Developer</span>
                                </li>

                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/40">
                                        💻
                                    </span>
                                    <span>Focus on Full-Stack Development</span>
                                </li>

                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">
                                        📍
                                    </span>
                                    <span>Lamongan, East-Java, Indonesia</span>
                                </li>

                                <li className="flex items-center gap-3">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/40">
                                        🚀
                                    </span>
                                    <span>Open for Collaboration</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        

        </section >

    )
}

export default HomeTop