<script setup>
import Game from "@/components/Game.vue";
defineProps(['round', 'title'])
</script>

<template>
  <div class="tournament-bracket__round">
    <ul class="tournament-bracket__list">
      <game v-for="(game, index) of round" :key="index" :game="game">
        <template #game="{ game }">
          <slot name="game" :game="game" />
        </template>
      </game>
    </ul>
  </div>
</template>

<style lang="scss" scoped src="@/assets/round.scss"></style>