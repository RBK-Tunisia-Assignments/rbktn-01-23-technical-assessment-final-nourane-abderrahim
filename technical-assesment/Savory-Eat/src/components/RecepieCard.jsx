import React from "react";
import "../App.css";
import axios from "axios"
import Update from './components/Update'
const RecepieCard = ({el,data,setdata,changeView,view}) => {

  const handleDelete = () => {
    axios.delete(`http://localhost:4000/api/delete/${el._id}`)
      .then((response) => {
        console.log(response.data);
        const receipe = data.filter((e) => e._id !== el._id);
        setdata(receipe)
      })
      .catch((error) => {
        console.error(error);
      })
  };
  return (
    <>
      <div className="card">
        <button className="delete" onClick={handleDelete}>delete</button>
        <button className="update" onClick={changeView}>update </button>

        <>
          <div className="header">
            <img
              className="img"
              src={el.recepie_Image}
              alt=""
            />
          </div>
          <div className="text">
            <h1 className="food" >{el.recepie_Name}</h1>
            <i> {el.Cook_Time}</i> <br />
            <i>{el.Serves}</i>
          </div>
        </>
      </div>
      
    </>
  );
};

export default RecepieCard;
