import { Code, User, Briefcase } from "lucide-react"
import CV from '../assets/CV.pdf';


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 ">
                    <h3 className="text-2xl font-semibold" >
                        Passionate Web Developer & Tech Creator
                    </h3>

                    <p className="text-muted-foreground">
                        I craft clean, scalable web applications with a focus on performance, usability, and real-world impact.
                        With a full-stack skillset and a deep curiosity for technology,
                        I enjoy turning ideas into intuitive digital experiences—whether it’s building from the ground up or optimizing existing solutions.
                    </p>



                    <p className="text-muted-foreground">
                    Beyond just writing code, I care about the why behind the product—understanding user needs, aligning with business goals, and delivering features that matter. I’m experienced across the entire development lifecycle, from planning and architecture to deployment and maintenance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in Touch
                        </a>

                        <a href="/assets/CV.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>

                    </div>
                </div>
                <div className="grid grid-cols gap-6">
                    <div className="gradient-border p-6  card-hover">
                        <div className="flex items-start gap-4 ">
                            <div className="p-3 rounded-full bg-primary/16">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development </h4>
                                <p className="text-muted-foreground">
                                    Creating responsive, user-friendly web applications using modern frameworks and technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6  card-hover">
                    <div className="flex items-start gap-4 ">
                            <div className="p-3 rounded-full bg-primary/16">
                                <User className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                <p className="text-muted-foreground">
                                    Designing intuitive, user-centered interfaces that enhance the overall user experience.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6  card-hover">
                    <div className="flex items-start gap-4 ">
                            <div className="p-3 rounded-full bg-primary/16">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management </h4>
                                <p className="text-muted-foreground">
                                    Leading projects from concept to completion, ensuring timely delivery and alignment with business objectives.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
