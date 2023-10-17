const conexion	= require('../database/db');

exports.createAbility = (req,res) =>{
	const idAbility = req.body.idAbility;
	const name = req.body.name;

	conexion.query("INSERT INTO Ability (idAbility, name) VALUES ( '" + idAbility + "' ,'" + name + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó la habilidad");
		}
	});
}

exports.updateAbility = (req,res) =>{
	const idAbility = req.body.idAbility;
	const name = req.body.name;

	let query = ('update Ability set idAbility =' + idAbility + ' , name="'+name);
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo la habilidad: ");
			res.redirect('/home');
		}
	});
}