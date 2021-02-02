<template>
    <div class="hamburger" @click="click">
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    
    methods: {
        click () {
            this.$emit('click')
        }
    }
}
</script>

<style scoped>
.hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: flash 1s;
    animation-delay: 1s;
    padding: 24px;
}

.hamburger > * {
    height: 1px;
    width: 10px;
    margin: 1px;
    background: var(--white);
}

.hamburger:hover > * {
    background: var(--accent-color)
}

.hamburger > *,
.hamburger:hover > * {
    transition: all 0.5s ease
}

@keyframes flash {
    0% { opacity: 0;} 
}

/* open */ 

.hamburger.open > *:nth-child(1){
    transform: rotate(45deg) translate(1px, 1px);
    -webkit-transform: rotate(45deg) translate(1px, 1px);
}

.hamburger.open > *:nth-child(2){
    transform: rotate(-45deg) translate(1px, -1px);
    -webkit-transform: rotate(-45deg) translate(1px, -1px);
}

</style>