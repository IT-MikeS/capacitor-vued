export interface LoadingOverlayModuleState {
    loadingTasks: {[key: string]: string};
    loadingTasksLength: number;
    loadingTasksKeys: string[];
}

export interface LoadingTask {
    uuid: string;
    taskName: string;
}

export interface ScannerResult {
    source: string;
    labelType: string;
    dataDispatchTime: number;
    dataString: string;
}

export interface ScannerHandleModuleState {
    scannerResults: ScannerResult;
}