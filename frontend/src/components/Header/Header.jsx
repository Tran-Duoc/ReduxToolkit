import React from "react";
import "./header.css";
const Header = ({ setEdit }) => {
   const handleEdit = () => {
      setEdit(true);
   };

   return (
      <>
         <header
            style={{
               backgroundColor: "#ff9051",
               backgroundImage:
                  "linear-gradient(180deg, #ff9051 2%, #ff9051 ,65%, #181818 100%)",
            }}
         >
            <div className="info-container">
               <div className="info-edit" onClick={handleEdit}>
                  edit
               </div>
               <img
                  className="info-ava"
                  src="https://i.redd.it/snoovatar/avatars/ed464e6d-8097-4b9f-b847-006599fedbcf.png"
                  alt=""
               />
               <div className="info-username">Tran Duoc</div>
               <div className="info-age">21 years old</div>
               <div className="info-about">I'm FE dev</div>
            </div>
         </header>
      </>
   );
};

export default Header;
