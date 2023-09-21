function isAuthenticated(req, res, next){
    let isInDevelopment=true
    if (req.session.email){
        console.log(req.session.email)
        return req.session.email
    }
    if(isInDevelopment){
        req.session.email="luishcaraveo@gmail.com"
        return req.session.email
    }
    return null
}
module.exports= isAuthenticated