<template>
    <div class="grid bg-blue-200 border-round-xl">
        <div class="sm:col-6 col-12 h-full ">
            <img src="@/assets/images/donation.png" class="w-12 border-round-xl"/>
        </div>
        <div class="sm:col-6 col-12">
            <div class="flex justify-content-center">
                <div>
                    <p class="text-6xl">{{$t('Save lives, support')}}</p>
                    <p class="text-2xl">{{$t('You can help in many ways besides')}}</p>
                    <p class="text-2xl">{{$t('donating money. Join us and')}}</p>
                    <p class="text-2xl">{{$t('transform lives.')}}</p>
                    <div class="flex justify-content-center">
                        <Button class="bg-white w-6" label="I want to help" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>