import {Link} from "react-router-dom"

export default function Post({post}){

    return(
    <div style={{"display":"flex"}} className="post">
        <Link state={post} to={{pathname:"/view"}} className="post-title">{post.title}</Link>
        <Link state={post} to={{pathname:"/new"}} className="post-edit">Edit</Link>
        <div className="post-delete">Delete</div>
    </div>
    );
}