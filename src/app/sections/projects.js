import Image from 'next/image'

const Project = () => {
  return (
    <section
      id="projects"
      className="relative px-6 py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* gradient blur background */}
      <div className="absolute bottom-30 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-30 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects I've built to sharpen my skills and solve real problems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card */}
          <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition overflow-hidden">
            <div className="h-44 bg-linear-to-br from-blue-500 to-purple-600">
              <Image
                src="/profile/web.png"
                alt="Profile"
                width={450}
                height={150}
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                UMKM Ezify
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                A simple cashier web application to manage products, transactions, and sales reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                  PHP
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                  MySQL
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                  Bootstrap
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>

              </div>
            </div>
          </div>

          <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition overflow-hidden">
            <div className="h-44 bg-linear-to-br from-emerald-500 to-teal-600">
              <Image
                src="/profile/web.png"
                alt="Profile"
                width={450}
                height={150}
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                ZALIIKX.id | OnlineShop
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Professional e-commerce websites, built with pure HTML5 and CSS3.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300">
                  HTML
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300">
                  CSS
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>

              </div>
            </div>
          </div>

          <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition overflow-hidden">
            <div className="h-44 bg-linear-to-br from-pink-500 to-rose-600">
              <Image
                src="/profile/web.png"
                alt="Profile"
                width={450}
                height={150}
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Landing Page
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Responsive landing page with modern UI and smooth layout for business promotion.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300">
                  HTML
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300">
                  Bootstrap
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
