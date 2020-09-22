import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function DeckInformation({ deck }) {
  return (
    <View>
      <Text style={{ marginTop: 0 }}>{deck.title}</Text>
      <Text>{deck.questions.length}</Text>
    </View>
  );
}
