import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (id, value, navigation, route) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(id, jsonValue).then(()=>{
            navigation.navigate(route)
        }).catch((err)=>{
            console.log("Ocorreu um erro" + err);
        })
        
    } catch (e) {
        console.log(e);
    
    }
}

export const storeDataWithoutNavigation = async (id, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(id, jsonValue)
    
    } catch (e) {
        console.log(e);
    
    }
}

export const getData = async (id) => {
    try {
      const jsonValue = await AsyncStorage.getItem(id)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }