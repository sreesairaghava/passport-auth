const Joi = require('@hapi/joi');

module.exports = registerValidation=(data)=>{
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}).required(),
        password:Joi.string().min(6).max(15).required()
    })
    return schema.validate(data);
}
module.exports = loginValidation=()=>{

}