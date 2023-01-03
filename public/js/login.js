
// const { createApp } = Vue;
const app = {
    data(){
      return {
        user:{
            "username":"",
            "password":""
        }
      }
    },
    methods:{
        login(){
            // this.user.username = document.querySelector('#username').value;
            // this.user.password = document.querySelector('#password').value;
            //console.log(`${apiUrl}/admin/signin`);
            axios.post(`${apiUrl}/admin/signin`, this.user)
            .then(res=>{
                console.log(res);
                //紀錄 token
                const { token, expired } = res.data;

                //紀錄 cookie
                document.cookie = `userToken=${token};expires=${new Date(expired)}; path=/`;
                //this.checkAdmin();
                window.location = 'products.html';

            }).catch(err=>{
                alert(err.data);
                //alert(err.response.data.message);
                console.log(err);
                // console.log(username.value);
                // console.log(password.value);
            })
        },
    }
}
Vue.createApp(app).mount('#app');


// function login(){
    
//     console.log(username.value);
//     console.log(password.value);

//     console.log(`${apiUrl}/admin/signin`);
//     axios.post(`${apiUrl}/admin/signin`,{
//         "username":username.value,
//         "password":password.value 
//     }).then(res=>{
//         console.log(res);
//         location.href="./products.html"
//     }).catch(err=>{
//         alert(`${err.data.message}`);
//         console.log(err);
//         console.log(username.value)
//         console.log(password.value)
//     })
// }

