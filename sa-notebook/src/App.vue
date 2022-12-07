<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <router-view></router-view>
  </div>
</template>

<script setup>
/**
 * imports
 */
import { onMounted } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import NavBar from "@/components/Layout/NavBar.vue";

/**
 * store
 */
const storeNotes = useStoreNotes();

/**
 * mounted
 */
onMounted(() => {
  storeNotes.getNotes();
});
</script>

<style>
@import "bulma\css\bulma.min.css";
</style>
