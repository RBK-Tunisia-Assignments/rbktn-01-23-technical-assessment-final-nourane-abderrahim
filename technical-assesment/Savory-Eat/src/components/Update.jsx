import React from 'react'

const Update = (props) => {
    
      const [update, setUpdated] = useState({
        name: props.data ? props.el.name : "",
        Cooking_Time: props.data ? props.el.name : "",
        Preparation: props.data ? props.el.Preparation : "",
        serves: props.data ? props.el.serves : "",
        Category: props.data ? props.el.Category : "",
        Description: props.data ? props.el.Description : "",
        ingredient: props.data ? props.el.ingredient : ""
      });
    
      const updated = () => {
        axios
          .put(`http://localhost:4000/api/update/${props.el._id}`, update)
          .then((response) => console.log(props.data))
          .then(() => props.fetchData())
          .catch((err) => console.log(err));
      }
    return (
      <div className="add-recipe-form ">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Name" onChange={e=>setUpdated({...update,Name:e.target.value})}/>
        </div>
        <div className="form-group">
          <label>Cook Time:</label>
          <input type="number" placeholder="Cooking Time" onChange={e=>setUpdated({...update,Cooking_Time:e.target.value})} />
        </div>
        <div className="form-group">
          <label>Prep Time:</label>
          <input type="number" placeholder="Preparation Time" onChange={e=>setUpdated({...update,Preparation:e.target.value})} />
        </div>
        <div className="form-group">
          <label>Serves:</label>
          <input type="number" placeholder="serves" onChange={e=>setUpdated({...update,serves:e.target.value})}/>
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input type="text" placeholder="Category" onChange={e=>setUpdated({...update,Category:e.target.value})} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" placeholder="Description" onChange={e=>setUpdated({...update,Description:e.target.value})}/>
        </div>
        <div className="form-group">
          <label>Ingredients:</label>
          <input placeholder="Ingredients" onChange={e=>setUpdated({...update,ingredient:e.target.value})}/>
        </div>
  
        <div className="form-group">
          <label>Image:</label>
          <input type="text" placeholder="Image URL" onChange={e=>setUpdated({...newrecepie,image:e.target.value})}/>
        </div>
        <button className="create-recipe-btn"onclick={updated}>Update Recipe</button>
      </div>
    );
  };

export default Update
