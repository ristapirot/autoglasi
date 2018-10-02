<template>
    <v-bottom-nav
    :active.sync="bottomNav"
    :color="color"
    :value="true"
    absolute
    shift
    >
    <v-btn dark>
        <span>Pretraga</span>
        <v-icon>search</v-icon>
    </v-btn>

    <v-btn dark>
        <span>Postavi oglas</span>
        <v-icon>add_circle_outline</v-icon>
    </v-btn>

    <v-btn dark>
        <span>Uloguj se</span>
        <v-icon>exit_to_app</v-icon>
    </v-btn>
    </v-bottom-nav>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 2
      }
    },

    computed: {
      color () {
        switch (this.bottomNav) {
          case 0: return 'indigo'
          case 1: return 'purple'
          case 2: return 'blue'
        }
      }
    }
  }
</script>
