export const ProjectsSection = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        {/* bg-background text-foreground */}
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-mono mb-12 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3>Cloud Platform</h3>
                    <p>
                        A cloud platform that allows users to deploy and manage applications with ease. It supports multiple programming languages and provides a user-friendly interface for managing resources.
                    </p>
                </div>

            </div>


        </div>
    </section>
}