const handleHttpError = (res, message='Error En Alguna Parte', code=403) =>{
    res.status(code)
    res.send({error:message})
}

module.exports = {handleHttpError}