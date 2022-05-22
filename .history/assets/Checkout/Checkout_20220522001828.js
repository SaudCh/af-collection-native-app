import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { List } from 'react-native-paper'

export default function Checkout() {
    const [expanded, setExpanded] = useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <View>
            <List.Section title="Accordions">
                <List.Accordion
                    title="Products"
                >
                    <View>
                        
                    </View>
                </List.Accordion>

                <List.Accordion
                    title="Controlled Accordion"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>

        </View>
    )
}