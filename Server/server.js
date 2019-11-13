const http = require('http');
const fs = require('fs');

fs.readFile('./index.html', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    if (data) {
        const server = http.createServer((req, res) => {
            console.log(req.url);
            res.end(data);
        });
        const io = require('socket.io')(server);
        
        let messages = [];
        io.on('connection', client => {
            client.io('firstConnection', () => client.emit('message', messages));
            client.io('message', data => {
                messages.push(data);
                io.emit('message', messages);
            });
        });
        
        server.listen(3000);
    }
});

