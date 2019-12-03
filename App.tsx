import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, ImageBackground, AppRegistry, } from 'react-native';
import React, { Component, useState } from 'react';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { gql } from '@apollo/client';
import { ApolloProvider, useSubscription } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';

import PrimaryButton from './src/components/common/PrimaryButton';
import SpinWheel from './src/components/SpinWheel';
import DefaultText from './src/components/common/DefaultText';


const cache = new InMemoryCache();
const link = new WebSocketLink({
  uri: 'ws://localhost:4466/',
});
const client = new ApolloClient({link, cache});

const gqlQuery = gql`  
subscription {
  tweet{
    mutation
    node{
      text
    }
  }
}
`


export default class App extends Component<{}, {}> {
  
  state = {
    fontLoaded: false,
    tweets: [],
  };
  
  TestComp = () => {
    const { data, error, loading } = useSubscription(gqlQuery)
    console.log(data, error, loading);
    return (
    <DefaultText>{data ? data.tweet.node.text : null}</DefaultText>
    )
  }

  componentWillMount = () => {
    // client.subscribe({})

    
    // client.subscribe({query: gqlQuery}).map(x => console.log('fjdkfgd', x))

    client.query({
      query: gql`
        query {
          tweets {
            text
            author {
              name
            }
          }
        }
      `
    })
    .then(result => this.setState({tweets: result.data.tweets}))
  }

  componentDidMount = async () => {
    await this.loadFonts();
    this.setState({ fontLoaded: true });
  }

  async loadFonts() {
    await Font.loadAsync({
      'source-sans-pro-bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
      'source-sans-pro-regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    });
  }

  spinWheel = () => {}
  

  render() {
    

    return this.state.fontLoaded ? (
      <ApolloProvider client={client}>
        <LinearGradient colors={['#2A126C', '#140A40']} style={WhinerWhinerStylesheet.container}>

          <this.TestComp></this.TestComp>

          {/* <ImageBackground source={require('./assets/background.png')} style={WhinerWhinerStylesheet.container}> */}
            
            {/* <SpinWheel spinWheel={this.spinWheel}/> */}

            <PrimaryButton onPress={this.spinWheel}>Spin</PrimaryButton>

            {this.state.tweets.map((tweet, idx) => (
              <DefaultText key={idx}>
                {tweet.text} - {tweet.author.name}
              </DefaultText>
            ))}
            
          {/* </ImageBackground> */}
          
        </LinearGradient>
      </ApolloProvider>
    ) : null;
  }
}

const WhinerWhinerStylesheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
});

AppRegistry.registerComponent('MyApplication', () => App);
