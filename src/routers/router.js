const express = require("express");
const router = new express.Router();
const Cricket = require("../models/cricket");

router.use(express.json());
// router.get("/", async (req, res) => {
//   res.send("hello  from the expess.");
// });

// create the data
router.post("/cricketer", async (req, res) => {
  try {
    const cricketers = new Cricket(req.body);
    const cricketersdata = await cricketers.save();
    // console.log(cricketersdata);
    res.status(201).send(cricketersdata);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get the data
router.get("/cricketer", async (req, res) => {
  try {
    const getcricketrs = await Cricket.find({}).sort({
      win: 1,
    });
    res.status(201).send(getcricketrs);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get the particular data using the id
router.get("/cricketer/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getcricketer = await Cricket.findById(_id);
    res.status(201).send(getcricketer);
  } catch (e) {
    res.status(400).send(e);
  }
});

// update the date using id
router.patch("/cricketer/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getcricketer = await Cricket.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(getcricketer);
  } catch (e) {
    res.status(500).send(e);
  }
});

//delete the data

router.delete("/cricketer/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getcricketer = await Cricket.findByIdAndDelete(req.params.id);
    res.status(201).send(getcricketer);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
