<template>
    <div>
        <Menubar :model="menuStore.items" >
            <template #end>
                <div v-if="$route.name == 'index' || $route.name == 'about' 
                    || $route.name == 'contact' || $route.name == 'user-login' 
                    || $route.name == 'user-register'" class="flex"
                >
                    <nuxt-link to="/user/login">
                        <Button class="mr-4" label="Entrar na sua conta" severity="info" text raised />
                    </nuxt-link>
                    <nuxt-link to="/user/register">
                        <Button class="mr-3" label="Criar uma nova conta" severity="info" outlined />
                    </nuxt-link>
                </div>
            </template>
        </Menubar>
    </div>
</template>
<script lang="ts">
    import { useMenuStore } from '@/stores/menu';
    export default {
        data() {
            return {
                menuStore: useMenuStore(),
                selectedLanguage:'',
                languages:[
                    { language: 'English', code: 'en' },
                    { language: 'Português', code: 'pt' },
                    { language: 'Espanhol', code: 'es' },
                ],

            };
        },
        mounted(){
            this.menuStore.loadNavbarItemsByLanguage(this.$i18n.locale, this.$route.name)
            console.log(this.$route.name)
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