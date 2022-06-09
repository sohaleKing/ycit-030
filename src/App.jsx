import { Link, Route, Routes } from "react-router-dom"
import { About } from "./components/About"
import { Cart } from "./components/Cart"
import { navbarItems } from "./states/navItems"
import { Products } from "./components/Products"
import React from "react"
import { CustomLink } from "./router-components/CustomLink"
import { AboutCarrier } from "./components/AboutCarrier"
import { AboutContact } from "./components/AboutContact"
import { AboutTeam } from "./components/AboutTeam"

// Assignment #1

// Refer to https://reactrouter.com/docs/en/v6/components

// Incorporate one of the following API endpoints from the doc mentioned above:

// some suggestions:  Outlet, useLocation, useNavigate, useResolvedPath

export function App() {
    const theNavItems = navbarItems.map((el) => {
        return (
            <li key={el.key}>
                <CustomLink to={el.name}>{el.label}</CustomLink>
                {/* match to see if the link is active different CSS */}
            </li>
        )
    })

    return (
        <React.Fragment>
            <nav>
                <span>Assignment1 - Soheyl Rahgozar</span>
                <ul>{theNavItems}</ul>
            </nav>
            <div id="app-body">
                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="products" element={<Products />} />
                    <Route path="/about" element={<About />}>
                        <Route path="carrier" element={<AboutCarrier />} />
                        <Route path="contact" element={<AboutContact />} />
                        <Route path="team" element={<AboutTeam />} />
                    </Route>
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </div>
        </React.Fragment>
    )
}
