import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import DeckInformation from "./DeckInformation";
import SubmitBtn from "./SubmitBtn";
import { removeDeck } from "../actions/decks";
import { removeDeckFromStorage } from "../utils/api";
class UdaciCards extends Component {
  deleteDeck = (title) => {
    removeDeck(title);
    removeDeckFromStorage(title);
  };
  render() {
    const { deck } = this.props;
    return (
      <View>
        <View>
          <DeckInformation deck={deck} />
        </View>
        <View>
          <SubmitBtn
            text="Add Card"
            onPress={() =>
              this.props.navigation.navigate("AddCard", {
                deck: deck,
              })
            }
            color="white"
            textColor="black"
          />
          <SubmitBtn
            text="Start Quiz"
            onPress={() =>
              deck.questions.length > 0 &&
              this.props.navigation.navigate("Quiz", {
                deck: deck,
              })
            }
            color="black"
            textColor="white"
          />
        </View>
      </View>
    );
  }
}
function mapStateToProps(decks, props) {
  const { deckId } = props.route.params;
  const deck = decks[deckId];
  return { deck };
}
export default connect(mapStateToProps)(UdaciCards);
