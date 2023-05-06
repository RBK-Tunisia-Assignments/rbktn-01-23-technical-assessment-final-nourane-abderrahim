const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
 //const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
    const q="select * from recepie;"
    connection.query(q, (error, results) => {
        if (error) throw error;
        callback(results);
    });
};

const create=(recepie_Id, Cook_Time, Prep_Time,recepie_Name,Serves,categorie,recepie_Image, recepie_Description,recepie_Ingredients,users_user_Id,
    callback)=>{
    const q=`INSERT INTO recepie (recepie_Id, Cook_Time, Prep_Time,recepie_Name,Serves,categorie,recepie_Image, recepie_Description,recepie_Ingredients,users_user_Id) VALUES (${recepie_Id},${Cook_Time},${Prep_Time},"${recepie_Name}",${Serves},"${categorie}","${recepie_Image}","${recepie_Description}","${recepie_Ingredients}",${users_user_Id});`
    connection.query(q,(error, results) => {
        if (error) throw error;
        callback(results);
    })
}
const update=(callback)=>{
    const q="update recepie set recepie_Id=?, Cook_Time=?, Prep_Time=?,recepie_Name=?,Serves=?,categorie=?,recepie_Image=?, recepie_Description=?,recepie_Ingredients=? where id_recepie=? ;"
    connection.query(q,(error, results) => {
        if (error) throw error;
        callback(results);})
}
const deleteOne=(id,callback)=>{
    const q=`delete from recepie where recepie_Id=${id};`
    connection.query(q, (error, results) => {
        if (error) throw error;
        callback(results);
    });
}
module.exports = { getAll ,create,update,deleteOne};
