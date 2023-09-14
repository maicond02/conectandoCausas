<template>
    <div>
        <Menubar :model="items" >
            <template #end>
                <div>
                    <span>{{$t('hello')}}</span>
                    <Dropdown v-model="$i18n.locale" :options="languages" optionLabel="language" optionValue="code" placeholder="Idioma" class="" />
                </div>
            </template>
        </Menubar>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            selectedLanguage:'',
            languages:[
                { language: 'English', code: 'en' },
                { language: 'Português', code: 'pt' },
                { language: 'Espanhol', code: 'es' },
            ],
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                    to:'/'
                },
                {
                    label: 'About',
                    icon: 'pi pi-fw pi-info-circle',
                    to:'/about'
                },
                {
                    label: 'Contact',
                    icon: 'pi pi-fw pi-comments',
                    to:'/contact'
                },
                {
                    label: 'Register',
                    icon: 'pi pi-fw pi-user-plus',
                    to:'/user/register'
                },
                {
                    label: 'Login',
                    icon: 'pi pi-fw pi-sign-in',
                    to:'/user/login'
                },
            ]
        };
    },
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