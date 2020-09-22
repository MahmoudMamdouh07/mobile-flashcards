import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import SubmitBtn from "./SubmitBtn";
class Quiz extends Component {
  state = {
    QuestionNumber: 1,
    response: "starter code",
    totalCorrectAnswers: 0,
  };
  handleBtn = (choice, answer) => {
    if (answer === choice) {
      this.setState((currState) => ({
        response: "Yess!",
        totalCorrectAnswers: currState.totalCorrectAnswers + 1,
        QuestionNumber: currState.QuestionNumber,
      }));
    } else {
      this.setState((currState) => ({
        response: "No!",
        totalCorrectAnswers: currState.totalCorrectAnswers,
        QuestionNumber: currState.QuestionNumber,
      }));
    }
  };

  handleNextQuestionBtn = () => {
    this.setState((currState) => ({
      response: "",
      totalCorrectAnswers: currState.totalCorrectAnswers,
      QuestionNumber: currState.QuestionNumber + 1,
    }));
  };
  render() {
    const { deck } = this.props.route.params;
    const { QuestionNumber, response, totalCorrectAnswers } = this.state;
    return (
      <View>
        <Text>
          {QuestionNumber}/{deck.questions.length}
        </Text>
        <Text>{deck.questions[QuestionNumber - 1].question}</Text>
        <View>
          {response === "" || response === "starter code" ? (
            <View>
              <SubmitBtn
                onPress={() =>
                  this.handleBtn(
                    "true",
                    deck.questions[QuestionNumber - 1].answer
                  )
                }
                text="Correct"
                color="green"
                textColor="white"
              />
              <SubmitBtn
                onPress={() =>
                  this.handleBtn(
                    "false",
                    deck.questions[QuestionNumber - 1].answer
                  )
                }
                text="Wrong"
                color="red"
                textColor="white"
              />
            </View>
          ) : (
            <Text>{response}</Text>
          )}

          {QuestionNumber !== deck.questions.length &&
            response !== "" &&
            response !== "starter code" && (
              <SubmitBtn
                onPress={() => this.handleNextQuestionBtn()}
                text="Next Question"
                color="blue"
                textColor="white"
              />
            )}
        </View>
        {response !== "" &&
          response !== "starter code" &&
          QuestionNumber === deck.questions.length && (
            <View>
              <Text>
                You answered {totalCorrectAnswers} questions correctly out of{" "}
                {deck.questions.length} questions
              </Text>
            </View>
          )}
      </View>
    );
  }
}

export default connect()(Quiz);
