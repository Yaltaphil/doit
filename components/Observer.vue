<template>
    <div class="observer" />
</template>

<script>
export default {
    props: { options: { type: Object, default: () => {} } },

    data() {
        return {
            observer: null,
        }
    },

    mounted() {
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry?.isIntersecting) {
                this.$emit('intersect')
            }
        }, this.options)

        this.observer.observe(this.$el)
    },

    destroyed() {
        this.observer.disconnect()
    },
}
</script>