<template #content>
    <div class="centered-card">
        <img class="backgroundimage" src="../../public/registerimage.png" alt="">
        <Card class="fundo">
            <template #content>
                <div class="conteudo flex flex-column">
                    <h3 class="titulo">CONNECTING CAUSES</h3>
                    <h3 class="titulo2">REGISTER</h3>
                    <p class="letrasmenu">Name</p>
                    <InputText type="text" v-model="value" />
                    <p class="letrasmenu">Surname</p>
                    <InputText type="text" v-model="value" />
                    <p class="letrasmenu">E-mail</p>
                    <InputText type="text" v-model="value" />
                    <p class="letrasmenu">Password</p>
                    <Password class="passwordbox" v-model="value" :feedback="false" />
                </div>
            </template>
        </Card>
    </div>
    <template>

    </template>
</template>





<script lang="ts">



</script>

<style scoped>
.fundo{
  /*  min-height: 30%;
    min-width: 15%; */
    min-height: 45%;
    min-width: 15%;
}
.letrasmenu{
    font-size: larger;
}
.passwordbox{
  min-width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
}
.centered-card {
  display: flex;
  justify-content: center;
  align-items: center;
 /* margin-top: 20vh; */
}
.titulo{
  display: flex;
  justify-content: center;
  align-items: center;
}
.titulo2{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
}
.backgroundimage{
    z-index: 0;
    position: relative;
    max-height: 1500px;
    left: 1px;
    margin-top: -10px;
    display: flex;
    left: -10%;
}
</style>