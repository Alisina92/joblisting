import React from 'react';
 
const Languages =(props)=>{
    
    const changeHandler = () => {
         props.filterTag(props.e);
    };

    return <div className="language" onClick={changeHandler}  index ={props.i}>{props.e}   </div>;
                     }

export default Languages;