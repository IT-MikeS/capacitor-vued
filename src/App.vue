<template>
  <v-app>
    <loading-overlay/>
    <router-view/>
  </v-app>
</template>

<style lang="scss">

</style>
<script>
  import {Vue, Component} from "vue-property-decorator";
  import LoadingOverlay from "@/components/LoadingOverlay";

  @Component({components: {LoadingOverlay}})
  export default class App extends Vue {

  }
</script>