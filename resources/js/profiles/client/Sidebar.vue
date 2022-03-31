<template>
    <div class="profile-sidebar">
        <div
            v-for="menuItem in menu"
            :key="menuItem.text"
            class="profile-sidebar__item"
            :class="{
                'profile-sidebar__item_has-sublist': menuItem.submenu, 
                'profile-sidebar__item_active': menuItem.submenu && menuItem.submenu
                    .map(i => i.to.name)
                    .includes(currentComponentName) 
            }"
        >
            <template v-if="menuItem.submenu">
                <a 
                    href="#" 
                    class="profile-sidebar__link"
                >
                    {{ menuItem.text }}
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
                        class="profile-sidebar__sublink"
                        active-class="profile-sidebar__sublink_active"
                        :to="subItem.to"
                        exact
                    >
                        {{ subItem.text }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            menu: [
                {
                    text: 'Persönliche Daten',
                    submenu: [
                        {
                            text: 'Info',
                            to: {
                                name: 'personalData_client',
                            }
                        },
                        {
                            text: 'Passwort ändern',
                            to: {
                                name: 'changePassword_client',
                            }
                        },
                    ]
                },
                {
                    text: 'Umzug',
                    to: {
                        params: {
                            typeJob: 'umzug',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: 'Reinigung',
                    to: {
                        params: {
                            typeJob: 'reinigung',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: 'Umzug + Reinigung',
                    to: {
                        params: {
                            typeJob: 'umzug-und-reinigung',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: 'Maler/Gipser',
                    to: {
                        params: {
                            typeJob: 'maler',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: 'Bodenleger',
                    to: {
                        params: {
                            typeJob: 'bodenleger',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: 'Heizungsanbieter',
                    to: {
                        params: {
                            typeJob: 'heizung',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: 'Elektriker',
                    to: {
                        params: {
                            typeJob: 'elektriker',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: 'Gärtner',
                    to: {
                        params: {
                            typeJob: 'gartner',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: 'Schreiner',
                    to: {
                        params: {
                            typeJob: 'schreiner',
                        },
                        name: 'requests_client'
                    }
                }
            ]
        }
    },
    computed: {
        currentComponentName() {
            return this.$route.name
        }
    }
}
</script>
