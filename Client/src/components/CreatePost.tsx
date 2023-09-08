import { useState } from "react";
import { Post } from "../model/post.model";

const createPostStyles = {
    type: {
        display: "flex"
    }
}

interface newPost {
    title: string,
    text: string,
    image: string,
    poll: string,
    link: string,
    postedat: Date,
    inBand: Boolean,
    band: string
}



const CreatePost: React.FC = () => {

    const [isFocused, setIsFocused] = useState<Boolean>(false);

    const [postType, setPostType] = useState<String>('text');

    const [newPost, setNewPost] = useState<newPost>({
        title: '',
        text: '',
        image: '',
        poll: '',
        link: '',
        postedat: new Date(),
        inBand: false,
        band: ""
    });

    const onTextAreaFocused = () => {
        return isFocused ? createPostStyles.type : {display: "none"}
    }

    const changeHandler = (e: object | any) => {

        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        })

    }

    const submitHandler = () => {

        if(postType === "text" && newPost.title.length > 10 && newPost.text.length > 10){
            
        }

    }

    return <div className="create-post">
        <div className="create-post__type" style={onTextAreaFocused()}>
            <div className="create-post__type-text" id="text">Text</div>
            <div className="create-post__type-image">Image</div>
            <div className="create-post__type-poll">Poll</div>
            <div className="create-post__type-link">Link</div>
        </div>
        <input 
            className="create-post__input" 
            type="text" 
            name="title" 
            id="title" 
            placeholder="Create a title..." 
            style={onTextAreaFocused()}
            onChange={(e) => changeHandler(e)}
            />
        <textarea 
            className="create-post__textarea"  
            name="text" 
            id="text" 
            placeholder="Post something..." 
            onFocus={()=>setIsFocused(true)} 
            onChange={(e) => changeHandler(e)}
            />
        <div className="create-post__buttons" style={onTextAreaFocused()}>
            <button className="create-post__post btn">Submit</button>
        </div>
    </div>
}

export default CreatePost;
