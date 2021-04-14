import Image from "next/image";
import classes from "./ProfileImg";

const ProfileImg = ({ userImg, width, height }) => {
  return (
    <div className={classes.ProfileImg}>
      <Image
        src={userImg ? userImg : "/profile/default.jpeg"}
        width={width}
        height={height}
      />
    </div>
  );
};
export default ProfileImg;
