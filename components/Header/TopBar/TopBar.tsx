import Logo from "./Logo/Logo";
import DoubleText from "./DoubleText/DoubleText";
import SearchBar from "./SearchBar/SearchBar";
import classes from "./TopBar.module.css";
import SelectCountry from "./SelectCountry/SelectCountry";
import { useDispatch, useSelector } from "react-redux";

const isLoggedIn = true;

const TopBar = ({}) => {
  const userDetails = useSelector((state) => {
    return state.userDetails;
  });
  return (
    <div className={classes.TopBar}>
      <Logo src="/amazonStr.png" link="/" isText text=".in" doStyle userDetails={null} width={null} height={null}/>
      <DoubleText
        hasHover={false}
        isIcon
        iType="locArrow"
        text1={`Deliver To ${userDetails.firstName ?? ""}`}
        text2={`${userDetails.location ?? "India"}`}
      />
      <SearchBar />
      <SelectCountry hasHover/>
      <DoubleText
        hasHover
        isIcon={false}
        text1={`Hello ${userDetails.firstName ?? "Sign In"}`}
        text2={"Accounts & Lists"}
        iType={null}
      />
      <DoubleText hasHover={false} isIcon={false} text1={"Returns"} text2={"& Orders"} iType={null}/>
      <Logo
        src={"/cart.png"}
        isText={false}
        link={"/cart"}
        width={32}
        height={32}
        userDetails={userDetails}
        doStyle={false}
        text={null}
      />
    </div>
  );
};

export default TopBar;
