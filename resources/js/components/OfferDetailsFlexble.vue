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