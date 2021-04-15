import Image from "next/image";
import classes from "./DoubleText.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import HoverMenu from "../../../HoverMenu/HoverMenu"; 
import { useSelector,useDispatch } from "react-redux";
import { DISPLAY_HOVER_MENU,HIDE_HOVER_MENU } from '../../../../redux/modules/hoverMenu';

let iconType = {
    "locArrow":faLocationArrow
}

const DoubleText = ({ text1, text2, isIcon,iType,hasHover}) => {

  const show = useSelector((state)=>{
    return state.hoverMenu.show;
  });
  const dispatch = useDispatch();
  
  const onHover = ()=>{
    dispatch({
      type:DISPLAY_HOVER_MENU,
      parent:"DoubleTextAcc"
    });
  }
  const onBlur = ()=>{
    dispatch({
      type:HIDE_HOVER_MENU,
      parent:"DoubleTextAcc"
    });
  }

  return (
    <div className={classes.DoubleText} onMouseEnter={hasHover?onHover:null} onMouseLeave={hasHover?onBlur:null}>
      {isIcon && (
        <div className={classes.DoubleTextIcon}>
          <FontAwesomeIcon icon={iconType[iType]} color="white" />
        </div>
      )}
      <div className={classes.DoubleTextContent}>
        <div className={classes.First}>
          <p>{text1}</p>
        </div>
        <div className={classes.Second}>
          <p>{text2}</p>
        </div>
      </div>
        {
          hasHover && show["DoubleTextAcc"] && (
            <HoverMenu />
          )
        }
    </div>
  );
};

export default DoubleText;
