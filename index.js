const path = require('path')
const fs = require('fs')
const http = require('http')

const server = http.createServer((request, response) => {
    if(request.url === '/'){
        let filePath = path.join(__dirname, 'david', 'index.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            response.writeHead(200, {'content-Type': 'text/html'})
            response.end(data)
        })
        

    }
})
const port = 5000
server.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})