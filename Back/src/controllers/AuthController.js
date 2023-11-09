exports.myUsuario = (req, res) => {
	res.json({estado: req.oidc.isAuthenticated() ,'usuario':[req.oidc.user]});	
}