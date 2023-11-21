import Image from "next/image";
import logo from "../../public/logo-dark.svg"
import homeIcon from '../../public/sidebar-icon/home-icon.svg'
import arrowRight from '../../public/sidebar-icon/arrow-drop-down-line.svg'
export default function Sidebar() {
    return (
        <nav id="sidebar">
            <div class="sidebar-header">
                <Image
                    src={logo}
                />
            </div>

            <ul class="list-unstyled components">
                <p>Menu</p>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <div>
                            <Image
                                src={homeIcon}
                            />
                            Encounter
                        </div>
                        <Image
                            src={arrowRight}
                        />
                    </a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <div>
                            <Image
                                src={homeIcon}
                            />
                            Encounter
                        </div>
                        <Image
                            src={arrowRight}
                        />
                    </a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        Pages
                    </a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                </li>
            </ul>
        </nav>
    )
}