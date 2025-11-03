import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormTasks } from "../../components/Form"

export default function Home() {
  
  return (
    <>
      <StatusBar backgroundColor={"#0f172a"} barStyle={"light-content"} />

      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Easy Notes</Text>
        <Text style={styles.text}>Crie e gerencia suas tarefas</Text>

        <FormTasks/>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 14,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 'bold'
  },
  text: {
    color: "#e4e4e7"
  }
})