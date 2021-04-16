import classes from "./ProductSlider.module.css";
import Slider from 'react-slick';
import ProductCard from "../ProductCard/ProductCard";

export interface ProductSliderProps {
    products: Array<object>,
    title: string,
    autoplay: boolean
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products, title, autoplay }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: 2000
    }

    return (
        <div className={classes.ProductSlider}>
            <div>
                <h3>{title}</h3>
            </div>
            <Slider {...settings}>
                {
                    products && products.map((product) => {
                        return (
                            <div>
                                <ProductCard product={product} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default ProductSlider;