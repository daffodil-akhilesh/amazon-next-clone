import classes from "./SelectCountry.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

let country = {
  india: "/flags/india.png",
  us: "/flags/us.png",
};

const SelectCountry = ({}) => {
  return (
    <div className={classes.SelectCountry}>
      <button>
        <div className={classes.CountryFlag}>
          <Image src={country["us"]} width={40} height={40}/>
        </div>
        <div>
          <FontAwesomeIcon icon={faSortDown} color="white" />
        </div>
      </button>
    </div>
  );
};

export default SelectCountry;
