<template>
    <div class="offer-companies">
        <div 
            v-for="company in data"
            :key="company.company"
            class="offer-company"
        >
            <div class="offer-company__header">
                    <img class="offer-company__logo" src="/images/company-1.png" alt="">
                    <a class="offer-company__link" href="#">Profil anzeigen</a></div>
            <div class="offer-company__body">
                <div class="offer-company__col">
                    <p class="offer-company__desc">{{ company.company }}</p>
                    <p class="offer-company__location">{{ company.name }}</p>
                </div>
                <div class="offer-company__col">
                    <p>
                        <a 
                            class="offer-company__phone" 
                            :href="'tel:'+company.phone.replace(/\D/g, '')"
                        >
                            {{ company.phone }}
                        </a>
                    </p>
                    <p> 
                        <a 
                            class="offer-company__email" 
                            :href="'mailto:'+company.email"
                        >
                            {{ company.email }}
                        </a>
                    </p>
                </div>
            </div>
            <div class="offer-company__footer">
                <div :class="'rating rating_fullness_'+company.rating_avg+' offer-company__rating'"></div>
                <p class="offer-company__count-rating">{{ company.star_count }} Bewertungen</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
}
</script>
