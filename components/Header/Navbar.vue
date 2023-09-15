<template>
    <div>
        <Menubar :model="menuStore.items" >
            <template #end>
                <div>
                    <Dropdown @change="menuStore.loadNavbarItemsByLanguage($i18n.locale)" v-model="$i18n.locale" :options="languages" optionLabel="language" optionValue="code" placeholder="Idioma" class="" />
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
            this.menuStore.loadNavbarItemsByLanguage(this.$i18n.locale)
        }
    };
</script>

<style scoped>
    :deep(.p-component){
        height: 60px;
        background-color: transparent;
        border: none;
    }
    :deep(.p-menubar-root-list){
        background-color: transparent;
        border: none;
    }
    :deep(.p-menubar){
        border-bottom: 2px solid rgb(75, 75, 75);
    }
    :deep(.p-dropdown-label){
        padding: 0;
        padding-left: 10px;
        color: white !important;
    }

    :deep(.p-dropdown){
        height: 30px;
        display: flex;
        align-items: center;
        color: white !important;
    }

    :deep(.p-menuitem-text){
        color: white !important;
    }
    :deep(.p-menuitem-icon){
        color: white !important;
    }

    :deep(.p-dropdown-item){
        color: white !important;
    }

    :deep(.p-dropdown-trigger-icon){
        color: white !important;
    }
</style>