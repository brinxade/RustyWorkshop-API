const Logger = require('./logger').Logger;
let stdin = process.openStdin();

stdin.addListener("data", function(d) {
    let input = d.toString().trim();

    switch(input) {
        case "clear":
            console.clear();
            Logger.Server("Cleared screen");
            break;

        case "status":
            Logger.Server(`Running on http://localhost:${process.env.PORT || process.env.DEFAULT_PORT}/`);
            break;

        case "quit":
            process.exit(0);
            break;

        default:
            Logger.Server("Invalid Command");
            break;
    }
});