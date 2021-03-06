<template>
    <div 
        class="offer"
        :class="{
            'offer_open_details': isShowDetails,
            'offer_open_companies': isShowCompanies,
            'offer_performed': data.performed,
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
            <h4 v-if="isPartner" class="offer__type">{{ trans(offerType) }}</h4>
            <button 
                class="offer__btn-details btn"
                type="button"
                @click="isShowDetails = !isShowDetails"
            >
                {{trans('request-details')}}
            </button>
        </div>
        <div class="offer__body">
            <p v-if="isClient" class="offer__desc">{{ offerDesc }}</p>
            <h4 v-if="isPartner">{{ offerDirection }}</h4>
            <p 
                class="mt-2"
                style="color: #1072D8;" 
                v-if="data.price"
            >
                <strong>{{trans('price')}} {{ data.price }} €</strong>
            </p>
            <button 
                v-if="isPartner && data.responded_partners && data.responded_partners.length" 
                @click="isShowCompanies = !isShowCompanies"
                class="offer__btn-companies mt-2" 
                type="button"
            >
                {{trans('suggested-companies')}}
            </button>
            <offer-companies 
                v-if="data.responded_partners && data.responded_partners.length" 
                :data="data.responded_partners"
                :offer-id="data.id"
                :is-show-btn-accept-company="true"
                :is-performed="data.performed"
                @acceptCompany="$emit('acceptCompany', {
                    proposalId: data.id,
                    userId: $event,
                })"
            />
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
        </div>
        <div class="offer__footer">
            <button 
                v-if="isClient && data.responded_partners.length" 
                @click="isShowCompanies = !isShowCompanies"
                class="offer__btn-companies" 
                type="button"
            >
                {{trans('suggested-companies')}}
            </button>
            <p v-if="isPartner" class="offer__desc">{{ offerDesc }}</p>
            <div class="offer__actions">
                <button 
                    v-if="isShowBtnAdd" 
                    class="offer__accept" 
                    type="button"
                    @click="$emit('addOffer', data.id)"
                >
                    {{trans('accept')}}
                </button>
                <a 
                    v-if="isShowBtnDownload" 
                    class="offer__download"
                    :href="'/proposals/download/' + data.id"
                    download 
                >
                    {{trans('download')}}
                </a>
                <a
                    v-if="isClient"
                    :href="'/proposal/edit/' + data.id + '#section-steps'" 
                    class="offer__edit" 
                    type="button"
                >
                    {{trans('edit')}}
                </a>
                <button 
                    class="offer__cancel" 
                    type="button"
                    v-if="isShowBtnCancel && !data.performed"
                    @click="$emit('deleteOffer', data.id)"
                >
                    {{trans('reject')}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import OfferCompanies from './OfferCompanies'

import OfferDetailsTransfer from './OfferDetailsTransfer'
import OfferDetailsCleaning from './OfferDetailsCleaning'
import OfferDetailsTransferCleaning from './OfferDetailsTransferCleaning'
import OfferDetailsFlexble from './OfferDetailsFlexble'

export default {
    props: ['data', 'typeJobId', 'isShowBtnDownload', 'isShowBtnCancel', 'isShowBtnAdd'],
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
                str += this.data.additional_info.from.rooms + ' ' + this.trans('room')
                str += ', ' + this.data.additional_info.from.floor + ' ' + this.trans('form-labels.floor')
            }

            if(this.typeJobId == 2) {
                str += this.data.additional_info.cleaning, 
                str += ', ' + this.data.additional_info.windows + ' ' + this.trans('form-labels.windows'), 
                str += ', ' + this.data.additional_info.shower_wc + ' ' + this.trans('form-labels.shower_wc'), 
                str += ', ' + this.data.additional_info.bath_wc + ' ' + this.trans('form-labels.bath_wc'), 
                str += ', ' + this.data.additional_info.wc + ' ' + this.trans('form-labels.wc')
            }

            if(this.typeJobId == 3) {
                str += this.data.additional_info.from.rooms + ' ' + this.trans('room')
                str += ', ' + this.data.additional_info.from.floor + ' ' + this.trans('form-labels.floor')
                str += ', ' + this.data.additional_info.cleaning + ' ' + this.trans('form-labels.cleaning'), 
                str += ', ' + this.data.additional_info.windows + ' ' + this.trans('form-labels.windows'), 
                str += ', ' + this.data.additional_info.shower_wc + ' ' + this.trans('form-labels.shower_wc'), 
                str += ', ' + this.data.additional_info.bath_wc + ' ' + this.trans('form-labels.bath_wc'), 
                str += ', ' + this.data.additional_info.wc + ' ' + this.trans('form-labels.wc')
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
        },
        offerType() {
            switch (this.typeJobId) {
                case 1: return 'umzug'
                case 2: return 'reinigung'
                case 3: return 'umzug_und_reinigung'
                case 4: return 'maler'
                case 5: return 'bodenleger'
                case 6: return 'heizung'
                case 7: return 'elektriker'
                case 8: return 'gartner' 
                case 9: return 'schreiner'
            }
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
