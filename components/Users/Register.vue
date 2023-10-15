
import Button from 'primevue/button';
<template #content>
    <div>
         <Card> 
            <template #content>
                <div class="grid">
                    <div class="col-12 md:col-6">
                        <Card class="cards">
                            <template #content>
                                <div class="flex align-items-center justify-content-center">
                                    <img class="w-12" src="../../public/registerimage.png" alt="">
                                </div>
                            </template>
                        </Card>
                    </div>
                     <div class="col-12 md:col-6">
                              <div class="flex align-items-center justify-content-center">
                                  <Card class="w-12 cards">
                                      <template #content>
                                            <div class="flex flex-column align-items-center justify-content-center">
                                                <h3 class="flex justify-content-center titulo">CONNECTING CAUSES</h3>
                                                <h3 class="flex justify-content-center titulo2">REGISTER</h3>
                                                <br>
                                                <InputText placeholder="Name" class="flex border-round inpText" type="text" />
                                                <br>
                                                <InputText placeholder="Surname" class="flex border-round inpText" type="text" />
                                                <br>
                                                <InputText placeholder="E-mail" class="flex border-round inpText" type="text" />
                                                <br>
                                                <InputText placeholder="Password" class="flex border-round inpText" type="password"/>
                                                <Button class="mt-4 w-4" label="Criar conta" severity="info"/>
                                            </div>
                                      </template>
                                   </Card>
                               </div>
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

</style>