<template #content>
    <div class="grid">
        <div class="col-3">
            <div class="card w-12">
                <Listbox v-model="selectedCountry" :options="countries" optionLabel="name" class="w-full" listStyle="height:820px">
                    <template #option="slotProps">
                        <div class="flex align-items-center">
                            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                            <div><Avatar :label="countries.avatar" class="mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle"  >{{ slotProps.option.avatar }}</Avatar></div>
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                </Listbox>
            </div>
        </div>
        <div class="col-9 h-full">
            <card class="h-full">
                <template #title>
                    <p style="font-size: x-large;">Leonardo</p>
                </template>
                <template #content>
                    <card class="">
                        <template #content>
                            <card class="cardtext h-5rem flex justify-content-start">
                                <template #content>
                                    <p>Oi, tudo bem?</p>
                                </template>
                            </card>
                            <card class="cardtext h-5rem mt-2 flex justify-content-start">
                                <template #content>
                                    <p>Qual é a localização da ONG ?</p>
                                </template>
                            </card>

                            <div class="flex justify-content-end">
                                <card class="cardtext2 h-5rem mt-2">
                                    <template #content>
                                        <p>oi, tudo sim, e com você?</p>
                                    </template>
                                </card>
                            </div>
                            <div class="flex justify-content-end">
                                <card class="cardtext2 h-6rem mt-2">
                                    <template #content>
                                        <p>A ONG se localiza no endereço: Av. de Cillo, 3500 - Parque Universitario, Americana - SP, 13467-600</p>
                                    </template>
                                </card>
                            </div>
                        </template>
                    </card>
                </template>
                <template #footer>
                    <div class="">
                        <span class="p-input-icon-right w-12">
                            <i class="pi pi-plus ml-2" />
                            
                            <InputText v-model="value1" placeholder="Mensagen" class="w-12"/>
                            <i class="pi pi-send ml-2" />
                        </span>
                    </div>
                </template>
            </card>
        </div>
    </div>
</template>

<style scoped>

.cardmensg{
    margin-top: 1px;
}
.p-inputtext{
    padding-left: 50px !important;
}
.cardtext{
    background-color: aliceblue;
}
.cardtext2{
    background-color: rgb(198, 226, 250);
}
</style>

<script>
export default {
    data() {
        return {
            selectedCountry: null,
            countries: [
                { name: 'Maicon', code: 'br', avatar:'M' },
                { name: 'Leonardo', code: 'BR', avatar: 'L' },
                { name: 'João', code: 'CN', avatar:'J' },
                { name: 'Vinicius', code: 'EG', avatar:'v' },
                { name: 'Carlos', code: 'FR', avatar:'C' },
                { name: 'Luan', code: 'DE', avatar:'L' },
                { name: 'Rafael', code: 'IN', avatar:'R' },
                { name: 'Beatriz', code: 'JP', avatar:'B' },
                { name: 'Gabriel', code: 'ES', avatar:'G' },
                { name: 'Juliana', code: 'US', avatar:'J' }
            ]
        };
    }
};
</script>

