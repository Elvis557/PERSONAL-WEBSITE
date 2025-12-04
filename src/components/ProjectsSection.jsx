import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  { 
    id: 1,
    title: "ElviMart E-commerce Platform",
    description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include product listings, user authentication, and a shopping cart.",
    image: "/projects/Project1.png",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    demourl: "#",
    githubUrl: "https://github.com/Elvis557/ElviMart-E-commerce-Site",
    ongoing: true,
  },
  {
    id: 2,
    title: "Simple Product Selling Website",
    description: "A simple product selling website built with HTML, CSS, and JavaScript. It includes product listings, a shopping cart, and a checkout process.",
    image: "/projects/Project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demourl: "#",
    githubUrl: "#",
    ongoing: true
  },
  {
    id: 3,
    title: "Modern Website Dashboard Design",
    description: "A dashboard application built with HTML, CSS and JS. It includes data visualization, user authentication, and responsive design.",
    image: "/projects/Project3.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    demourl: "#",
    githubUrl: "https://github.com/Elvis557/Dashboard",
    completed: true
  },
  {
    id: 4,
    title: "Mama Africa Prints",
    description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include product listings, user authentication, and a shopping cart.",
    image: "/projects/Project4.png",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    demourl: "#",
    githubUrl: "https://github.com/ADBUL-ELVIS/E-COMMERECE-WEBSITE",
    ongoing:true
  },
  {
    id: 5,
    title: "A1 OPPORTUNITIES AFRICA",
    description: "A1 Opportunities Africa is a modern web platform connecting Africans to impactful opportunities in education, jobs, and innovation. Built with React + Vite, styled using Tailwind CSS, and deployed on Vercel, it delivers a fast, responsive, and user-friendly experience. The site uses the Inter font for clean readability and is optimized for all devices.",
    image: "/projects/Project5.jpg",
    tags: ["React", "Vite", "Tailwind CSS", "Vercel"],
    demourl: "https://a1-opportunities-africa.vercel.app/",
    githubUrl: "https://github.com/Elvis557/A1-OPPORTUNITIES-AFRICA",
    ongoing: true
  },
  {
    id: 6,
    title: "LinkUp",
    description: "A real-time chat app where conversations happen instantly. Built with Node.js, Express, and Socket.IO, LinkUp lets users connect, vibe, and chat live — anytime, anywhere. Fast. Minimal. Gen Z energy. ",
    image: "/projects/Project6.jpg",
    tags: ["Node.js", "Express", "Socket.IO"],
    demourl: "https://real-chat-application-vert.vercel.app/",
    githubUrl: "https://github.com/Elvis557/LinkUp",
    ongoing: true
  }
 
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in web development and design. Each project reflects my commitment to quality and user experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.ongoing && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow animate-pulse">
                    Ongoing
                  </span>
                )}
                {project.completed && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow animate-pulse">
                    completed
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 my-5 text-center">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demourl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-12 mt-14">
          <a
            className="cosmic-button w-fit flex items-center gap-2"
            href="https://github.com/Elvis557"
            target="_blank"
          >
            Check My Github <ArrowRight />
          </a>

          <a
            className="cosmic-button w-fit flex items-center gap-2"
            href="http://www.youtube.com/@elvisanimations"
            target="_blank"
          >
            Check My Youtube <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
