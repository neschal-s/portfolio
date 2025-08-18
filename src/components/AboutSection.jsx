import { Briefcase, Code, User } from "lucide-react"

export const AboutSection=()=>{
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gaps-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Passionate Web developer
                    </h3>
                    <p className="text-muted-foreground">
                        I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development has been fueled by a desire to build user-friendly interfaces and efficient back-end systems.
                    </p>
                    <p className="text-muted-foreground">
                        With a strong foundation in HTML, CSS, and JavaScript, I have expanded my skill set to include modern frameworks and libraries such as React, Node.js, and Express. I enjoy tackling challenges and continuously learning new technologies to enhance my development skills.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch 
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary  hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Download CV 
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-6'>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="text-primary w-6 h-6"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Building responsive and dynamic web applications.</p>

                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="text-primary w-6 h-6"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX design</h4>
                                <p className="text-muted-foreground">Designing user-friendly interfaces for web applications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="text-primary w-6 h-6"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">Building responsive and dynamic web applications.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}