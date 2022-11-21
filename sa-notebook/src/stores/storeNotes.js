import { defineStore } from "pinia";
import { ref } from "vue";

export const useStoreNotes = defineStore("storeNotes", () => {
  const notes = ref([
    {
      id: "id1",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui         repellendus numquam deleniti! Est possimus corrupti error adipisc",
    },
    {
      id: "id2",
      content: "Shorter Note wuhuuu!",
    },
  ]);

  const addNote = (newNoteContent) => {
    let currentDate = new Date().getTime(),
      id = currentDate.toString();

    let note = {
      id,
      content: newNoteContent,
    };
    notes.value.unshift(note);
  };

  const deleteNote = (idToDelete) => {
    notes.value = notes.value.filter((note) => note.id !== idToDelete);
  };

  const updateNote = (id, content) => {
    let index = notes.value.findIndex((note) => note.id === id);
    notes.value[index].content = content;
  };

  const getNoteContent = (idToEdit) => {
    console.log(idToEdit);
    return notes.value.filter((note) => note.id === idToEdit)[0].content;
  };

  return { notes, addNote, deleteNote, updateNote, getNoteContent };
});