<!-- Default <head> (can be overridden by pages) -->

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Demo showcasing Vike" />
  <link rel="icon" :href="logoUrl" />
  <h2>Woof</h2>
</template>

<script setup lang="ts">
import logoUrl from "../assets/logo.svg";
import sassStyles from "~/scss/style.module.scss"
</script>
