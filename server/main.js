let childprocess = require('child_process');

const config = require('./config');

function startServer(script, config, routes, callback) {
    let invoked = false;

    //process = childprocess.fork(script, [JSON.stringify(config), JSON.stringify(routes)]);
    process = childprocess.fork(script, [config, routes]);

    process.on('error', function(error) {
        if (invoked) return;
        invoked = true;
        callback(error);
    });

    process.on('exit', function(code) {
        if (invoked) return;
        invoked = true;
        let error = code === 0 ? null : new Error(`exit code ${code}`);
        callback(error);
    });
}

// TODO: Switch to Mirage JS for API mocking
startServer('../mock-server/server.js', config.self, config.routes, function(error){
    console.log('callback', 'Callback called');
});
