const { createApp } = Vue;

createApp({
    data() {
        return {
            numberOfMail: 10,
            mailArray: [],
            mailArrayButton: [],
            isLoading: false,
            isLoadingButton: false
        }
    },
    created() {
        this.isLoading = true;
        for (let i = 0; i < this.numberOfMail; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                this.mailArray.push(resp.data.response);
                if (this.mailArray.length === 10) {
                    this.isLoading = false;
                }
            });            
        }
    },
    methods: {    
        generateMail() {
            this.isLoadingButton = true;
            this.mailArrayButton.length = 0;
            for (let i = 0; i < this.numberOfMail; i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    this.mailArrayButton.push(resp.data.response);
                    if (this.mailArrayButton.length === 10) {
                        this.isLoadingButton = false;
                    }
                });            
            }
        }    
    }
}).mount("#app");