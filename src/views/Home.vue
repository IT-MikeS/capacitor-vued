<template>
  <div>
    <v-app-bar color="blue darken-1" dark>
      <v-toolbar-title>TITLE HERE</v-toolbar-title>
    </v-app-bar>

    <div class="main-page">

    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator";
  import {v4 as uuid4} from 'uuid';
  import {serverAddress} from '@/utils/consts';

  @Component
  export default class HomePage extends Vue {
    someData: string | null = null;

    mounted() {
      this.setupPage();
    }

    async setupPage() {
      await this.$capacitorPlugins.SplashScreen.hide();
      await this.loadSomeData();
    }

    async loadSomeData() {
      const uuid = uuid4();
      await this.$store.commit('LoadingOverlay/startLoadingTask', {uuid, taskName: 'Gathering Some Data...'});
      try {
        const resp = await fetch(`${serverAddress}/someData`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({id: 'TEST_ID'})
        })
        this.someData = await resp.json();
      } catch (e) {
        console.error(e.message);
      } finally {
        await this.$store.commit('LoadingOverlay/finishLoadingTask', uuid);
      }
    }
  }
</script>

<style lang="scss">
  .main-page {
    height: calc(100vh - 56px);
    width: 100vw;
  }
</style>
