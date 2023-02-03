import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../InputFields/Input";
import { createPost } from "../../redux/postSlice";

import "./post.css";
export const MakePost = ({ setOpen }) => {
   const [title, setTitle] = useState("Add a title");
   const [desc, setDesc] = useState("Add a  description");
   const [selectIndex, setSelectIndex] = useState(0);
   const dispatch = useDispatch();
   const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

   const handlePost = () => {
      setOpen(false);
      const newPost = {
         title: title,
         description: desc,
         tag: selectIndex,
      };
      dispatch(createPost(newPost));
   };

   return (
      <section className="makepost-container ">
         <div className="makepost-navigation ">
            <div className="makepost-save" onClick={handlePost}>
               Post
            </div>
         </div>
         <Input
            type="textarea"
            data={title}
            setData={setTitle}
            label="Title"
            classStyle="makepost-title"
         />
         <Input
            type="textarea"
            data={desc}
            setData={setDesc}
            label="Description"
            classStyle="makepost-desc"
         />
         <label htmlFor="">Tag</label>
         <div className="makepost-tags">
            {tags.map((tag, idx) => {
               return (
                  <button
                     key={idx}
                     className={`${
                        selectIndex === idx
                           ? "makepost-tags-selected"
                           : `makepost-tags-${tag}`
                     }  }`}
                     onClick={() => setSelectIndex(idx)}
                  >
                     {tag}
                  </button>
               );
            })}
         </div>
      </section>
   );
};
