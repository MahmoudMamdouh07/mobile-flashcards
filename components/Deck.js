import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import DeckInformation from "./DeckInformation";
class Deck extends Component {
  render() {
    const { deck } = this.props;
    return (
      <View // make it pressable and navigate to UdaciCards screen
        style={{ marginTop: 30 }}
        onStartShouldSetResponder={() =>
          this.props.navigation.navigate("UdaciCards", { deckId: deck.title })
        }
        key={deck.title}
        the_deck={deck}
      >
        <DeckInformation deck={deck} />
      </View>
    );
  }
}

function mapStateToProps(decks, { deckId }) {
  const deck = decks[deckId];
  return {
    deck,
  };
}

export default connect(mapStateToProps)(Deck);
