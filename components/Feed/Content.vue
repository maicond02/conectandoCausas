<template>
    <div>
        <Card class="container-card">
            <template #content>
                <div class="grid">
                    <div 
                        v-for="ong in ongStore.ongsData" 
                        :key="ong.id" 
                        class="col-12 sm:col-4"
                    >
                        <Card class="ong-card" @click="redirectToOngSelected(ong.id)">
                            <template #content>
                                <div>
                                    
                                </div>
                            </template>
                        </Card>
                        <div class="flex">
                            <p>{{ ong.name }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script lang="ts">

import {useOngStore} from "@/stores/ongs"

export default {
    data() {
        return {
            ongStore: useOngStore(),
        }
    },
    methods: {
        redirectToOngSelected(id:number){
            this.$router.push('/feed/ong')
            console.log(id)
        }
    },
    mounted(){
        this.ongStore.getOngsData()
    }
}
</script>

<style>
    .ong-card {
        background-color: rgb(255, 255, 255) !important;
        height: 200px;
    }
    .container-card {
        background-color: transparent !important;
        border: solid 3px rgb(65, 65, 65);
    }
</style>
