import React,{useState} from "react";
import jobData from "./data.json";
import Header from "./Header";
import Body from "./Body";

const SiteComponents = () => {
  const [tagSorter, setTagSorter] = useState(jobData);
  return (
    <div>
      <Header />
      <Body jobData={tagSorter} setTagSorter={setTagSorter} />
    </div>
  );
};

export default SiteComponents;
