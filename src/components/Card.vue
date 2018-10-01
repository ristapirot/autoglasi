<template>
    <v-card dark color="purple" height="auto">
      <v-layout>
        <v-flex xs12>
          <v-img
            :src="car.imageHeader"
            height="135px"
            contain
            style="cursor: pointer"
            @click="noAction"
          ></v-img>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            <div>
              <div class="title my-1" @click="noAction" style="cursor: pointer">{{this.car.make}} {{this.car.model}}</div>
              <div class="my-1 subheading" style="display: flex; align-items: center">{{this.car.price}} <v-icon style="font-size: 1em">euro_symbol</v-icon></div>
              <div class="my-1">({{this.car.year}})</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions class="pa-3">
          <v-chip color="blue" text-color="white" @click="noAction">
              <v-avatar>
                  <v-icon>account_circle</v-icon>
              </v-avatar>
              {{this.car.seller}}
          </v-chip>
        <v-spacer></v-spacer>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
      </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: [
            'car'
        ],
        methods: {
            noAction() {
                console.log('hello')
            }
        }
    }
</script>

<style scoped>

</style>


