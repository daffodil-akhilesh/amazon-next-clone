import classes from './HoverMenu.module.css';



const HoverMenu = ({type})=>{
    return(
        <div className={classes.HoverMenu}>
            {
                type === "SelectCountry" && (
                    <div className={[classes.HoverMenuContent,classes.DisplayFlexColumn].join(" ")}>
                    {/* <HoverMenuSelect />
                    <HoverMenuLink /> */}
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