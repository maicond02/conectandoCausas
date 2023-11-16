<template>
    <div class="grid">
        <div class="col-2">

        </div>
        <div class="col-10">
            <DashboardsGraphics />
        </div>
    </div>
</template>
<script lang="ts">
    import { useUserStore } from '@/stores/users';
    import { useMenuStore } from '~/stores/menu';
    export default{
        data(){
            return{
                userStore: useUserStore(),
                menuStore: useMenuStore()
            }
        },
        mounted(){
            this.menuStore.loadNavbarItems(this.userStore.userAutenticado.isOng)
        }
    }
</script>