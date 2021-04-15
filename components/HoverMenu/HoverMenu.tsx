import classes from './HoverMenu.module.css';
import HoverMenuSelect from "./HoverMenuSelect/HoverMenuSelect";
import HoverMenuLink from "./HoverMenuLink/HoverMenuLink";
import HoverMenuPage from "./HoverMenuPage/HoverMenuPage";
import HoverMenuButton from './HoverMenuButton/HoverMenuButtom';
import { useRouter } from "next/router";

let isLoggedIn = false;

let languages = [
    { title: "English - EN", value: "en" },
    { title: "Español - ES", value: "es" },
    { title: "Deutsch - DE", value: "du" },
    { title: "Português - PT", value: "pt" },
]

let data1 = [
    {
        title: 'Create List',
        link: "/user/create-list"
    },
    {
        title: "Your Wishlist",
        link: "/user/wishlist"
    }
]
let data2 = [
    {
        title: 'Account',
        link: "/user/account"
    },
    {
        title: 'Orders',
        link: '/user/orders'
    },
    {
        title: 'Recommendations',
        link: '/user/recommendations'
    }
    ,
    {
        title: ' Music Library',
        link: "/user/musiclib"
    }
]

const HoverMenu = ({ type }) => {
    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
    }
    return (
        <div className={classes.HoverMenu}>
            {
                type === "SelectCountry" && (
                    <div className={[classes.HoverMenuContent, classes.DisplayFlexColumn].join(" ")}>
                        <HoverMenuSelect data={languages} text={"Change Your Language"} />
                        <HoverMenuLink title={"Change  Region/Country"} link={"/services/changeCountry"} />
                    </div>
                )
            }
            {
                type === "DoubleTextAcc" && (
                    <div>
                        {
                            !isLoggedIn && <HoverMenuButton link={"/auth/signUp"} text={"Sign In"} onClick={onClick} />
                        }
                        <hr />
                        <div className={[classes.HoverMenuContent, classes.DisplayFlexRow].join(" ")}>
                            <HoverMenuPage pageTitle={"Your List"} data={data1} />
                            <hr style={{ height: "180px", marginRight: "20px" }} />
                            <HoverMenuPage pageTitle={"Your Account"} data={data2} />
                        </div>
                    </div>
                )
            }
        </div>
    )
};
export default HoverMenu;