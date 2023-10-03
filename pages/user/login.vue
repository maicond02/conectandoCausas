<template #content>
    <div>

            <Card> 
                <template #content>
                    <div class="grid">
                        <div class="col-6">
                            <div class="flex align-items-start justify-content-start">
                                <h3>alo</h3>
                            </div>
                        </div>
                        <div class="col-6">
                            <h3 class="flex flex-row-reverse mr-8">Login</h3>
                            <div class="flex-column flex align-items-end justify-content-end">
                                
                                <InputText placeholder="Nome" class="" type="text" />
                                <br>
                                <InputText placeholder="Apelido" class="" type="text" />
                                <br>
                                <InputText placeholder="E-mail" class="" type="text" />
                                <br>
                                <InputText placeholder="Password" class="" type="password"/>
                            </div>
                        </div>
                    </div>
                </template>

            </Card>

    </div>
</template>

<script lang="ts">

</script>

<style scoped>
.teste1{
    margin-right: -0.5rem;
}

</style>