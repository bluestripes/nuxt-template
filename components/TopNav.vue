<template>
    <div class="topnav" :class="{'open': visible}">
        <NuxtLink v-if="visible" to="/">Home</NuxtLink>
        <NuxtLink v-if="visible" to="/">About</NuxtLink>
        <NuxtLink v-if="visible" to="/">Contact</NuxtLink>
        <Hamburger @click="clickHamburger" :class="{'open': visible}"/>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            open: 'menu/open',
            close: 'menu/close'
        }),

        clickHamburger () {
            console.log("Klicking away")
            this.visible ? this.close() : this.open()
        },

        handleClickOutside ( event ) {
            if (!this.$el.contains(event.target)) {
                this.close() 
            }
            console.log('outside')
        }
    },

    computed: {
        ...mapGetters({
            visible: 'menu/visible'
        })
    },

    mounted() {
        document.addEventListener('click', this.handleClickOutside );
    },

    destroyed() {
        document.removeEventListener('click', this.handleClickOutside);
    }
}
</script>

<style>
.topnav {
    grid-area: nav;
    position: absolute;
    top: 0;

    left: 0;
    right: 0;
    padding: 0 6px;
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background: var(--black);
    color: var(--white);
    height: 12px;
    transition: height .3s linear;
    z-index: 100
}

.topnav a {
    color: var(--white);
    padding: 0 6px;
}
.topnav a:hover {
    color: var(--accent-color);
}
.topnav a,
.topnav a:hover {
    transition: color 0.5s ease;
}

.topnav.open { height: 80px; transition: height .3s linear};
</style>