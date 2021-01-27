
module.exports = function (req, res, next) {
    if (req.headers.usertype && (req.headers.usertype == 'Admin' || req.headers.usertype == 'admin')) {
        req.usertype=req.headers.usertype
        next()
    } else {
        return res.status(500).send({
            message:
                'You have not rights to this task'
        });
    }
}