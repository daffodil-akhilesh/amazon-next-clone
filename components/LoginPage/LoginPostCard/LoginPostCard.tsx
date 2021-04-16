import classes from "./LoginPostCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router"

const LoginPostCard = ({ width, height, children, imagePath, imgH, imgW, imgHref }) => {
    const router = useRouter();
    const goToHome = () => {
        router.replace(imgHref);
    }
    return (
        <div style={{ width: width, height: height }} className={classes.LoginPostCard} >
            <div className={classes.LoginPostCardImage} onClick={goToHome} >
                <Image src={imagePath} width={imgW} height={imgH} />
            </div>
            <div className={classes.LoginPostCardContent}>
                {children}
            </div>
        </div>
    )
};

export default LoginPostCard;