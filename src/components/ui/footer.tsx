import MainButton from "./main-button"

export default function Footer() {
    const inputClass = "p-2 bg-gray-50 border border-gray-300 rounded-md"

    return (
        <footer className="bg-gray-800 text-gray-50">
            <h2 className="text-4xl font-bold mb-8">Logo</h2>
            <div className="flex gap-8">
                <div className="w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Let's work together!</h2>
                    <form className="flex flex-col gap-4" action="">
                        <input className={inputClass} type="text" placeholder="Name" />
                        <input className={inputClass} type="email" placeholder="Email" />
                        <textarea className={inputClass} rows={5} placeholder="Message" />
                        <MainButton>Get in touch</MainButton>
                    </form>
                </div>
                <div className="w-1/2">
                    <p className="text-lg">I'm always looking for new opportunities. If you'd like to get in touch, please use the form below.</p>
                </div>
            </div>   
        </footer>
    )
}