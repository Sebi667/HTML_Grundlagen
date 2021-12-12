"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const hostname = 'localhost';
const port = 3000;
const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Content-Type", "application/json");
    let url = new URL(request.url || "", `http://${request.headers.host}`);
    if (url.pathname === "/") {
        response.write("Server erreichbar");
    }
    else if (request.method === "POST") {
        let input = "";
        let date;
        let output = "";
        request.on("data", (data) => {
            input += data;
        });
        request.on("end", () => {
            date = new Date(JSON.parse(input));
            console.log(date);
            output = "Tag: " + date.getDay() + ",";
            output += "Monat: " + date.getMonth() + ",";
            output += "Jahr: " + date.getFullYear();
            console.log(output);
        });
        console.log("Daten übergeben:");
        response.write(output);
    }
    else if (request.method === "GET") {
        let output = await convertDate(JSON.parse(url.searchParams.get("a")));
        console.log(output);
        response.write(output);
    }
    else {
        response.statusCode = 404;
    }
    response.end();
});
async function convertDate(dateS) {
    let date = new Date(dateS);
    let output = "";
    output += "Tag: " + date.getDay() + ",";
    output += "Monat: " + date.getMonth() + ",";
    output += "Jahr: " + date.getFullYear();
    return output;
}
server.listen(port, hostname, () => {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
//# sourceMappingURL=NodeServer.js.map