const City = require("../models/cityModel");
const State = require("../models/stateModel");
const Wearhouse = require("../models/wearhouseModel");


const cityController = async(req, res) => {
    try {
        const cityData = req.body;
        await City.create(cityData);
        return res.status(201).json({message: "City Data Saved"})
    } catch (error) {
        return res.status(401).json({message:"Error while saving City Data"})
    }
};

const stateController = async(req, res) => {
    try {
        const stateData = req.body;
        await State.create(stateData);
        return res.status(201).json({message: "state Data Saved"})
    } catch (error) {
        return res.status(401).json({message:"Error while saving state Data",error})
    }
};

const wearhouseController = async(req, res) => {
     try {
        const wearHouseData = req.body;
        await Wearhouse.create(wearHouseData);
        return res.status(201).json({message: "Wearhouse Data Saved"})
    } catch (error) {
        return res.status(401).json({message:"Error while saving Wearhouse Data",error})
    }
}

// Update operation Logic

// update Wearhouse data

const updateWearhouse = async(req, res) => {
     try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await Wearhouse.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    return res.status(401).json({message:"error while updating wearhouse data"})
  }
}

// update City data

const updateCity = async(req, res) => {
     try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await City.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    return res.status(401).json({message:"error while updating City data"})
  }
}

// update State data

const updateState = async(req, res) => {
     try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await State.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    return res.status(401).json({message:"error while updating State data"})
  }
}

// Delete Operation Logic

//delete Wearhouse data

const deleteWearhouse = async(req, res) => {
    console.log(req.params.id);
   try {
    const id = req.params.id;
    await Wearhouse.deleteOne({ _id: id });
    return res.status(200).json({ message: "Wearhouse Deleted Successfully" });
  } catch (error) {
    res.status(400).json({message: "error whlie deleting"})
  }
};

//delete City data

const deleteCity = async(req, res) => {
    try {
        const id = req.params.id;
        await City.deleteOne({ _id: id });
        return res.status(200).json({ message: "City Deleted Successfully" });
      } catch (error) {
        res.status(400).json({message: "error whlie deleting"})
      }
};

//delete State data

const deleteState = async(req, res) => {
    try {
        const id = req.params.id;
        await State.deleteOne({ _id: id });
        return res.status(200).json({ message: "State Deleted Successfully" });
      } catch (error) {
        res.status(400).json({message: "error whlie deleting"})
      }
};

 


module.exports ={cityController, stateController, wearhouseController, deleteWearhouse, deleteCity, deleteState, updateWearhouse, updateCity, updateState};