let express = require('express');
let router = express.Router();
let db = require('../soundGroove/src/app/db');

router.get('/detail/:', function (req, res) {
  let id = req.params.id;
  let cmd = 'SELECT	nota, comentario, usuario FROM tbavaliacao AS c INNER JOIN tbusuario AS u ON c.idusuario = u.id WHERE trackid = ?';
  db.query(cmd, [id], function (erro, listagem) {
    if (erro) {
      res.send(erro);
    }
    res.render('music-detail', { resultado: listagem });
  });
});
