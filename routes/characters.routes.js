// routes/characters.routes.js
const router = require("express").Router();

// Characters list
router.get("/characters/list", (req, res) => {
  const characters = [
    {
      id: 1,
      name: "Homer Simpson",
      occupation: "Nuclear Safety Inspector",
      weapon: "...",
    },
    {
      id: 2,
      name: "Wiggum",
      occupation: "Police Chief",
      weapon: "Colt Anaconda",
    },
  ];

  res.render("pages/characters-list", { characters: characters });
});

// New character form render
router.get("/characters/create", (req, res) => {
  res.render("pages/new-character-form");
});

// New character form submit
router.post("/characters/create", (req, res) => {
  const { name, occupation, weapon } = req.body;
  const characterInfo = { name, occupation, weapon };
});

// Character edit form render and auto fill
router.get("/characters/edit/:id", (req, res) => {
  const characterId = req.params.id;

  const character = {
    name: "Wiggum",
    occupation: "Police Chief",
    weapon: "Colt Anaconda",
  };

  res.render("pages/edit-character-form", { character: character });
});

// Character edit form submit
router.post("/characters/edit/:id", (req, res) => {
  const { name, occupation, weapon } = req.body;
  const characterInfo = { name, occupation, weapon };
  const characterId = req.params.id;
});

router.get("/characters/delete/:id", (req, res) => {
  const characterId = req.params.id;
});

module.exports = router;
