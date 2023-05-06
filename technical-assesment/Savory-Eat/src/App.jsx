//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useEffect, useState}from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx"
import Data from "./data/data.json"
import axios from "axios"
import Add from "./components/Add.jsx"
function App() {
const [view,setView]=useState('Home')
  let changeView = (view) => {
    setView(view);
  };
  const [data,setdata]=useState(Data)
  const fetchData = (data) =>{
    axios.get("http://localhost:4000/api/")
    .then((response)=>{
        setdata(response.data)
      })
      .catch((err)=>err)
  }
  useEffect(()=>{
    fetchData()
    },[])
  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Addrecepie
        </div>
        
        <div className="nav-item" active-color="red">
          <input type="text"  />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
     
      {view === "Home" && <Home changeView={changeView}/>}
      {view === "Allrecepies" && <AllRecepies data={data} setdata={setdata} changeView={changeView} setview={setView}/>}
     {view === "Addrecepie" && <Add changeView={changeView} data={data} fetchData={fetchData}/>}

      <div></div>
    </div>
  );
}

export default App;
