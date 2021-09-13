module.exports = {
    port: 2300,
    version: "/v1",
    basePath: "/task-planner",
    mocks: [
        "../task-planner-ui/server/mocks"
    ],
    routes: [
        "../task-planner-ui/server/routes"
    ],
    self: "../task-planner-ui/server/config.js"
}