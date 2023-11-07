exports.myUsuario = async (req, res) => {
	if (!req.oidc.isAuthenticated()) {
		res.send(false);
	} else {
		res.send(JSON.stringify(req.oidc.user));
	}
}