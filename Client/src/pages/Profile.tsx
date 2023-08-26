//image imports
import Winnipeg from "../assets/Winnipeg.jpeg";
import LikeButton from "../assets/like.svg";
import DislikeButton from "../assets/dislike.svg";
import CommentButton from "../assets/comment.svg";
import ShareButton from "../assets/share.svg";
import MunnaBhaiya from "../assets/munna-bhaiya.jpg";

import ProfileData from "../data/ProfileData";
import CreatePost from "../components/CreatePost";
import { useRef } from "react";

interface postType {
    type: string ,
    text: string,
    group: string,
    postedAt: string,
    title: string
}

const Profile: React.FC = () => {

    //Function filter the type of post.
    //This function returns the JSX of the filter post.
    const getPostContent = (post: postType) => {

        if(post.type === "text") {
            return <p className="profile__post-content-description">    
                    {post.text}
                </p>
        }
        if(post.type === "image"){
            return <img src={MunnaBhaiya} alt="post-image-demo" className="profile__post-content-image" />
        }
    }


    return <div className="profile">
        <CreatePost />
        {ProfileData.map((post) => {
            return <>
             <div className="profile__post">
                        {/* Container for post info such as group name and dp */}
                        <div className="profile__post-info">
                            <img src={Winnipeg} className="profile__post-info-dp"/>
                            <div className="profile__post-info-data">
                                <span className="profile__post-info-data-group">{post.group}</span>
                                <span className="profile__post-info-data-postedAt">1 days ago</span>
                            </div>
                        </div>
                        {/* Container for post content */}
                        <div className="profile__post-content">
                            <p className="profile__post-content-title">
                               {post.title}
                            </p>
                            {
                                getPostContent(post)
                            }
                            
                        </div>
                        {/* Container for post reaction */}
                        <div className="profile__post-reactions">
                            <div className="profile__post-reactions-1">
                                <img src={LikeButton} alt="like-button" className="profile__post-reactions-1-like" />
                                <img src={DislikeButton} alt="dislike-button" className="profile__post-reactions-1-dislike" />
                                <img src={CommentButton} alt="comment-button" className="profile__post-reactions-1-comments" />
                            </div>
                            <div className="profile__post-reactions-2">
                                <img src={ShareButton} alt="share-button" className="profile__post-reactions-2-share" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="divider" style={{margin: "0rem auto"}}></div> */}
                </>
        })}   
    </div>
}

export default Profile;