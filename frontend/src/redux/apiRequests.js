import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios";

export const updateUser = async (user, dispatch) => {
   dispatch(updateStart());
   try {
      const res = await axios.post("http://localhost:4000/v1/update", user);
      dispatch(updateSuccess(res.data));
   } catch (error) {
      dispatch(updateError());
   }
};
