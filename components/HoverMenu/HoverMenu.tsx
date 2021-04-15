import classes from './HoverMenu.module.css';
import HoverMenuSelect from "./HoverMenuSelect/HoverMenuSelect";
import HoverMenuLink from "./HoverMenuLink/HoverMenuLink";


let languages = [
    {title:"English - EN",value:"en"},
    {title:"Español - ES",value:"es"},
    {title:"Deutsch - DE",value:"du"},
    {title:"Português - PT",value:"pt"},
]

const HoverMenu = ({type})=>{
    return(
        <div className={classes.HoverMenu}>
            {
                type === "SelectCountry" && (
                    <div className={[classes.HoverMenuContent,classes.DisplayFlexColumn].join(" ")}>
                     <HoverMenuSelect data={languages} text={"Change Your Language"}/>
                     <HoverMenuLink title={"Change  Region/Country"} link={"/services/changeCountry"}/> 
                    </div>
                )
            }
            {
                type === "DoubleTextAcc" && (
                    <div className={[classes.HoverMenuContent,classes.DisplayFlexRow].join(" ")}>
                        {/* <HoverMenuPage/>
                        <HoverMenuPage/> */}
                    </div>
                )
            }
        </div>
    )
};
export default HoverMenu;