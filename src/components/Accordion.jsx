import { useState } from "react";

export default function Accordion({ id, title, info }) {
  const [isToggle, setIsToggle] = useState(false);

  function toggleQuestion() {
    setIsToggle((prevIsToggle) => !prevIsToggle);
  }

  return (
    <div className="accordion" key={id}>
      <div className="head">
        <h3 className="title">{title}</h3>
        <button className="btn" onClick={toggleQuestion}>
          {isToggle ? (
            <i class="fa-solid fa-minus"></i>
          ) : (
            <i class="fa-solid fa-plus"></i>
          )}
        </button>
      </div>

      {isToggle && <p className="info">{info}</p>}
    </div>
  );
}
