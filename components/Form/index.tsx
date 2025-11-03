import { useState } from "react"
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { prismaClient } from "../../services/db"

export function FormTasks() {
  const [tarefa, setTarefa] = useState("")

  async function handleNovaTarefa() {
    if (tarefa === "") return

    await prismaClient.tarefa.create({
      data: {
        nome: tarefa,
        completada: false,
      }
    })
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite sua próxima tarefa: " 
        value={tarefa}
        onChangeText={setTarefa} 
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={handleNovaTarefa}>
        <Text style={styles.buttonText}>Cadastrar</Text>
        <FontAwesome name="plus" size={24} color="#FFF" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:  8,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f1f5f9",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#22c55e",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 8,
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "500"
  }
})