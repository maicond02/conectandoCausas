import { defineStore } from 'pinia';

export const useMenuStore = defineStore('navbar', {
	state: () => ({ 
        items:[] as any,
	}),
	getters: {

	},
	actions: {
        loadNavbarItemsByLanguage(language:string, page:any){
            switch(language){
                case 'en':
                    if(page == 'index' || page == 'about' || page == 'user-register' || page == 'user-login'){
                        this.items = [
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
                    }else{
                        this.items = [
                            {
                                label: 'Feed',
                                icon: 'pi pi-fw pi-home',
                                to:'/feed'
                            },
                            {
                                label: 'dashboards',
                                icon: 'pi pi-fw pi-chart-bar',
                                to:'/user/dashboards'
                            },
                            {
                                label: 'messages',
                                icon: 'pi pi-fw pi-comments',
                                to:'/user/messages'
                            },
                            {
                                label: 'Profile',
                                icon: 'pi pi-fw pi-user',
                                to:'/user/profile'
                            },
                        ]
                    }

                break;
                case 'pt':
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
                            {
                                label: 'Registro',
                                icon: 'pi pi-fw pi-user-plus',
                                to:'/user/register'
                            },
                            {
                                label: 'Entrar',
                                icon: 'pi pi-fw pi-sign-in',
                                to:'/user/login'
                            },
                        ]
                    }else{
                        this.items = [
                            {
                                label: 'Feed',
                                icon: 'pi pi-fw pi-home',
                                to:'/feed'
                            },
                            {
                                label: 'Paineis',
                                icon: 'pi pi-fw pi-chart-bar',
                                to:'/user/dashboards'
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
                break;
                case 'es':
                    if(page == 'index' || page == 'about' || page == 'user-register' || page == 'user-login'){
                        this.items = [
                            {
                                label: 'Inicio',
                                icon: 'pi pi-fw pi-home',
                                to:'/'
                            },
                            {
                                label: 'Sobre nosotros',
                                icon: 'pi pi-fw pi-info-circle',
                                to:'/about'
                            },
                            {
                                label: 'Contacto',
                                icon: 'pi pi-fw pi-comments',
                                to:'/contact'
                            },
                            {
                                label: 'Registrarse',
                                icon: 'pi pi-fw pi-user-plus',
                                to:'/user/register'
                            },
                            {
                                label: 'Iniciar sesión',
                                icon: 'pi pi-fw pi-sign-in',
                                to:'/user/login'
                            },
                        ]
                    }else{
                        this.items = [
                            {
                                label: 'Feed',
                                icon: 'pi pi-fw pi-home',
                                to:'/feed'
                            },
                            {
                                label: 'Paneles',
                                icon: 'pi pi-fw pi-chart-bar',
                                to:'/user/dashboards'
                            },
                            {
                                label: 'Mensajes',
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
                break;
                default:
                    if(page == 'index' || page == 'about' || page == 'user-register' || page == 'user-login'){
                        this.items = [
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
                    }else{
                        this.items = [
                            {
                                label: 'Feed',
                                icon: 'pi pi-fw pi-home',
                                to:'/feed'
                            },
                            {
                                label: 'dashboards',
                                icon: 'pi pi-fw pi-chart-bar',
                                to:'/user/dashboards'
                            },
                            {
                                label: 'messages',
                                icon: 'pi pi-fw pi-comments',
                                to:'/user/messages'
                            },
                            {
                                label: 'Profile',
                                icon: 'pi pi-fw pi-user',
                                to:'/user/profile'
                            },
                        ]
                    }
            }
        }
	}
});
