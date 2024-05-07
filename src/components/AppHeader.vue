<template>
  <v-app-bar app color="indigo" dark>
    <v-toolbar-title>
      <router-link to="/">
        <v-img
          height="40"
          src="@/assets/logo.png"
        />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text="Настройки" to="/customization"></v-btn>
    <v-btn text="Order Book" to="/order"></v-btn>
  </v-app-bar>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader'
})
</script>



<style scoped lang="sass">

</style>
