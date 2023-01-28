import React from "react";

const Input = ({ label, data, setData, type, classStyle }) => {
   return (
      <>
         <label>{label}</label>
         {type === "textarea" ? (
            <textarea
               placeholder={data}
               className={classStyle}
               onChange={(e) => setData(e.target.value)}
            />
         ) : (
            <input
               type="text"
               placeholder={data}
               onChange={(e) => setData(e.target.value)}
            />
         )}
      </>
   );
};

export default Input;
