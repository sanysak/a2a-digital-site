<template>
    <div id="error-page">
        <div class="l_error_page">
            <div class="c_right">
               <img class="c_errorpage_img" src="../../public/assets/component/views/success/thank-you.png"> 
            </div>
            <div class="c_left">
                <h1>Thank you</h1>
                <h2>We ill get back to you soon.</h2> 
            </div>       
        </div>
        <div class="c_goHome_btn">
            <button class="b_go_to_homepage"><router-link to="/">Go to Homepage</router-link></button>
        </div>
    </div>
</template>
<style scoped>
.l_error_page h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 100px;
    line-height: 119px;
}
.l_error_page h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 42px;
}
.l_error_page p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
}
.l_error_page {
    padding: 180px 250px 30px;
    display: block;
}

.b_go_to_homepage {
    width: 165px;
    height: 40px;
    background-color: #138690;
    color: white;
    border-radius: 4px;
    margin: auto;
    display: block;
}
.c_errorpage_img {
    float: right;
    height: 350px;
}

.c_left {
    display: inline;
}

.c_right {
    display: inline;
    /* padding: 0px 100px; */
}

.c_goHome_btn {
    margin: 0 auto;
    padding: 25px 0;
}
@media screen and (max-width : 1150px){
    .c_errorpage_img {
        width: 85px;
        height: 175px;

    }
    .l_error_page {
        display: inline-grid;
        padding: 0;
        margin: auto auto;
        width: 100%;
    }
    .c_right {
        margin: auto;
        padding-top: 150px;
    }
    .c_left {
        margin: auto;
        text-align: center
    }
    h1 {
        margin: 10px;
    }
}
</style>
<script>
export default {
    name : "SuccessfulPage"
}
</script>