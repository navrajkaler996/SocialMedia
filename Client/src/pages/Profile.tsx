import Winnipeg from "../assets/Winnipeg.jpeg";

const Profile: React.FC = () => {

    return <div className="profile">
        <div className="profile__post">
            <div className="profile__post-info">
                <img src={Winnipeg} className="profile__post-info-dp"/>
                <div className="profile__post-info-data">
                    <span className="profile__post-info-data-group">Winnipeg</span>
                    <span className="profile__post-info-data-postedAt">2 days ago</span>
                </div>
            </div>
            <div className="profile__post-content">POST CONTENT</div>
            <div className="post-reactions">POST REACTIONS</div>
        </div>
        <div className="divider" style={{margin: "1rem 0"}}></div>
    </div>
}

export default Profile;