import apiDevs from './index'


export async function signInUser(login, password) {
    apiDevs.post('controller_login.php',{login:login, password:password}).then((result)=>{
        console.log(result.data);
    })
}