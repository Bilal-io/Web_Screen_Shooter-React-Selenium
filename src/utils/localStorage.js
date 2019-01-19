// import { get } from "lodash";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("screenshots");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("screenshots", serializedState);
  } catch (err) {
    // ignore
  }
};
