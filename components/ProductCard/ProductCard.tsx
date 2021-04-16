import classes from "./ProductCard.module.css";
import LoginPostCard from "../LoginPage/LoginPostCard/LoginPostCard";

export interface ProductCardProps {
    product: object
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={classes.ProductCard}>
            <LoginPostCard width="100%" height="100%" imagePath={"/profile.png"} imgH={"100%"} imgW={"100%"}>
                <div className={classes.ProductTitle}>
                    <p>{product.title }</p>
                </div>
                <div className={classes.ProductPrice}>
                    <p>{`Rs. ${product.price}`}</p>
                </div>
                <div className={classes.ProductButton}>
                    <button>Buy</button>
                </div>
            </LoginPostCard>
        </div>
    );
}

export default ProductCard;