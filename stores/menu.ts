import { defineStore } from 'pinia';

export const useMenuStore = defineStore('navbar', {
	state: () => ({ 
        items:[] as any,
	}),
	getters: {

	},
	actions: {
        loadNavbarItemsByLanguage(page:any){
            if(page == 'index' || page == 'about' || page == 'register' || page == 'login' || page == 'contact'){
                this.items = [
                    {
                        label: 'Início',
                        icon: 'pi pi-fw pi-home',
                        to:'/'
                    },
                    {
                        label: 'Sobre',
                        icon: 'pi pi-fw pi-info-circle',
                        to:'/about'
                    },
                    {
                        label: 'Contato',
                        icon: 'pi pi-fw pi-comments',
                        to:'/contact'
                    },
                ]
            }
        },
        loadNavbarItems(isOng:number){
            if(isOng == 1){
                this.items = [
                    {
                        label: 'Início',
                        icon: 'pi pi-fw pi-home',
                        to:'/ong/'
                    },
                    {
                        label: 'Perfil',
                        icon: 'pi pi-fw pi-user',
                        to:'/ong/profile'
                    },
                    {
                        label: 'Mensagens',
                        icon: 'pi pi-fw pi-comments',
                        to:'/ong/messages'
                    },
                ]
            }else if(isOng == 0){
                this.items = [
                    {
                        label: 'Início',
                        icon: 'pi pi-fw pi-home',
                        to:'/user/feed'
                    },
                    {
                        label: 'Mensagens',
                        icon: 'pi pi-fw pi-comments',
                        to:'/user/messages'
                    },
                    {
                        label: 'Perfil',
                        icon: 'pi pi-fw pi-user',
                        to:'/user/profile'
                    },
                ]
            }
        }
	}
});
