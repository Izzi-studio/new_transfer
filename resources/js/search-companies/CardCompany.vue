<template>
    <a :href="data.link" class="card-companies">
        <img class="card-companies__img" :src="data.avatar || '/images/default-avatar.webp'" alt="">
        <p class="card-companies__title">{{ data.company }}</p>
        <p class="card-companies__location">{{ data.city }}, {{ data.street }}</p>
        <span class="card-companies__btn-profile">{{trans('show-profile')}}</span>
        <div class="card-companies__rating">
            <div 
                class="rating"
                :class="'rating_fullness_'+data.rating_avg"
            ></div>
            <p class="card-companies__reviews-count">{{ data.review_count }} {{trans('reviews')}}</p>
        </div>
        <div class="card-companies__contact">
            <p class="card-companies__phone">
                <a :href="'tel:'+data.phone.replace(/\D/g, '')">{{ data.phone }}</a>
            </p>
            <p class="card-companies__email">
                <a :href="'mailto:'+data.email">{{ data.email }}</a>
            </p>
        </div>
    </a>
</template>

<script>
export default {
    props: ['data']
}
</script>