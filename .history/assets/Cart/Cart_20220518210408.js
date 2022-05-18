import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity, ToastAndroid } from 'react-native'
import { TextInput, Button } from "react-native-paper"
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
    const [isLoading, setLoading] = useState(false)

    return (
        <View>
            <View style={{ ...globalStyle.hStack, ...styles.cartContainer }}>
                <Text style={{ fontWeight: "bold" }}>
                    Total
                </Text>
                <Button mode="contained" color={COLORS.dPink} style={{ paddingHorizontal: 50 }}>
                    <Text>Proceed to Checkout</Text>
                </Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: COLORS.lPink
    },
});
