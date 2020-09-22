import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { addDeck } from "../utils/api";
import { connect } from "react-redux";
import { submitDeck } from "../actions/decks";

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity style={styles.AndroidSubmitBtn} onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  );
}
class AddDeck extends Component {
  state = {
    title: "",
  };
  handleTitle = (textInput) => {
    this.setState(() => ({
      title: textInput,
    }));
  };
  submit = () => {
    const { title } = this.state;
    let deck = {
      title,
      questions: [],
    };
    this.props.dispatch(submitDeck({ [deck.title]: deck }));
    addDeck(deck);
    this.setState(() => ({
      title: "",
    }));
  };
  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <Text>Title</Text>
        <TextInput value={title} onChangeText={this.handleTitle} />
        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  AndroidSubmitBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  submitBtnText: {
    fontSize: 22,
    textAlign: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
  },
});

export default connect()(AddDeck);
