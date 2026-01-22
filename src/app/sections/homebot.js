const HomeBottom = () => {
    return (
        <section className="relative px-6 py-16 md:py-20 bg-gray-900 overflow-hidden">

            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 left-0 w-96 h-75 bg-purple-500/30 rounded-full blur-3xl"></div>

            <div className="relative mx-auto max-w-4xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-100 mb-3 md:mb-4">
                        How to Hire Me?
                    </h2>
                    <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto">
                        Simple steps to start working together and turn your ideas into real products.
                    </p>
                </div>

                <dl className="relative border-l-2 border-neutral-700 ml-3">
                    <div className="relative mb-12 pl-8 md:pl-10">
                        <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold shadow-md">
                            1
                        </span>
                        <dt className="text-xl md:text-2xl font-bold text-blue-400 mb-2 md:mb-3">
                            📋 Contact Me
                        </dt>
                        <dd className="text-base md:text-lg text-neutral-300 leading-relaxed">
                            Reach out via WhatsApp, email, or social media. Tell me about your project, goals, and ideas you want to build.
                        </dd>
                    </div>

                    <div className="relative mb-12 pl-8 md:pl-10">
                        <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold shadow-md">
                            2
                        </span>
                        <dt className="text-xl md:text-2xl font-bold text-blue-400 mb-2 md:mb-3">
                            📝 Project Discussion
                        </dt>
                        <dd className="text-base md:text-lg text-neutral-300 leading-relaxed">
                            We discuss requirements, timeline, and budget. I’ll help refine your ideas into a clear and realistic plan.
                        </dd>
                    </div>

                    <div className="relative mb-12 pl-8 md:pl-10">
                        <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold shadow-md">
                            3
                        </span>
                        <dt className="text-xl md:text-2xl font-bold text-blue-400 mb-2 md:mb-3">
                            🎨 Design & Development
                        </dt>
                        <dd className="text-base md:text-lg text-neutral-300 leading-relaxed">
                            I start designing and developing your project with clean code, responsive layout, and modern UI/UX.
                        </dd>
                    </div>

                    <div className="relative pl-8 md:pl-10">
                        <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold shadow-md">
                            4
                        </span>
                        <dt className="text-xl md:text-2xl font-bold text-blue-400 mb-2 md:mb-3">
                            🚀 Launch & Collaboration
                        </dt>
                        <dd className="text-base md:text-lg text-neutral-300 leading-relaxed">
                            After revisions and approval, your project is ready to launch. I’m open for long-term collaboration and support.
                        </dd>
                    </div>
                </dl>
            </div>
        </section>

    )
}

export default HomeBottom;