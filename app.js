/* 
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/


const app = new Vue({
    el: '#app',
    data: {
        emails: [],
        data: null
    },
    methods: {},
    mounted() {
        const self = this
        for (let i = 1; i <= 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (response) {
                    //console.log(self);
                    //console.log(response);
                    self.emails.push(response.data.response)
                    //bonus
                    self.data = response.data
                })
        }

    }
})


