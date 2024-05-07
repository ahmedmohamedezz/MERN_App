import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  // has the prop value of the context => {state, dispatch}
  const context = useContext(AuthContext);

  // check if the context is used in the write place
  // if use it to wrap a subtree of components => we want to make sure
  // that it's called within this subtree
  if (!context) {
    throw Error("useAuthContext must be used an WorkoutsContext Provider");
  }

  return context;
};
