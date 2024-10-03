import { useState } from 'react';
import Article from '../components/Article';
import Search from '../components/Search';

import postsData from '../posts.json';

interface Post {
  title : string,
  tags : string[],
  date : string,
  isNew : boolean
}
const typedPostsData: Post[] = postsData as Post[];

function Index() {
  const [posts, setPosts] = useState<Post[]>(typedPostsData);
  const [totalPost, setTotalPost] = useState<number>(0);

  const onSearchChange = (value: string) => {
    console.log("App Component : " + value);
    const filteredPosts = typedPostsData.filter(item => item.title.includes(value));
    setPosts(filteredPosts);
    setTotalPost(filteredPosts.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPost={totalPost} />
      <div className="articles">
        {posts.map((post: Post, index: number) => (
          <Article {...post} key={index} />
        ))}
      </div>
    </>
  )
}

export default Index;
