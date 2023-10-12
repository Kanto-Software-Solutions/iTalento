const conexion	= require('../database/db');

const GetAllUsers = (req,res) => {
	conexion.query("SELECT * FROM User", (error,results) => {
		if(error){
			console.log(error);
		}else{
			res.json({results:results});
		}
	});
};

module.exports.GetAllUsers = GetAllUsers;