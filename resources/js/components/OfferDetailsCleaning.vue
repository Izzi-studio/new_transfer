<template>
    <div class="offer-details">
        <div class="offer-details__item">
            <p class="offer-details__title">Adresse</p>
            <p class="offer-details__txt">
                {{ data.additional_info.street }} {{ data.additional_info.number }}, 
                {{ data.additional_info.zip }}, 
                {{ data.additional_info.city }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Termine</p>
            <p class="offer-details__txt">{{ data.date_start }}</p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Flexibel</p>
            <p class="offer-details__txt">
                {{ data.additional_info.dayrange }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Haus</p>
            <p class="offer-details__txt">
                {{ data.additional_info.house_type }}, 
                {{ data.additional_info.square }} m2, 
                {{ data.additional_info.rooms }} Zimmer, 
                {{ data.additional_info.floor }} Stock, 
                {{ data.additional_info.lift }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Bodentyp</p>
            <p class="offer-details__txt">{{ data.additional_info.soil_type }}</p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Fenstergröße</p>
            <p class="offer-details__txt">{{ data.additional_info.window_size }}</p>
        </div>
        <div v-if="data.additional_info.other" class="offer-details__item">
            <p class="offer-details__title">Andere Info</p>
            <p class="offer-details__txt">
                {{ data.additional_info.other.join(', ') }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Bemerkungen</p>
            <p class="offer-details__txt">
                {{ data.description }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Kontaktdaten</p>
            <p class="offer-details__txt">
                {{ data.client.name }} {{ data.client.lastname }}, 
                Telefon {{ data.client.phone }}, 
                {{ data.client.email }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Erreichbarkeit</p>
            <p class="offer-details__txt">
                {{ data.client.availability }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
}
</script>