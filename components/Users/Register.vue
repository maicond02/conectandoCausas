<template #content>
    <div>
         <Card> 
            <template #content>
                <div class="grid card-login">
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
                                <span class="text-lg">Email</span>
                                <InputText placeholder="Digite seu email" class="flex border-round w-12 mt-1" type="text" />
                            </div>
                            <div class="w-8 mt-4">
                                <span class="text-lg">Apelido</span>
                                <InputText placeholder="Digite seu apelido" class="flex border-round w-12 mt-1" type="text" />
                            </div>
                            <div class="w-8 mt-4">
                                <span class="text-lg">Senha</span>
                                <InputText placeholder="Digite sua senha" class="flex border-round w-12 mt-1" type="text" />
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
                            <Button label="Criar sua conta" class="mt-6 w-8" severity="info"/>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 flex align-items-center justify-content-center bg-blue-100">
                        <img class="w-12" src="../../public/registerimage.png" alt="">
                    </div>
                </div>
            </template>
         </Card>
    </div>
</template>

<script lang="ts">

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

.card-login{
    border: solid 2px rgb(250, 250, 250);
    border-radius: 5px;
}

</style>