<template>
  <div>
   <Navbar/>
   <h3>Preguntas</h3>
   <div class="row">
     <div class="col-md-12" id="preguntas">
      <form @submit.prevent="Game">
        <ul>
          <li>Preguntas
          <p>
            <label class="custom-control custom-radio">
              <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
              <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
            </label>
          </p>
          <!-- OPCION 2-->
          <p>
            <label class="custom-control custom-radio">
              <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
              <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
            </label>
          </p>
          <!-- OPCION 2-->
          <p>
            <label class="custom-control custom-radio">
              <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
              <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
            </label>
          </p>
          </li>
        </ul><br>
        <div class="col-md-10 offset-md-1">
          <input type="submit" class="btn btn-primary btn-lg btn-block" value="Jugar">
          <input type="submit" class="btn btn-primary btn-lg btn-block" value="Cancelar">
        </div>
      </form>
     </div>
   </div>
  </div>
</template>

<script>
import Navbar from '@/components/Nav.vue'

export default {
    name:'Game',
    components:{
    Navbar
  },
}
</script>

<style>
#preguntas{
  text-align: left;
}
</style>