import { ArrowDown } from "lucide-react"

export const HeroSection=()=>{
    return <section id="hero" className="relative flex flex-col items-center justify-center px-4 min-h-screen">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="spac-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        {" "}Neschal</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Singh</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 pt-3">
                    lsfhjbnnaskjlnsakjv adskdmv ;askl vkl;as v;klads vk;ads vkads vlkads vbkd vlmn dvlkn dlkvn dlkjv dlkv dlmn vlkadsm lka vkads vlkad kad ikad nkad oia ei aidpd ipaee ae a oea  ja a v
                </p>

                <div className="pt-8 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View my Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
            Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary"/>            
        </div>

         
    </section>
}