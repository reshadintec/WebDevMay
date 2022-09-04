export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">
        Site Name
        </a>
        <ul>
            <li>
                <a href="/pricing">Pricing</a>
                </li>
                <li>
                <a href="/pricing">About</a>
                </li>
                <li>
                <a href="/pricing">Contact</a>
            </li>
        </ul>
    </nav>
}