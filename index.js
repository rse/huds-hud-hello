
module.exports = class Server {
    use (latching, { log }) {
        log(2, "hello world on the server side")
    }
    unuse (latching) {
    }
}

