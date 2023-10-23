import { defineStore } from 'pinia';

export const useMenuStore = defineStore('navbar', {
	state: () => ({ 
        items:[] as any,
	}),
	getters: {

	},
	actions: {
        loadNavbarItemsByLanguage(language:string, page:any){
            if(page == 'index' || page == 'about' || page == 'user-register' || page == 'user-login'){
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
            }else{
                this.items = [
                    {
                        label: 'Início',
                        icon: 'pi pi-fw pi-home',
                        to:'/feed'
                    },
                    {
                        label: 'Menssagens',
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
