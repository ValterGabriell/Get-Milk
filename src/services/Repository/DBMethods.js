import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (id, value, navigation) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(id, jsonValue).then(()=>{
            navigation.navigate("Feed_Screen")
        }).catch((err)=>{
            console.log("Ocorreu um erro" + err);
        })
        
    } catch (e) {
        console.log(e);
    
    }
}

export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('0')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }