const { createApp } = Vue;

createApp({
    data() {
        return {
            numberOfMail: 10,
            mailArray: []
        }
    },
    created() {
        for (let i = 0; i < this.numberOfMail; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                this.mailArray.push(resp.data.response);
            });            
        }
        console.log(this.mailArray);
    },
    methods: {        
    }
}).mount("#app");