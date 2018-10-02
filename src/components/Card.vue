<template>
    <v-card>
        <v-img
            :src="car.imageHeader"
            height="200px"
        >
            <v-container
            fill-height
            fluid
            pa-2
            >
            <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                    <div class="title white--text">
                        <v-chip color="blue" text-color="white">{{ car.make }} {{ car.model }}</v-chip>
                        <v-chip color="blue" text-color="white">{{ car.year }}</v-chip>
                    </div>
                </v-flex>
            </v-layout>
            </v-container>
        </v-img>

        <v-card-actions>
            <div class="title white--text">
                <v-chip text-color="purple" class="title"><i class="material-icons">euro_symbol</i>{{ car.price }}</v-chip>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon>
            <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
            <v-icon>share</v-icon>
            </v-btn>
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
            }
        }
    }
</script>

<style scoped>

</style>


