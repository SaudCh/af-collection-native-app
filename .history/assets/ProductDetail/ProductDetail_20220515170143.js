import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { dimensions } from "../Const/heightWidth"
import { DecrementIcon, IncrementIcon } from '../Components/Icons/Icon';
import { globalStyle } from '../Components/Styles/GlobalStyles';
import { Button, List } from 'react-native-paper';
import { COLORS } from '../Const/color';


export default function ProductDetail(props) {
    const { route } = props;
    const { product } = route.params;
    console.log(product.description)
    const { name, images, price, subCategory, stock, description } = product

    const mainImage = images.find(x => x.isMain === true);

    return (
        <View style={{ ...styles.container }}>
            <Image
                style={{ ...styles.prodImage }}
                source={{
                    uri: name ? mainImage.url : null,
                }} />

            <View style={{ padding: 10 }}>
                <Text style={{ ...styles.title }}>{name}</Text>

                {stock ? <Text style={{ ...styles.inStock }}>In Stock</Text> : <Text style={{ ...styles.outStock }}>Out of Stock</Text>}

                <View style={{ ...globalStyle.hStack, marginBottom: 5 }}>
                    {subCategory.discount ? <Text style={{ fontSize: 15, textDecorationLine: "line-through" }}>Rs. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</Text> : <Text style={{ fontSize: 15 }}>Rs. {price}</Text>}
                    {subCategory.discount ? <Text style={{ fontSize: 15, color: COLORS.success }}> Rs. {(price - subCategory.discount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</Text> : null}
                </View>

                <Text style={{ ...styles.collection }}><Text style={{ fontWeight: 'bold' }}>Collections: </Text>{subCategory.name}</Text>

                <View style={{ marginTop: 10 }}>
                    <List.AccordionGroup>
                        <List.Accordion style={{ backgroundColor: COLORS.light }} title={"Product Details".toUpperCase()} id="1">
                            <Text>
                                {description}
                            </Text>
                        </List.Accordion>

                        <List.Accordion style={{ backgroundColor: COLORS.light }} title={"Return Policy".toUpperCase()} id="2">
                            <Text>
                                If your product is defective / damaged or incorrect / incomplete at the time of delivery, your product may be eligible for refund depending on the product category and condition. You can contact us on info@qualityfabrics.pk or For whatsapp 03334076963.
                            </Text>
                        </List.Accordion>

                        <List.Accordion style={{ backgroundColor: COLORS.light }} title={"Shipping detail".toUpperCase()} id="3">
                            <Text style={{ fontSize: 15, margin: 10 }}>
                                150 Delivery Charges are applicable on complete order. We deliver all over Pakistan. For major cities, it's takes 3 to 4 working days, for other cities 4 to 6 working days.
                            </Text>
                        </List.Accordion>

                    </List.AccordionGroup>
                </View>

            </View>
            <View style={{ ...globalStyle.hStack, ...styles.cartContainer }}>
                <View style={{ ...globalStyle.hStack, ...globalStyle.border }}>
                    <View style={{ ...styles.incContainer }}>
                        <IncrementIcon />
                    </View>
                    <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>1</Text>
                    <View style={{ ...styles.decContainer }}>
                        <DecrementIcon />
                    </View>
                </View>
                <Button mode="contained" color={COLORS.dPink} style={{ paddingHorizontal: 50 }}>
                    <Text>ADD TO CART</Text>
                </Button>
            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light
    },
    prodImage: {
        width: dimensions.width,
        height: dimensions.height * 0.3,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        marginVertical: 5
    },
    collection: {
        fontSize: 15,
        marginBottom: 5
    },
    inStock: {
        fontSize: 15,
        marginBottom: 5,
        color: COLORS.success
    },
    outStock: {
        fontSize: 15,
        marginBottom: 5,
        color: COLORS.danger
    },
    cartContainer: {
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 5,
        paddingHorizontal: 10,
        width: "100%"
    },
    incContainer: {
        borderRightWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        padding: 5
    },
    decContainer: {
        borderLeftWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        padding: 5
    }
});