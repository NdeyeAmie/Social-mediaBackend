const router = require("express").Router();
const Commentaire = require('../models/Commentaire')

// Créer un nouveau commentaire
// router.post('/', async (req, res) => {
//   try {
//     const newComment = new Commentaire(req.body);
//     await newComment.save();
//     res.status(201).json(newComment);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.post("/", async (req, res) => {
 const {newComment, userId,postId} = req.body
  // const newComment = new Commentaire(req.body);
  console.log({newComment, userId,postId});
  if(!newComment || !userId || !postId)
  {
    return res.status(400).json({message:"Tous les champs sont requis"})
  }
  // const postId= `${Math.floor(Math.random() *2000000000) * 10}` 
  try{
      const savedComment = new Commentaire({
        postId,
        userId,
        desc: newComment
      })
      await savedComment.save()
      res.status(201).json(savedComment);
  } catch(err) {
      res.status(500).json(err);
  }
});
// Obtenir tous les commentaires
router.get('/', async (req, res) => {
  try {
    const comments = await Commentaire.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Autres routes pour la mise à jour et la suppression des commentaires
// ...

module.exports = router;



