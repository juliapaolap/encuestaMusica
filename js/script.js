const instancia = {
    data() {
        return {
            mensaje: "Cuéntame sobre tus gustos musicales :)",
            mensajeLimite: "Has llegado al límite de respuestas admitidas.",
            mostrarPregunta: 1,
            mostrarImagenDespedida: false,
            respuesta1: '',
            respuesta2: '',
            respuesta3: null,
            respuesta4: '',
            comentario: '',
            comentarios: {
                genero: [],
                artista: [],
                cancion: []
            },
            mostrarResultados: false
        }
    },
    methods: {
        siguientePregunta(respuesta = '') {
            if (this.mostrarPregunta === 1) {
                this.respuesta1 = respuesta;

                if (respuesta === 'si') {
                    this.mostrarPregunta++;
                } else {
                    // Mostrar la imagen de despedida
                    this.mostrarImagenDespedida = true;
                    this.mensaje = "Gracias por tu tiempo. Hasta luego :(";
                }
            } else if (this.mostrarPregunta === 2) {
                this.respuesta2 = respuesta;
                this.mostrarPregunta++;
            } else if (this.mostrarPregunta === 3 && this.respuesta3 !== null) {
                this.mostrarPregunta++;
            } else if (this.mostrarPregunta === 4) {
                this.respuesta4 = respuesta;
                this.mostrarPregunta++;
            } else {
                this.mostrarPregunta++;
            }

            this.comentario = '';  // Limpiar el comentario después de cada pregunta
        },

        agregarComentario(tipo) {
            if (this.comentario && this.comentarios[tipo].length < 2) {
                this.comentarios[tipo].push(this.comentario);
                this.comentario = '';  // Limpiar el campo de comentario después de agregar
            }
        },

        mostrarResultadosFinal() {
            this.mostrarPregunta = 0;
            this.mostrarResultados = true;
        }
    }
};

Vue.createApp(instancia).mount('#componente');
