export default function AltButton({ children }: { children: React.ReactNode }) {
    return (
        <button className="border border-orange-500 text-orange-500 p-2 rounded-md">
            {children}
        </button>
    )
}   