<script setup>
import Round from "@/components/Round.vue";

defineProps(['rounds'])
</script>

<template>
  <div class="tournament-bracket tournament-bracket--rounded">
    <round v-for="(round, index) of rounds" :key="index" :title="round.title" :round="round.games">
      <template v-slot:game="{ game }">
        <slot name="game" :game="game"/>
      </template>
    </round>
  </div>
</template>

<style lang="scss" scoped src="@/assets/bracket.scss"></style>