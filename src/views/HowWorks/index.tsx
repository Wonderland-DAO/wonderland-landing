import "./how-works.scss";
import Description from "src/components/Description";
import DescWorkImage from "src/assets/images/desc-work.png";

const CARDS = [
    {
        title: "Purchase wMEMO",
        text: "To join the DAO, purchase wMEMO on the open market. You can find a trading pair on <a href='https://kyberswap.com/swap/avalanche/usdc-to-wmemo' target='_blank'>KyberSwap</a> on the Avalanche Blockchain.",
    },
    {
        title: "Revenue Stream",
        text: "To benefit from the DAO’s treasury performance, stake your wMEMO in the revenue share staking contract. wMEMO holders will periodically receive token streams.",
    },
    {
        title: "DAO Governance",
        text: "wMEMO holders can participate in Wonderland DAO governance. Active participants can voice their opinion and vote on capital allocations and Wonderland Improvement Proposals.",
    },
];

function HowWorks() {
    return (
        <div className="how-work container">
            <Description
                title="How It Works"
                textList={[
                    "Wonderland is a decentralized autonomous organization controlled by its governance token.",
                    "To participate in the DAO, users need to buy wMEMO tokens from the open market. These tokens can be used to vote on protocol proposals and direct the future of the project.",
                    "They can also be staked in a revenue sharing contract to benefit from the treasury performance.",
                ]}
                image={DescWorkImage}
            />
            {CARDS.map(({ title, text }, index) => (
                <div className="card">
                    <p className="card-number">{index + 1}</p>
                    <p className="card-title">{title}</p>
                    <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            ))}
        </div>
    );
}

export default HowWorks;
