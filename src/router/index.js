import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home

        },
        {
            path: "/resume",
            name: "Resume",
            component: Resume

        }

    ]

})

export default router;