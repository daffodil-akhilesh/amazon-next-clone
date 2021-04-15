import classes from "./SelectCountry.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import HoverMenu from "../../../HoverMenu/HoverMenu";
import { useSelector,useDispatch } from "react-redux";
import { DISPLAY_HOVER_MENU,HIDE_HOVER_MENU } from '../../../../redux/modules/hoverMenu';

let country = {
  india: "/flags/india.png",
  us: "/flags/us.png",
};

const SelectCountry = ({hasHover}) => {
  
  const show = useSelector((state)=>{
    return state.hoverMenu.show;
  });
  const dispatch = useDispatch();
  
  const onHover = ()=>{
    dispatch({
      type:DISPLAY_HOVER_MENU,
      parent:"SelectCountry"
    });
  }
  const onBlur = ()=>{
    setTimeout(()=>{
      dispatch({
        type:HIDE_HOVER_MENU,
        parent:"SelectCountry"
      });
    },3000)
  }

  return (
    <div className={classes.SelectCountry} onMouseEnter={onHover} onMouseLeave={onBlur} >
      <button>
        <div className={classes.CountryFlag}>
          <Image src={country["us"]} width={40} height={40}/>
        </div>
        <div>
          <FontAwesomeIcon icon={faSortDown} color="white" />
        </div>
      </button>
      {
        hasHover && show["SelectCountry"] && (
          <HoverMenu type={"SelectCountry"}/>
        )
      }
    </div>
  );
};

export default SelectCountry;
