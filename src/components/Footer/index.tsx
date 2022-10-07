import "./footer.scss";
import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as Twitter } from "src/assets/icons/twitter.svg";
import { ReactComponent as Discord } from "src/assets/icons/discord.svg";
import { ReactComponent as Medium } from "src/assets/icons/medium.svg";
import { ReactComponent as Reddit } from "src/assets/icons/reddit.svg";

function Footer() {
    return (
        <div className="footer">
            <Link href="https://twitter.com/wonderland_fi" target="_blank">
                <SvgIcon color="primary" component={Twitter} />
            </Link>

            <Link href="https://discord.gg/thDHseaHUt" target="_blank">
                <SvgIcon color="primary" component={Discord} />
            </Link>

            <Link href="https://medium.com/wonderland-news" target="_blank">
                <SvgIcon color="primary" component={Medium} />
            </Link>

            <Link href="https://www.reddit.com/r/WonderlandOfficial/" target="_blank">
                <SvgIcon color="primary" component={Reddit} />
            </Link>
        </div>
    );
}

export default Footer;
