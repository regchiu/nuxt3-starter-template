<template>
  <NuxtLayout />
</template>
<script setup lang="ts">
// Those values should be defined in nuxt.config and can be overridden using environment variables.
// Private or public tokens that need to be specified after build using environment variables.
const runtimeConfig = useRuntimeConfig()
console.log('API base:', runtimeConfig.public.apiBase)
if (process.server) {
  console.log('API secret:', runtimeConfig.apiSecret)
}

// Contrary to the runtimeConfig option, these can not be overriden using environment variables.
// Public tokens that are determined at build time, website configuration such as theme variant, title and any project config that are not sensitive.
const appConfig = useAppConfig()
console.log('appConfig', appConfig.title)
</script>
