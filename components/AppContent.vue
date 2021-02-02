<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AppContent'
}
</script>

<style scoped>
    div.content {
        grid-area: content;
        background: rgba(12,12,12,0.1);
        overflow: hidden;
    }
</style>