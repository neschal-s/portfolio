import { Mail, MapPin, Phone } from "lucide-react"

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
                </div>
            </div>
        </div>
    </section>
}