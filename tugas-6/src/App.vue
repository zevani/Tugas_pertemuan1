<template>
  <div class="container">
    <h2>Article Manager</h2>
    <form @submit.prevent="save" class="article-form">
      <input v-model="form.title" placeholder="Title" required /><br />
      <textarea v-model="form.content" placeholder="Content" required></textarea><br />
      <div class="buttons">
        <button type="submit">Save</button>
        <button type="button" @click="clearForm">Clear</button>
      </div>
    </form>
    <h3>Articles</h3>
    <ul class="article-list">
      <li v-for="article in articles" :key="article.id" class="article-item">
        <strong>{{ article.title }}</strong><br/>
        {{ article.content }}<br/>
        <div class="article-buttons">
          <button @click="edit(article)">Edit</button>
          <button @click="remove(article.id)">Delete</button>
        </div>
      </li>
    </ul>
    <button @click="load">Load Articles</button>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const form = reactive({
      id: null,
      title: '',
      content: '',
    });

    const articles = ref([]);

    async function load() {
      try {
        const response = await axios.get('http://localhost:5173/articles');
        articles.value = mockData.articles;
        console.log('Articles loaded:', articles.value);
      } catch (error) {
        console.error('Error loading articles:', error);
      }
    }

    async function save() {
      try {
        const url = form.id
          ? `http://localhost:5173/articles/${form.id}`
          : 'http://localhost:5173/articles/';
        const method = form.id ? 'put' : 'post';
        const response = await axios[method](url, form);

        if (form.id) {
          articles.value = articles.value.map((article) =>
            article.id === response.data.id ? response.data : article
          );
        } else {
          articles.value.push(response.data);
        }

        console.log('Article saved:', response.data);
        clearForm();
      } catch (error) {
        console.error('Error saving article:', error);
      }
    }

    async function remove(id) {
      try {
        await axios.delete(`http://localhost:5173/articles/${id}`);
        articles.value = articles.value.filter(article => article.id !== id);
        console.log('Article deleted:', id);
      } catch (error) {
        console.error('Error deleting article:', error);
      }
    }

    function edit(article) {
      form.id = article.id;
      form.title = article.title;
      form.content = article.content;
    }

    function clearForm() {
      form.id = null;
      form.title = '';
      form.content = '';
    }

    onMounted(load);

    return { form, articles, save, edit, load, clearForm, remove };
  },
};
</script>


<style>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: black; /* Ensure text is black */
}

h2, h3 {
  text-align: center;
  color: black; /* Ensure text is black */
}

.article-form {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.article-form input,
.article-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: black; /* Ensure text is black */
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.buttons button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white; /* Ensure text is white */
}

.buttons button:first-child {
  background-color: #4CAF50;
}

.buttons button:last-child {
  background-color: #f44336;
}

.article-list {
  list-style-type: none;
  padding: 0;
}

.article-item {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.article-buttons {
  display: flex;
  justify-content: space-between;
}

.article-item button {
  margin-top: 10px;
  background-color: #2196F3;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

button {
  background-color: #4CAF50;
  color: white; /* Ensure text is white */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 10px auto;
}

button:hover {
  background-color: #45a049;
}
</style>