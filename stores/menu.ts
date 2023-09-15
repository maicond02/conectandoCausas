import { defineStore } from 'pinia';

export const useMenuStore = defineStore('navbar', {
	state: () => ({ 
        items:[] as any,
	}),
	getters: {

	},
	actions: {
        loadNavbarItemsByLanguage(language:string){
            switch(language){
                case 'en':
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
                break;
                case 'pt':
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
                break;
                case 'es':
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
                break;
                default:
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
            }
        }
	}
});
