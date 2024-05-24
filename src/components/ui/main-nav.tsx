export default function MainNav() { 
    const navItems = ["About", "Projects", "Contact"]

    return( 
        <nav className="flex py-4 justify-between items-center absolute w-full text-gray-50">
            <h1>Logo</h1>
            <ul className="flex gap-8">
                {navItems.map(item => { 
                    return(
                        <li key={item} className="cursor-pointer text-sm">
                            {/* might need to include Next Links */}
                            {item}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}