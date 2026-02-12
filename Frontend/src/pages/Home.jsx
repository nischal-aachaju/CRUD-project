import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
const Home = () => {
    const [api, setApi] = useState();
    useEffect(() => {
      const ApiCall = async () => {
        const response = await axios.get(
          `http://localhost:3000/posts`,
        );
        setApi(response.data.posts);
      };
      ApiCall();
    }, []);
console.log(api);

  const [post, setPost] = useState([
    { _id: 1,
      image: "https://www.mamp.one/wp-content/uploads/2024/09/image-resources2.jpg",
      caption: "helllo" },
  ]);


  return (
    <div className="h-screen w-full pt-3">
      <Link className="bg-green-600 rounded ml-4    px-2 py-1" to="/create-post">
        Create post
      </Link>
      <div>
        {post.map((e,idx) => {
          return (
            <div key={idx} className="h-50 mt-3 relative">
              <img  className="h-full"src={e.image} alt="image" />
              <p>{e.caption}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
