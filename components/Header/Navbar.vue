<template>
    <div>
        <Menubar :model="items" >
            <template #end>
                <div>
                    <Dropdown v-model="selectedLanguage" :options="languages" optionLabel="language" placeholder="Select a City" class="" />
                </div>
            </template>
        </Menubar>
    </div>
</template>
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
    }

    :deep(.p-dropdown){
        height: 30px;
        display: flex;
        align-items: center;
    }
</style>
<script lang="ts">
export default {
    data() {
        return {
            currentTheme: 'md-dark-indigo',
            alternateTheme: 'md-light-indigo',
            selectedLanguage:'',
            languages:[
                { language: 'English', code: 'ENG' },
                { language: 'Português', code: 'PT' },
                { language: 'Espanhol', code: 'ES' },
            ],
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                },
                {
                    label: 'About',
                    icon: 'pi pi-fw pi-info-circle',
                },
                {
                    label: 'Contact',
                    icon: 'pi pi-fw pi-comments',
                },
                {
                    label: 'Register',
                    icon: 'pi pi-fw pi-user-plus',
                },
                {
                    label: 'Login',
                    icon: 'pi pi-fw pi-sign-in',
                },
            ]
        };
    },
};
</script>