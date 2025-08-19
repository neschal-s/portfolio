import { Mail, MapPin, Phone, Send} from "lucide-react"
import { FaGithub, FaLinkedin, FaThreads, FaXTwitter } from 'react-icons/fa6';
import { cn } from "@/lib/utils";

export const ContactSection = () => {
    return <section className="py-20 px-4 relative bg-secondary/30" id="contact">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justfy-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="w-6 h-6 text-primary" />{""}
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:hello@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    hello@gmail.com
                                </a>

                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="w-6 h-6 text-primary" />{""}
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+919453007664"
                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    +91 9453007664
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="w-6 h-6 text-primary" />{""}
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a                                    className="text-muted-foreground hover:text-primary transition-colors">
                                    Lucknow, India
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-5 justify-center ">
                            <a target="_blank">
                                <FaGithub className="text-2xl hover:text-primary" />
                            </a>
                            <a target="_blank" href="#">
                                <FaLinkedin className="text-2xl hover:text-primary" />
                            </a>
                            <a target="_blank" href="#">
                                <FaXTwitter className="text-2xl hover:text-primary" />                               
                            </a>
                            <a target="_blank" href="#">
                                <FaThreads className="text-2xl hover:text-primary" />              
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Sent a Message</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">{" "}Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your Name"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">{" "}Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="abc@gmail.com"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">{" "}Your Message</label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Your Name"/>
                        </div>
                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2","")}>
                            <Send size={16}/>
                        </button>
                    </form>

                </div>

            </div>
        </div>
    </section>
}