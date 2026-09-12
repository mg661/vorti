
<script setup>
import Topbar from '@/components/Topbar.vue'
import heroImage from '@/assets/cat.png'
</script>

<template>
    <div>
        <header>
            <Topbar/>
        </header>

        <main>
            <div>
                <img :src="heroImage" alt="Hero">
            </div>
            <h1>
                Place for welcome message
            </h1>

            <div id="btn-container">
                <button>
                    button1
                </button>
                <button>
                    button2
                </button>
            </div>
        </main>

    </div>

</template>

<style scoped>
</style>
