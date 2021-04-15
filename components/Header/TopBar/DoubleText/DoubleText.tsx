import Image from "next/image";
import classes from "./DoubleText.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

let iconType = {
    "locArrow":faLocationArrow
}

const DoubleText = ({ text1, text2, isIcon,iType }) => {
  return (
    <div className={classes.DoubleText}>
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
    </div>
  );
};

export default DoubleText;
