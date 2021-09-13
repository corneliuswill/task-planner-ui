const lists = require('../mocks/lists');
const tasks = require('../mocks/tasks');
const notifications = require('../mocks/notifications');

module.exports = function(app) {
    const config = {
        version: '/v1',
        basePath: '/task-planner'
    }

    app.get('/', (req, res) => {
        const welcome = `
        <pre>
          Welcome to the Todo API!

          Use an Authorization header to work with your own data:

          fetch(url, { headers: { 'Authorization': 'whatever-you-want' }})

          The following endpoints are available:

          GET /tasks
          DELETE /tasks/:id
          POST /tasks { name, handle, avatarURL }
        </pre>
        `
        res.send(welcome);
    });

    app.get(`${config.version}${config.basePath}/lists`, (req, res) => {
        res.json(lists);
    });

    app.get(`${config.version}${config.basePath}/lists/:id`, (req, res) => {
        const id = parseInt(req.params.id);

        res.json(lists.filter(list => list.id === id)[0]);
    });

    app.post(`${config.version}${config.basePath}/lists`, (req, res) => {
        const body = req.body;

        res.json({
            "id": Math.floor(Math.random() * 99),
            "type": "CUSTOM",
            "name": body.name,
            "isVisible": true
        });
    });

    app.put(`${config.version}${config.basePath}/lists`, (req, res) => {
        const body = req.body;

        res.json({
            "id": body.id,
            "type": "CUSTOM",
            "name": body.name,
            "isVisible": true
        });
    });

    app.delete(`${config.version}${config.basePath}/lists/:id`, (req, res) => {
        const id = parseInt(req.params.id);

        res.json(lists.filter(list => list.id !== id));
    });

    app.get(`${config.version}${config.basePath}/tasks`, (req, res) => {
        res.json(tasks);
    });

    app.get(`${config.version}${config.basePath}/tasks/:id`, (req, res) => {
        res.json(lists);
    });

    app.delete(`${config.version}${config.basePath}/tasks/:id`, (req, res) => {
        const id = parseInt(req.params.id);

        res.json(tasks.filter(task => task.id !== id));
    });

    app.get(`${config.version}${config.basePath}/notifications`, (req, res) => {
        res.json(notifications);
    });

    app.get(`${config.version}${config.basePath}/notifications/:id`, (req, res) => {
        res.json(notifications);
    });
}