import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { users } from "../../../dto/users.json";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  { id: "00", title: "Relâmpago McQueen" },
  { id: "01", title: "Agente Tom Mate" },
  { id: "02", title: "Doc Hudson" },
  { id: "03", title: "Cruz Ramirez" },
];

const Item = ({ title, navigation }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity
      style={styles.containerButton}
      onPress={() => {
        navigation.navigate("Finalizar_Screen", {
          title: title,
        });
      }}
    >
      <Text style={styles.button}>Coletar</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <Item title={item.title} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#F1F1F1",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    borderRadius: 6,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
  },
  containerButton: {
    height: 40,
    width: "20%",
    backgroundColor: "#2C7BBF",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "white",
    fontSize: 18,
  },
});

export default App;
