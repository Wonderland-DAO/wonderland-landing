import "./header.scss";
import { NavLink } from "react-router-dom";
import { Link } from "@material-ui/core";
import Logo from "src/assets/images/logo.svg";
import classNames from "classnames";
import { useCallback, useState } from "react";

function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const checkPage = useCallback((location: any, page: string): boolean => {
        const currentPath = location.pathname.replace("/", "");
        if (currentPath.indexOf("how-works") >= 0 && page === "how-works") {
            return true;
        }
        if (currentPath.indexOf("our-strengths") >= 0 && page === "our-strengths") {
            return true;
        }
        if (currentPath.indexOf("our-investments") >= 0 && page === "our-investments") {
            return true;
        }
        return false;
    }, []);

    const toggleMobileMenu = useCallback(
        (type?: string) => {
            if (window.innerWidth < 1060) {
                if (type === "close") {
                    setMobileMenu(false);
                } else {
                    setMobileMenu(!mobileMenu);
                    let html = document.getElementsByTagName("html")[0];
                    if (mobileMenu) {
                        html.style.overflowY = "hidden";
                    } else {
                        //@ts-ignore
                        html.style.overflowY = null;
                    }
                }
            }
            return false;
        },
        [window, mobileMenu],
    );

    return (
        <div className="header">
            <Link className="logo" href="/">
                <img onClick={() => toggleMobileMenu("close")} src={Logo} alt="logo" />
            </Link>
            <div className={classNames("nav-wrap", { "nav-mobile": mobileMenu })}>
                <div className="nav">
                    <Link color="inherit" underline="none" className="nav-link active" href="https://app.wonderland.money" target="_blank">
                        <span>Enter App</span>
                    </Link>
                    <Link color="inherit" underline="none" className="nav-link" href="https://www.wonderlandforum.xyz" target="_blank">
                        <span>Governance Forum</span>
                    </Link>
                    <Link color="inherit" underline="none" className="nav-link" href="https://snapshot.org/#/bestfork.eth" target="_blank">
                        <span>Governance Voting</span>
                    </Link>
                    <Link
                        component={NavLink}
                        className="nav-link"
                        color="inherit"
                        underline="none"
                        to="how-works"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "how-works");
                        }}
                    >
                        <span onClick={() => toggleMobileMenu()}>How It Works</span>
                    </Link>
                    <Link
                        component={NavLink}
                        className="nav-link"
                        color="inherit"
                        to="our-strengths"
                        underline="none"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "our-strengths");
                        }}
                    >
                        <span onClick={() => toggleMobileMenu()}>Our Strengths</span>
                    </Link>
                    <Link
                        component={NavLink}
                        className="nav-link"
                        color="inherit"
                        to="our-investments"
                        underline="none"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "our-investments");
                        }}
                    >
                        <span onClick={() => toggleMobileMenu()}>Our Investments</span>
                    </Link>
                </div>
            </div>

            <div onClick={() => toggleMobileMenu()} className={classNames("burger", { "burger-active": mobileMenu })}>
                <span className="burger__line" />
            </div>
        </div>
    );
}

export default Header;
