/*
Comando para crear la tabla en la base de datos

CREATE TABLE IF NOT EXISTS `mydb`.`Baned` (
  `idReport` INT NOT NULL AUTO_INCREMENT,
  `idUser` INT NOT NULL,
  `nameUser` VARCHAR(45) NOT NULL,
  `reason` VARCHAR(2000) NOT NULL,
  `nameUserReport` VARCHAR(45) NOT NULL,
  `timeAtReport` TIMESTAMP NOT NULL,
  
  PRIMARY KEY (`idUser`,`idReport`),
  CONSTRAINT `fk_Banned_User1`
	    FOREIGN KEY (`idUser`)
    REFERENCES `mydb`.`User` (`idUser`)
)
ENGINE = InnoDB;
*/

const conexion	= require('../database/db');

exports.createReport = (req,res) =>{
	const idUser = req.body.idUser;
	const nameUser = req.body.nameUser;
	const reason = req.body.reason;
	const nameUserReport = req.body.nameUserReport;
    const timeAtReport = req.body.timeAtReport;

	conexion.query("INSERT INTO Baned (idUser, nameUser, reason, nameUserReport, timeAtReport) VALUES ( '" + idUser + "' ,'" + nameUser + "' ,'" + reason + "' ,'" + nameUserReport + "' ,'" + timeAtReport + ")", (error, results) => {
		if(error){
			console.log(error);
		}else{
			console.log("Se agregó el reporte ");
			
		}
	});
}



exports.deleteReport = (req,res) => {
	const idReport = req.body.idReport;
	conexion.query('delete from Baned where id = '+ idReport , (error,results) =>{
		if(error){
			console.log(error);
		}else{
			console.log('Se elimino el reporte' + idReport);
			
		}
	});
}

exports.getReport = (req,res) => {
	const idReport = req.body.idReport;
	conexion.query("SELECT * FROM Baned WHERE idOrder = " + idReport, (error,results) => {
		if(error){
			console.log(error);
		}else{
			res.json({results:results});
		}
	});
};