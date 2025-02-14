// services/api.service.js

const axios = require("axios");

class APIService {
  constructor() {
    this.api = axios.create({
      baseURL: "https://ih-crud-api.herokuapp.com",
    });
  }

  getAllCharacters = () => {
    return this.api.get("/characters"); // GET https://ih-crud-api.herokuapp.com/characters
  };

  createCharacter = (characterInfo) => {
    return this.api.post("/characters", characterInfo); // POST https://ih-crud-api.herokuapp.com/characters

    // return axios.post("https://ih-crud-api.herokuapp.com/characters", characterInfo)
  };

  getOneCharacter = (characterId) => {
    return this.api.get("/characters/" + characterId); // GET https://ih-crud-api.herokuapp.com/characters/1

    // return axios.get("https://ih-crud-api.herokuapp.com/characters/" + characterId)
  };
}

module.exports = APIService;
