import {
  StatusBar,
  SafeAreaView,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style.js";
import { useState } from "react";

function App() {
  const [cep, setCep] = useState("");
  const [result, setResult] = useState("");
  async function askCep() {
    const req = await fetch("https://viacep.com.br/ws/" + cep + "/json/");

    const retorno = await req.json();
    setResult("Endereço: " + retorno.logradouro);
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>CONSULTA CEP</Text>
      <Image
        style={styles.img}
        source={{
          uri: "https://viacep.com.br/estatico/images/bt_doar_pix.png.pagespeed.ce.3xD2cQahH2.png",
        }}
      />

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o CEP"
          style={styles.TextInput}
          onChangeText={(text) => setCep(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={askCep}>
          <Text style={styles.btntxt}>CONSULTAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.result}>Resultado da busca: {result}</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
