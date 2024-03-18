import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenusStore = defineStore("menus", () => {
  const menus = ref<string[]>([]);
  return { menus };
});
