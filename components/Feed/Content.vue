<template>
    <div>
        <Card>
            <template #content>
                <div class="grid">
                    <div 
                        v-for="ong in ongStore.ongsData" 
                        :key="ong.id" 
                        class="col-12 sm:col-4"
                    >
                        <div class="ong-card cursor-pointer shadow-3" @click="redirectToOngSelected(ong.id)">
                            <div class="flex align-items-center justify-content-center">
                                <Image :src="ong.pic" alt="Image" width="150" />
                            </div>
                            <div class="flex align-items-center justify-content-center">
                                <p>{{ ong.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script lang="ts">

import {useOngStore} from "@/stores/ongs"
import {useMenuStore} from "@/stores/menu"
import {useUserStore} from '@/stores/users'

export default {
    data() {
        return {
            ongStore: useOngStore(),
            menuStore: useMenuStore(),
            userStore:useUserStore(),
            isHovered: false
        }
    },
    methods: {
        redirectToOngSelected(id:number){
            this.$router.push('/feed/ong')
            console.log(id)
        },
        elevationCard(){

        }
    },
    mounted(){
        this.ongStore.getOngsData()
        this.menuStore.loadNavbarItems(this.userStore.userAutenticado.isOng)
    }
}
</script>

<style>
    .ong-card {
        background-color: rgb(255, 255, 255) !important;
        height: 200px;
    }
</style>
