import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '../components/Login.vue';  // asumiendo que hicimos este componente}
import Home from '../components/Home.vue';
import Question from '../components/Question.vue';
import Game from '../components/Game.vue';
import Notfound from '../components/Notfound.vue';

Vue.use(VueRouter);    // instalamos explícitamente el router
    
export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: Home
        },
        {
            path: '/login', 
            component: Login
        },
        {
            path: '/question', 
            component: Question
        },
        {
            path: '/game', 
            component: Game
        },        
        {
            path:'*',
            component:Notfound
        }
    ]
})