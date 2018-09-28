<template>
  <div class="hello">
    <v-layout xs12 row justify-center class="my-4">
      <h1>Nova vozila</h1>
    </v-layout>
    <v-layout row xs12 class="mx-4" wrap justify-center>
      <v-flex v-for="car in newCars" :key="car.id" class="oglas" xs3>
        <Card :car="car" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  data () {
    return {
      newCars: [
        { id: 1, make: 'Mercedes-Benz', model: 'E220', year: '2012', price: '15400', seller: 'Nemanja Ristic', rating: 4, imageHeader: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/~I4AAOSwo9VbK9p3/$_57.jpg' },
        { id: 2, make: 'BMW', model: '320d', year: '2008', price: '5499', seller: 'Ceda Zdravkovic', rating: 3, imageHeader: 'https://i.ebayimg.com/00/s/MTA2NFgxNjAw/z/-m0AAOSwjuFbq2Qt/$_57.jpg' },
        { id: 3, make: 'BMW', model: '320d M paket', year: '2008', price: '8100', seller: 'Rade Madic', rating: 4, imageHeader: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/xnMAAOSwtAlbqn8n/$_57.jpg' },
        { id: 4, make: '', model: '', year: '', price: '', seller: '', rating: 4 },
        { id: 5, make: '', model: '', year: '', price: '', seller: '', rating: 4 },
        { id: 6, make: '', model: '', year: '', price: '', seller: '', rating: 4 },
        { id: 7, make: '', model: '', year: '', price: '', seller: '', rating: 4 },
        { id: 8, make: '', model: '', year: '', price: '', seller: '', rating: 4 }
      ]
    }
  },
  name: 'HelloWorld',
  components: {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 100%;
  }
  .oglas {
    padding: 0.1em;
  }
</style>
