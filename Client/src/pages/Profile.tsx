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
            <div className="profile__post-content">
                <p className="profile__post-content-title">
                    Anyone studying in the University of Winnipeg?
                </p>
                <p className="profile__post-content-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a 
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap sa
                    electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
            <div className="post-reactions">POST REACTIONS</div>
        </div>
        <div className="divider" style={{margin: "1rem 0"}}></div>
    </div>
}

export default Profile;