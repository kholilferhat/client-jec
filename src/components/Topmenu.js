import Image from "next/image";
import Hamburger from '../../public/top-nav-icon/hamburger-icon.svg'
import Magnifier from '../../public/top-nav-icon/magnify.svg'
import SearchIcon from '../../public/top-nav-icon/bx-bell.svg'
import fullscreenIcon from '../../public/top-nav-icon/bx-fullscreen.svg'
import darkTheme from '../../public/top-nav-icon/bx-moon.svg'
import profileImage from '../../public/top-nav-icon/profile-image.png'

export default function Topmenu() {

    return (

        <nav id="topMenu">
            <div className="left-nav">
                <Image
                    src={Hamburger}
                />
                <div className="searchBox">
                    <Image
                        src={Magnifier}
                    />
                    <input
                        placeholder="Search..."
                    >
                    </input>
                </div>
                <Image
                    src={SearchIcon}
                />
            </div>
            <div className="right-nav">
                <Image
                    src={fullscreenIcon}
                />
                <Image
                    src={darkTheme}
                />
                <div className="ipAddress">
                    <p>your ip address is</p>
                    {/* api.ipify.org  */}
                    <span>127.0.0.1</span>
                </div>
                <div className="profileContainer">
                    <Image
                        src={profileImage}
                        className="profileImage"
                    />
                    <div className="userName">
                        <span>Budi Arifianto</span>
                        <p>IT Administrator</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

