function enableCors(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // You can replace http://127.0.0.1:5500/ with "*"
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
}

module.exports = enableCors;
