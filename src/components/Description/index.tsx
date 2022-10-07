import "./description.scss";

interface DescriptionProps {
    title: string;
    textList: string[];
    image: string;
}

function Description({ title, textList, image }: DescriptionProps) {
    return (
        <div className="description">
            <div className="wrap">
                <h3 className="description-title">{title}</h3>
                {textList.map((text, index) => (
                    <p key={index} className="description-subtitle">
                        {text}
                    </p>
                ))}
            </div>
            <img className="description-img" src={image} alt="" />
        </div>
    );
}

export default Description;
