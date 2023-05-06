import React from "react";
import "../index.scss";
import RecepieCard from "./RecepieCard.jsx";
const AllRecepies = ({data,setdata,changeView,setview}) => {
  return (
    <div className="card-container">
     {data.map((el,i)=>
      <RecepieCard el={el} key={i} data={data} setdata={setdata} changeView={changeView} setview={setview}/>
      )}
      
    </div>
  );
};

export default AllRecepies;
