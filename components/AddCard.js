import React, { Component } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import { submitCard } from "../actions/card";
import { addCard } from "../utils/api";
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  );
}
class AddCard extends Component {
  state = {
    question: "",
    answer: "",
  };
  handleQuestion = (textInput) => {
    this.setState(() => ({
      question: textInput,
    }));
  };
  handleAnswer = (textInput) => {
    this.setState(() => ({
      answer: textInput,
    }));
  };
  submit = () => {
    const { deck } = this.props.route.params;
    const { question, answer } = this.state;
    const deckId = deck.title;
    let card = {
      question,
      answer,
    };
    this.props.dispatch(submitCard(deckId, card));
    addCard(deckId, card);
    this.setState(() => ({
      question: "",
      answer: "",
    }));
  };
  render() {
    const { question, answer } = this.state;
    return (
      <View>
        <Text>Question</Text>
        <TextInput onChangeText={this.handleQuestion} value={question} />
        <Text>Answer</Text>
        <TextInput onChangeText={this.handleAnswer} value={answer} />
        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}

export default connect()(AddCard);
