import React from "react";
import { useSelector } from "react-redux";
import "./post.css";
export const Post = () => {
   const post = useSelector((state) => state.post.posts);
   const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

   return (
      <section className="post-container">
         {post.slice(1).map((item, index) => {
            return (
               <div className="posts" key={index}>
                  <p className="posts-title">{item.title}</p>
                  <p className={`posts-tags-${tags[item.tag]} posts-tags`}>
                     {tags[item.tag]}
                  </p>
                  <p className="posts-title">{item.description}</p>
               </div>
            );
         })}
      </section>
   );
};
