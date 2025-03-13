import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const products = [
    { id: '1', name: 'Product 1', price: 10 },
    { id: '2', name: 'Product 2', price: 15 },
    { id: '3', name: 'Product 3', price: 20 },
];

export default function POSScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>POS System</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.productButton}>
                        <Text style={styles.productText}>{item.name} - ${item.price}</Text>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    productButton: {
        padding: 16,
        backgroundColor: '#3498db',
        marginBottom: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    productText: {
        color: '#fff',
        fontSize: 16,
    },
    checkoutButton: {
        padding: 16,
        backgroundColor: '#27ae60',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    checkoutText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
