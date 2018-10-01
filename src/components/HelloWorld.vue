<template>
  <div class="hello">
    <div class="logo">
      <v-layout xs12 justify-center align-center>
        <div>
          <span style="color: #2196F3" class="display-2 font-weight-black">Aut</span><i class="fa fa-cog" style="font-size: 2.5em; color: "></i><span class="font-weight-light display-1" style="color: #9C27B0">glasi</span>
        </div>
      </v-layout>
    </div>
    <div class="home-content">
      <div class="new-cars">
        <v-layout column>
          <v-flex xs6 v-for="car in newCars" :key="car.id">
            <Card 
            :car="car" />
          </v-flex>
        </v-layout>
      </div>
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import Card from './Card.vue'
import BottomNav from './BottomNav.vue'

export default {
  data () {
    return {
      newCars: [
        { id: 1, make: 'Mercedes-Benz', model: 'E220', year: '2012', price: '15400', seller: 'Nemanja Ristic', rating: 4, imageHeader: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/~I4AAOSwo9VbK9p3/$_57.jpg' },
        { id: 2, make: 'BMW', model: '320d', year: '2008', price: '5499', seller: 'Ceda Zdravkovic', rating: 3, imageHeader: 'https://i.ebayimg.com/00/s/MTA2NFgxNjAw/z/-m0AAOSwjuFbq2Qt/$_57.jpg' },
        { id: 3, make: 'BMW', model: '320d M paket', year: '2008', price: '8100', seller: 'Rade Madic', rating: 4, imageHeader: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/xnMAAOSwtAlbqn8n/$_57.jpg' }
      ]
    }
  },
  name: 'HelloWorld',
  components: {
    Card,
    BottomNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    height: 100%;
  }
</style>
