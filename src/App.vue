<template>
  <div id="app">
    <loading-overlay/>
    <scanner-handle/>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import {Vue, Component} from "vue-property-decorator";
  import LoadingOverlay from "@/components/LoadingOverlay";
  import ScannerHandle from "@/components/ScannerHandle";

  @Component({components: {ScannerHandle, LoadingOverlay}})
  export default class App extends Vue {

  }
</script>