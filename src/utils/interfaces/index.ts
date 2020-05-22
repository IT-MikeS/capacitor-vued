export interface LoadingOverlayModuleState {
    loadingTasks: {[key: string]: string};
    loadingTasksLength: number;
    loadingTasksKeys: string[];
}

export interface LoadingTask {
    uuid: string;
    taskName: string;
}
