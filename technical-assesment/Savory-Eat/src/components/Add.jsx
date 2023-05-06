import React, {useState} from "react";
import "../App.css";
import axios from "axios";

const Add = (props) => {
  const [newrecepie, setrecepie]=useState({Name:"",
  Cooking_Time:"",
  Preparation:"",
  serves:"",
  Category:"",
  Description:"",
image:"",
ingredient:""
}
  )
  const add=()=>{
    axios.post('http://localhost:4000/api/save',newrecepie)
    .then((response)=>console.log(response))
    .then(()=>props.fetchData())
    .catch((err)=>console.log(err))
    }
  
    
   
  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" onChange={e=>setrecepie({...newrecepie,Name:e.target.value})}/>
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" onChange={e=>setrecepie({...newrecepie,Cooking_Time:e.target.value})} />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" onChange={e=>setrecepie({...newrecepie,Preparation:e.target.value})} />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" onChange={e=>setrecepie({...newrecepie,serves:e.target.value})}/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" onChange={e=>setrecepie({...newrecepie,Category:e.target.value})} />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" onChange={e=>setrecepie({...newrecepie,Description:e.target.value})}/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" onChange={e=>setrecepie({...newrecepie,ingredient:e.target.value})}/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" onChange={e=>setrecepie({...newrecepie,image:e.target.value})}/>
      </div>
      <button className="create-recipe-btn"onclick={add}>Create Recipe</button>
    </div>
  );
};
export default Add;
