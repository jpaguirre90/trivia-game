<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <Navbar/>
                <div class="col-md-12">
                    <form class="col-12" action="" @submit.prevent="new_question">
                        <h3>Nueva Pregunta</h3>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Agregar pregunta nueva</span>
                            </div>
                            <textarea class="form-control" aria-label="Agregar pregunta nueva"></textarea>
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Respuesta Correcta</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Respuesta errada 1</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Respuesta errada 2</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                        <input type="submit" class="btn btn-primary" value="Agregar">
                        <p></p>
                        <input type="submit" class="btn btn-primary" value="Cancelar">
                    </form>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Nav.vue'

export default {
    name:'Question',
    components:{
        Navbar
    }
}
</script>

<style>

</style>
