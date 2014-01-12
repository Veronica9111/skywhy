var requestHandlers = require('./requestHandlers');

function getUrls() {
    var handle = {}
    handle["/"] = requestHandlers.frontpage;
    handle["/frontpage"] = requestHandlers.frontpage;
    return handle;
}

exports.getUrls = getUrls;
