<template>
    <Head>
        <meta property="og:title" content="rgfd"/>
        <favicons/>
        <!-- I've tried using a Favicons.vue with <favicons/>, but it didn't work. -->
        <!--FAVICON-START-->
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <!--FAVICON-END-->
    </Head>

    <navbar/>

    <div class="container mb-4">
        <breadcrumbs/>

        <router-view/>
    </div>

    <div class="toast-container position-fixed top-0 end-0 p-3">
    </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Breadcrumbs from "~/components/Common/Breadcrumbs.vue";
import { Head } from "@unhead/vue/components";
import Favicons from "~/components/Favicons.vue";
</script>
