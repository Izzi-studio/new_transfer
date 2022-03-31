<template>
    <div class="profile-sidebar">
        <div
            v-for="menuItem in menu"
            :key="menuItem.text"
            class="profile-sidebar__item"
            :class="{
                'profile-sidebar__item_has-sublist': menuItem.submenu, 
                'profile-sidebar__item_active': menuItem.submenu && menuItem.submenu
                    .map(i => i.to && i.to.name)
                    .includes(currentComponentName) 
            }"
        >
            <template v-if="menuItem.submenu">
                <a 
                    href="#" 
                    class="profile-sidebar__link"
                >
                    {{ menuItem.text }}
                    <template v-if="menuItem.text == 'Anfragen' && allProposals">
                        {{ `(${allProposals})` }}
                        <span v-if="newProposals" class="ms-auto me-3">+{{ newProposals }}</span>
                    </template>
                </a>
            </template>
            <template v-else>
                <span
                    @click="$emit('clickToLink')"
                >
                    <router-link 
                        class="profile-sidebar__link"
                        active-class="profile-sidebar__link_active"
                        :to="menuItem.to"
                    >
                        {{ menuItem.text }}
                    </router-link>
                </span>
            </template>
            <ul
                v-if="menuItem.submenu" 
                class="profile-sidebar__sublist"
            >
                <li
                    class="profile-sidebar__subitem"
                    v-for="subItem in menuItem.submenu"
                    :key="subItem.text"
                    @click="$emit('clickToLink')"
                >
                    <router-link
                        v-if="subItem.to"
                        class="profile-sidebar__sublink"
                        active-class="profile-sidebar__sublink_active"
                        :to="subItem.to"
                        exact
                    >
                        {{ subItem.text }}
                    </router-link>
                    <a 
                        v-else
                        :href="subItem.href"
                        class="profile-sidebar__sublink"
                    >
                        {{ subItem.text }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        menu() {
            return [
                {
                    text: 'Persönliche Daten',
                    submenu: [
                        {
                            text: 'Info',
                            to: {
                                name: 'personalData_firma',
                            }
                        },
                        {
                            text: 'Passwort ändern',
                            to: {
                                name: 'changePassword_firma',
                            }
                        },
                    ]
                },
                {
                    text: 'Anfragen',
                    submenu: [
                        {
                            text: 'Offene',
                            to: {
                                params: {
                                    requests: 'offene',
                                },
                                name: 'requests_firma'
                            }
                        },
                        {
                            text: 'Angenommene',
                            to: {
                                params: {
                                    requests: 'angenommene',
                                },
                                name: 'requests_firma'
                            }
                        },
                        {
                            text: 'Abgesagte',
                            to: {
                                params: {
                                    requests: 'abgesagte',
                                },
                                name: 'requests_firma'
                            }
                        }
                    ]
                },
                {
                    text: 'Anträge von Firmen',
                    submenu: [
                        {
                            text: 'Ich verkaufe',
                            to: {
                                params: {
                                    requests: 'verkaufe',
                                },
                                name: 'sellRequests_firma'
                            }
                        },
                        {
                            text: 'Ich kaufe',
                            to: {
                                params: {
                                    requests: 'kaufe',
                                },
                                name: 'sellRequests_firma'
                            }
                        },
                        {
                            text: 'Anfrage verkaufen',
                            to: {
                                name: 'sellList_firma'
                            }
                        },
                        {
                            text: 'Wiederverkauf',
                            href: this.$store.state.additionalInfo.resellUrl
                        },
                    ]
                },
                {
                    text: 'Abgeschlossene Bewerbungen',
                    to: {
                        name: 'reviews_firma',
                    }
                },
                {
                    text: 'Guthaben Aufladen',
                    to: {
                        name: 'payment_firma',
                    }
                },
                {
                    text: 'Preise',
                    to: {
                        name: 'prices_firma',
                    }
                }
            ]            
        },
        allProposals() {
            return this.$store.state.profile.allProposals
        },
        newProposals() {
            return this.$store.state.profile.newProposals
        },
        currentComponentName() {
            return this.$route.name
        }
    },
}
</script>
