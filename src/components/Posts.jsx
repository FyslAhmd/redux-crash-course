import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postSlice";

function Posts() {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error}</p>;
  } else {
    content = posts.map((post) => <li key={post.id}>{post.title}</li>);
  }
  return <div>{content}</div>;
}

export default Posts;
