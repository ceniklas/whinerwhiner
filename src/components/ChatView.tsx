import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { useQuery } from '@apollo/react-hooks'
import { gql } from '@apollo/client'

const query = gql`
      query {
        tweets {
          text
          author {
            name
          }
        }
      }
    `

const ChatView = () => {
    const {
        data,
        loading,
        error,
    } = useQuery<any>(query);

    return (

        <View>
            <Text>{{ data }} prop </Text>
        </View>
    )

}

export default ChatView
