import { useState } from "react";

const createPostStyles = {
    type: {
        display: "flex"
    }
}

const CreatePost: React.FC = () => {

    const [isFocused, setIsFocused] = useState(false)

    return <div className="create-post">
        <div className="create-post__type" style={isFocused ? createPostStyles.type : {display: "none"}}>
            <div className="create-post__type-text">Text</div>
            <div className="create-post__type-image">Image</div>
            <div className="create-post__type-poll">Poll</div>
            <div className="create-post__type-link">Link</div>
        </div>
        <textarea className="create-post__textarea" placeholder="Post something..." onFocus={()=>setIsFocused(true)} />
        <div className="create-post__buttons" style={isFocused ? createPostStyles.type : {display: "none"}}>
            <button className="create-post__post btn">Submit</button>
        </div>
    </div>
}

export default CreatePost;
