import apiDevs from './index'
import apiTeste from './index'
import { storeData, storeDataWithoutNavigation } from '../Repository/DBMethods'
import Coleta from '../Database/Coleta'


//logar usuario
export async function signInUser(login, password, navigation) {
    apiDevs.apiDevs.post('controller_login.php', { login: login, password: password }).then((result) => {
        var isSuccess = result.data.success
        if (isSuccess) {
            storeData("@userId", result.data.userId, navigation, "Hodometro_Screen")
        }
    })
}


export async function getServiceOfDay(odometerStart, userId, navigation) {
    apiDevs.apiDevs.get(`controller_get_services.php?user_id=${userId}`).then((result) => {
        var response = result.data.success;
        if (response) {
            //recuperando os serviços
            response.services.forEach((service) => {
                //inicia o servico
                apiDevs.apiDevs.post('controller_start_service.php', { serviceId: service.serviceId, odometerStart: odometerStart }).then(() => {
                    apiDevs.apiDevs.get(`controller_get_collects.php?user_id=${userId}`).then((response) => {
                        //se for sucesso, cria todas elas e salva no banco
                        if (response.success) {
                            response.collects.forEach((coleta) => {
                                Coleta.create(coleta).then(() => {
                                    console.log("Coleta" + coleta.idColeta + " criada");
                                    storeData("@hasCollect", response, navigation, "Feed_Screen")
                                })
                            })
                        }else{
                            console.log("erro coleta false");
                        }
                    }).catch((err)=>{
                        console.log("erro get coletas: " + err.message);
                    })

                }).catch((err)=>{
                    console.log("erro start service: " + err.message);
                })
            }).catch((err)=>{
                console.log("erro get service: " + err.message);
            })
        } else {
            storeData("@hasCollect", response, navigation, "Login_Screen")
            
        }
    })
}
export async function collect(collectId, sampleNumber, volume, temperatureTank, alizarolTest, truckCompartment) {
    apiDevs.apiDevs.post('controller_collect.php', { collectId: collectId, sampleNumber: sampleNumber, volume: volume, temperatureTank: temperatureTank, alizarolTest: alizarolTest, truckCompartment: truckCompartment }).then((result) => {
        console.log("Coleta: " + collectId + " salva com sucesso");
    })
}

export async function endService(serviceId, odometerEnd) {
    apiDevs.apiDevs.post('controller_end_service.php', { serviceId: serviceId, odometerEnd: odometerEnd })
}
