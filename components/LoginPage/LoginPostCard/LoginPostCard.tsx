import classes from "./LoginPostCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router"
import React, { PropsWithChildren } from "react";

interface LoginPostCardProps extends PropsWithChildren<any> {
    width: string,
    height: string,
    children?: Array<object> | JSX.Element,
    imagePath?: string,
    imgH: string,
    imgW: string,
    imgHref?: string
}

const defaultProps: LoginPostCardProps = {
    width: "100%",
    height: "100%",
    imgH: "100%",
    imgW: "100%"
}

const LoginPostCard: React.FC<LoginPostCardProps> = ({ width, height, children, imagePath, imgH, imgW, imgHref }) => {
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

LoginPostCard.defaultProps = defaultProps;

export default LoginPostCard;