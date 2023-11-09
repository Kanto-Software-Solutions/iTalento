const conexion	= require('../database/db');

exports.getImageByGig = (req,res) => {
	conexion.query("SELECT * FROM Image WHERE gigId = " + req.params.id, (error,results) => {
		if(error){
			console.log(error);
		}else{
			res.json({results:results});
		}
	});
};