const PORT = process.env.PORT || 3000

const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.get('/', function (req, res) {
    console.log (req.url)
    return res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
    return socket.on('chat message', function (msg) {
        io.emit('chat message', msg)
        console.log(msg)
        return
    })
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`))


