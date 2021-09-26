import * as actions from './actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Wash car';
    const expectedAction = {
      type: 'ADD_TASK',
      task: {
        isComplete: false,
        isImportant: false,
        lists: [undefined],
        text: "Wash car"
      }
    }

    const actual = actions.addTaskAction(text);
    expectedAction.task.id = actual.task.id;
    expectedAction.task.timestamp = actual.task.timestamp;
    expect(actual).toEqual(expectedAction)
  })
})