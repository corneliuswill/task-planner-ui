import { actions as listsActions } from '../features/lists';
import { actions as tasksActions } from '../features/tasks';
import { actions as notificationActions } from '../features/notifications';
import { loadfromLocalStorage } from './common/utils/app-utils';

export function initialze() {
    return (dispatch) => {
        dispatch(listsActions.getListsAction()).then((data) => {
            localStorage.setItem('lists', JSON.stringify(data.payload));
            dispatch(tasksActions.getTasksAction()).then((data) => {
                localStorage.setItem('tasks', JSON.stringify(data.payload));
            });
            dispatch(notificationActions.getNotificationsAction()).then((data) => {
                localStorage.setItem('notifications', JSON.stringify(data.payload));
            });
        });
    }
}
export function initialzeFromLocalStorage() {
    return (dispatch) => {
        //TODO: update to use localStorage for data persistence when running in development mode
        loadfromLocalStorage('lists').then(lists => {
            console.log('lists', JSON.parse(lists));
            dispatch(listsActions.setListsAction(JSON.parse(lists)));
            loadfromLocalStorage('tasks').then(tasks => {
                console.log('tasks', JSON.parse(tasks));
            }).catch(error => {
                console.log(error);
            });
        }).catch(error => {
            console.log(error);
        });

        loadfromLocalStorage('notifications').then(notifications => {
            console.log('notifications', JSON.parse(notifications));
        }).catch(error => {
            console.log(error);
        });
    }
}