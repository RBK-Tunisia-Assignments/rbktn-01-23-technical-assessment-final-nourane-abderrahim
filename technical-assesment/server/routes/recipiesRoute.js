const express = require("express");
const router = express.Router();
const controller=require ("../controller/recipiesController.js")
router.get("/",controller.getrecepie);
router.post("/save",controller.saverecepie)
router.put("/update/:id",controller.update)
router.delete("/delete/:id",controller.deleterecepie)

module.exports = router;
