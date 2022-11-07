import { configureStore} from "@reduxjs/toolkit";

import { listsReducer } from '../features/lists/lists-slice';

export const store = configureStore({
    reducer: {
        lists: listsReducer
    },
});