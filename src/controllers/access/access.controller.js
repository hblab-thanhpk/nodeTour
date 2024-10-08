'use strick'



class AccessController {
    signUp = async (req, res, next) => {
        try {
            console.log(`::[P]::`, req.body)
            return res.status(201).json(AccessService.signUp)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AccessController()