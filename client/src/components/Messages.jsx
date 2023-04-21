import { Text, View } from "react-native";

export default function Messages({ messages, user }) {
  const { nombre_completo, user_id } = user.user;

  return (
    <>
      {messages.map(
        (message, index) => {
          if (message.userId === user_id) {
            return (
              <View key={index} className="flex items-start mb-2">
                <Text className="text-xs text-gray-500 mb-1">Tú:</Text>
                <Text className="rounded-xl p-2 bg-[#EAE0F4]">
                  {message.message}
                </Text>
              </View>
            );
          }

          return (
            <View key={index} className="flex items-end mb-2">
              <Text className="text-xs text-gray-500 mb-1">
                {message.userName}:
              </Text>
              <Text className="rounded-xl p-2 bg-violet-200">
                {message.message}
              </Text>
            </View>
          );
        }
        //   (
        //     <View key={index}>
        //       <Text>{message.userName}</Text>
        //       <Text>{message.message}</Text>
        //     </View>
        //   )
      )}
    </>
  );
}
