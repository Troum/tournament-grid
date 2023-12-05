<script setup>
import {watch} from "vue";

const props = defineProps(['game'])
watch(props, (value) => {
  console.log(value)
})
</script>

<template>
<li class="tournament-bracket__item">
  <div class="tournament-bracket__match" tabindex="0">
    <slot :game="game" name="game"></slot>
  </div>
</li>
</template>

<style lang="scss" scoped src="@/assets/game.scss"></style>