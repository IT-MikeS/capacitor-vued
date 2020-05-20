<template>
    <div style="display: none;"></div>
</template>

<script lang="ts">
    import {Vue, Component} from 'vue-property-decorator'

    @Component
    export default class ScannerHandle extends Vue {

        mounted() {
            // eslint-disable-next-line
            // @ts-ignore
            if(window && window.plugins && window.plugins.intentShim) {
                console.log("INTENTS LOADED");
                // eslint-disable-next-line
                // @ts-ignore
                window.plugins.intentShim.registerBroadcastReceiver({
                    filterActions: [
                        'crofters.two.FGSCAN',
                    ],
                },
                (intent: any) => {
                    this.$store.commit('ScannerHandler/setScannerResults', {
                        source: intent['extras']['com.symbol.datawedge.source'],
                        // eslint-disable-next-line @typescript-eslint/camelcase
                        labelType: intent['extras']['com.symbol.datawedge.label_type'],
                        // eslint-disable-next-line @typescript-eslint/camelcase
                        dataDispatchTime: intent['extras']['com.symbol.datawedge.data_dispatch_time'],
                        // eslint-disable-next-line @typescript-eslint/camelcase
                        dataString: intent['extras']['com.symbol.datawedge.data_string'],
                    });
                    // console.log()
                });
            }
        }
    }
</script>