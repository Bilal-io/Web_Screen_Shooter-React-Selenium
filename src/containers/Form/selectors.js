import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectForm = state => state.get("form", initialState);

const makeSelectLink = () =>
  createSelector(
    selectForm,
    formState => formState.get("link")
  );
const makeSelectWidth = () =>
  createSelector(
    selectForm,
    formState => formState.get("width")
  );
const makeSelectHeight = () =>
  createSelector(
    selectForm,
    formState => formState.get("height")
  );

export { selectForm, makeSelectLink, makeSelectWidth, makeSelectHeight };
