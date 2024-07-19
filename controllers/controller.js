const model = require('../model/model')
const dashboard = (req,res)=>{
    res.render('index')
}

const registerUser = (req,res)=>{
    let form = new model(req.body)
    console.log(form)
    form.save()
    res.redirect('/user')
}





module.exports = {dashboard,registerUser}