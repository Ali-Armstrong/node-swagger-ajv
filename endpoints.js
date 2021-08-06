


module.exports = function (app) {
	const Ajv = require("ajv");
    const ajv = new Ajv({ removeAdditional: true, strict : false }) // options can be passed, e.g. {allErrors: true}
    const swaggerFile = require('./swagger_output.json')


    app.get('/users/:id', (req, res) => {
        
        const filtro = req.query.filtro
        return res.status(200).send(data)

    })

    app.post('/users', (req, res) => {
        const validate = ajv.compile(swaggerFile.components.schemas)
        console.log(req.body)
        var isValid = validate(req.body);
        console.log(isValid,validate.errors)
        if(!isValid){
            return res.status(400).send(validate.errors)
        }
        const newUser = req.body

        if (true) {
            return res.status(201).send("success")
        }
        return res.status(500)
    })

}