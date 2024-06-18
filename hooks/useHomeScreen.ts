import * as Location from 'expo-location'
import { useEffect, useState } from 'react';
const useHomeScreen = () => {
    const [loading,setLoading] = useState(true)
    const [location,setLocation] = useState("")
    const [coords,setCoords] = useState<{latitude:number|null,longitude:number|null}>({latitude:null,longitude:null})
    const [condition,setCondition] = useState("")
    const [conditionImage,setConditionImage] = useState("")
    const [temperature,setTemperature] = useState("")
const [humidity,setHumidity] = useState("")
const [windSpeed,setWindSpeed] = useState("")
const [windDir,setWindDir] = useState("")
const [pressure,setPressure] = useState("")
const [precip,setPrecip] = useState("")
const [feelsLike,setFeelsLike] = useState("")
const [visibility,setVisibility] = useState("")
const [uvIndex,setUvIndex] = useState("")
const [gustSpeed,setGustSpeed] = useState("")

    useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        setLoading(false)
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLoading(false)
      console.log(location);
      setCoords({latitude:location.coords.latitude,longitude:location.coords.longitude})
    })();
  }, []);

  useEffect(() => {
async function getData(){
console.log(coords)
  const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d4c08f230b144d318af83341241806&q=${coords.latitude},${coords.longitude}&days=7&aqi=no&alerts=no
`)
if(res.ok){
  const data = await res.json()
  console.log(data)
  setLocation(`${data.location.name},${data.location.region}`)
  setCondition(data.current.condition.text)
  setConditionImage(`https:${data.current.condition.icon}`)
  setTemperature(data.current.temp_c)
  setHumidity(data.current.humidity)
  setWindSpeed(data.current.wind_kph)
  setWindDir(data.current.wind_dir)
  setPressure(data.current.pressure_mb)
  setPrecip(data.current.precip_mm)
  setFeelsLike(data.current.feelslike_c)
  setVisibility(data.current.vis_km)
  setUvIndex(data.current.uv)
  setGustSpeed(data.current.gust_kph)
  setLoading(false)
}
  // return res
}
getData()
  },[coords])


    return {loading,location,condition,conditionImage,temperature,humidity,windSpeed,windDir,pressure,precip,feelsLike,visibility,uvIndex,gustSpeed}
}

export default useHomeScreen