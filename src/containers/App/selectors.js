import { createSelector } from "reselect";

const selectGlobal = state => state.get("global");

const makeSelectScreenshots = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get("screenshots")
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get("loading")
  );
const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get("error")
  );

export {
  selectGlobal,
  makeSelectScreenshots,
  makeSelectLoading,
  makeSelectError
};
