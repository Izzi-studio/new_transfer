<template>
    <div class="profile-sidebar">
        <div
            v-for="menuItem in menu"
            :key="menuItem.to"
            class="profile-sidebar__item"
            :class="{
                'profile-sidebar__item_has-sublist': menuItem.submenu, 
                'profile-sidebar__item_active': $route.path.includes(menuItem.to)
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
                    @click="$emit('clickToLink', menuItem.text)"
                >
                    <router-link 
                        class="profile-sidebar__link"
                        active-class="profile-sidebar__link_active"
                        :to="{path: prefix+menuItem.to, query: menuItem.query}"
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
                    :key="subItem.to"
                    @click="$emit('clickToLink', subItem.text)"
                >
                    <router-link 
                        class="profile-sidebar__sublink"
                        active-class="profile-sidebar__sublink_active"
                        :to="prefix+menuItem.to+subItem.to"
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
            prefix: '/benutzerkonto',
            menu: [
                {
                    text: 'Persönliche Daten',
                    to: '/personliche-daten',
                    submenu: [
                        {
                            text: 'Info',
                            to: '/info',
                        },
                        {
                            text: 'Passwort ändern',
                            to: '/passwort-andern',
                        },
                    ]
                },
                {
                    text: 'Umzug',
                    to: '/umzug',
                },
                {
                    text: 'Reinigung',
                    to: '/reinigung',
                },
                {
                    text: 'Umzug + Reinigung',
                    to: '/umzug-und-reinigung',
                },
                {
                    text: 'Maler/Gipser',
                    to: '/maler',
                },
                {
                    text: 'Bodenleger',
                    to: '/bodenleger',
                },
                {
                    text: 'Heizungsanbieter',
                    to: '/heizung',
                },
                {
                    text: 'Elektriker',
                    to: '/elektriker',
                },
                {
                    text: 'Gärtner',
                    to: '/gartner',
                },
                {
                    text: 'Schreiner',
                    to: '/schreiner',
                }
            ]
        }
    },
}
</script>
