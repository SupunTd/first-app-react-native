import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
    id: string;
    name: string;
    email: string;
} | null;

export const useAuth = () => {
    const [user, setUser] = useState<User>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const storedUser = await AsyncStorage.getItem("user");
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error("Failed to load user:", error);
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, []);

    const login = async (userData: User) => {
        await AsyncStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = async () => {
        await AsyncStorage.removeItem("user");
        setUser(null);
    };

    return { user, loading, login, logout };
};
