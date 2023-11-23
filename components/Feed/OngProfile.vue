<template>
    <div>
        <Card>
            <template #content>
                <div>
                    <div class="grid shadow-2">
                        <div class="col-4 flex justify-content-center">
                            <Image class="w-12" :src="ongStore.ongSelected.pic" alt="" width="200"/>
                        </div>
                        <div class="col-8">
                            <h2>{{ ongStore.ongSelected.name }}</h2>
                            <p>{{ ongStore.ongSelected.message }}</p>
                        </div>
                    </div>
                    <div class="mt-2 grid">
                        <div class="col-8">
                            <h1 class="highlight">Faça Parte da Mudança com a Nossa ONG!</h1>
                            <p>
                                Olá!
                            </p>

                            <p>
                                Nossa ONG dedica-se de coração e alma a apoiar indivíduos em situações de vulnerabilidade. Nossa missão vai além de simples assistência; nós proporcionamos recursos, capacitação e, acima de tudo, suporte emocional. Buscamos, dia após dia, garantir a reintegração social e potencializar o poder individual de cada ser humano que nos procura.
                            </p>

                            <p>
                                Ao longo dos anos, conseguimos transformar inúmeras vidas, construir pontes de solidariedade e garantir um futuro mais digno para aqueles em situação de desamparo. Mas ainda temos um longo caminho a percorrer e muitas vidas para tocar. E é aqui que precisamos da sua ajuda.
                            </p>

                            <p>
                                Ao contribuir com a nossa ONG, você não está apenas doando dinheiro; está investindo em um futuro melhor, em esperança e em transformação.
                            </p>

                            <h2>Como Doar?</h2>
                            <ol>
                                <li>Clique no <a href="#">link</a> para acessar nossa página de doações.</li>
                                <li>Escolha o valor que deseja contribuir.</li>
                                <li>Complete a transação de forma segura e rápida.</li>
                            </ol>

                            <p>
                                Lembre-se: cada gesto, por menor que seja, tem o poder de criar ondas de mudança. Junte-se a nós nesta missão e seja parte da nossa rede de amor, solidariedade e cuidado.
                            </p>

                            <p>
                                <strong>Com profunda gratidão,</strong><br>
                                Equipe da Nossa ONG
                            </p>
                        </div>
                        <div class="col-4">
                            <div class="flex flex-column align-items-center justify-content-center shadow-2">
                                <div>Doação segura</div>
                                <div class="mt-4 w-12 flex justify-content-center">
                                    <SelectButton v-model="value" :options="options" aria-labelledby="basic"/>
                                </div>
                                <div class="w-6 mt-4">
                                    <Button @click="totalDonation += 600" label="600" class="w-4" severity="info" text raised/>
                                    <Button @click="totalDonation += 500" label="500" class="w-4" severity="info" text raised/>
                                    <Button @click="totalDonation += 400" label="400" class="w-4" severity="info" text raised/>
                                </div>
                                <div class="w-6 mt-2">
                                    <Button @click="totalDonation += 300" label="300" class="w-4" severity="info" text raised/>
                                    <Button @click="totalDonation += 200" label="200" class="w-4" severity="info" text raised/>
                                    <Button @click="totalDonation += 100" label="100" class="w-4" severity="info" text raised/>
                                </div>
                                <div class="w-6 mt-4">
                                    <InputNumber v-model="totalDonation" class="w-12"/>
                                </div>
                                <div class="w-6 mt-2">
                                    <Button label="Realizar doação" class="w-12 mt-4 mb-4" severity="info"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>

    import {useOngStore} from "@/stores/ongs"

    export default{
        data(){
            return{
                ongStore: useOngStore(),
                value: 'Uma vez',
                options: ['Uma vez', 'Mensalmente'],
                totalDonation: 0
            }
        },
        mounted(){
        }
    }

</script>
