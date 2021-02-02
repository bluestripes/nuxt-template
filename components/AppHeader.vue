<template>
    <header :class="{'mini' : hidden}">
      <div class="header-content">
          <slot></slot> 
      </div>
    </header>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'AppHeader',
    data() {
        return {
            fixed: false
        }
    },
    mounted() {
        /*window.addEventListener('scroll', () => {
            //this.fixed = (window.scrollY > 50) ? true: false;
            let maxHeight = getComputedStyle(document.documentElement).getPropertyValue('--header-max-height');
            let minHeight = getComputedStyle(document.documentElement).getPropertyValue('--header-min-height');
            
            let max = parseInt(maxHeight, 10); 
            let min = parseInt(minHeight, 10);
            let height = ((max - window.scrollY) > min) ? max - window.scrollY : min; 
    
            document.querySelector('header').style.height = height + "px";
        }, { passive: false });*/
    },
    computed: {
        ...mapGetters({
            hidden: 'header/hidden'
        })
    },
}
</script>
<style scoped>
    header {
        grid-area: header;
        position: relative;
        height: var(--header-height);
        background: var(--accent-color);
        transition: all 1.2s ease;
    }

    header .header-content {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }
</style>
