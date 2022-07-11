<template>
    <form id="payment-form" method="POST" :action="$store.state.additionalInfo.paymentUrl">
        <h4 class="d-block d-lg-none mb-3">{{trans('top-up-bill')}}</h4>
        <input type="hidden" name="_token" :value="csrfToken">
        <div class="row">
            <div class="col-sm-6">
                <label class="form-field" for="accountholder-name">
                    <p class="form-field__label ps-0">{{trans('total')}}</p>
                    <input name="amount" type="text" required />
                </label>
            </div>
        </div>
        <input class="btn mt-4" type="submit" :value="trans('send')" />
    </form>
</template>

<script>
export default {
    computed: {
        csrfToken() {
            return document.querySelector(`meta[name='csrf-token']`).content
        }
    },
}
</script>