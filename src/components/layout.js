import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

import "./components.css"
import { colors } from "@material-ui/core"

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="layout-body">
                <div>{children}</div>
                <footer className="footer" style={{backgroundColor:colors.blue}}>
                <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Layout