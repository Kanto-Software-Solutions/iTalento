const conexion	= require('../database/db');

exports.createCertificate = (req,res) =>{
	const idCertificate = req.body.idCertificate;
	const name = req.body.name;
	const institution = req.body.institution;
	const year = req.body.year;


	conexion.query("INSERT INTO Certificate (idCertificate, name, institution, year) VALUES ( '" + idCertificate + "' ,'" + name + "' , '" + institution + "' , '" + year + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó el certificado ");
			res.redirect('/home');
		}
	});
}


exports.updateCertificate = (req,res) =>{
	const idCertificate = req.body.idCertificate;
	const name = req.body.name;
	const institution = req.body.institution;
	const year = req.body.year;

	let query = ('update Certificate set idCertificate =' + idCertificate + ' , name="'+name+'",institution="'+institution+ '", year = '+ year );
	conexion.query(query,(error,results)=>{
		if(error){
			console.log(error);
		}else{
			console.log("Se actualizo el certificados: ");
			res.redirect('/home');
		}
	});
}

exports.deleteCertificate= (req,res) => {
	const idCertificate = req.body.idCertificate;
	conexion.query('delete from Certificate where id = '+ idCertificate , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino el Certificado' + idCertificate);
			res.redirect('/home')
		}
	});
}