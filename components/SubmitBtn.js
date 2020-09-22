import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function SubmitBtn({ text, color, textColor, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: color, marginTop: 20 }}
    >
      <Text style={{ color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
}
