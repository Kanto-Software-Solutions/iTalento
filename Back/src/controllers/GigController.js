const conexion	= require('../database/db');

exports.getAllGigs = (req,res) => {
	conexion.query("SELECT * FROM Gig", (error,results) => {
		if(error){
			console.log(error);
		}else{
			res.json({results:results});
		}
	});
};

exports.getGigById = (req, res) => {
    conexion.query("SELECT * FROM Gig WHERE idGig = " + req.params.id, (error,results) => {
        if(error){
            console.log(error);
        }else{
            res.json({results:results});
        }
    });
};

exports.getGigByUser = (req, res) => {
    conexion.query("SELECT * FROM Gig WHERE idUser = " + req.params.id, (error,results) => {
        if(error){
            console.log(error);
        }else{
            res.json({results:results});
        }
    });
};

exports.createGig = (req,res) =>{
	const idGig = req.body.idGig;
	const name = req.body.name;
	const description = req.body.description;
	const createdAt = Date.now();
	const idCategory = req.body.idCategory;
	const idUser = req.body.idUser;
	const price = req.body.price;
	const deliveryDays = req.body.deliveryDays;

	conexion.query("INSERT INTO Gig (idGig, name, description,createdAt,idCategory,idUser,price,deliveryDays) VALUES ( '" + idGig + "' ,'" + name + "' ,'" + description + "' ,'" + createdAt + "' ,'" + Gigcol + "' ,'" + idCategory + "' ,'" + idUser + "' ,'" + price + "' ,'" + deliveryDays + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó el gig ");
			res.redirect('/home');
		}
	});
}

exports.updateGig = (req,res) =>{
	const idGig = req.body.idGig;
	const name = req.body.name;
	const description = req.body.description;
	const createdAt = req.body.createdAt;
	const Gigcol = req.body.Gigcol;
	const idCategory = req.body.idCategory;
	const idUser = req.body.idUser;
	const price = req.body.price;
	const deliveryDays = req.body.deliveryDays;

	let query = ('update Gig set idGig =' + idGig + ' , name="'+name+'",description="'+description+ '", createdAt = '+ createdAt + '", Gigcol = '+ Gigcol + '", idCategory = '+ idCategory + '", idUser = '+ idUser + '", price = '+ price + '", deliveryDays = '+ deliveryDays );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo el Gig: ");
			res.redirect('/home');
		}
	});
}