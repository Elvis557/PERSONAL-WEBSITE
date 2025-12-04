<<<<<<< HEAD
import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 z-50" 
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Elvis
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Boateng
            </span>

          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Full-stack Software Engineer with expertise in building scalable, efficient applications and delivering user-focused solutions.
            Skilled across the full development lifecycle with a focus on clean code and effective problem-solving.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
              </a>
          </div>
        </div>

      </div>
      <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary "/>
      </div>
    </section>
  )
}
=======
import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 " 
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Elvis
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Boateng
            </span>

          </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
        Full-stack Software Engineer with expertise in building scalable, efficient applications and delivering user-focused solutions.
        Skilled across the full development lifecycle with a focus on clean code and effective problem-solving.
        </p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
       </div>
        </div>

      </div>
      <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary "/>
      </div>
    </section>
  )
}
>>>>>>> 699f3c4259cee69c5549ec7ed5ec42b693a5b26b
