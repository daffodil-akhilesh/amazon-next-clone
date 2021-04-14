import Logo from "./Logo/Logo";
import DoubleText from "./DoubleText/DoubleText";
import SearchBar from "./SearchBar/SearchBar";
import classes from "./TopBar.module.css";
import SelectCountry from "./SelectCountry/SelectCountry";


const isLoggedIn = true;
const userDetails = {
  first_name: "Akhilesh",
  last_name: "Pandey",
  user_id: "0",
  location:"New Delhi 110075",
  itemsCount:"4"
};

const TopBar = ({}) => {
  return (
    <div className={classes.TopBar}>
      <Logo src="/amazonStr.png" link="/" isText text=".in" doStyle/>
      <DoubleText isIcon iType="locArrow" text1={`Deliver To ${userDetails.first_name}`} text2={`${userDetails.location}`}/>
      <SearchBar/>
      <SelectCountry />
      <DoubleText isIcon={false} text1={`Hello ${userDetails.first_name}`} text2={"Accounts & Lists"} />
      <DoubleText isIcon={false} text1={'Returns'} text2={"& Orders"}/>
      <Logo src={"/cart.png"} isText={false} link={"/cart"} width={32} height={32} userDetails={userDetails}/>
    </div>
  );
};

export default TopBar;
