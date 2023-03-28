import React from 'react'
import './Navbar.scss'
import { GiReceiveMoney } from 'react-icons/gi'
import { AiFillDashboard } from 'react-icons/ai'
import { RiAuctionFill } from 'react-icons/ri'
import Team from '../../pages/App/team/Team.js'

const Navbar = ({ tab, setTab }) => {

    return (
        <div className="navbar">
            <button className={tab === "chits" ? "selected" : ""} onClick={() => setTab("chits")}>
                <div className={"button-container"}>
                    <GiReceiveMoney />Chits
                </div>
            </button>
            <button className={tab === "dashboard" ? "selected" : ""} onClick={() => setTab("dashboard")}>
                <div className={"button-container"}>
                    <AiFillDashboard />Dashboard
                </div>
            </button>
            <button className={tab === "auction" ? "selected" : ""} onClick={() => setTab("auction")}>
                <div className={"button-container"}>
                    <RiAuctionFill />Auctions
                </div>
            </button>
            <button className={tab === "team" ? "selected" : ""} onClick={() => setTab("team")}>
                TEAM
                <div className={"button-container"}>
                    <Team/>
                </div>
            </button>
        </div>
    )
}

export default Navbar
