//image imports
import Winnipeg from "../assets/Winnipeg.jpeg";
import LikeButton from "../assets/like.svg";
import DislikeButton from "../assets/dislike.svg";
import CommentButton from "../assets/comment.svg";
import ShareButton from "../assets/share.svg";
import MunnaBhaiya from "../assets/munna-bhaiya.jpg";

import CreatePost from "../components/CreatePost";

import { useGetPostsByUserIdQuery } from "../services/postServiceSlice";
import { useEffect, useState } from "react";
import { Post } from "../model/post.model";

const Profile: React.FC = () => {

    const { data, error, isError, isFetching, isSuccess } = useGetPostsByUserIdQuery({userId: 1, offset: 4});

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        if(data) setPosts(data)
    }, [data])

    //Function filter the type of post.
    //This function returns the JSX of the filter post.
    const getPostContent = (post: Post) => {

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
        { isSuccess && data?.map((post) => {
            return <>
             <div className="profile__post">
                        {/* Container for post info such as group name and dp */}
                        <div className="profile__post-info">
                            <img src={Winnipeg} className="profile__post-info-dp"/>
                            <div className="profile__post-info-data">
                                <span className="profile__post-info-data-group">{post.band}</span>
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