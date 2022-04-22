<template>
    <div class="offer-details">
        <div class="offer-details__item">
            <p class="offer-details__title">{{trans('address')}}</p>
            <p class="offer-details__txt">
                {{ data.additional_info.street }} {{ data.additional_info.number }}, 
                {{ data.additional_info.zip }}, 
                {{ data.additional_info.city }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">{{trans('term')}}</p>
            <p class="offer-details__txt">{{ data.date_start }}</p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">{{trans('form-labels.dayrange')}}</p>
            <p class="offer-details__txt">
                {{ data.additional_info.dayrange }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">{{trans('form-labels.description')}}</p>
            <p class="offer-details__txt">
                {{ data.description }}
            </p>
        </div>
        <template v-if="data.client">
            <div class="offer-details__item">
                <p class="offer-details__title">{{trans('contact-data')}}</p>
                <p class="offer-details__txt">
                    {{ data.client.name }} {{ data.client.lastname }}, 
                    {{trans('form-labels.phone')}} {{ data.client.phone }}, 
                    {{ data.client.email }}
                </p>
            </div>
            <div class="offer-details__item">
                <p class="offer-details__title">{{trans('form-labels.availability')}}</p>
                <p class="offer-details__txt">
                    {{ data.client.availability }}
                </p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: ['data'],
}
</script>