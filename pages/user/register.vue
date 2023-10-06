<template #content>
    <div class="grid">
      <div class="col-6">
        <img class="w-12" src="../../public/registerimage.png" alt="">
      </div>
      <div class="sm:col-6 col-12">
          <Card class="card1">
            <template #content>
                <div class="flex justify-content-end mx-8 mt-7">
                  <div class="conteudo flex flex-column">
                      <Card class="card2">
                        <template #content>
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
                        </template>
                      </Card>
                  </div>
                </div>
            </template>
          </Card>
      </div>
    </div>
</template>

<style scoped>

.cardinv{
  background-color: transparent;
}
.card1{
  background-color:transparent;
  
}
.card2{
  width: 16rem;
  height: 100%;
}
.inpText{
  
}
.conteudo{
  width: 25%;
}
</style>


<script lang="ts">

</script>

