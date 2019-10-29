
module.exports = function (express, app) {
    require('./prefix')(express, app)

    app.prefix('/api', (router) => {
        router.get('/', function (req, res) {
            res.send('Hello World!')
        })
    })
}