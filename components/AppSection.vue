<template>
    <section>
        <slot></slot>
    </section>
</template>

<style scoped>
    section {
        height: 100vh;
        scroll-snap-align: start;
        background: white;
        padding-top: 100px;
    }

    section {
        display: flex;
    }

    section.center {
        justify-content: center;
        align-items: center;
    }
</style>