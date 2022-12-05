import apiDevs from './index'
import {storeData} from '../Repository/DBMethods'

export async function signInUser(login, password, navigation) {
    apiDevs.post('controller_login.php',{login:login, password:password}).then((result)=>{
       var userId = result.data.userId
       getServiceOfDay(userId,navigation)
    })
}


async function getServiceOfDay(userId, navigation){
    apiDevs.get(`controller_get_services.php?user_id=${userId}`).then((result)=>{
        var response = result.data.success;
        if(response){
            /**
             * aqui teremos que pegar todas as coletas que tiver e salvar ela no banco
             */
            navigation.navigate("Feed_Screen")
        }else{
            storeData("@hasCollect", response, navigation, "Hodometro_Screen")
        }
    })
    
}