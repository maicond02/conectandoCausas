<template>
    <div>
        <Menubar :model="menuStore.items" >
            <template #end>
                <div v-if="$route.name == 'index' || $route.name == 'about' 
                    || $route.name == 'contact' || $route.name == 'user-login' 
                    || $route.name == 'user-register'" class="flex"
                >
                    <nuxt-link to="/login">
                        <Button class="mr-4" label="Entrar na sua conta" severity="info" text raised />
                    </nuxt-link>
                    <nuxt-link to="/register">
                        <Button class="mr-3" label="Criar uma nova conta" severity="info" outlined />
                    </nuxt-link>
                </div>
            </template>
        </Menubar>
    </div>
</template>
<script lang="ts">
    import { useMenuStore } from '@/stores/menu';
    import { useUserStore } from '@/stores/users';
    export default {
        data() {
            return {
                menuStore: useMenuStore(),
                userStore:useUserStore(),
            };
        },
        mounted(){
            this.menuStore.loadNavbarItemsByLanguage(this.$route.name);
            this.menuStore.loadNavbarItems(this.userStore.userAutenticado.isOng);
        }
    };
</script>

<style scoped>
    :deep(.p-dropdown-label){
        padding: 0;
        padding-left: 10px;
        color:rgb(129, 129, 129) !important;
    }

    :deep(.p-dropdown){
        height: 30px;
        width: 150px;
        display: flex;
        align-items: center;
        border:solid 1px transparent;
    }

    :deep(.p-dropdown:hover){
        border:solid 1px transparent;
    }

    :deep(.p-menuitem-text){
        color:rgb(129, 129, 129) !important;
    }

</style>