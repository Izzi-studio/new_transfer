<template>
    <div class="row">
        <div class="col-lg-4 mt-2 mt-lg-4">
            <sidebar 
                :class="{'d-none d-lg-block': !isShowSidebarMob}"
                @clickToLink="isShowSidebarMob = false"
            />
        </div>
        <div class="col-lg-8 mt-2 mt-lg-4">
            <div 
                class="profile-info"
                :class="{'d-none d-lg-block': isShowSidebarMob}"
            >
                <button
                    @click="isShowSidebarMob = true"
                    class="btn btn_theme_gray mb-4 d-block d-lg-none mb-4"
                >
                    Zurück
                </button>
                <router-view :key="$route.path" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar'

export default {
    props: ['localize'],
    data() {
        return {
            isShowSidebarMob: false,
        }
    },
    mounted() {
        this.$store.commit('setLocalize', JSON.parse(this.localize))
    },
    components: {
        Sidebar,
    }
}
</script>