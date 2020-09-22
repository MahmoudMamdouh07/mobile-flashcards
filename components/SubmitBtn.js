import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function SubmitBtn({ text, color, textColor, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ backgroundColor: color, borderColor: "red", color: textColor }]}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
