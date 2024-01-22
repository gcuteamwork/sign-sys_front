<template>
    <input
        v-model="input"
        placeholder="搜索"
        class="search 
        flex h-5dvh w-95% b-rd-6 m-a b-0
        text-center font-size-5
        "
      />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style>
.search {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

#search {
    background: url(../img/magnifying-glass.png);
    background-size: 35px;
    background-repeat: no-repeat;
    background-position: 10px;
}
</style>