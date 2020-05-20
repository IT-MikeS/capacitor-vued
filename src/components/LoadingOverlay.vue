<template>
    <div
        v-if="$store.state.LoadingOverlay.loadingTasksLength >= 1"
        style="width: 100vw; height: 100vh; position: absolute; top: 0; left: 0;background-color: rgba(255,255,255,0.9); z-index: 999"
        class="loaderWrapper"
    >
        <div style="margin-left: calc(50vw - 25px); margin-top: calc(50vh - 60px);">
            <keep-alive>
                <breeding-rhombus-spinner
                    :animation-duration="1000"
                    :size="60"
                    :color="'#409EFF'"
                ></breeding-rhombus-spinner>
            </keep-alive>
            <br/>
            <div style="margin-left: -5px;">Loading...</div>
            <br/>
            <div style="position: absolute; bottom: 4px; left: 6px;">
                <p style="text-decoration: underline; font-weight: bold; margin-bottom: 6px;">Current Tasks:</p>
                <p v-for="task in $store.state.LoadingOverlay.loadingTasksKeys" v-bind:key="task">
                    - {{$store.state.LoadingOverlay.loadingTasks[task]}}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from  'vue-property-decorator';
    import BreedingRhombusSpinner from 'epic-spinners/src/components/lib/BreedingRhombusSpinner.vue';

    @Component({components: {BreedingRhombusSpinner}})
    export default class LoadingOverlay extends Vue {

    }
</script>

<style scoped lang="scss">
    .loaderWrapper {
        animation: slideup 0.7s;
    }

    @keyframes slideup {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>