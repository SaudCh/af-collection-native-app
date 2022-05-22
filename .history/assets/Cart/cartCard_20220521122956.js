import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../Const/color';
import { globalStyle } from '../Components/Styles/GlobalStyles';
import { TouchableOpacity } from 'react-native';
import { DecrementIcon, IncrementIcon } from '../Components/Icons/Icon';

export default function CartCard(props) {
    const { item } = props
    const { name, images, price, subCategory, quantity } = item

    const mainImage = images.find(x => x.isMain === true);

    return (
        <View style={{ ...styles.card }}>
            <Image
                style={{ ...styles.cardImage }}
                source={{
                    uri: images.length ? mainImage.url : null,
                }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ ...styles.title }}>{name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    {subCategory.discount ? <Text style={{ fontSize: 15, textDecorationLine: "line-through" }}>Rs. {(price * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</Text> : <Text style={{ fontSize: 15 }}>Rs. {price}</Text>}
                    {subCategory.discount ? <Text style={{ fontSize: 15, color: COLORS.success }}> Rs. {((price - subCategory.discount) * quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</Text> : null}
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ ...globalStyle.hStack, ...globalStyle.border }}>

                    <TouchableOpacity onPress={() => decQuantity()} style={{ ...styles.decContainer }}>
                        <DecrementIcon />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, paddingHorizontal: 10, borderWidth: 1 }}>{quantity}</Text>
                    <TouchableOpacity onPress={() => incQuantity()} style={{ ...styles.incContainer }}>
                        <IncrementIcon />
                    </TouchableOpacity>
                </View>
                <Text>Total:</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        borderRadius: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: COLORS.dPink,
        marginBottom: 2
    },
    incContainer: {
        borderLeftWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        borderWidth: 1
    },
    decContainer: {
        borderRightWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        borderWidth: 1

    }
});