<template #content>
    <div class="grid">
        <div class="col-3">
            <div class="card w-12">
                <Listbox v-model="selectedCountry" :options="countries" optionLabel="name" class="w-full" listStyle="height:820px">
                    <template #option="slotProps">
                            <div class="flex align-items-center">
                                <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                            <div>{{ slotProps.option.code }}</div>
                            <div>{{ slotProps.option.name }}</div>
                        </div>
                    </template>
                </Listbox>
            </div>
        </div>
        <div class="col-9">
            <card>
                <template #content>
                    <h3>todas mensagens</h3>
                    <p>mensagens</p>
                </template>
            </card>
        </div>
    </div>
</template>

<style scoped>

.cardmensg{
    margin-top: 1px;
}

</style>

<script>
export default {
    data() {
        return {
            selectedCountry: null,
            countries: [
                { name: 'Lucas', code: 'br' },
                { name: 'Maria', code: 'BR' },
                { name: 'João', code: 'CN' },
                { name: 'Ana', code: 'EG' },
                { name: 'Felipe', code: 'FR' },
                { name: 'Camila', code: 'DE' },
                { name: 'Rafael', code: 'IN' },
                { name: 'Beatriz', code: 'JP' },
                { name: 'Gabriel', code: 'ES' },
                { name: 'Juliana', code: 'US' }
            ]
        };
    }
};
</script>

