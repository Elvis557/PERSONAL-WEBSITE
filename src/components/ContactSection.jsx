import { Linkedin, Mail, MapPin , Twitter, Send, Instagram, Youtube, Phone} from "lucide-react"
import {cn} from '@/lib/utils'
import { SiTiktok } from 'react-icons/si';
import { useToast } from "../hooks/use-toast";
import { useState } from "react"; 

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault() 

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description:  "Thank you for your message. I'll get back to you soon."
            });
            setIsSubmitting(false);
        }, 1500);
    }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span> 
            </h2>

            <p className="text-center text-muted-foreground mb-12  max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new ideas, opportunities, and how I can contribute to your success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:elvisboateng557@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    elvisboateng557@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+233269876974"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    +233 (0) 269-876-974
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a 
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Nsawam Road, Accra
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4 text-center"> Connect With Me</h4>

                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/elvis-boateng-boampong-3b6264341?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                <Linkedin/>
                            </a>
                            <a href="" target="_blank">
                                <Twitter/>
                            </a>
                            <a href="http://www.tiktok.com/@el_develops" target="_blank">
                                <SiTiktok/>
                            </a>
                            <a href="">
                                <Instagram/>
                            </a>
                            <a href="http://www.youtube.com/@elvisanimations" target="_blank">
                                <Youtube/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs " onSubmit={handleSubmit} >
                    <h3 className="text-2xl font-semibold mb-6 text-center">Send a message</h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 ">{" "} Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                                placeholder="Elvis Boateng..."
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 ">{" "} Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary"
                                placeholder="john@gmail.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2  ">{" "} Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary resize-none"
                                placeholder="Hello, I'd like to talk about... "
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2"
                            )}
                        >
                            {isSubmitting? "Sending...": "Send Message"}
                            <Send size={16}/>
                        </button>

                    </form>
                </div>
            </div>
        </div>    
    </section>
  )
}
