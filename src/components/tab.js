import { useState } from "react";
import data from "./data";
import { FaAngleDoubleRight } from "react-icons/fa";
function Tabs() {
  const [value, setValue] = useState(0);
  const { title, date, duties, company } = data[value];
  return (
    <div className="tab-wrapper">
      <div className="button-wrapper">
        {
          data.map((eachData,index)=>{
            return(
              <button key={eachData.id} className= {`btn ${index === value && 'active'}`} onClick={()=> setValue(index)}>
                {eachData.company}
              </button>
            );
          })
        }
      </div>
      <div className="tab-content">
        <h1 className="heading">{title}</h1>
        <h2 className="company">{company}</h2>
        <h2 className="date">{date}</h2>
        <hr />
        <p className="duty-wrapper">
          {duties.map((duty, index) => {
            return (
              <div className="duty" key={index}>
                <FaAngleDoubleRight className="duty-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default Tabs;
