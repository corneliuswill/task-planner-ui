(function() {
    window.API = window.API || {};

    let todos = {
        "wb3m1rcbu3t98qsb39iv": {
            id: 'wb3m1rcbu3t98qsb39iv',
            user: 'johndoe',
            text: 'File taxes',
            timestamp: 1593832839363
        },
        "fgwr7ihtkgo3tw4rgigjuz": {
            id: 'fgwr7ihtkgo3tw4rgigjuz',
            user: 'johndoe',
            text: 'Walk Fluffy',
            timestamp: 1593833276161,
            completed: false
        },
        "37aujumzbtlq6e79ng0iu9": {
            id: '37aujumzbtlq6e79ng0iu9',
            user: 'johndoe',
            text: 'Cut the grass',
            timestamp: 1593833302392,
            completed: false
        },
        "wdtk9jjlr84oaks2mq90t": {
            id: 'wdtk9jjlr84oaks2mq90t',
            user: 'janedoe',
            text: 'Laundry',
            timestamp: 1593833321862,
            completed: false
        },
        "f5cfie6y7crwa6po641uso": {
            id: 'f5cfie6y7crwa6po641uso',
            user: 'janedoe',
            text: 'Go for a walk',
            timestamp: 1593833348668,
            completed: false
        }
    }

    let users = {
    "johndoe@dexample.com": {
            id: 'johndoe',
            name: 'John Doe',
            email: 'johndoe@dexample.com',
            avatarURL: 'images/avatars/male-02.jpeg',
            todos: ['wb3m1rcbu3t98qsb39iv', 'fgwr7ihtkgo3tw4rgigjuz', '37aujumzbtlq6e79ng0iu9'],
        },
        "janedoe": {
            id: 'janedoe',
            name: 'Jane Doe',
            email: 'janedoe@example.com',
            avatarURL: 'images/avatars/janedoe.png',
            todos: ['wdtk9jjlr84oaks2mq90t', 'f5cfie6y7crwa6po641uso'],
        }
    }

    API.todos = (request = { method : 'get' }) => {
        let response;
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    switch(request.method) {
                        case 'get':
                            response = {
                                status: 200,
                                todoById: {
                                    ...todos
                                }
                            }

                            resolve({...response});
                            return;
                        case 'post':
                            response = {
                                status: 200,
                                todoById: {
                                    ...todos,
                                    [request.body.id]: request.body
                                }
                            };
                            resolve(response);
                            return; 
                        default:
                            resolve({ status: 400, message: 'Bad Request' });
                    }
                }, 1000)
            } catch(error) {
                reject(`Error getting todos: ${error}`);
            }
        })
    }

    API.users = (request) => {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    switch(request.method) {
                        case 'get':
                            resolve(users);
                            return;
                        case 'post':
                            return;
                        default:
                            resolve({ satus: 400, message: 'Bad Request'})
                    }
                }, 1000);
            } catch(error) {
                reject('Error calling users');
            }
        })
    }
}())