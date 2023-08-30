import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    backgroundColor: "#967ADC",
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    alignContent: "center",
  },
  descp: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 12,
    alignContent: "center",
  },
  input: {
    color: "#967ADC",
    backgroundColor: "#FFF",
    paddingLeft: 15,
    paddingRight: 2,
    height: 56,
    borderRadius: 5,
    fontSize: 28,
    width: "100%",
  },
  button: {
    backgroundColor: "#FFF",
    height: 56,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#967ADC",
    fontSize: 18,
    fontWeight: "bold",
  },
  form: {
    marginTop: 50,
    gap: 20,
    padding: 20,
  },
  containerForm: {
    flexDirection: "row",
    gap: 50,
    marginBottom: 50,
  },
  containerInput: {
    flex: 1,
  },
  descpLabel: {
    color: "#FFF",
  },
  result: {
    backgroundColor: "#FFF",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  descpLabelResult: {
    textAlign: "center",
    color: "#967ADC",
  },

  resultValue: {
    textAlign: "center",
    color: "#967ADC",
    fontSize: 24,
    marginTop: 20,
    fontWeight: "bold",
  },
  labelFooter: {
    textAlign: "center",
    margin: 20,
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 24,
  },
});
