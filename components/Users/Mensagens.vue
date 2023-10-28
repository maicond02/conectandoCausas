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
                    <p style="font-size: x-large;">Leozin</p>
                </template>
                <template #content>
                    <card class="h-24rem">

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

</style>

<script>
export default {
    data() {
        return {
            selectedCountry: null,
            countries: [
                { name: 'Lucas', code: 'br', avatar:'L' },
                { name: 'Maria', code: 'BR', avatar: 'M' },
                { name: 'João', code: 'CN', avatar:'J' },
                { name: 'Ana', code: 'EG', avatar:'A' },
                { name: 'Felipe', code: 'FR', avatar:'F' },
                { name: 'Camila', code: 'DE', avatar:'C' },
                { name: 'Rafael', code: 'IN', avatar:'R' },
                { name: 'Beatriz', code: 'JP', avatar:'B' },
                { name: 'Gabriel', code: 'ES', avatar:'G' },
                { name: 'Juliana', code: 'US', avatar:'J' }
            ]
        };
    }
};
</script>

