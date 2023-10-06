<template #content>
    <div>
         <Card class="card1"> 
            <template #content>
                <div class="grid">
                    <div class="col-6">
                         <div class="flex align-items-start justify-content-start">
                             <img class="w-12 img" src="../../public/loginimage.png" alt="">
                        </div>
                    </div>
                     <div class="col-6">
                              <div class="flex-column flex align-items-end justify-content-end mx-8 mt-8">
                                  <Card class="card2">
                                      <template #content>
                                          <h3 class="flex flex-row-reverse mr-8">Login</h3>
                                          <InputText placeholder="Nome" class="flex border-round" type="text" />
                                          <br>
                                          <InputText placeholder="Apelido" class="flex border-round" type="text" />
                                          <br>
                                          <InputText placeholder="E-mail" class="flex border-round" type="text" />
                                          <br>
                                          <InputText placeholder="Password" class="flex border-round" type="password"/>
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
.card2{
  width: 16rem;
  height: 100%;
}
.card1{
    background-color: transparent;
}

</style>