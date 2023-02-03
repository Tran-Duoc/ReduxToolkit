import React from "react";
import "./footer.css";
function Footer({ open, setOpen }) {
   return (
      <footer>
         <div className="footer-title" onClick={() => setOpen(!open)}>
            {open ? "X " : "+"}
         </div>
      </footer>
   );
}

export default Footer;
