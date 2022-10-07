import "./block-data.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

interface BlockDataProps {
    title: string;
    subTitle: string;
    className?: string;
    loading?: boolean;
}

function BlockData({ title, subTitle, className, loading = false }: BlockDataProps) {
    return (
        <div className={`block-data ${className}`}>
            {loading ? (
                <div className="loader">
                    <CircularProgress size={48} color="inherit" />
                </div>
            ) : (
                <h3 className="block-data__title">{title}</h3>
            )}
            <div className="block-data__subtitle">{subTitle}</div>
        </div>
    );
}

export default BlockData;
