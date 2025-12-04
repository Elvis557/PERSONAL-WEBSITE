import { Coffee, Heart, ExternalLink } from "lucide-react";

export const BuyMeCoffeePage = () => {
  return (
    <section id="buymeacoffee" className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">

        {/* Main Card */}
        <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-primary to-purple-600 p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-background rounded-full p-6 shadow-lg">
                <Coffee size={48} className="text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Buy Me a Coffee ☕
            </h1>
            <p className="text-white/90 text-lg">
              Support my work and fuel my creativity!
            </p>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <p className="text-foreground text-lg mb-4">
                Hey there! 👋 I'm Elvis, a passionate developer who loves building amazing web experiences.
              </p>
              <p className="text-muted-foreground mb-6">
                If you enjoy my work, found my projects helpful, or just want to support what I do, 
                consider buying me a coffee! Your support helps me continue creating and sharing more awesome content.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
                <div className="text-4xl mb-3">💻</div>
                <h3 className="font-semibold text-foreground mb-2">
                  More Projects
                </h3>
                <p className="text-sm text-muted-foreground">
                  Help me dedicate more time to building open-source projects
                </p>
              </div>

              <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-semibold text-foreground mb-2">
                  Learning Resources
                </h3>
                <p className="text-sm text-muted-foreground">
                  Support my journey in learning new technologies
                </p>
              </div>

              <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-semibold text-foreground mb-2">
                  Quality Content
                </h3>
                <p className="text-sm text-muted-foreground">
                  Enable me to create better tutorials and documentation
                </p>
              </div>
            </div>

            {/* Coffee Options */}
            <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl p-8 mb-8 border border-primary/30">
              <h2 className="text-2xl font-bold text-center text-foreground mb-6">
                Choose Your Support Level
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-border">
                  <Coffee size={32} className="mx-auto text-primary mb-3" />
                  <h3 className="font-bold text-xl text-foreground mb-2">$3</h3>
                  <p className="text-sm text-muted-foreground">One Coffee ☕</p>
                </div>

                <div className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow border-2 border-primary">
                  <Coffee size={32} className="mx-auto text-primary mb-3" />
                  <h3 className="font-bold text-xl text-foreground mb-2">$5</h3>
                  <p className="text-sm text-muted-foreground">Grande Coffee ☕☕</p>
                  <span className="inline-block mt-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>

                <div className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-border">
                  <Coffee size={32} className="mx-auto text-primary mb-3" />
                  <h3 className="font-bold text-xl text-foreground mb-2">$10+</h3>
                  <p className="text-sm text-muted-foreground">Coffee & Snack ☕🍪</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="https://buymeacoffee.com/elvisboateng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Coffee size={24} />
                Support Me on Buy Me a Coffee
                <ExternalLink size={20} />
              </a>
              
              <p className="mt-6 text-muted-foreground flex items-center justify-center gap-2">
                <Heart size={16} className="text-red-500 fill-current" />
                Every coffee makes a difference!
                <Heart size={16} className="text-red-500 fill-current" />
              </p>
            </div>

            {/* Thank You Note */}
            <div className="mt-10 p-6 bg-secondary/50 rounded-xl text-center border border-border">
              <p className="text-foreground/90 italic">
                "Thank you so much for your support! Your generosity keeps me motivated 
                and helps me continue doing what I love. You're awesome! 🚀"
              </p>
              <p className="mt-3 font-semibold text-foreground">
                - Elvis Boateng
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-muted-foreground">
          <p className="text-sm">
            Not ready to support yet? No problem! You can also help by sharing my work or leaving feedback. 💙
          </p>
        </div>

      </div>
    </section>
  );
};
