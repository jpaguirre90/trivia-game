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
                            <textarea class="form-control" aria-label="Agregar pregunta nueva" required v-model="pregunta"></textarea>
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-default">Respuesta Correcta</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required v-model="respuesta_correcta">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Respuesta errada 1</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required v-model="resp_incorrecta_1">
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Respuesta errada 2</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required v-model="resp_incorrecta_2">
                        </div>                        
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Respuesta errada 3</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required v-model="resp_incorrecta_3">
                        </div>
                        <input type="submit" class="btn btn-primary" value="Agregar">
                        <p></p>
                        <router-link to="/" class="btn btn-secondary">Cancelar</router-link>
                    </form>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Nav.vue'
import {db} from '@/firebase'

export default {
    name:'Question',
    components:{
        Navbar
    },
    data(){
        return {
            pregunta:'',
            respuesta_correcta:'',
            resp_incorrecta_1:'',
            resp_incorrecta_2:'',
            resp_incorrecta_3:'',
        }
    },
    methods:{
        new_question(){            
            let respuestas = [
                {texto: this.respuesta_correcta, correcta: true},
                {texto: this.resp_incorrecta_1, correcta: false},
                {texto: this.resp_incorrecta_2, correcta: false},
                {texto: this.resp_incorrecta_3, correcta: false}
            ]
            respuestas = respuestas.sort(() => {return 0.5 - Math.random()})

            db.collection("questions").add({
                texto: this.pregunta,
                respuestas: respuestas
            }).then(() => {
                // acá ponemos lo que queraos ejecutar una vez quedo guardado el nuevo documento
                this.$router.push("/")
            })
        }
    }
}
</script>

<style>

</style>
