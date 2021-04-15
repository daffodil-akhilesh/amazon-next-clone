import Link from "next/link";
import Image from "next/image";
import classes from "./Logo.module.css";

const Logo = ({ src, link, text, isText, width, height, doStyle,userDetails }) => {
  return (
    <div className={doStyle ? classes.Logo : classes.AlignCenter}>
      <Link href={link}>
        <a>
          <Image
            src={src}
            width={width ? width : 100}
            height={height ? width : 30}
          />
          {isText && <span>{text}</span>}
        </a>
      </Link>
      {!doStyle && (
        <div className={classes.CartValue}>
          <p>{userDetails.itemsCount}</p>
        </div>
      )}
    </div>
  );
};

export default Logo;
