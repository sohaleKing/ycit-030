import { Link, Route, Routes } from "react-router-dom"
import { About } from "./components/About"
import { Cart } from "./components/Cart"
import { navbarItems } from "./states/navItems"
import { Products } from "./components/Products"
import React from "react"

// Assignment #1

// Refer to https://reactrouter.com/docs/en/v6/components

// Incorporate one of the following API endpoints from the doc mentioned above:

// some suggestions:  Outlet, useLocation, useNavigate, useResolvedPath

export function App() {
    const theNavItems = navbarItems.map((el) => {
        return (
            <li key={el.key}>
                <Link to={el.name}>{el.label}</Link>
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
                    <Route path="about" element={<About />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </div>
        </React.Fragment>
    )
}
