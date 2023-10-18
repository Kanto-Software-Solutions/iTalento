const conexion	= require('../database/db');

exports.getAllCategories = (req,res) => {
	conexion.query("SELECT * FROM Category", (error,results) => {
		if(error){
			console.log(error);
		}else{
			res.json({results:results});
		}
	});
};

exports.createCategory = (req,res) => {
	conexion.query("INSERT INTO Category (name) values ( " + req.body.name + " )", (error,results) => {
		if(error){
			console.log(error);
		}else{
			res.json({results:results});
		}
	});
};


exports.deleteCategory= (req,res) => {

	conexion.query('delete from Category where id = '+ req.body.name , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino el Certificado' + req.body.name);
			res.redirect('/home')
		}
	});
}