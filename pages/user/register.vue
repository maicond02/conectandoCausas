<template #content>
    <div class="grid">
      <div class="col-6">
        <img class="w-12" src="../../public/registerimage.png" alt="">
      </div>
        
        <Card class="col-6 cardinv testando flex justify-content-end">
            <template #content>
                <div class="conteudo flex flex-column">
                    <h3 class="titulo">CONNECTING CAUSES</h3>
                    <h3 class="titulo2">REGISTER</h3>
                    <p class="letrasmenu">Name</p>
                    <InputText type="text"/>
                    <p class="letrasmenu">Surname</p>
                    <InputText type="text"/>
                    <p class="letrasmenu">E-mail</p>
                    <InputText type="text"/>
                    <p class="letrasmenu">Password</p>
                    <Password class="passwordbox" :feedback="false" />
                </div>
            </template>
        </Card>
    </div>
    <template>

    </template>
</template>

<style scoped>

.cardinv{
  background-color: transparent;
}

</style>


<script lang="ts">

</script>
