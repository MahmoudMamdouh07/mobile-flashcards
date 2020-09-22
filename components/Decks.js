import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { receiveDecks, removeDecks } from "../actions/decks";
import Deck from "./Deck";
import { fetchAllDecks, deleteAllDecks } from "../utils/api";
import { AppLoading } from "expo";

class Decks extends Component {
  state = {
    ready: false,
  };
  componentDidMount() {
    const { dispatch } = this.props;
    fetchAllDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(this.setState(() => ({ ready: true })));
  }
  submit = () => {
    this.props.dispatch(removeDecks());
    deleteAllDecks();
  };
  render() {
    const { decks } = this.props;
    const { ready } = this.state;

    if (ready === false) {
      return <AppLoading />;
    }

    return (
      <View style={{ marginTop: 70 }}>
        <ScrollView>
          {decks !== null &&
            Object.keys(decks).length > 0 &&
            Object.keys(decks).map((deck) => (
              <Deck
                key={decks[deck].title}
                deckId={deck}
                navigation={this.props.navigation}
              />
            ))}
        </ScrollView>
        <TouchableOpacity onPress={this.submit}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  return {
    decks,
    navigation,
  };
}

export default connect(mapStateToProps)(Decks);
