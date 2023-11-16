import { defineStore } from 'pinia';
import {Users} from "@/types/usersTypes"

type State = {
    usersData: Users[],
    userAutenticado: any
}

export const useUserStore = defineStore('user', {
	state: (): State => ({ 
        usersData:[
            { id: 0, name:'Maicon Alves', pic:'https://img.freepik.com/fotos-gratis/empresario-prospero-mantem-as-maos-cruzadas-tem-expressao-satisfeita_273609-16711.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph', email:'maicondouglas.md45@gmail.com', password:'teste123', isOng: false },
            { id: 1, name: 'João Silva', pic:'https://img.freepik.com/fotos-gratis/empresario-prospero-mantem-as-maos-cruzadas-tem-expressao-satisfeita_273609-16711.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph', email: 'joaosilva@example.com', password: 'senha123', isOng: false },
            { id: 2, name: 'Maria Oliveira', pic:'https://img.freepik.com/fotos-gratis/empresario-prospero-mantem-as-maos-cruzadas-tem-expressao-satisfeita_273609-16711.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph', email: 'mariaoliveira@example.com', password: 'senha456', isOng: false },
            { id: 3, name: 'Carlos Souza', pic:'https://img.freepik.com/fotos-gratis/empresario-prospero-mantem-as-maos-cruzadas-tem-expressao-satisfeita_273609-16711.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph', email: 'carlossouza@example.com', password: 'senha789', isOng: false },
            { id: 4, name: 'Conectando Causas', pic:'https://img.freepik.com/fotos-gratis/empresario-prospero-mantem-as-maos-cruzadas-tem-expressao-satisfeita_273609-16711.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph', email: 'conectandoCausas@example.com', password: '123', isOng: true }
        ],
        userAutenticado:[]
	}),
	getters: {

	},
	actions: {
        getOngsData(){

        }
	}
});
