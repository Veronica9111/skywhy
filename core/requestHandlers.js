var page = require('./frontpage');

function frontpage(response) {
    console.log('Request handler frontpage was called');
    page.layout();
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello SKY');
    response.end();
}

exports.frontpage = frontpage;
