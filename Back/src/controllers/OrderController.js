const conexion	= require('../database/db');

exports.createOrder = (req,res) =>{
	const idOrder = req.body.idOrder;
	const createdAt = req.body.createdAt;
	const status = req.body.status;
	const idUser = req.body.idUser;
	const idGig = req.body.idGig;

	conexion.query("INSERT INTO Order (idOrder, createdAt, status,idUser,idGig) VALUES ( '" + idOrder + "' ,'" + createdAt + "' ,'" + status + "' ,'" + idUser + "' ,'" + idGig + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó la orden ");
			
		}
	});
}

exports.updateOrder = (req,res) =>{
	const idOrder = req.body.idOrder;
	const createdAt = req.body.createdAt;
	const status = req.body.status;
	const idUser = req.body.idUser;
	const idGig = req.body.idGig;

	let query = ('update Order set idOrder =' + idOrder + ' , createdAt="'+createdAt+'",status="'+status+ '", idUser = '+ idUser + '", idGig = '+ idGig );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo la orden: ");
			
		}
	});
}

exports.deleteOrder = (req,res) => {
	const idOrder = req.body.idOrder;
	conexion.query('delete from Order where id = '+ idOrder , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino la orden' + idOrder);
			
		}
	});
}