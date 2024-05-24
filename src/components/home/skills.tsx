import Card from "@/components/ui/card"

export default function Skills() { 
    const cardData = [
        {
            title: "Web Development",
            children: "I build custom web applications with React, Next.js, and Tailwind CSS.",
            icon:""
        },
        {
            title: "Automations",
            children: "I build custom web applications with React, Next.js, and Tailwind CSS.",
            icon:""
        },
        {
            title: "Data Solutions",
            children: "I build custom web applications with React, Next.js, and Tailwind CSS.",
            icon:""
        },
    ]


    return ( 
        <section className="flex flex-col gap-4 items-center">
            <h2 className="text-4xl font-bold">Here's what I can do for you</h2>
            <p className="text-center w-1/2">I turn ideas into reality by seamlessly integrating no-code and coded solutions to create efficient, innovative, and user-friendly applications and systems.</p>
            <div className="flex py-8 gap-8">
                {cardData.map(card => {
                    return (
                        <Card key={card.title} title={card.title}>
                            {card.children}
                        </Card>
                    )
                })}
            </div>

            <div className="w-full py-8 bg-gray-200">

            </div>
        </section>
    )  
}