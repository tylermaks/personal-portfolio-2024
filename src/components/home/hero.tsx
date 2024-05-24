import Image from "next/image"
import AltButton from "../ui/alt-button"
import MainButton from "../ui/main-button"
export default function Hero() { 
    return ( 
        <section className="flex h-screen bg-gray-800 py-36 rounded-b-3xl">
            <div className="flex flex-col gap-4 w-1/2 text-gray-50">
                <h2>Hi, my name is Tyler</h2>
                <h1 className="text-6xl font-bold tracking-tight">I turn ideas into reality</h1>
                <p>I empower growth-focused small businesses by building custom web applications, automations, and data solutions that streamline processes and enhance productivity.</p>
                <div className="flex gap-4">
                    <MainButton>Get in touch</MainButton>
                    <AltButton>Learn more</AltButton>
                </div>
            </div>
            <div className="w-1/2 flex items-center">
                <Image aria-hidden="true"src="/images/bg-blob.svg" alt="hero image" width={600} height={600} />
            </div>
        </section>
    )
}