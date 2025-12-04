import { AlertTriangle } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">

        <div className="bg-gradient-to-br from-primary/30 via-transparent to-primary/10 w-full h-full blur-3xl"></div>
      </div>
      <AlertTriangle className="w-16 h-16 text-primary mb-4 animate-fade-in" />
      <h1 className="text-[8rem] font-extrabold text-primary leading-none animate-fade-in">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mt-2 animate-fade-in-delay-1">
        Page Not Found
      </h2>
      <p className="text-muted-foreground max-w-md text-center mt-2 mb-6 animate-fade-in-delay-2">
        Oops! Looks like this page doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="cosmic-button animate-fade-in-delay-3"
      >
        Return Home
      </a>
    </div>
  );
};
