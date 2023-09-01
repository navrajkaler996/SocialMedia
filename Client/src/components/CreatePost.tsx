import { useState } from "react";
import { Post } from "../model/post.model";

const createPostStyles = {
    type: {
        display: "flex"
    }
}




const CreatePost: React.FC = () => {

    const [isFocused, setIsFocused] = useState(false);

    const [newPost, setPost] = useState<Post>()

    const onFucus = () => {
        return isFocused ? createPostStyles.type : {display: "none"}
    }

    return <div className="create-post">
        <div className="create-post__type" style={onFucus()}>
            <div className="create-post__type-text" id="text">Text</div>
            <div className="create-post__type-image">Image</div>
            <div className="create-post__type-poll">Poll</div>
            <div className="create-post__type-link">Link</div>
        </div>
        <input className="create-post__input" type="text" name="text" id="text" placeholder="Create a title..." style={onFucus()}/>
        <textarea className="create-post__textarea" placeholder="Post something..." onFocus={()=>setIsFocused(true)} />
        <div className="create-post__buttons" style={onFucus()}>
            <button className="create-post__post btn">Submit</button>
        </div>
    </div>
}

export default CreatePost;
