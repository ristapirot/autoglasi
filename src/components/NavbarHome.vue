<template>
  <v-navigation-drawer permanent>
    <v-toolbar flat>
      <v-list style="background-color: white">
        <v-list-tile>
          <v-list-tile-title class="display-1" style="height: auto; display: flex; justify-content: center">
            <span style="color: #AB47BC" class="font-weight-black">Aut</span><i class="fa fa-cog"></i><span class="font-weight-light" style="color: #4FC3F7">glasi</span>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-3">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="noAction"
        style="display: flex; justify-content: center"
        class="my-1"
      >
        <div class="text-xs-center">
            <v-btn round color="purple" style="width: 200px; justify-content: center" outline><v-icon>{{ item.icon }}</v-icon><span style="width: 150px">{{ item.title }}</span></v-btn>
        </div>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Pocetna', icon: 'home' },
          { title: 'Auta', icon: 'directions_car' },
          { title: 'Prijavi se', icon: 'exit_to_app' }
        ],
        right: null
      }
    },
    methods: {
        noAction () {

        }
    }
  }
</script>

<style scoped>
</style>
