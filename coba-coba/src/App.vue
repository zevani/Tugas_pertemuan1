<template>
  <div class="app">
    <header>
      <h1>Postingan Pengguna</h1>
      <select v-model="selectedUser" @change="fetchPosts">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>

    </header>
    <main>
      <section v-if="loading" class="loading">Memuat...</section>
      <section v-else class="posts" v-if="posts.length">
        <div v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const selectedUser = ref('')
const users = ref([])
const posts = ref([])
const loading = ref(false)

const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await response.json()
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

const fetchPosts = async () => {
  if (!selectedUser.value) return
  loading.value = true
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId?${selectedUser.value}`)
    posts.value = await response.json()
    loading.value = false
  } catch (error) {
    console.error('Error fetching posts:', error)
    loading.value = false
  }
}

onMounted(fetchUsers)
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

header h1 {
  margin: 0;
}

select {
  padding: 8px;
  font-size: 16px;
}

main {
  min-height: 300px;
}

.loading {
  text-align: center;
  font-style: italic;
}

.posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.post {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.post h2 {
  margin-top: 0;
}

.post p {
  margin-bottom: 0;
}

.no-posts {
  text-align: center;
  font-style: italic;
}
</style>
