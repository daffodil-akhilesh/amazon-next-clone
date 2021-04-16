import classes from "./UserProfile.module.css";
import LoginPagePostCard from "../LoginPage/LoginPostCard/LoginPostCard";
import { useSelector, useDispatch } from 'react-redux';
import { PropsWithChildren } from "react";
import { getUserName } from "../../utils";

interface Props extends PropsWithChildren<any> {
    width: number,
    height: number,
    children?: Array<object>
}
const defaultProps: Props = {
    width: 200,
    height: 600
}

const UserProfile: React.FC<Props> = ({ width, height, children }) => {
    const userDetails = useSelector((state) => {
        return state.userDetails;
    })


    return (
        <div className={classes.UserProfile}>
            <LoginPagePostCard width={width} height={height} imagePath={"/profile.png"} imgH={140} imgW={140} imgHref={"/user/profile"}>
                <hr style={{ width: "90%", opacity: "0.27" }} />
                <div>
                    <div className={classes.ProfileName}>
                        {"Hi, "}
                        {userDetails.email ? getUserName(userDetails.email) : "Friend!"}
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p>{"Customer since 2020"}</p>
                    </div>
                    <hr style={{ width: "90%", opacity: "0.27" }} />
                    {children}
                </div>
            </LoginPagePostCard>
        </div>
    )
};

UserProfile.defaultProps = defaultProps;

export default UserProfile;