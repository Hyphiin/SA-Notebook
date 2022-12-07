import { defineStore } from "pinia";
import { ref } from "vue";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/js/firebase";

const notesCollectionRef = collection(db, "notes");
const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

export const useStoreNotes = defineStore("storeNotes", () => {
  const notes = ref([]);

  /**
   * actions
   */
  const getNotes = async () => {
    onSnapshot(notesCollectionQuery, (querySnapshot) => {
      const tempNotes = [];
      querySnapshot.forEach((doc) => {
        let note = {
          id: doc.id,
          content: doc.data().content,
          date: doc.data().date,
        };
        tempNotes.push(note);
      });
      notes.value = tempNotes;
    });
  };

  const addNote = async (newNoteContent) => {
    let currentDate = new Date().getTime(),
      date = currentDate.toString();

    await addDoc(notesCollectionRef, {
      content: newNoteContent,
      date,
    });
  };

  const deleteNote = async (idToDelete) => {
    await deleteDoc(doc(notesCollectionRef, idToDelete));
  };

  const updateNote = async (id, content) => {
    await updateDoc(doc(notesCollectionRef, id), {
      content,
    });
  };

  /**
   * getters
   */
  const getNoteContent = (idToEdit) => {
    return notes.value.filter((note) => note.id === idToEdit)[0].content;
  };

  const getTotalNotesCount = () => {
    return notes.value.length;
  };

  const getTotalCharactersCount = () => {
    let count = 0;
    notes.value.forEach((note) => {
      count += note.content.length;
    });
    return count;
  };

  return {
    notes,
    getNotes,
    addNote,
    deleteNote,
    updateNote,
    getNoteContent,
    getTotalNotesCount,
    getTotalCharactersCount,
  };
});
