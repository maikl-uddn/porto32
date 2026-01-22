const Testi = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-900">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                        Partners Testimonial
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                        Join thousands of developers who have colaborated their projects with us
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <section className="py-12 sm:py-16 px-4 rounded-4xl sm:px-6 bg-gray-50 dark:bg-gray-800 ">
                        <div className="max-w-4xl mx-auto text-center">
                            <blockquote className="text-gray-900 dark:text-white italic text-base sm:text-lg mb-4 sm:mb-6 px-4">
                                "Mas ikmal ini jago banget codingnya, kalo dia ngakunya baru pemula jangan percaya deh. <br/>Tapi tetep aja jomblo wkwkwk..."
                            </blockquote>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4TeIJQXw2VMK-PJYkNWv6s6Da7a_QtYE52UasOCNfgHs51pranfRqerowJmd3lz5LWs&usqp=CAU" alt="Jane Doe"
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
                                <div className="text-center sm:text-left">
                                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Elon Musk</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">CEO, Tesla Corp</p>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto text-center mt-20">
                            <blockquote className="text-gray-900 dark:text-white italic text-base sm:text-lg mb-4 sm:mb-6 px-4">
                                "Gila sih, dari saya muda dulu sampe tua sekarang ga pernah tuh ketemu sama programmer se-Handal beliau. Saya pengen windows 12 besok mas ikmal ini yang buatin."
                            </blockquote>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                <img src="data:image/jpeg;base64,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" alt="Jane Doe"
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
                                <div className="text-center sm:text-left">
                                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Bill Gates</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">CEO, Microsoft Corp</p>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>

                <div className="hidden md:block text-purple-500 text-5xl opacity-10">"</div>


            </div>
        </section>
    )
}

export default Testi