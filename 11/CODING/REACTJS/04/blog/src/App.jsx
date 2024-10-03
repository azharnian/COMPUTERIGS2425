import { useState } from "react";
import Article from './components/Article'
import Search from "./components/Search"

import postsData from "./posts.json"
import './App.css'

function App() {
  const [posts, setPosts] = useState(postsData);
  const [postLen, setPostLen] = useState(0);

  const onSearchChange = value => {
    // console.log("App Component : "+ value);
    const filteredPosts = postsData.filter(item => item.title.includes(value));
    setPosts(filteredPosts);
    // console.log(filteredPosts.length)
    setPostLen(filteredPosts.length);
  }

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} postLen={postLen}/>
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  )
}

export default App
