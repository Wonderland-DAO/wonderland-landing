import "./our-values.scss";
import Description from "src/components/Description";
import DescValuesImage from "src/assets/images/desc-values.png";
import StrategiesImage from "src/assets/images/our-values/strategies.svg";
import TimeImage from "src/assets/images/our-values/time.svg";
import ManagementImaage from "src/assets/images/our-values/management.svg";
import PartnersImage from "src/assets/images/our-values/partners.svg";
import TimeBackImage from "src/assets/images/time-back.png";

const CARDS = [
    {
        title: "High Yield Strategies",
        textList: [
            "Using our deep crypto knowledge and strong network, unique high yield strategies are being built specifically to the treasury’s needs.",
            "Consistently outperforming similar existing strategies.",
        ],
        img: StrategiesImage,
    },
    {
        title: "Early Stage Opportunities",
        textList: ["The DAO is actively managing exposure to early stage protocols.", "The deal flow is assessed by the community on our governance forum."],
        img: TimeImage,
    },
    {
        title: "Treasury Management",
        textList: ["Active token management focuses on trading digital assets by analyzing market trends."],
        img: ManagementImaage,
    },
    {
        title: "Strong Ecosystem Partners",
        textList: ["Wonderland DAO seeks out partnerships and collaborations to create novel high performing strategies."],
        img: PartnersImage,
    },
];

function OurValues() {
    return (
        <div className="out-values container">
            <Description
                title="Our Strengths"
                textList={[
                    "Wonderland DAO’s investment thesis is based on four components. Together they build a robust treasury strategy ranging from high-yield/low-risk stablecoin positions, to early stage token investments.",
                    "The DAO actively funds and builds new projects, trades top defi tokens as well as major cryptocurrencies.",
                ]}
                image={DescValuesImage}
            />
            <div className="values-list">
                {CARDS.map(({ title, textList, img }, index) => (
                    <div className="list-item" key={index}>
                        <img className="item-bg" src={TimeBackImage} alt="" />
                        <div className="item-content">
                            <div className="item-img">
                                <img className="item-icon" src={img} alt="time" />
                            </div>
                            <h2 className="item-title">{title}</h2>
                            {textList.map((text, index) => (
                                <p className="item-desc" key={index}>
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurValues;
