<style src="./contact-form.css" scope ></style>
<template src="./contact-form.html"></template>

<script>

export default {
    name: 'ContactForm',
 
    data() {
            return {
              name: '',
              email: '',
              country:'',
              formSubmitted: false,
              feedback: ''
            };
    },
        
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll();
            if (!this.errors.any()) {
                this.submitForm()
            }
      },
        submitForm() {
            this.formSubmitted = true
            let currentObj = this;
            this.axios.post('https://fierce-escarpment-31981.herokuapp.com/send-email', {
                name: this.name,
                email: this.email,
                feedback: this.feedback,
                country: this.country
            })
            .then(function (response) {
                currentObj.output = response.data;
            })
            .catch(function (error) {
                currentObj.output = error;
            });
            this.$router.push('success')
        }
    }
   
  }

  
  
</script>