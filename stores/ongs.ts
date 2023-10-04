import { defineStore } from 'pinia';
import {Ongs} from "@/types/ongsTypes"

type State = {
    ongsData: Ongs[]
}

export const useOngStore = defineStore('ong', {
	state: (): State => ({ 
        ongsData:[]
	}),
	getters: {

	},
	actions: {
        getOngsData(){
            this.ongsData = [
                { id: 1, name: 'ONG Ajuda Solidária', message: 'ola' },
                { id: 2, name: 'VerdeVida', message: 'A VerdeVida é uma organização dedicada a preservar nossos ecossistemas naturais, defendendo práticas ecológicas e sustentáveis. Com projetos que variam desde a recuperação de áreas desmatadas até a educação ambiental em escolas, nosso objetivo é criar um mundo onde o homem e a natureza coexistam em harmonia.' },
                { id: 3, name: 'HopeHands', message: 'Em tempos de crise, a HopeHands está no terreno, fornecendo ajuda essencial a comunidades devastadas por desastres naturais e conflitos. Através de suprimentos, abrigo, assistência médica e suporte psicológico, nos esforçamos para reconstruir vidas e trazer esperança quando mais é necessário.' },
                { id: 4, name: 'EduFuturo', message: 'A EduFuturo acredita que cada criança tem o direito de aprender, sonhar e prosperar. Em áreas onde o acesso à educação é limitado ou inexistente, intervenimos com programas de ensino, formação de professores e infraestrutura educacional, garantindo que cada criança tenha a oportunidade de um futuro brilhante.' },
                { id: 5, name: 'AnimalAmigos', message: 'AnimalAmigos é uma organização apaixonada pelo bem-estar animal. Resgatamos animais abandonados, promovemos campanhas de adoção e trabalhamos incansavelmente para conscientizar sobre o respeito e cuidado que cada criatura merece. Nosso sonho é um mundo onde cada animal seja tratado com amor e compaixão.' },
                { id: 6, name: 'TechParaTodos', message: 'Em um mundo cada vez mais digital, a TechParaTodos busca nivelar o campo de jogo. Oferecemos cursos de TI, workshops e recursos para comunidades carentes e populações marginalizadas, garantindo que todos tenham as habilidades necessárias para prosperar na era digital.' }
            ]
        }
	}
});
