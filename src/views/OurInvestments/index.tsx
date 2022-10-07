import "./our-investments.scss";
import Description from "src/components/Description";
import DescInvestmentsImage from "src/assets/images/desc-investments.png";
import InvestBg1 from "src/assets/images/invest-bg-1.png";
import InvestBg2 from "src/assets/images/invest-bg-2.png";

const CARDS = [
    {
        title: "Betswap.gg",
        textList: [
            "Betswap.gg is a truly decentralized and permissionless peer-to-peer matching engine of bets.",
            "This decentralized sports trading exchange connects makers and takers globally to allow bets on all sporting and e-sporting events. ",
        ],
    },
    {
        title: "Liquid Staking Product",
        textList: [
            "Wonderland funded its own liquid staking solution for the Avalanche and Fantom network.",
            "The team plans to build and launch the product on testnet in February 2022, with a targeted Mainnet deployment in March 2022.",
        ],
    },
    {
        title: "Gaming",
        textList: ["The DAO is aiming to position itself in the quickly growing play to earn gaming industry."],
    },
    {
        title: "NFT",
        textList: [
            "In 2021, users have sent at least $44.2 billion worth of cryptocurrency to ERC-721 and ERC-1155 contracts.",
            "Wonderland looks to actively participate and invest in NFT projects, including infrastructure.",
        ],
    },
    {
        title: "DeFi",
        textList: ["The DAO is constantly looking for new opportunities in defi.", "Actively building new money legos and taking advantage of new vault opportunities."],
    },
    {
        title: "Layer 1 / Layer 2 Infrastructure",
        textList: ["Investing in the foundation of L1 ecosystem and promising new L2 solutions."],
    },
];

function OurInvestments() {
    return (
        <div className="our-investments container">
            <Description
                title="Our Investments"
                textList={[
                    "The investments described on this page are not representative of all investments managed by the DAO.",
                    "Excluded from the list are investments for which the issuer has not provided permission for the DAO to disclose publicly.",
                ]}
                image={DescInvestmentsImage}
            />
            <div className="invest-list">
                {CARDS.map(({ title, textList }, index) => (
                    <div className="invest-list-item" key={index}>
                        <div className="invest-list-item-content">
                            <img className="invest-list-item-bg-1" src={InvestBg1} alt="" />
                            <img className="invest-list-item-bg-2" src={InvestBg2} alt="" />
                            <h2 className="invest-list-item-title">{title}</h2>
                            <div className="invest-list-item-desc">
                                {textList.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurInvestments;
