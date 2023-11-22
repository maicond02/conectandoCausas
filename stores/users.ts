import { defineStore } from 'pinia';
import {Users} from "@/types/usersTypes"

type State = {
    usersData: Users[],
    userAutenticado: any
}

export const useUserStore = defineStore('user', {
	state: (): State => ({ 
        usersData:[],
        userAutenticado:[]
	}),
	getters: {

	},
	actions: {
        async getUsersData() {
            try {
                let response = await fetch('http://localhost:5002/users', {
                    method:'GET',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                let returnData = await response.json();
                this.usersData = returnData
                console.log(returnData);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        },

        async addNewUser(data:any){
            try {
                let response = await fetch('http://localhost:5002/users',{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }
        
	}
});
