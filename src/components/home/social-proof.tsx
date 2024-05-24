import FeedbackCard from "../ui/feedback-card"

export default function SocialProof() { 
    //Add api or similar to pull feedback data - for now just hardcoded

    return ( 
        <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 items-center">
                <h2 className="text-4xl font-bold">Here's what people are saying</h2>
                <p className="text-center w-1/2">I love my clients, and they love me! Take a look at what they have to say.</p>
            </div>
            <div className="flex gap-8">
                <FeedbackCard name="Bob Barker" logo="logo"> 
                    Made a solution that made my life easier. I'm very happy with the results. I would highly recommend this company.
                </FeedbackCard>
                <FeedbackCard name="Bob Barker" logo="logo"> 
                    Made a solution that made my life easier. I'm very happy with the results. I would highly recommend this company.
                </FeedbackCard>
                <FeedbackCard name="Bob Barker" logo="logo"> 
                    Made a solution that made my life easier. I'm very happy with the results. I would highly recommend this company.
                </FeedbackCard>
            </div>
        </section>
    )  
}    