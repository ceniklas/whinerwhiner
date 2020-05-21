import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing, ImageBackground, AppRegistry, } from 'react-native'
import React, { Component, useState } from 'react'
import * as Font from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'

import { gql } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-client'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { getMainDefinition } from 'apollo-utilities'
import { SubscriptionClient } from 'subscriptions-transport-ws'

import PrimaryButton from './src/components/common/PrimaryButton'
import SpinWheel from './src/components/SpinWheel'
import DefaultText from './src/components/common/DefaultText'
import { Tweet } from './db-prismainit/generated/prisma-client'
import ChatView from './src/components/ChatView'

const websocketURL = 'ws://192.168.42.69:4466/'
const httpURL = 'http://192.168.42.69:4466/'
const cache = new InMemoryCache()

const subsctiptionClient = new SubscriptionClient(
  websocketURL,
  {
    reconnect: true,
  }
)

const wsLink = new WebSocketLink(subsctiptionClient)
const httpLink = new HttpLink({ uri: httpURL })

const link = ApolloLink.split(
  ({ query }) => {
    const { kind, operation }: any = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({ link, cache })

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
    online: false,
    fontLoaded: false,
    tweets: [] as any[],
    latestUpdate: { node: {} as any },
  }

  TestComp = () => {
    return (<>
      <DefaultText>{this.state.online ? 'ONLINE' : 'OFFLINE'}</DefaultText>
      <DefaultText>{this.state.latestUpdate.node ? this.state.latestUpdate.node.text : null}</DefaultText>
    </>)
  }

  constructor(base: Readonly<{}>) {
    super(base);

    subsctiptionClient.onDisconnected(() => {
      console.log('Disconnected')
      this.setState({ online: false })
    })
    subsctiptionClient.onConnected(() => {
      console.log('Connected')
      this.setState({ online: true })
    })
    subsctiptionClient.onConnecting(() => {
      console.log('Connecting...')
    })
    subsctiptionClient.onReconnecting(() => {
      console.log('Reconnecting...')
    })
    subsctiptionClient.onReconnected(() => {
      console.log('Reconnected')
      this.setState({ online: true })
    })
    subsctiptionClient.onError(e => {
      console.log('Error:', e)
    })


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
    }).then(result => this.setState({ tweets: result.data.tweets }))

    client.subscribe({ query: gqlQuery })
      .subscribe(data => this.setState({ latestUpdate: data.data.tweet }))
  }

  componentDidMount = async () => {
    await this.loadFonts()
    this.setState({ fontLoaded: true })
  }

  async loadFonts() {
    await Font.loadAsync({
      'source-sans-pro-bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
      'source-sans-pro-regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    })
  }

  spinWheel = () => { }

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

          {/* <ChatView></ChatView> */}

          {/* </ImageBackground> */}

        </LinearGradient>
      </ApolloProvider>
    ) : null
  }
}

const WhinerWhinerStylesheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
})

AppRegistry.registerComponent('MyApplication', () => App)
