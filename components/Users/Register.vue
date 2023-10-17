<template #content>
    <div>
         <Card> 
            <template #content>
                <div class="grid card-login">
                    <div class="col-12 md:col-6">
                        <div class="flex align-items-center justify-content-center">
                            <div class="flex flex-column align-items-center justify-content-center w-24rem">
                                <h3>Crie sua conta</h3>
                                <div class="w-12 mt-2">
                                    <span class="text-lg">Nome</span>
                                    <InputText placeholder="Digite seu onme" class="flex border-round w-12" type="text" />
                                </div>
                                <div class="w-12 mt-4">
                                    <span class="text-lg">Apelido</span>
                                    <InputText placeholder="Digite seu apelido" class="flex border-round w-12" type="text" />
                                </div>
                                <div class="w-12 mt-4">
                                    <span class="text-lg">Email</span>
                                    <InputText placeholder="Digite seu email" class="flex border-round w-12" type="text" />
                                </div>
                                <div class="w-12 mt-4">
                                    <span class="text-lg">Senha</span>
                                    <InputText placeholder="Digite sua senha" class="flex border-round w-12" type="text" />
                                </div>
                                <Button label="Criar nova conta" class="mt-3 w-12" severity="info"/>
                                <p>OR</p>
                                <Button label="Entrar em uma conta existente" plain text raised class="text-blue-400 w-12"/>
                            </div>
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