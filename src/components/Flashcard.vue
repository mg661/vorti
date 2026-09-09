<script setup>
import { ref } from 'vue'
import vocab from '../data/vocab.json'

const isUp = ref(true)
const currentWord = ref(pickRandomWord())

function pickRandomWord() {
  const randomIndex = Math.floor(Math.random() * vocab.length)
  return vocab[randomIndex]
}

function flip() {
  isUp.value = !isUp.value
}

function nextWord() {
  currentWord.value = pickRandomWord()
  isUp.value = true
}
</script>

<template>
  <div class="wrapper">
    <div class="card" @click="flip">
      <p v-if="isUp" class="word">{{ currentWord.word_en }}</p>
      <div v-else class="back">
        <p class="translation">{{ currentWord.translation_pl }}</p>
        <p class="example">{{ currentWord.example_sentence_en }}</p>
      </div>
    </div>

    <button class="next-button" @click="nextWord">NEXT</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
   font-family: 'Poppins', sans-serif;
}

.card {
  width: 320px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
}

.word {
  font-size: 24px;
  font-weight: 600;
}

.translation {
  font-size: 20px;
  font-weight: 600;
}

.example {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
}

.next-button {
  padding: 8px 16px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.next-button:hover {
  background-color: #1d4ed8;
}
</style>