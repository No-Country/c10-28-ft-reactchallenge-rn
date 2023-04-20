import { socket } from "../socket";
import { useState } from "react";
import { Button, TextInput } from "react-native";
import { useSelector } from "react-redux";

export default function MessageInput({ user }) {
  const { nombre_completo, user_id } = user.user;

  const messageBody = {
    userId: user_id,
    userName: nombre_completo,
    message: "",
  };

  const [input, setInput] = useState(messageBody);
  const [isLoading, setIsLoading] = useState(false);

  function onPress() {
    setIsLoading(true);

    socket.timeout(500).emit("createMessage", input, () => {
      setIsLoading(false);
    });

    setInput({ ...input, message: "" });
  }

  return (
    <>
      <TextInput
        placeholder="Escribe tu mensaje aquí..."
        className="mb-2 border-[#B8B8B8] border p-2 bg-white rounded-xl"
        value={input.message}
        onChangeText={(text) => setInput({ ...input, message: text })}
      />
      <Button
        title="Enviar"
        color={"#9874BA"}
        onPress={onPress}
        disabled={isLoading}
      />
    </>
  );
}
