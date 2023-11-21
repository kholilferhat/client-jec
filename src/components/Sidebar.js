'use client'
import Image from "next/image";
import logo from "../../public/logo-dark.svg"
import homeIcon from '../../public/sidebar-icon/home-icon.svg'
import inpatientIcon from '../../public/sidebar-icon/category-icon.svg'
import layout from '../../public/sidebar-icon/layout.svg'
import arrowRight from '../../public/sidebar-icon/arrow-drop-down-line.svg'
import { useState } from "react";
export default function Sidebar() {

    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <Image
                    src={logo}
                />
            </div>

            <ul className="list-unstyled components">
                <p>MENU</p>
                <li className={activeMenu === 0 ? "active" : ""} >
                    <a href="#"
                        className="dropdown-toggle"
                        onClick={() => handleMenuClick(0)}
                    >
                        <div>
                            <Image
                                src={homeIcon}
                            />
                            Encounter
                        </div>
                        <Image
                            src={arrowRight}
                            className={activeMenu === 0 ? "arrowDown" : ""}
                        />
                    </a>
                    <ul
                        className={`list-unstyled ${activeMenu === 0 ? "show" : "collapse"
                            }`}
                        id="homeSubmenu">
                        <li>
                            <a href="#"><span>-</span> Registration</a>
                        </li>
                        <li>
                            <a href="#"><span>-</span> Appointment</a>
                        </li>
                        <li>
                            <a href="#"><span>-</span> Reminder</a>
                        </li>
                        <li>
                            <a href="#"><span>-</span> Crypto</a>
                        </li>
                        <li>
                            <a href="#"><span>-</span> Projects</a>
                        </li>
                        <li>
                            <a href="#"><span>-</span> NFT</a>
                        </li>
                    </ul>
                </li>
                <li className={activeMenu === 1 ? "active" : ""} >
                    <a href="#"
                        className="dropdown-toggle"
                        onClick={() => handleMenuClick(1)}
                    >
                        <div>
                            <Image
                                src={inpatientIcon}
                            />
                            Inpatient
                        </div>
                        <Image
                            src={arrowRight}
                            className={activeMenu === 1 ? "arrowDown" : ""}
                        />
                    </a>
                    <ul
                        className={`list-unstyled ${activeMenu === 1 ? "show" : "collapse"
                            }`}
                        id="homeSubmenu">
                        <li>
                            <a href="#"><span>-</span> Menu 1</a>
                        </li>
                        <li>
                            <a href="#"><span>-</span> Menu 2</a>
                        </li>
                        <li>
                            <a href="#"><span>-</span> Menu 3</a>
                        </li>
                    </ul>
                </li>
                <li className={activeMenu === 2 ? "active" : ""} >
                    <a href="#"
                        className="dropdown-toggle"
                        onClick={() => handleMenuClick(2)}
                    >
                        <div>
                            <Image
                                src={layout}
                            />
                            Layouts
                        </div>
                        <Image
                            src={arrowRight}
                            className={activeMenu === 2 ? "arrowDown" : ""}
                        />
                    </a>
                    <ul
                        className={`list-unstyled ${activeMenu === 2 ? "show" : "collapse"
                            }`}
                        id="homeSubmenu">
                        <li>
                            <a href="#"><span>-</span>Menu 1</a>
                        </li>
                        <li>
                            <a href="#"><span>-</span>Menu 2</a>
                        </li>
                        <li>
                            <a href="#"><span>-</span>Menu 3</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}