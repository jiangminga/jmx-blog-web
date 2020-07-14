<template>
    <div>
        {{id}}
    </div>
</template>

<script>
    export default {
        name: "info",
        data() {
            return {
                id: this.$router.query.id
            }
        }
    }
</script>

<style scoped>

</style>