<template>
    <header>
        <slot></slot>
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li><nuxt-link to="/jokes">Jokes</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
        </ul>

    </header>
</template>
<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            fixed: false
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            //this.fixed = (window.scrollY > 50) ? true: false;
            let max = 250; 
            let min = 80;
            let height = ((max - window.scrollY) > min) ? max - window.scrollY : min; 
    
            document.querySelector('header').style.height = height + "px";
        }, { passive: false });
    }

    
}
</script>
<style scoped>
    header {
        position: fixed;
        left:0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 250px;
        background: rgba(43, 177, 187, 0.5);
        transition: background 0.2s ease;
        padding: 24px 5vw;
    }
    

    header:hover {
        background: rgba(43, 177, 187, 0.6);
        transition: background 0.2s ease;
    }
    header ul {
        display: flex;
    }

    header ul li {
        display: inline-block;
        padding: 0.3rem 0 0.3rem 1.5rem
    }

    header a {
        color: whitesmoke
    }
    header a:hover {
        color: white;
        text-decoration: underline;
    }

</style>
