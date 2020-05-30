import React from "react";
import jobData from "./data.json";

const Body = () => {
  return (
    <div>
      {jobData.map((element) => {
        return (
          <ul key={element.id} className="ul">
            <li>
              <img className="img" src={element.logo} alt="logo" />
            </li>
            <div className="container">
              <li>
                {element.company}
                {"  "}
              </li>
              <li>
                {element.new ? "NEW" : ""}
                {"  "}
              </li>
              <li>{element.featured ? "FEATURED" : " "}</li>
            </div>
            <div className="container role">
              <li>{element.position}</li>
              
        <li><span className='languages'>{element.role}{' '}{element.level}{element.languages.map((e) =>{ 
              return e ;
             })}</span></li>
            </div>

            <div className="container">
              <li>
                {element.postedAt}
                {"   *   "}
              </li>
              <li>
                {element.contract}
                {"   *   "}
              </li>
              <li>
                {element.location}
                {"    "}
              </li>
            </div>
          </ul>
        );
      })}

      
    </div>
  );

  }
        export default Body;
