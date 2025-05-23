import { createSelector } from "@reduxjs/toolkit";

export const selectErrors = state => state.errors;

export const selectAuth = state => state.auth;

export const selectLists = state => state.lists;
export const selectListsById = state => state.lists.byId;
export const selectListsIds = state => state.lists.allIds;

export const selectTasks = state => state.tasks;
//export const selectTasksById = (state, id) => state.tasks.byId[id];
export const selectTasksIds = state => state.tasks.allIds;

export const selectNotifications = state => state.notifications;
export const selectNotificationsById = state => state.notifications.byId;
export const selectNotificationsIds= state => state.notifications.allIds;

export const selectUser = state => state.user;

export const selectFilteredTasks = (state, filter) => state.tasks.byId.filter(task => task.text.includes(filter));

export const selectTaskById = createSelector([selectTasks], (tasks, id) => tasks.byId[id])