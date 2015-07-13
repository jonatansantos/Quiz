exports.question = function(req, res) {
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

exports.answer = function(req, res) {
	if(req.query.respuesta === 'Roma'){
		console.log("Correcto");
		console.log(req.query.respuesta);
		res.render('quizes/answer', {respuesta: "Correcto"});
	} else {
		console.log("Incorrecto");
		console.log(req.query.respuesta);
		res.render('quizes/answer', {respuesta: "Incorrecto"});
	}
}