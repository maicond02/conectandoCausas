<template>
    <div class="grid">
        <div class="col-2">
            <Menu :model="items" class="w-12"/>
        </div>
        <div class="col-10">
            <div class="grid">
                <div class="col-6">
                    <div class="shadow-3 col-12">
                        <div class="flex align-items-center justify-content-center flex-column">
                            <div>
                                <Image :src="userStore.userAutenticado.pic" alt="Image" width="250" />
                            </div>
                            <div>
                                <h4>{{ userStore.userAutenticado.name }}</h4>
                            </div>
                            <div>
                                <h4>{{ userStore.userAutenticado.email }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="shadow-3 col-12">
                        oi
                    </div>
                    <div class="shadow-3 col-12 mt-2">
                        oi
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {useUserStore} from '@/stores/users'
    export default{
        data(){
            return{
                userStore:useUserStore(),
                items: [
                    {
                        label: 'Perfil',
                        items: [
                            {
                                label: 'Conta',
                                icon: 'pi pi-cog'
                            },
                            {
                                label: 'Comprovantes',
                                icon: 'pi pi-cog'
                            },
                            {
                                label: 'Doações',
                                icon: 'pi pi-cog'
                            },
                            {
                                label: 'Logout',
                                icon: 'pi pi-sign-out'
                            }
                        ]
                    }
                ]
            }
        },

    }
</script>