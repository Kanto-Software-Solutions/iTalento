const conexion	= require('../database/db');

exports.createReview = (req,res) =>{
	const idReview = req.body.idReview;
	const User_idUser = req.body.User_idUser;
	const Gig_idGig = req.body.Gig_idGig;
	const createdAt = req.body.createdAt;
	const rating = req.body.rating;
	const title = req.body.title;
	const description = req.body.description;

	conexion.query("INSERT INTO Review (idReview, User_idUser, Gig_idGig,createdAt,rating,title,description) VALUES ( '" + idReview + "' ,'" + User_idUser + "' ,'" + Gig_idGig + "' ,'" + createdAt + "' ,'" + rating + "' ,'" + title + "' ,'" + description + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó la review ");
			res.redirect('/home');
		}
	});
}

exports.updateReview = (req,res) =>{
	const idReview = req.body.idReview;
	const User_idUser = req.body.User_idUser;
	const Gig_idGig = req.body.Gig_idGig;
	const createdAt = req.body.createdAt;
	const rating = req.body.rating;
	const title = req.body.title;
	const description = req.body.description;

	let query = ('update Review set idReview =' + idReview + ' , User_idUser="'+User_idUser+'",Gig_idGig="'+Gig_idGig+ '", createdAt = '+ createdAt + '", rating = '+ rating + '", title = '+ title + '", description = '+ description );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo la review: ");
			res.redirect('/home');
		}
	});
}

exports.deleteReview = (req,res) => {
	const idReview = req.body.idReview;
	conexion.query('delete from Review where id = '+ idReview , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino la review' + idReview);
			res.redirect('/home')
		}
	});
}