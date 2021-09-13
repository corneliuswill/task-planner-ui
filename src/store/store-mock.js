export const store = {
    lists: {
        allIds: [1, 2, 3, 4, 5, 6],
        byId: {
          1: {
            id: 1,
            name: 'Important',
            tasks: []
          },
          2: {
            id: 2,
            name: 'Today',
            tasks: []
          },
          3: {
            id: 3,
            name: 'Tomorrow',
            tasks: []
          },
          4: {
            id: 4,
            name: 'This Week',
            tasks: []
          },
          5: {
            id: 5,
            name: 'Completed',
            tasks: []
          },
          6: {
            id: 6,
            name: 'All Tasks',
            tasks: []
          }
        }
    },
    tasks: {
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
    },
    ui: {

    },
    user: {
        id: 'johndoe',
        name: 'John Doe',
        email: 'johndoe@dexample.com',
        avatarURL: 'images/avatars/male-02.jpeg',
        tasks: ['wb3m1rcbu3t98qsb39iv', 'fgwr7ihtkgo3tw4rgigjuz', '37aujumzbtlq6e79ng0iu9']
    }
}