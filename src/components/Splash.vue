<template>
    <div>
        <h1>Splash Page</h1>
        <div @click="next()">Next Page</div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                say: "hello"
            }
        },
        methods: {
            next() {
                //console.log("Clicked");
                this.$router.push({ name: 'Another' });
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
      color: red;
    }
</style>