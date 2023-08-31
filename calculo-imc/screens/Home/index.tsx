import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Home() {
  const [peso, setPeso] = useState("");

  const [altura, setAltura] = useState("");

  const [resultado, setResultado] = useState("");

  function handleCalculate() {
    if (peso.trim() === "") {
      Alert.alert("Informe o peso", "-> Peso não foi informado");
      return;
    }
    if (altura.trim() === "") {
      Alert.alert("Informe a alura", "-> Altura não foi informada");
      return;
    }
    var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

    console.log(imc);

    if (imc < 18.5) {
      setResultado("Baixo peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
      setResultado("Normal");
    } else if (imc >= 25 && imc <= 29.9) {
      setResultado("Sobrepeso");
    } else if (imc >= 30 && imc <= 34.9) {
      setResultado("Obesidade grau 1");
    } else if (imc >= 35 && imc <= 39.9) {
      setResultado("Obesidade grau 2");
    } else if (imc >= 40) {
      setResultado("Obesidade grau 3");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <Text style={styles.descp}>
        Descubra qual seu índice de massa corpotal
      </Text>

      <View style={styles.form}>
        <View style={styles.containerForm}>
          <View style={styles.containerInput}>
            <Text style={styles.descpLabel}>Peso (kg)</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setPeso}
              style={styles.input}
              placeholderTextColor={"#FFF"}
              value={peso}
            ></TextInput>
          </View>

          <View style={styles.containerInput}>
            <Text style={styles.descpLabel}>Altura (m)</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={setAltura}
              style={styles.input}
              placeholderTextColor={"#FFF"}
              value={altura}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text style={styles.buttonText}>CALCULAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.result}>
        <Text style={styles.descpLabelResult}>
          Seu índice de massa corporal é
        </Text>
        <Text style={styles.descpLabelResult}>
          <Text style={styles.resultValue}>{resultado}</Text>
        </Text>
      </View>

      <Text style={styles.labelFooter}>CESUL</Text>
    </View>
  );
}
