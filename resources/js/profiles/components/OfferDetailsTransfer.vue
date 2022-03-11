<template>
    <div class="offer-details">
        <div class="offer-details__item">
            <p class="offer-details__title">Adresse</p>
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
            <p class="offer-details__title">Termine</p>
            <p class="offer-details__txt">{{ data.date_start }}</p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Auszug</p>
            <p class="offer-details__txt">
                {{data.additional_info.from.house_type }}, 
                {{data.additional_info.from.square }} m2, 
                {{data.additional_info.from.rooms }} Zimmer, 
                {{data.additional_info.from.floor }} Stock, 
                {{data.additional_info.from.lift }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Einzug</p>
            <p class="offer-details__txt">
                {{ data.additional_info.to.house_type }}, 
                {{ data.additional_info.to.square }} m2, 
                {{ data.additional_info.to.floor }} Stock, 
                {{ data.additional_info.to.lift }}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Flexibel</p>
            <p class="offer-details__txt">
                {{ data.additional_info.from.dayrange }}
            </p>
        </div>
        <div v-if="data.additional_info.from.other" class="offer-details__item">
            <p class="offer-details__title">Andere Info</p>
            <p class="offer-details__txt">
                {{ data.additional_info.from.other.join(', ') }}
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
                {{ data.client.name}} {{ data.client.lastname}}, 
                Telefon {{ data.client.phone}}, 
                {{ data.client.email}}
            </p>
        </div>
        <div class="offer-details__item">
            <p class="offer-details__title">Erreichbarkeit</p>
            <p class="offer-details__txt">
                {{ data.client.availability}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
}
</script>