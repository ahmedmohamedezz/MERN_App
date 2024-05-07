import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  // has the prop value of the context => {state, dispatch}
  const context = useContext(WorkoutsContext);

  // check if the context is used in the write place
  // if use it to wrap a subtree of components => we want to make sure
  // that it's called within this subtree
  if (!context) {
    throw Error("useWorkoutsContext must be used an WorkoutsContext Provider");
  }

  return context;
};
