import "./home.scss";
import BlockData from "src/components/BlockData";
import { Link } from "@material-ui/core";
//images
import CatLeftImage from "src/assets/images/home-cat_left.png";
import CatRightImage from "src/assets/images/home-cat_right.png";
import BgShineImage from "src/assets/images/bg-shine.png";
import HowItWorksImage from "src/assets/images/Illustration_How it works.min.svg";
import OurInvestmentsImages from "src/assets/images/Illustration_Our investments.min.svg";
import OurValuesImages from "src/assets/images/Illustration_Our values.min.svg";
import { useTreasuryBalance } from "src/hooks/useTreasuryBalance";

function Home() {
    const [loading, treasuryBalance] = useTreasuryBalance();

    return (
        <div className="container home">
            <img className="shine" src={CatLeftImage} alt="" />
            <img className="shine shine-right" src={CatRightImage} alt="" />
            <img className="shine-mobile" src={BgShineImage} alt="" />
            <section className="home__promo">
                <h1 className="title">Wonderland DAO</h1>
                <div className="subtitle">
                    <p className="subtitle-item">A collective that is motivated to empower crypto/web 3 protocols.</p>
                    <p className="subtitle-item">
                        Our treasury deploys capital at the earliest stages of projects and uses advanced treasury management strategies to maximize capital growth
                    </p>
                </div>
                <Link className="button button-gradient" href="https://app.wonderland.money">
                    Enter app
                </Link>
            </section>
            <section className="blocks-data">
                <BlockData
                    className="blocks-data__item"
                    loading={loading}
                    title={new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                    }).format(treasuryBalance)}
                    subTitle="Current DAO Treasury"
                />
            </section>
            <section className="promo-item">
                <div className="promo-item__img">
                    <img src={HowItWorksImage} alt="" />
                </div>
                <div className="promo-item__discription">
                    <h3>How It Works</h3>
                    <div className="promo-item__discription-sub">
                        Wonderland is a community of like minded individuals which direct a diversified treasury through a governance framework.
                    </div>

                    <Link className="button" href="how-works">
                        Read more
                    </Link>
                </div>
            </section>
            <section className="promo-item">
                <div className="promo-item__img">
                    <img src={OurInvestmentsImages} alt="" />
                </div>
                <div className="promo-item__discription">
                    <h3>Our Strengths</h3>
                    <div className="promo-item__discription-sub">Our deep crypto expertise helps us identify and seize opportunities early on.</div>
                    <Link className="button" href="our-strengths">
                        Read more
                    </Link>
                </div>
            </section>
            <section className="promo-item">
                <div className="promo-item__img">
                    <img src={OurValuesImages} alt="" />
                </div>
                <div className="promo-item__discription">
                    <h3>Our Investments</h3>
                    <div className="promo-item__discription-sub">
                        Our treasury invests into teams building new protocols, tokens and high return yield strategies across decentralized finance.
                    </div>
                    <Link className="button" href="our-investments">
                        Read more
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
