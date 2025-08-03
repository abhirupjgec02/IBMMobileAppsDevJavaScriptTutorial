import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AuthContext } from './AuthProvider';


function UserOnly() {
    const { user } = useContext(AuthContext);
    
    if (!user) {
        return <Text>Please log in to access this screen.</Text>;
    }

    if (user.role === 'user') {
        return (
            <View style={styles.container}>
                <Text>Access Granted. Welcome User!</Text>
            </View>
        );
    }

    return (
      <Text testID='accessDeniedMessage'>
        Access Denied. Only Users can view this screen.
      </Text>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserOnly;