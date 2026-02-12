import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Loading from "./loading";
const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const ApiCall = async () => {
      const response = await axios.get(`http://localhost:3000/posts`);
      setPost(response.data.posts);
    };
    ApiCall();
  }, []);
  console.log(post);

  return (
    <div className="h-screen w-full pt-3">
      <Link
        className="bg-green-600 rounded ml-4    px-2 py-1"
        to="/create-post"
      >
        Create post
      </Link>
      <div>
        {post.map((e, idx) => {
          return (
            <div key={idx} className="h-50 m-8 relative border-b pb-8">
              <img className="h-full" src={e.image} alt="image" />
              <p>{e.caption}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
