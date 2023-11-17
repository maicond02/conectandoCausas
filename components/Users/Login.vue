<template #content>
    <div class="p-2">
        <div class="grid shadow-3">
            <div class="col-12 md:col-6">
                <div class="flex flex-column align-items-center">
                    <h3>Entrar em sua conta</h3>
                    <div class="flex w-12 justify-content-center">
                        <Button class="w-4" icon="pi pi-facebook" label="Entrar usando o facebook" severity="info" text raised />
                        <Button class="w-4 ml-2" icon="pi pi-google" label="Entrar usando o google" severity="info" text raised />
                    </div>
                    <Divider class="w-8 mt-4">
                        <b>OU</b>
                    </Divider>
                    <div class="w-8">
                        <span class="text-lg">Email ou Nome e Sobrenome</span>
                        <InputText v-model="userName" placeholder="Digite seu email ou apelido" class="flex border-round w-12" type="text" />
                    </div>
                    <div class="w-8 mt-4">
                        <span class="text-lg">Senha</span>
                        <InputText v-model="userPassword" placeholder="Digite sua senha" class="flex border-round w-12" type="password" />
                    </div>
                    <div class="flex w-8 mt-3">
                        <div class="w-12">
                            <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" />
                            <label for="ingredient2" class="ml-2"> Relembrar usuário </label>
                        </div>
                        <div class="w-12 flex justify-content-end">
                            <label class="text-blue-500 cursor-pointer">Esqueceu a senha?</label>
                        </div>
                    </div>
                    <Button @click="authenticateUser()" label="Entrar na conta" class="mt-6 w-8" severity="info"/>
                </div>
            </div>
            <div class="col-12 md:col-6 flex align-items-center justify-content-center">
                <img class="w-12" src="../../assets/images/Login-pana.png" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {useUserStore} from '@/stores/users'
    import {Users} from "@/types/usersTypes"
    export default {
        data(){
            return{
                userStore: useUserStore(),
                userName:'',
                userPassword:''
            }
        },
        methods:{
            authenticateUser() {
                const foundUser:Users | undefined = this.userStore.usersData.find(user => user.name === this.userName || user.email === this.userName && user.password === this.userPassword);
                if (foundUser) {
                    this.userStore.userAutenticado = foundUser
                    this.$toast.add({ severity: 'success', summary: 'Sucesso', detail: `Olá ${this.userName}`, life: 3000 });
                    if(foundUser.isOng == false){
                        this.$router.push('/user/feed')
                    }else if(foundUser.isOng == true){
                        this.$router.push('/ong/profile')
                        console.log(this.userStore.userAutenticado)
                    }
                } else {
                    this.$toast.add({ severity: 'error', summary: 'Error', detail: 'O usuário não foi encontrado na base de dados!', life: 6000 });
                }
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
.teste1{
    margin-right: -0.5rem;
}
.card1{
    background-color: transparent;
}

.cards{
    height:600px !important;
}

</style>