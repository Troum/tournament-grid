<script setup>
import Bracket from "@/components/Bracket.vue";
import {ref} from "vue";
const teams = ref(["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"])
const data = ref([
  //quads
  {
    title:'Quarter Final',
    games: [
      {
        player1: { id: 1, name: "CP1", winner: true, score: 3 },
        player2: { id: 2, name: "CP4", winner: false, score: 0 },
      },
      {
        player1: { id: 3, name: "CP5", winner: false, score: 1 },
        player2: { id: 4, name: "CP8", winner: true, score: 2 },
      },
      {
        player1: { id: 5, name: "CP5", winner: false, score: 1 },
        player2: { id: 6, name: "CP8", winner: true, score: 2 },
      },
      {
        player1: { id: 7, name: "CP5", winner: false, score: 1 },
        player2: { id: 8, name: "CP8", winner: true, score: 2 },
      },
      {
        player1: { id: 9, name: "CP1", winner: true, score: 3 },
        player2: { id: 10, name: "CP4", winner: false, score: 0 },
      },
      {
        player1: { id: 11, name: "CP5", winner: false, score: 1 },
        player2: { id: 12, name: "CP8", winner: true, score: 2 },
      },
      {
        player1: { id: 13, name: "CP5", winner: false, score: 1 },
        player2: { id: 14, name: "CP8", winner: true, score: 2 },
      },
      {
        player1: { id: 15, name: "CP5", winner: false, score: 1 },
        player2: { id: 16, name: "CP8", winner: true, score: 2 },
      },
    ],
  },
  //Semi finals
  {
    title:'Semi Final',
    games: [
      {
        player1: { id: 1, name: "CP1", winner: false, score: 3 },
        player2: { id: 4, name: "CP4", winner: false, score: 0 },
      },
      {
        player1: { id: 5, name: "CP5", winner: false, score: 1 },
        player2: { id: 8, name: "CP8", winner: true, score: 2 },
      },
      {
        player1: { id: 9, name: "CP1", winner: true, score: 3 },
        player2: { id: 12, name: "CP4", winner: false, score: 0 },
      },
      {
        player1: { id: 13, name: "CP5", winner: false, score: 1 },
        player2: { id: 16, name: "CP8", winner: true, score: 2 },
      },
    ],
  },
  //Final
  {
    title:'Final',
    games: [
      {
        player1: { id: 4, name: "CP4", winner: false, score: 2 },
        player2: { id: 8, name: "CP8", winner: true, score: 1 },
      },
      {
        player1: { id: 12, name: "CP4", winner: false, score: 2 },
        player2: { id: 13, name: "CP8", winner: true, score: 1 },
      },
    ],
  },
  {
    title:'Quarter',
    games: [
      {
        player1: { id: 12, name: "CP4", winner: true, score: 2 },
        player2: { id: 8, name: "CP8", winner: false, score: 1 },
      }
    ],
  },
])
</script>
<template>
  <div>
    <bracket :rounds="data">
      <template #game="{ game }">
        <div style="min-height: 2rem">
          {{ game }}
        </div>
      </template>
    </bracket>
  </div>
</template>
<style scoped>
body {
  background-color: #f1f1f1;
  font-family: "Work Sans", "Helvetica Neue", Arial, sans-serif;
}
</style>