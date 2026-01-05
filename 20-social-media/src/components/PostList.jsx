import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData} from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
 const {postList,addInitialPosts} =   useContext(PostListData);

const handleGetPostsClick = () => {
  fetch('https://dummyjson.com/posts/1')
.then(res => res.json())
.then((data) => ) ;
};
  return (
   <>
   {
    postList.length === 0 && (<WelcomeMessage  onGetPostsClick={handleGetPostsClick}/>
   )}
  {postList.map((post) => (
    <Post key={post.id} post = {post} />
  ) )}
   
  </>
  );
  
}
export default PostList;