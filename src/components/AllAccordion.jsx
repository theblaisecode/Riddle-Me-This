import Accordion from "./Accordion";

export default function AllAccordion({ isQuestion }) {
  console.log(isQuestion);
  return (
    
    <div className="allAccordion">
      <h1>Riddle Me This?</h1>

      {isQuestion.map((item) => {
        return <Accordion key={item.id} {...item}/>
      })}
    </div>
  );
}
