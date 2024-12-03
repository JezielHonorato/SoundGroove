let express = require('express');
let router = express.Router();
let db = require('../db');

router.GET('/detail/:', function (req, res) {
  let id = req.params.id;
  let cmd = 'SELECT	comentario, usuario FROM tbcomentario AS c INNER JOIN tbusuario AS u ON c.idusuario = u.idusuario WHERE idmusica = ?';
  db.query(cmd, [id], function (erro, listagem) {
    if (erro) {
      res.send(erro);
    }
    res.render('music-detail', { resultado: listagem });
  });
});
