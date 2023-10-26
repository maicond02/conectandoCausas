<template #content>
    <div class="grid">
        <div class="col-12">
            <card class="flex justify-content-center w-12">
              <template #content>
                <div class="col-12">
                  <h3 style="font-size: xx-large;" class="col-12">Contato e nossas páginas</h3>
                  <Fieldset>
                    <template #legend>
                        <div class="flex align-items-center">
                            <span class="custom-icon pi pi-whatsapp mr-2"></span>
                            <span class="custom-text font-bold text-lg">WhatsApp</span>
                        </div>
                    </template>
                    <p class="m-0">
                      Segue  nosso WhatsApp Messenger (19)123456789.
                    </p>
                  </Fieldset>
                    <!---------------------------->
                  <Fieldset>
                    <template #legend>
                        <div class="flex align-items-center">
                            <span class="custom-icon-instagram pi pi-instagram mr-2"></span>
                            <span class="custom-text-instagram font-bold text-lg">Instagram</span>
                        </div>
                    </template>
                    <p class="m-0">
                      Segue  nosso Instagram @ConectandoCausas_.
                    </p>
                  </Fieldset>
                    <!---------------------------->
                  <Fieldset>
                    <template #legend>
                        <div class="flex align-items-center">
                            <span class="custom-icon-facebook pi pi-facebook mr-2"></span>
                            <span class="custom-text-facebook font-bold text-lg">Facebook</span>
                        </div>
                    </template>
                    <p class="m-0">
                      Segue  nosso Facebook ConectandoCausas2023.
                    </p>
                  </Fieldset>
                   <!---------------------------->
                  <Fieldset>
                    <template #legend>
                        <div class="flex align-items-center">
                            <span class="custom-icon-twitter pi pi-twitter mr-2"></span>
                            <span class="custom-text-twitter font-bold text-lg">Twitter</span>
                        </div>
                    </template>
                    <p class="m-0">
                      Segue  nosso Twitter @ConectandoCausas2023.
                    </p>
                  </Fieldset>
                </div>
              </template>
            </card>
        </div>
    </div>
</template>

<style scoped>
.custom-icon {
  color: #25D366;
}
.custom-text{
  color: #25D366;
}
.custom-icon-instagram {
  color: #C13584;
}
.custom-text-instagram{
  color: #C13584;
}
.custom-icon-facebook{
  color: #4267B2;
}
.custom-text-facebook{
  color: #4267B2;
}
.custom-icon-twitter{
  color: #1DA1F2;
}
.custom-text-twitter{
  color: #1DA1F2;
}


</style>