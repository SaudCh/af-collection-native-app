import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ActivityIndicator, List } from 'react-native-paper'
import { useCart } from '../Components/Hooks/cartHook'

export default function Checkout() {
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);
    const { cart, total, deleteItem, incQuan, decQuan, navigation, isLoading } = useCart()


    return (
        <View>
            <List.Section >
                <List.Accordion
                    title="Cart"
                >
                    <View>
                        {isLoading ? <ActivityIndicator size="large" color="#fof" /> : (

                            <FlatList
                                data={cart}
                                ListEmptyComponent={<View style={{ justifyContent: 'center', alignItems: "center" }}><Text>Empty</Text></View>}
                                style={{ paddingTop: 10 }}
                                keyExtractor={({ id }) => id}
                                renderItem={(item) => (
                                    <CartCard item={item.item} deleteItem={deleteItem} incQuan={incQuan} decQuan={decQuan} />
                                )}
                            />
                        )}
                    </View>
                </List.Accordion>

                <List.Accordion
                    title=""
                    expanded={expanded}
                    onPress={handlePress}>
                    <View>

                    </View>
                </List.Accordion>
            </List.Section>

        </View>
    )
}