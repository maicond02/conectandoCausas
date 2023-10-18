<template>
    <div>
        <Card>
            <template #content>
                <div class="grid border-100 border-2">
                    <div class="sm:col-6 col-12 h-full bg-blue-100">
                        <img src="@/assets/images/donation.png" class="w-12 border-round-xl"/>
                    </div>
                    <div class="sm:col-6 col-12">
                        <div class="flex justify-content-center">
                            <div>
                                <p class="text-6xl">Salve vidas, ampare</p>
                                <p class="text-2xl">Você pode ajudar de várias formas além</p>
                                <p class="text-2xl">da doação em dinheiro. Junte-se a nós e</p>
                                <p class="text-2xl">transforme vidas.</p>
                                <div class="flex justify-content-center">
                                    <Button @click="$router.push('/user/login')" class="w-6" label="Eu quero ajudar!" severity="info"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>