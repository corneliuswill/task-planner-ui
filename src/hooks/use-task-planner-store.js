import create from 'zustand';
import { getOptions } from '../utils/api-utils';

export const useTaskPlannerStore = create((set) => ({
    lists: {},
    fetchLists: async (listUrl) => {
        const response = await fetch(listUrl, getOptions('ABCDE'));
        set({ lists: await response.json() })
    }
}))
