import ProfilePhotoDemo from "../assets/profile_pic_demo.png";
import DMSymbol from "../assets/DM_symbol.svg";

interface HeaderProps{

}

const Header: React.FC = (props: HeaderProps) => {

    return <div className="header">
        <img src={DMSymbol} alt="" className="header__dm-symbol" />
        <img src={ProfilePhotoDemo} alt="profile_photo" className="header__profile-photo align-horizontal-center-1" />

    </div>

}

export default Header;