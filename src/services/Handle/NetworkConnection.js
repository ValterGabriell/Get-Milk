import NetInfo from '@react-native-community/netinfo';


export const checkConnected =() => {
    return NetInfo.fetch().then((state)=>{
        //metodo que retorna se há conexao com a internet
       return state.isConnected
    })
}