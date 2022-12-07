<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ dateFormatted }}</small>
          <small class="column has-text-right">{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/editNote/${note.id}`" class="card-footer-item"
        >Edit</router-link
      >
      <a
        @click.prevent="modals.deleteNote = true"
        href="#"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote
      v-model="modals.deleteNote"
      v-if="modals.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>
/**
 * imports
 */
import { computed, reactive } from "vue";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";
import { useDateFormat } from "@vueuse/core";

/**
 * props
 */
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/**
 * date formatted
 */
const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date));
  let formattedDate = useDateFormat(date, "MM-DD-YYYY @ HH:mm");
  return formattedDate.value;
});

/**
 * character length
 */
const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

/**
 * modals
 */
const modals = reactive({
  deleteNote: false,
});
</script>
