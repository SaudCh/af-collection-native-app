import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ProductDetail(props) {
    const { route } = props;
    const { product } = route.params;
    const { name, images, price, subCategory } = product

    return (
        <View>
            <Image
                style={{ ...styles.cardImage }}
                source={{
                    uri: images.length ? mainImage.url : null,
                }} />
            <Text>{name}</Text>
        </View>
    )
}