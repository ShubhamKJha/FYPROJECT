import { addToEvalQueue } from "../../../actions/eval-actions";
import { resetConsole } from "./actions";

export function evalConsoleInput(consoleText) {
  return (dispatch, getState) => {
    // exit if there is no code in the console to  eval
    console.log(consoleText);
    if (!consoleText) return;
    const chunk = {
      chunkContent: consoleText
    };
    dispatch(addToEvalQueue(chunk));
    dispatch(resetConsole());
  };
}
