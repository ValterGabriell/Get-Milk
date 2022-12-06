import apiDevs from './index'
import apiTeste from './index'
import { storeData } from '../Repository/DBMethods'
import Coleta from '../Database/Coleta'



export async function signInUser(login, password, navigation) {
    apiDevs.apiDevs.post('controller_login.php', { login: login, password: password }).then((result) => {
        var isSuccess = result.data.success
        if (isSuccess) {
            storeData("@userId", result.data.userId, navigation, "Hodometro_Screen")
        }
       // getServiceOfDayTest(navigation)
    })
}

/**
 * metodo apenas para testes, api local
 * @param {} navigation 
 */
export async function getServiceOfDayTest(navigation) {
    console.log("chamou");
    apiTeste.apiTeste.get("coletas_id_2").then((result) => {
        var response = result.data
        console.log("res");
        if (response != null) {
            response.forEach((coleta) => {
                Coleta.create(coleta).then(() => {
                    console.log("Coleta" + coleta.idColeta + " criada");
                    storeData("@hasCollect", true, navigation, "Feed_Screen")
                })
            })
        }
    }).catch((err)=>{
        console.log("err");
        console.log(err.message);
    })
}

async function getServiceOfDay(userId, navigation) {
    apiDevs.apiDevs.get(`controller_get_services.php?user_id=${userId}`).then((result) => {
        var response = result.data.success;
        if (response) {
            response.collects.forEach((coleta) => {
                Coleta.create(coleta).then(() => {
                    console.log("Coleta" + coleta.idColeta + " criada");
                    storeData("@hasCollect", response, navigation, "Feed_Screen")
                }).catch((ree) => {
                    onToggleSnackBar("Erro " + ree.message)
                })
            })
        } else {
            storeData("@hasCollect", response, navigation, "Hodometro_Screen")
        }
    })
}
