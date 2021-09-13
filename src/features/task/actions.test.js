import * as actions from './actions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Wash car';
    const expectedAction = {
      type: actions.ACTION_TYPES.ADD_TASK,
      text
    }
    expect(actions.addTaskAction(text)).toEqual(expectedAction)
  })
})