import * as Location from 'expo-location'
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
const useHomeScreen = () => {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        setLoading(false)
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLoading(false)
    })();
  }, []);


    return {loading}
}

export default useHomeScreen