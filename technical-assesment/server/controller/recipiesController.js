const model=require('../model/recipiesModel.js')

const getrecepie = (req, res) => {
model.getAll((err,result)=>{
  if (err){
    res.json(err)
  }
  else res.json(result)
})
};
const saverecepie = (req,res) => {
  model.create(req.body.recepie_Id,req.body.Cook_Time,req.body.Prep_Time,
    req.body.recepie_Name,
    req.body.Serves,
    req.body.categorierecepie_Image,
     req.body.recepie_Description,
     req.body.recepie_Ingredients,(err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  )}
const deleterecepie = (req, res) => {
  model.delete(req.params.id,(err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }})
  
  }
const update = (req, res) => {
  model.update(req.params.id,req.body)
  .then((data)=> {
    res.json(data);
  })
  .catch((err)=>err)}
module.exports = {
  getrecepie,saverecepie,deleterecepie,update
}

