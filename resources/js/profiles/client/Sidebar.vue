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
    computed: {
        menu() {
            return [
                {
                    text: this.trans('personal-data'),
                    submenu: [
                        {
                            text: this.trans('info'),
                            to: {
                                name: 'personalData_client',
                            }
                        },
                        {
                            text: this.trans('change-password'),
                            to: {
                                name: 'changePassword_client',
                            }
                        },
                    ]
                },
                {
                    text: this.trans('umzug'),
                    to: {
                        params: {
                            typeJob: 'umzug',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: this.trans('reinigung'),
                    to: {
                        params: {
                            typeJob: 'reinigung',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: this.trans('umzug_und_reinigung'),
                    to: {
                        params: {
                            typeJob: 'umzug-und-reinigung',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: this.trans('maler'),
                    to: {
                        params: {
                            typeJob: 'maler',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: this.trans('bodenleger'),
                    to: {
                        params: {
                            typeJob: 'bodenleger',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: this.trans('heizung'),
                    to: {
                        params: {
                            typeJob: 'heizung',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: this.trans('elektriker'),
                    to: {
                        params: {
                            typeJob: 'elektriker',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: this.trans('gartner'),
                    to: {
                        params: {
                            typeJob: 'gartner',
                        },
                        name: 'requests_client'
                    }
                },
                {
                    text: this.trans('schreiner'),
                    to: {
                        params: {
                            typeJob: 'schreiner',
                        },
                        name: 'requests_client'
                    }
                }
            ]
        },
        currentComponentName() {
            return this.$route.name
        }
    }
}
</script>
