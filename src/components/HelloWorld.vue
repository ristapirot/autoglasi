<template>
  <div class="hello">
    <div class="logo">
      <v-layout xs12 justify-center align-center class="my-3">
        <div>
          <span style="color: #2196f3" class="display-2 font-weight-black">Aut</span><i class="fa fa-cog" style="font-size: 2.5em; color: "></i><span class="font-weight-light display-1" style="color: #9C27B0">glasi</span>
        </div>
      </v-layout>
    </div>
    <div class="search">
    </div>
    <div class="home-content">
      <v-layout justify-center>
        <v-flex xs12 sm6>
          <v-card>
            <v-container
              fluid
              grid-list-md>
              <v-layout
                row wrap>
                <v-flex 
                  v-for="car in newCars"
                  :key="car.id"
                  xs6>
                  <Card :car="car" />           
                </v-flex>  
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import BottomNav from './BottomNav.vue'
import Card from './Card.vue'
import SearchBar from './SearchBar.vue'

export default {
  data () {
    return {
      newCars: [
        { id: 1, make: 'Mercedes-Benz', model: 'E220', year: '2012', price: '15400', seller: 'Nemanja Ristic', rating: 4, imageHeader: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/~I4AAOSwo9VbK9p3/$_57.jpg' },
        { id: 2, make: 'BMW', model: '320d', year: '2008', price: '5499', seller: 'Ceda Zdravkovic', rating: 3, imageHeader: 'https://i.ebayimg.com/00/s/MTA2NFgxNjAw/z/-m0AAOSwjuFbq2Qt/$_57.jpg' },
        { id: 3, make: 'BMW', model: '320d M paket', year: '2008', price: '8100', seller: 'Rade Madic', rating: 4, imageHeader: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/xnMAAOSwtAlbqn8n/$_57.jpg' }
      ],
      items: ['foo', 'bar', 'fizz', 'buzz'],
      value: ['foo', 'bar', 'fizz', 'buzz']
    }
  },
  methods: {
  },
  name: 'HelloWorld',
  components: {
    BottomNav,
    Card,
    SearchBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    height: 100%;
  }
  .search {
    display: flex;
  }

</style>
