import Link from 'next/link'

const routeList = [
    {
        id: 0,
        name: "Home",
        path: "/"
    },
    {
        id: 1,
        name: "Services",
        path: "services"
    },
    {
        id: 2,
        name: "About Us",
        path: "about-us"
    },
    {
        id: 3,
        name: "Contact",
        path: "contact"
    }
]

const Nav = () => {

    return (
        <nav>
            <ul>
                {routeList.map((route) => 
                <li key={route.id}><Link href={route.path}>{route.name}</Link></li>
                )}
            </ul>
        </nav>
    )
}

export default Nav