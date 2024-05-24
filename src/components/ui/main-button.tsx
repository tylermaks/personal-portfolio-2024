export default function MainButton({ children }: { children: React.ReactNode }) {
    return (
        <button className="bg-orange-500 text-white p-2 rounded-md">
            {children}
        </button>
    )
}