<template>
    <section>
        <slot></slot>
    </section>
</template>

<style scoped>
    section {
        
        min-width: 100vw;
        scroll-snap-align: end;
        scroll-snap-align: center;
        background: white;
    }

    section {
        display: flex;
    }

    section.center {
        justify-content: center;
        align-items: center;
    }
</style>