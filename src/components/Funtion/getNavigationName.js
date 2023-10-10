import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function useCurrentRouteName() {
    const navigation = useNavigation();
    const [currentRouteName, setCurrentRouteName] = useState(null);

    useEffect(() => {
        const unsubscribe = navigation.addListener('state', (e) => {
            if (e.data.state) {
                setCurrentRouteName(e.data.state.routeNames[e.data.state.index]);
            }
        });

        return unsubscribe;
    }, [navigation]);

    return currentRouteName;
}
