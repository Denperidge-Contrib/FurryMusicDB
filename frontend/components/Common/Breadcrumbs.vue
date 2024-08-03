<template>
    <nav v-if="hasMeta" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item" v-for="item in meta" :key="item.label">
                <a :href="item.url">
                    {{ item.label }}
                </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page" v-if="route.meta.title">
                {{ route.meta.title }}
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">

//import {useRoute} from "vue-router";
import {computed} from "vue";
import { usePageContext } from 'vike-vue/usePageContext'

//console.log(usePageContext())
//const route = useRoute();
const hasMeta = false
/*
const hasMeta = computed(() => {
    return 'breadcrumb' in route.meta;
});
*/

const meta = computed(() => {
    return null;
    /*
    if (!hasMeta.value) {
        return null;
    }

    const breadcrumb = route.meta.breadcrumb;
    if (typeof breadcrumb === 'function') {
        return breadcrumb(route);
    }
    return breadcrumb;
    */
});
</script>
