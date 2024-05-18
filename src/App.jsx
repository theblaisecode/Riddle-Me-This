import { useState } from "react";
import questions from "./data";
import AllAccordion from "./components/AllAccordion";
import "./style.css";

function App() {
  const [isQuestion, setIsQuestion] = useState(questions);
  console.log(isQuestion);

  return (
    <>
      <AllAccordion isQuestion={isQuestion}  />
    </>
  );
}

export default App;
