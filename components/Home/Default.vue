<template>
    <div class="p-2">
        <div class="grid shadow-2">
            <div class="sm:col-6 col-12 h-full">
                <img src="@/assets/images/donation.png" class="w-12 border-round-xl"/>
            </div>
            <div class="sm:col-6 col-12">
                <div class="flex justify-content-center">
                    <div>
                        <p class="text-6xl font-bold text-blue-600 flex justify-content-center">Impacte Vidas, Inspire Mudanças</p>
                        <p class="text-4xl mt-3 flex justify-content-center">Cada gesto seu reverbera esperança.</p>
                        <p class="text-xl mt-3 flex justify-content-center">Além de doações monetárias, seu envolvimento pode tomar a forma de tempo dedicado, conhecimento compartilhado e ações solidárias. Sua influência é a força motriz para a transformação.</p>
                        <p class="text-xl flex justify-content-center">Unidos, temos o poder de reconstruir comunidades e reacender sonhos. Seja a mudança que deseja ver no mundo.</p>
                        <div class="flex justify-content-center mt-4">
                            <Button @click="$router.push('/user/login')" label="Eu quero fazer parte" class="p-button-raised p-button-lg p-button-info" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>