import React,{useState} from "react";
import jData from "./data.json";
 import Languages from './Languages';

 const Body = (props) => {
      const [searchClass ,setSearchClass]=useState('displayClass');
      const [tagHolder, setTagHolder] = useState(null);
      //const [tagRole, setTagRole] = useState(null);
       const filterTag= (language)=>{
         setSearchClass('blockClass')
         setTagHolder(language)
           const filteredJob = jData.filter(job=>{
               return job.languages.includes(language);  
          })
        
          props.setTagSorter(filteredJob);
       
        }
         const clearSearch =()=>{
            setSearchClass('displayClass')
           props.setTagSorter(jData);
          }
         //const changeHandle = () => {
           //filterTag(tagRole);
           //console.log(tagRole)
         //};

        return (
          <div>
            <div className ={`tagHolder ${searchClass}`}>
              {tagHolder}
              <p onClick={clearSearch}>Clear</p>
            </div>
       {props.jobData.map((element) => {
         //setTagRole(element.role)
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

              <li>
                <span className="languages">
                  <div  className="language">
                    {element.role}{" "}
                  </div>
                  <div  className="language">
                    {element.level}
                  </div>
                  {element.languages.map((e, i) => {
                    return (
                      <Languages
                        key={i}
                        e={e}
                        index={i}
                        filterTag={filterTag}
                      />
                    );
                  })}
                </span>
              </li>
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
