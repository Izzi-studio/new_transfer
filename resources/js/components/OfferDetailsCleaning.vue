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
            <p class="offer-details__title">{{trans('house')}}</p>
            <p class="offer-details__txt">
                {{ data.additional_info.house_type }}, 
                {{ data.additional_info.square }} m2, 
                {{ data.additional_info.rooms }} {{trans('room')}}, 
                {{ data.additional_info.floor }} {{trans('form-labels.floor')}}, 
                {{ data.additional_info.lift }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">{{trans('form-labels.soil_type')}}</p>
            <p class="offer-details__txt">{{ data.additional_info.soil_type }}</p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">{{trans('form-labels.window_size')}}</p>
            <p class="offer-details__txt">{{ data.additional_info.window_size }}</p>
        </div>
        <div v-if="data.additional_info.other" class="offer-details__item">
            <p class="offer-details__title">{{trans('form-labels.other')}}</p>
            <p class="offer-details__txt">
                {{ data.additional_info.other.join(', ') }}
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
            <div v-if="data.client.availability" class="offer-details__item">
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