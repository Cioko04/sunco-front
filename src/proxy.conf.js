const PROXY_CONFIG = [
    {
        context: [
            "/one/distinct",
            "/one/repeated",
            "/two/distinct",
            "/two/repeated",
            "/three/distinct",
            "/three/repeated",
            "/four/distinct",
            "/four/repeated",
        ],
        target: "http://localhost:8080",
        secure: false
    }
]

module.exports = PROXY_CONFIG;