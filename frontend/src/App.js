import Header from "./components/Header/Header";
import "./App.css";
import { useState } from "react";
import EditPage from "./components/Edit/EditPage";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import { MakePost } from "./components/Post/MakePost";
import { Post } from "./components/Post/Post";
function App() {
   const [isEdit, setEdit] = useState(false);
   const [open, setOpen] = useState(false);
   const pending = useSelector((state) => state.user.pending);
   const error = useSelector((state) => state.user.error);
   return (
      <div className="App">
         {isEdit ? (
            <EditPage setEdit={setEdit} />
         ) : !isEdit && !open ? (
            <>
               <Header setEdit={setEdit} />
               <div className="post-container">
                  <Post />
               </div>   
               <Footer open={open} setOpen={setOpen} />
            </>
         ) : (
            <>
               <Header setEdit={setEdit} />
               <MakePost setOpen={setOpen} />
            </>
         )}
         {pending ? <div className="loading">Loading....</div> : ""}

         {!pending && error ? (
            <p className="error">error when fetching data</p>
         ) : (
            ""
         )}
      </div>
   );
}

export default App;
