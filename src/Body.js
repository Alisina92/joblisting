import React,{useState} from "react";
import jData from "./data.json";
 import Languages from './Languages';

 const Body = (props) => {
      const [searchClass ,setSearchClass]=useState('displayClass');
      const [tagHolder, setTagHolder] = useState(null);
   
    
       const filterTag= (language)=>{
         setSearchClass('blockClass')
         setTagHolder(language)
           const filteredJob = jData.filter(job=>{
               return job.languages.includes(language) || job.role.includes(language) || job.level.includes(language);  
          })
        
          props.setTagSorter(filteredJob);
       
        }
         const clearSearch =()=>{
            setSearchClass('displayClass')
           props.setTagSorter(jData);
          }
        
         const newArr =[]
         console.log(newArr);
         return (
           <div>
            <div className ={`tagHolder ${searchClass}`}>
              {tagHolder}
              <p onClick={clearSearch}>Clear</p>
            </div>
       {props.jobData.map((element) => {
           let allTags =[];
            allTags.push(element.role)
            allTags.push(element.level);
           newArr.push(allTags)
          
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
                 
                  
                  {element.languages.map((e, i) => {
                     allTags.push(e)
                     
                  })}
                    {allTags.map((el,i)=>{
                      return(<Languages
                        
                        e={el}
                       
                        filterTag={filterTag}
                      />
                      )

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
