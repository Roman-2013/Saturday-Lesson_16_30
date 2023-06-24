import React from 'react';
import s from './Profile.module.css'
import {Profileinfo} from './Profileinfo';


export type PostType = {
    posts: MyPostType[]
}
export type MyPostType = {
    title: string
    like: number
    post: string
}

export const Profile = (props: PostType) => {

    return (
        <div className={s.content}>
            <Profileinfo/>
            <MyPost posts={props.posts}/>
        </div>
    )
}


const MyPost = (props: PostType) => {
    const mapedPost = props.posts.map(el => {

        return (
            <div>
                <Post title={el.title} post={el.post} like={el.like}/>
            </div>
        )
    })
    return (
        <div>
            {mapedPost}
        </div>
    )
}


// type PostTypeProps={
//     posts:string
//     posts1:string
//     posts2:number
// }


const Post = (props: MyPostType) => {
    return (
        <div>
            <span>{props.title}</span>
            <span>{props.post}</span>
            <span>{props.like}</span>

        </div>
    );
};

export default Post;