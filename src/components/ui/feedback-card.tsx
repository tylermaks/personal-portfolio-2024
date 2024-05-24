
interface FeedbackCardProps {
    name: string;
    children: React.ReactNode;
    // image: string;
    logo: string;
}

export default function FeedbackCard({
    name,
    children,
    // image,
    logo
}: FeedbackCardProps) { 

    return(
        <div className="p-4 w-1/3 shadow-lg rounded-md flex flex-col gap-6 max-h-80">
            <div>
                <span className="text-sm">{logo}</span>
            </div>
            <div className="flex flex-col gap-2 bg-blue-300 text-gray-50 p-4 rounded-md">
                <p className="font-semibold italic w-2/3">{children}</p>
                <h3 className="text-sm">- {name}</h3>
            </div>
        </div>
    )
}
