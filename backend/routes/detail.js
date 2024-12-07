const express = require("express");
const router = express.Router();
const pool = require("../utils/db");

router.get("/detail", (req, res) => {});

router.get("/detail/:id_track", function (req, res) {
  let idTrack = req.params.id_track;
  let cmd = "SELECT idusuario, nota, comentario FROM tbavaliacao AS av INNER JOIN tbusuario AS us ON us.id = av.idusuario WHERE idtrack = ?;";

  db.query(cmd, [idTrack], function (erro, result) {
    if (erro) {
      res.send(erro);
    }
    res.json(result);
  });
});

module.exports = router;
