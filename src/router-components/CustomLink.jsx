import { Link, useMatch, useResolvedPath } from "react-router-dom"

export function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })

    // if (match?.pathname === "/about") props.showMenu = true
    return (
        <div>
            <Link
                style={{
                    textDecoration: match ? "underline" : "none",
                    fontWeight: match ? "bold" : "normal",
                    color: match ? "Red" : "Black",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    )
}
