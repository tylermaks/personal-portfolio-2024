interface CardProps {
    title: string;
    children: React.ReactNode;
}
  
export default function Card({ title, children }: CardProps) {
return (
    <div className="bg-gray-100 p-8 rounded-md  flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-gray-300 mb-4">
            {/* Add icons later */}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="text-sm text-gray-700 text-center w-3/4">
            {children}
        </div>
    </div>
);
}