import {LoadingOverlayModuleState, LoadingTask} from '@/utils/interfaces';

export const LoadingOverlayModule = {
    namespaced: true,
    state: {
        loadingTasks: {},
        loadingTasksLength: 0,
        loadingTasksKeys: [],
    },
    getters: {
        getLoadingTasks: (state: LoadingOverlayModuleState) => {
            return state.loadingTasks;
        },
    },
    mutations: {
        startLoadingTask: (state: LoadingOverlayModuleState, {uuid, taskName}: LoadingTask) => {
            state.loadingTasks['' + uuid] = taskName;
            state.loadingTasksLength += 1;
            state.loadingTasksKeys = Object.keys(state.loadingTasks);
        },
        finishLoadingTask: (state: LoadingOverlayModuleState, uuid: string) => {
            delete state.loadingTasks[uuid];
            state.loadingTasksLength -= 1;
            state.loadingTasksKeys = Object.keys(state.loadingTasks);
        }
    },
}