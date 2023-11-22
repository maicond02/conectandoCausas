<template>
    <div class="mt-2">
        <div class="shadow-2 p-4">
            <div class="grid">
                <div 
                    v-for="ong in ongStore.ongsData" 
                    :key="ong.id" 
                    class="col-12 sm:col-4"
                >
                    <div class="cursor-pointer shadow-2">
                        <div class="flex">
                            <Avatar class="m-2" size="xlarge" shape="circle" >
                                <Image :src="ong.pic" alt="Image" />
                            </Avatar>
                            <p>{{ ong.name }}</p>
                        </div>
                        <Divider />
                        <div class="flex align-items-center justify-content-center">
                            <Button @click="redirectToOngSelected(ong.id)" icon="pi pi-search" class="mb-4" label="Ver o perfil" severity="info" outlined />
                            <Button icon="pi pi-money-bill" class="ml-4 mb-4" label="Realizar uma doação" severity="success" outlined />
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            this.$router.push('/user/ong-profile')
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
