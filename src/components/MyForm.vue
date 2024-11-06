<template>
  <form
    @submit="handleSubmit"
    class="flex flex-col justify-center items-center w-[300px] border p-4 rounded-md mt-4 mx-auto gap-2"
  >
    <h2 class="text-xl uppercase text-gray-800 font-semibold">Asignatura</h2>
    <label for="asignature" :class="styleLabel">Materia:</label>
    <input
      type="text"
      id="asignature"
      name="asignature"
      placeholder="Ingrese el nombre de la materia"
      :class="styleInput"
      @input="handleInput"
      :value="myForm.asignature"
    />
    <label for="points" :class="styleLabel">Créditos:</label>
    <input
      type="number"
      id="points"
      name="points"
      placeholder="Ingrese el número de créditos"
      :class="styleInput"
      @input="handleInput"
      :value="myForm.points"
    />
    <label for="letter" :class="styleLabel">Literal:</label>
    <select
      name="letter"
      id="letter"
      :class="styleInput"
      :value="myForm.letter"
      @change="handleChange"
    >
      <option value="">--SELECCIONAR--</option>
      <option
        v-for="option in optionsLetter"
        :key="option.id"
        :value="option.value"
      >
        {{ option.letter }}
      </option>
    </select>
    <button
      class="text-white p-1 w-[60%] bg-green-800 transition-all hover:bg-green-700 rounded-md text-xs uppercase font-semibold"
    >
      Agregar
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { IOptions } from "../interface/options.ts";
import { myOptionsForm } from "../data/dataOptions.ts";
import { IForm } from "../interface/form.ts";
import { useMyStore } from "../context/store.ts";

//State
const optionsLetter = ref<IOptions[]>(myOptionsForm);
const myForm = ref<IForm>({
  asignature: "",
  points: "",
  letter: "",
});
//Global state
const myStore = useMyStore();

//Styles
const styleInput =
  "p-2 outline-none text-xs rounded-sm border transition-all focus:border-2 focus:border-blue-600 w-[80%]";
const styleLabel = "font-semibold text-xs text-gray-800 w-[80%] text-left";

//Change statet to wirte
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  myForm.value[target.name as keyof IForm] = target.value;
};

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  myForm.value[target.name as keyof IForm] = target.value;
};

//Submit event
const handleSubmit = (event: Event) => {
  event.preventDefault(); //Disabled event default
  //Add to state
  const myId = Date.now() + '-' + Math.round(Math.random() * 1e9)
  myStore.addItem({
    id: myId,
    asignature: myForm.value.asignature,
    letterValue: parseInt(myForm.value.letter),
    points: parseInt(myForm.value.points),
  });
  //Clear form
  clearStateForm()
};

const clearStateForm = ()=>{
  myForm.value.asignature = ''
  myForm.value.letter = ''
  myForm.value.points = ''
}
</script>
