import { Outlet } from "react-router"
import { aboutNavbarItems } from "../states/aboutNavItems"
import { Link } from "react-router-dom"

export function About() {
    //about child navbar items
    const aboutSubNavItems = aboutNavbarItems.map((el) => {
        return (
            <li key={el.key}>
                <Link to={el.name}>{el.label}</Link>
            </li>
        )
    })
    return (
        <div>
            <h1>About</h1>
            <ul>{aboutSubNavItems}</ul>
            {/* This element will render either <AboutCarrier> when the URL is
            "/carrier", <AboutContact> at "/contact", <AboutTeam> at "/team",or null if it is "/"
        */}
            <Outlet />
        </div>
    )
}
