<template>
    <div 
        class="offer"
        :class="{
            'offer_open_details': isShowDetails,
            'offer_open_companies': isShowCompanies,
        }"
    >
        <p class="offer__date mb-1">{{ data.created_at }}</p>
        <div class="offer__header">
            <h4 
                v-if="isClient" 
                class="offer__direction"
            >
                {{ offerDirection }}
            </h4>
            <h4 v-if="isPartner" class="offer__type">Umzug</h4>
            <button 
                class="offer__btn-details btn"
                type="button"
                @click="isShowDetails = !isShowDetails"
            >
                Anfrage Details
            </button>
        </div>
        <div class="offer__body">
            <p v-if="isClient" class="offer__desc">{{ offerDesc }}</p>
            <h4 v-if="isPartner">{{ offerDirection }}</h4>
        </div>
        <div class="offer__footer">
            <button 
                v-if="isClient && data.responded_partners.length" 
                @click="isShowCompanies = !isShowCompanies"
                class="offer__btn-companies" 
                type="button"
            >
                Vorgeschlagene Unternehmen
            </button>
            <p v-if="isPartner" class="offer__desc">{{ offerDesc }}</p>
            <div class="offer__actions">
                <button v-if="isPartner" class="offer__accept" type="button">Akzeptieren</button>
                <a
                    v-if="isClient"
                    :href="'/proposal/edit/' + data.id" 
                    class="offer__edit" 
                    type="button"
                >
                    Bearbeiten
                </a>
                <button 
                    class="offer__cancel" 
                    type="button"
                    @click="$emit('deleteOffer', data.id)"
                >
                    Ablehnen
                </button>
            </div>
        </div>
        <offer-details-transfer :data="data" v-if="typeJobId == 1" />
        <offer-details-cleaning :data="data" v-if="typeJobId == 2" />
        <offer-details-transfer-cleaning :data="data" v-if="typeJobId == 3" />
        <offer-details-flexble 
            :data="data" 
            v-if="
                typeJobId == 4 ||
                typeJobId == 5 ||
                typeJobId == 6 ||
                typeJobId == 7 ||
                typeJobId == 8 ||
                typeJobId == 9
            " 
        />
        <offer-companies 
            v-if="isClient && data.responded_partners.length" 
            :data="data.responded_partners" 
        />
    </div>
</template>

<script>
import OfferCompanies from './OfferCompanies'

import OfferDetailsTransfer from './OfferDetailsTransfer'
import OfferDetailsCleaning from './OfferDetailsCleaning'
import OfferDetailsTransferCleaning from './OfferDetailsTransferCleaning'
import OfferDetailsFlexble from './OfferDetailsFlexble'

export default {
    props: ['data', 'typeJobId'],
    data: function() {
        return {
            isShowDetails: false,
            isShowCompanies: false,
        }  
    },
    computed: {
        userAuth() {
            return document.querySelector('body').dataset.userAuth
        },
        isClient() {
            return this.userAuth === 'client'
        },
        isPartner() {
            return this.userAuth === 'partner'
        },
        offerDesc() {
            let str = '';

            if(this.typeJobId == 1) {
                str += this.data.additional_info.from.rooms + ' Zimmer'
                str += ', ' + this.data.additional_info.from.floor + ' Stock'
            }

            if(this.typeJobId == 2) {
                str += this.data.additional_info.cleaning, 
                str += ', ' + this.data.additional_info.windows + ' Fenster', 
                str += ', ' + (this.data.additional_info.shower_wc || '-'), 
                str += ', ' + (this.data.additional_info.bath_wc || '-'), 
                str += ', ' + (this.data.additional_info.wc || '-')
            }

            if(this.typeJobId == 3) {
                str += this.data.additional_info.from.rooms + ' Zimmer'
                str += ', ' + this.data.additional_info.from.floor + ' Stock'
                str += ', ' + this.data.additional_info.cleaning, 
                str += ', ' + this.data.additional_info.windows + ' Fenster', 
                str += ', ' + (this.data.additional_info.shower_wc || '-'), 
                str += ', ' + (this.data.additional_info.bath_wc || '-'), 
                str += ', ' + (this.data.additional_info.wc || '-')
            }
            
            if(
                this.typeJobId == 4 ||
                this.typeJobId == 5 ||
                this.typeJobId == 6 ||
                this.typeJobId == 7 ||
                this.typeJobId == 8 ||
                this.typeJobId == 9
            ) {
                str += this.data.additional_info.work_should_be_done.join(', ')

                if(this.typeJobId == 5) {
                    str += ', ' + this.data.additional_info.square
                }
            }
            
            return str
        },
        offerDirection() {
            let str = '';

            if(this.typeJobId == 1 || this.typeJobId == 3) {
                str = this.data.region_from + ' > ' + this.data.region_to 
            }

            if(
                this.typeJobId == 2 ||
                this.typeJobId == 4 ||
                this.typeJobId == 5 ||
                this.typeJobId == 6 ||
                this.typeJobId == 7 ||
                this.typeJobId == 8 ||
                this.typeJobId == 9
            ) {
                str = this.data.region_from 
            }

            return str
        }
    },
    components: {
        OfferCompanies,
        OfferDetailsTransfer,
        OfferDetailsCleaning,
        OfferDetailsTransferCleaning,
        OfferDetailsFlexble
    }
}
</script>
