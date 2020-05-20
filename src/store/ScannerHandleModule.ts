import {ScannerHandleModuleState, ScannerResult} from '@/utils/interfaces';

export const ScannerHandleModule = {
    namespaced: true,
    state: {
        scannerResults: {
            source: '',
            labelType: '',
            dataDispatchTime: 0,
            dataString: ''
        },
    },
    getters: {
        getScannerResults: (state: ScannerHandleModuleState): ScannerResult => {
            return state.scannerResults;
        },
    },
    mutations: {
        setScannerResults: (state: ScannerHandleModuleState, payload: any) => {
            state.scannerResults = payload;
        },
    },
}