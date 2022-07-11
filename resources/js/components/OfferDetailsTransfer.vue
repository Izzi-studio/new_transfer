<template>
    <div class="offer-details">
        <div class="offer-details__item">
            <p class="offer-details__title">{{trans('address')}}</p>
            <p class="offer-details__txt">
                {{ data.additional_info.from.street }} {{ data.additional_info.from.number }}, 
                {{ data.additional_info.from.zip }}, 
                {{ data.additional_info.from.city }}.<br />
                Nach {{ data.additional_info.to.street }} {{ data.additional_info.to.number }}, 
                {{ data.additional_info.to.zip }}, 
                {{ data.additional_info.to.city }}.
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">{{trans('term')}}</p>
            <p class="offer-details__txt">{{ data.date_start }}</p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">{{trans('abstract')}}</p>
            <p class="offer-details__txt">
                {{data.additional_info.from.house_type }}, 
                {{data.additional_info.from.square }} m2, 
                {{data.additional_info.from.rooms }} {{trans('room')}}, 
                {{data.additional_info.from.floor }} {{trans('form-labels.floor')}}, 
                {{data.additional_info.from.lift }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">{{trans('indent')}}</p>
            <p class="offer-details__txt">
                {{ data.additional_info.to.house_type }}, 
                {{ data.additional_info.to.square }} m2, 
                {{ data.additional_info.to.floor }} {{trans('form-labels.floor')}}, 
                {{ data.additional_info.to.lift }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">{{trans('form-labels.dayrange')}}</p>
            <p class="offer-details__txt">
                {{ data.additional_info.from.dayrange }}
            </p>
        </div>
        <div v-if="data.additional_info.from.other" class="offer-details__item">
            <p class="offer-details__title">{{trans('form-labels.other')}}</p>
            <p class="offer-details__txt">
                {{ data.additional_info.from.other.join(', ') }}
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
                    {{ data.client.name}} {{ data.client.lastname}}, 
                    {{trans('form-labels.phone')}} {{ data.client.phone}}, 
                    {{ data.client.email}}
                </p>
            </div>
            <div v-if="data.client.availability" class="offer-details__item">
                <p class="offer-details__title">{{trans('form-labels.availability')}}</p>
                <p class="offer-details__txt">
                    {{ data.client.availability}}
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