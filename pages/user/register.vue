<template #content>
    <div class="grid">
      <div class="col-6">
        <img class="w-12" src="../../public/registerimage.png" alt="">
      </div>
      <div class="sm:col-6 col-12">
          <Card class="card1">
            <template #content>
                <div class="flex justify-content-end mx-7 mt-7">
                  <div class="conteudo flex flex-column">
                      <h3 class="titulo">CONNECTING CAUSES</h3>
                      <h3 class="titulo2">REGISTER</h3>
                      <br>
                      <InputText placeholder="Name" class="" type="text" />
                      <br>
                      <InputText placeholder="Surname" class="" type="text" />
                      <br>
                      <InputText placeholder="E-mail" class="" type="text" />
                      <br>
                      <InputText placeholder="Password" class="" type="password"/>
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
.conteudo{
  width: 25%;
}
</style>


<script lang="ts">

</script>

