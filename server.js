const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('request made');
});

server.listen(3000, 'localhost', ()=>{
    console.log('we are here for requests on poort 3000')
})