<template>
    <div>
        <Menubar :model="items" />
    </div>
</template>
<style scoped>
    :deep(.p-component){
        height: 60px;
    }
</style>
<script>
export default {
    data() {
        return {
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
    }
};
</script>