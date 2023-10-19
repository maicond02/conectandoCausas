<template #content>
    <div>
        <Card class="">
            <template #content>
                <div class="grid">
                    <div class="cardprimario flex justify-content-center col-12">
                        <h3>Welcome to "Conectando Causas"!</h3>
                    </div>
                    <div class="cardprimario flex justify-content-center">
                        <div class="cardprimario flex justify-content-center col-6">
                            <p style="text-align: center;" class="texto flex justify-content-center">We are a non-governmental organization committed to uniting individuals passionate about noble causes and collaborating to make the world a better place. Our purpose is to foster connections to generate a positive impact.</p>
                        </div>
                    </div>
                    <Card class="cardprimario col-12">
                        <template #content>
                            <div class="flex justify-content-center grid">
                                <div class="col-6">
                                    <img class="w-12" src="../../Aboutimag.png" alt="">
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>
            </template>
        </Card>
    </div>
</template>


<style scoped>

.cardprimario{
    background-color:#cae6fc;
}
.texto{
    font-size: 14px;
}
</style>