<template>
  <table class="w-[90%] mx-auto mt-4">
    <thead class="border-b">
      <tr class="p-2 uppercase text-sm text-green-700">
        <th class="p-2">Asignatura</th>
        <th>Créditos</th>
        <th>Literal</th>
        <th>Remover</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-if="myStore.data.length > 0"
        v-for="element in myStore.data"
        :key="element.id"
        class="text-xs p-4 text-center border-b"
      >
        <td class="p-3">{{ element.asignature }}</td>
        <td>{{ element.points }}</td>
        <td>{{ generateLetter(element.letterValue) }}</td>
        <td>
          <button
            class="hover:text-red-700 transition-all text-gray-800"
            @click="myStore.removeItem(element.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </td>
      </tr>
      <tr v-else>
        <td colspan="4" class="text-center text-xs p-2">No hay datos</td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="border-t p-2">
        <td
          colspan="4"
          class="text-center text-xs uppercase font-semibold text-gray-600"
        >
          Calculadora de índice academico
        </td>
      </tr>
    </tfoot>
  </table>
  <div
    v-show="showIndex"
    class="'w-full flex justify-center items-center p-4 mt-4'"
  >
    <p>{{ calculate(myStore.data).toFixed(2) }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useMyStore } from "../context/store";
import { generateLetter } from "../helpers/letter.ts";
import { calculate } from "../helpers/calculate.ts";
const myStore = useMyStore();

const showIndex = computed(() => {
  return myStore.data.length > 0;
});
</script>
