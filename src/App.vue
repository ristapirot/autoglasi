<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="noAction">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="noAction">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="color: #E040FB" class="display-1"><span style="color: #448AFF">Aut</span><span style="color: white;">O</span>glasi</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn round outline>Uloguj se</v-btn>
      <v-btn round outline>Registruj se</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout justify-center>
          <v-flex xs3 class="px-2">
            <v-select outline :items="make" @change="selectMake" v-model="selectedMake" label="Marka">
            </v-select>
          </v-flex>
          <v-flex xs3 class="px-2">
            <v-select outline :items="filteredModel" label="Model">
            </v-select>
          </v-flex>
        </v-layout>
        <v-layout justify-center wrap>
          <v-flex shrink v-for="car in newCars" :key="car.id" class="px-2" xs3>
            <Card :car="car" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Card from './components/Card.vue'

  export default {
    data: () => ({
      drawer: true,
      selectedMake: '',
      newCars: [
        { id: 1, make: 'Mercedes-Benz', model: 'E220', year: '2012', price: '15400', seller: 'Nemanja Ristic', rating: 4, imageHeader: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/~I4AAOSwo9VbK9p3/$_57.jpg' },
        { id: 2, make: 'BMW', model: '320d', year: '2008', price: '5499', seller: 'Ceda Zdravkovic', rating: 3, imageHeader: 'https://i.ebayimg.com/00/s/MTA2NFgxNjAw/z/-m0AAOSwjuFbq2Qt/$_57.jpg' },
        { id: 3, make: 'BMW', model: '320d M paket', year: '2008', price: '8100', seller: 'Rade Madic', rating: 4, imageHeader: 'https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/xnMAAOSwtAlbqn8n/$_57.jpg' }
      ],
      make: ['Audi', 'BMW'],
      model: [{ title: 'A6', make: 'Audi' }, { title: '320d', make: 'BMW' }],
      filteredModel: []
    }),
    props: {
      source: String
    },
    components: {
      Card
    },
    methods: {
      noAction () {
      },
      selectMake () {
        this.filteredModel = this.model.filter(el => el.make === this.selectedMake).map(el => el.title)
      }
    }
  }
</script>