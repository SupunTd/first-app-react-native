import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>POS Dashboard</Text>

            <View style={styles.grid}>
                <DashboardButton title="Sales" onPress={() => navigation.navigate("SalesScreen")} />
                <DashboardButton title="Inventory" onPress={() => navigation.navigate("InventoryScreen")} />
                <DashboardButton title="Customers" onPress={() => navigation.navigate("CustomersScreen")} />
                <DashboardButton title="Reports" onPress={() => navigation.navigate("ReportsScreen")} />
            </View>
        </View>
    );
};

const DashboardButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#f4f4f4",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    button: {
        width: "48%",
        backgroundColor: "#007AFF",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default HomeScreen;
