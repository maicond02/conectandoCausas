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
                { id: 1, name: 'ONG Ajuda Solidária', pic:'https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-amigos_23-2149505594.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=ais', message: 'ola' },
                { id: 2, name: 'VerdeVida',  pic:'https://img.freepik.com/vetores-gratis/logotipo-da-empresa-plana-abstrata-gradiente_52683-9699.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=ais', message: 'A VerdeVida é uma organização dedicada a preservar nossos ecossistemas naturais, defendendo práticas ecológicas e sustentáveis. Com projetos que variam desde a recuperação de áreas desmatadas até a educação ambiental em escolas, nosso objetivo é criar um mundo onde o homem e a natureza coexistam em harmonia.' },
                { id: 3, name: 'HopeHands',  pic:'https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-trabalho-em-equipe-de-design-plano_23-2149492025.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=ais', message: 'Em tempos de crise, a HopeHands está no terreno, fornecendo ajuda essencial a comunidades devastadas por desastres naturais e conflitos. Através de suprimentos, abrigo, assistência médica e suporte psicológico, nos esforçamos para reconstruir vidas e trazer esperança quando mais é necessário.' },
                { id: 4, name: 'EduFuturo',  pic:'https://img.freepik.com/vetores-premium/conceito-de-logotipo-de-educacao-de-pessoas-criativas-do-logotipo-da-fundacao-da-juventude_982564-22.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=ais', message: 'A EduFuturo acredita que cada criança tem o direito de aprender, sonhar e prosperar. Em áreas onde o acesso à educação é limitado ou inexistente, intervenimos com programas de ensino, formação de professores e infraestrutura educacional, garantindo que cada criança tenha a oportunidade de um futuro brilhante.' },
                { id: 5, name: 'AnimalAmigos',  pic:'https://img.freepik.com/vetores-gratis/dia-mundial-da-humanidade-em-design-plano_23-2148573749.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=ais', message: 'AnimalAmigos é uma organização apaixonada pelo bem-estar animal. Resgatamos animais abandonados, promovemos campanhas de adoção e trabalhamos incansavelmente para conscientizar sobre o respeito e cuidado que cada criatura merece. Nosso sonho é um mundo onde cada animal seja tratado com amor e compaixão.' },
                { id: 6, name: 'TechParaTodos',  pic:'https://img.freepik.com/vetores-gratis/design-de-logotipo-humano-e-terrestre_474888-2091.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=ais', message: 'Em um mundo cada vez mais digital, a TechParaTodos busca nivelar o campo de jogo. Oferecemos cursos de TI, workshops e recursos para comunidades carentes e populações marginalizadas, garantindo que todos tenham as habilidades necessárias para prosperar na era digital.' }
            ]
        }
	}
});
