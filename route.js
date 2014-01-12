function route(handle, pathname, response) {
    console.log('Route a request for ' + pathname + '...');
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    }
    else {
        console.log('No request handler found for ' + pathname);
        /*TODO Add not found handler*/
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Opps, 404 Not Found");
        response.end();
    }
}

exports.route = route;
