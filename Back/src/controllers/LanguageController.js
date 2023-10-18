const conexion	= require('../database/db');


exports.createLanguage = (req,res) =>{
	const idLanguage = req.body.idLanguaje;
	const name = req.body.name;

	conexion.query("INSERT INTO Language (idLanguage, name) VALUES ( '" + idLanguage + "' ,'" + name + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó el idioma");
		}
	});
}

exports.updateLanguaje = (req,res) =>{
	const idLanguaje = req.body.idLanguaje;
	const name = req.body.name;

	let query = ('update Languaje set idLanguaje =' + idLanguaje + ' , name="'+name);
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo el Lenguaje: ");
			res.redirect('/home');
		}
	});
}

exports.deleteOrder = (req,res) => {
	const idOrder = req.body.idOrder;
	conexion.query('delete from Order where id = '+ idOrder , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino la orden' + idReview);
			res.redirect('/home')
		}
	});
}