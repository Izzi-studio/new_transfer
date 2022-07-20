<template>
    <div class="offer-companies">
        <div 
            v-for="company in data"
            :key="company.company"
            class="offer-company"
        >
            <div class="offer-company__header">
                <img class="offer-company__logo" :src="company.avatar || '/images/default-avatar.webp'" alt="">
                <div class="d-flex flex-column">
                    <button
                        v-if="isShowBtnAcceptCompany && !isPerformed"
                        class="offer__accept mb-2" 
                        type="button"
                        @click="$emit('acceptCompany', company.id)"
                    >
                        {{trans('accept')}}
                    </button>
                    <a 
                        class="offer-company__link" 
                        :href="`/firmenprofil/${company.profile_slug}/${offerId}`"
                    >
                        {{trans('show-profile')}}
                    </a>
                </div>
            </div>
            <div class="offer-company__body">
                <div class="offer-company__col">
                    <p class="offer-company__desc">{{ company.company }}</p>
                    <p class="offer-company__location">{{ company.city }}, {{ company.street }}</p>
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
                <p class="offer-company__count-rating">{{ company.star_count }} {{trans('reviews')}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'offerId', 'isShowBtnAcceptCompany', 'isPerformed'],
}
</script>
