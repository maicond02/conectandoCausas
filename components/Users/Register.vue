<template #content>
    <div class="p-2">
        <div class="grid shadow-3">
            <div class="col-12 md:col-6">
                <div class="flex flex-column align-items-center">
                    <h3>Crie sua conta gratuitamente</h3>
                    <div class="flex w-12 justify-content-center">
                        <Button class="w-4" icon="pi pi-facebook" label="Criar usando o facebook" severity="info" text raised />
                        <Button class="w-4 ml-2" icon="pi pi-google" label="Criar usando o google" severity="info" text raised />
                    </div>
                    <Divider class="w-8 mt-4">
                        <b>OU</b>
                    </Divider>
                    <div class="w-8">
                        <span class="text-lg">Nome</span>
                        <InputText v-model="userData.name" placeholder="Digite seu apelido" class="flex border-round w-12 mt-1" type="text" />
                    </div>
                    <div class="w-8 mt-4">
                        <span class="text-lg">Email</span>
                        <InputText v-model="userData.email" placeholder="Digite seu email" class="flex border-round w-12 mt-1" type="text" />
                    </div>
                    <div class="w-8 mt-4">
                        <span class="text-lg">Senha</span>
                        <InputText v-model="userData.password" placeholder="Digite sua senha" class="flex border-round w-12 mt-1" type="password" />
                    </div>
                    <div class="w-8 mt-4">
                        <span class="text-lg">É uma instituição?</span>
                        <Dropdown v-model="userData.isong" placeholder="Selecione uma opção" :options="options"
                            class="flex border-round w-12 mt-1" type="text" optionLabel="label" optionValue="option"
                        />
                    </div>
                    <div class="flex w-8 mt-3">
                        <div class="w-12">
                            <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" />
                            <label for="ingredient2" class="ml-2"> Relembrar usuário </label>
                        </div>
                        <div class="w-12 flex justify-content-end">
                            <label class="text-blue-500 cursor-pointer">Já tem conta, clique aqui?</label>
                        </div>
                    </div>
                    <Button @click="addNewUser()" label="Criar sua conta" class="mt-6 w-8" severity="info"/>
                </div>
            </div>
            <div class="col-12 md:col-6 flex align-items-center justify-content-center">
                <img class="w-12" src="../../public/registerimage.png" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {useUserStore} from '@/stores/users'
    export default {
        data(){
            return{
                userStore: useUserStore(),
                userData:{
                    email:'',
                    name:'',
                    password:'',
                    pic:'https://img.freepik.com/fotos-gratis/empresario-prospero-mantem-as-maos-cruzadas-tem-expressao-satisfeita_273609-16711.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph',
                    isong:0
                },
                options:[{label:'Não',option:0},{label:'Sim',option:1}]
            }
        },
        methods:{
            async addNewUser(){
                if(this.userData.isong == 0){
                    this.$router.push('/user/feed')
                }else if(this.userData.isong == 1){
                    this.$router.push('/ong/profile')
                }
                await this.userStore.addNewUser(this.userData);
                this.userData = {
                    email:'',
                    name:'',
                    password:'',
                    pic:'https://img.freepik.com/fotos-gratis/empresario-prospero-mantem-as-maos-cruzadas-tem-expressao-satisfeita_273609-16711.jpg?size=626&ext=jpg&ga=GA1.1.936808609.1679678279&semt=sph',
                    isong:0
                }
            }
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