const City = require("../models/cityModel");
const State = require("../models/stateModel");
const Wearhouse = require("../models/wearhouseModel");


const getCityData = async(req, res) => {
    try {
        const city = await City.find();
       
        if (!city || city.length === 0) {
          return res.status(404).json({ message: "No City data Found" });
        }
        return res.status(200).json(city);
      } catch (error) {
        return res.status(400).json({message: "error while fetching city data"})
      }
}

// get state data

const getStateData = async(req, res) => {
    try {
        const state = await State.find();
        
        if (!state || state.length === 0) {
          return res.status(404).json({ message: "No state data Found" });
        }
        return res.status(200).json(state);
      } catch (error) {
        return res.status(400).json({message: "error while fetching state data"})
      }
}

// get wearhouse data

const getWearhouseData = async(req, res) => {
    try {
        const wearhouse = await Wearhouse.find();
        
        if (!wearhouse || wearhouse.length === 0) {
          return res.status(404).json({ message: "No wearhouse data Found" });
        }
        return res.status(200).json(wearhouse);
      } catch (error) {
        return res.status(400).json({message: "error while fetching wearhouse data"})
      }
}

module.exports = {getCityData,getStateData, getWearhouseData}