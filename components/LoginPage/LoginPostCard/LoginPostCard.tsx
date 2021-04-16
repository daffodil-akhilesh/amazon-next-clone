import classes from "./LoginPostCard.module.css";
import Image from "next/image";

const LoginPostCard = ({ width, height, children, imagePath, imgH, imgW }) => {
    return (
        <div style={{ width: width, height: height }} className={classes.LoginPostCard} >
            <div className={classes.LoginPostCardImage}>
                <Image src={imagePath} width={imgW} height={imgH} />
            </div>
            <div className={classes.LoginPostCardContent}>
                {children}
            </div>
        </div>
    )
};

export default LoginPostCard;