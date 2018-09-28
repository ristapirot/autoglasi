<template>
    <v-flex xs12>
      <v-card dark color="purple" height="190">
        <v-layout>
          <v-flex xs5>
            <v-img
              :src="car.imageHeader"
              height="125px"
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
    </v-flex>
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


