import LoginPostCard from '../../LoginPage/LoginPostCard/LoginPostCard';
import classes from './UserProfileProductItem.module.css';

export interface UserProfileProductItemProps {
    width: string,
    height: string,
    imgPath: string,
    title: string,
    imgHref?: string,
}

const UserProfileProductItem: React.FC<UserProfileProductItemProps> = ({ width, height, imgPath, title, imgHref }) => {
    return (
        <div>
            <LoginPostCard width={width} height={height} imgH={"70%"} imgW={"100%"} imagePath={imgPath} imgHref={imgHref}>
                <p style={{ textAlign: "center", color: "#111", fontWeight: 500 }}>{title}</p>
            </LoginPostCard>
        </div>
    );
}

export default UserProfileProductItem;