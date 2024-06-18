import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import useHomeScreen from "@/hooks/useHomeScreen";

const Index = () => {
  const { loading } = useHomeScreen;
  const weatherData = {
    location: "New York, USA",
    temperature: "25°C",
    condition: "Sunny",
    humidity: "32%",
    windSpeed: "19.4 km/h",
    windDir: "SW",
    pressure: "1001 mb",
    precip: "0.0 mm",
    feelsLike: "43.3°C",
    visibility: "10 km",
    uvIndex: "9",
    gustSpeed: "22.4 km/h",
    icon: "https://openweathermap.org/img/wn/01d.png",
  };

  const forecastData = [
    {
      day: "Mon",
      temperature: "26°C",
      condition: "Sunny",
      icon: "https://openweathermap.org/img/wn/01d.png",
    },
    {
      day: "Tue",
      temperature: "27°C",
      condition: "Cloudy",
      icon: "https://openweathermap.org/img/wn/02d.png",
    },
    {
      day: "Wed",
      temperature: "28°C",
      condition: "Rainy",
      icon: "https://openweathermap.org/img/wn/09d.png",
    },
    {
      day: "Thu",
      temperature: "29°C",
      condition: "Sunny",
      icon: "https://openweathermap.org/img/wn/01d.png",
    },
    {
      day: "Fri",
      temperature: "30°C",
      condition: "Cloudy",
      icon: "https://openweathermap.org/img/wn/02d.png",
    },
    {
      day: "Sat",
      temperature: "31°C",
      condition: "Rainy",
      icon: "https://openweathermap.org/img/wn/09d.png",
    },
    {
      day: "Sun",
      temperature: "32°C",
      condition: "Sunny",
      icon: "https://openweathermap.org/img/wn/01d.png",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.forecastItem}>
      <Text style={styles.dayText}>{item.day}</Text>
      <Image source={{ uri: item.icon }} style={styles.forecastIcon} />
      <Text style={styles.temperatureText}>{item.temperature}</Text>
      <Text style={styles.conditionText}>{item.condition}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ADD8E6" }}>
      <StatusBar backgroundColor="#ADD8E6" style="dark" />
      <View style={styles.locationHeader}>
        <Feather name="map-pin" size={32} color="black" />
        <View style={styles.locContainer}>
          <Text style={styles.location}>{weatherData.location}</Text>
          <Text style={{ color: "grey", fontSize: 12 }}>USA</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            source={{ uri: weatherData.icon }}
            style={styles.weatherIcon}
          />
          <Text style={styles.temperature}>{weatherData.temperature}</Text>
          <Text style={styles.condition}>{weatherData.condition}</Text>
          <ScrollView
            style={styles.detailsContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.detailRow}>
              <FontAwesome5 name="tint" size={24} color="black" />
              <Text style={styles.detailText}>Humidity</Text>
              <Text style={styles.detailValue}>{weatherData.humidity}</Text>
            </View>
            <View style={styles.detailRow}>
              <FontAwesome5 name="thermometer-half" size={24} color="black" />
              <Text style={styles.detailText}>Feels Like</Text>
              <Text style={styles.detailValue}>{weatherData.feelsLike}</Text>
            </View>
            <View style={styles.detailRow}>
              <FontAwesome5 name="wind" size={24} color="black" />
              <Text style={styles.detailText}>Wind</Text>
              <Text style={styles.detailValue}>
                {weatherData.windSpeed} {weatherData.windDir}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <FontAwesome5 name="cloud" size={24} color="black" />
              <Text style={styles.detailText}>Pressure</Text>
              <Text style={styles.detailValue}>{weatherData.pressure}</Text>
            </View>
            <View style={styles.detailRow}>
              <FontAwesome5 name="cloud-rain" size={24} color="black" />
              <Text style={styles.detailText}>Precipitation</Text>
              <Text style={styles.detailValue}>{weatherData.precip}</Text>
            </View>
            <View style={styles.detailRow}>
              <FontAwesome5 name="eye" size={24} color="black" />
              <Text style={styles.detailText}>Visibility</Text>
              <Text style={styles.detailValue}>{weatherData.visibility}</Text>
            </View>
            <View style={styles.detailRow}>
              <FontAwesome5 name="sun" size={24} color="black" />
              <Text style={styles.detailText}>UV Index</Text>
              <Text style={styles.detailValue}>{weatherData.uvIndex}</Text>
            </View>
            <View style={styles.detailRow}>
              <FontAwesome5 name="wind" size={24} color="black" />
              <Text style={styles.detailText}>Gust Speed</Text>
              <Text style={styles.detailValue}>{weatherData.gustSpeed}</Text>
            </View>
          </ScrollView>
          <Text style={styles.forecastTitle}>7-Day Forecast</Text>
          <FlatList
            style={{ marginVertical: 16 }}
            data={forecastData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.forecastList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
  },
  locContainer: {
    paddingHorizontal: 16,
  },
  locationHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 16,
  },
  location: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#121249",
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
  },
  condition: {
    fontSize: 24,
    color: "#121249",
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: "row",
    marginTop: 16,
    padding: 8,
  },
  detailRow: {
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 16,
  },
  detailText: {
    fontSize: 16,
    color: "#121249",
    marginLeft: 8,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#121249",
  },
  forecastTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#121249",
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 16,
  },
  forecastList: {
    paddingHorizontal: 16,
  },
  forecastItem: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: "#ffffff33",
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#121249",
    marginBottom: 6,
  },
  forecastIcon: {
    width: 50,
    height: 50,
    marginBottom: 6,
  },
  temperatureText: {
    fontSize: 14,
    color: "#121249",
  },
  conditionText: {
    fontSize: 14,
    color: "#121249",
    marginTop: 4,
  },
});

export default Index;
