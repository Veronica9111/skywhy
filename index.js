var server = require("./server");
var router = require("./route");
var coreIndex = require("./core/index");

var handle = {}
handle = coreIndex.getUrls();

server.start(router.route, handle);



