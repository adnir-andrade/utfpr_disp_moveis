import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Fancy username"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Super secret password"
        secureTextEntry
      />

      <Button
        title="Log In"
        onPress={handleClick}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
});
