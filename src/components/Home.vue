<template>
  <div>
    <Navbar/>
    <div class="row">
      <!-- <div class="col m4"></div>
      <div class="col m4"></div> -->
      <div class="input-field col m3 offset-m9">
        <i class="material-icons prefix">search</i>
        <input id="icon_prefix" v-model="buscador" type="text" class="validate" placeholder="Buscar por nombre">
     </div>
    </div>
    <br>
    <div class="row" v-if="user">
      <div class="col-md-12">
        <h3>Bienvenido {{user.name}}</h3>
      </div>
    </div>
      <div class="row">
        <div class="col m4"> <router-link :to="{path:'*'}" class="btn waves-light btn-large">Jugar</router-link></div><br>
      </div>
    <table class="centered">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Nombre</th>
          <th>Puntaje</th>
          <th>Porcentaje</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="puntaje in Buscador" :key="puntaje.id">
        <td>{{puntaje.fecha}}</td>
        <td>{{puntaje.usuario.nombre}}</td>
        <td>{{puntaje.puntaje}}/3</td>
        <td>{{puntaje.porcentaje}}</td>
        <!-- <td v-if="user.id==cita.paciente.id"><button  v-on:click="eliminar(cita.id)" class="btn">Cancelar</button></td>
        <td v-else>Ninguna</td> -->
      </tr>
      </tbody>
    </table>
    <br><br>
  </div>
</template>
<script>
import { db } from '@/firebase';
import Navbar from '@/components/Nav.vue'
export default {
  name:'Home',
  data(){
    return{
      puntajes:[],
      buscador:""
    }
  },
  computed:{
    user(){
      return this.$store.state.user
    },
    Buscador(){
      return this.puntajes.filter((puntaje)=> puntaje.usuario.nombre.includes(this.buscador))
    }
  },
  components:{
    Navbar
  },
  firestore(){
    return {
     puntajes: db.collection("puntajes").orderBy('porcentaje','asc')
      }
  },
}
</script>
