import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const other = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [favoriteCities, setFavoriteCities] = useState([
    { id: "1", name: "New York" },
    { id: "2", name: "London" },
    { id: "3", name: "Tokyo" },
  ]);

  const handleSearch = () => {
    // Mock search result
    const result = {
      name: searchQuery,
      temperature: "27°C",
      condition: "Partly Cloudy",
      humidity: "50%",
      windSpeed: "10 km/h",
    };
    setSearchResult(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search City</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter city name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      {searchResult && (
        <View style={styles.searchResult}>
          <Text style={styles.resultText}>{searchResult.name}</Text>
          <Text style={styles.resultText}>
            Temperature: {searchResult.temperature}
          </Text>
          <Text style={styles.resultText}>
            Condition: {searchResult.condition}
          </Text>
          <Text style={styles.resultText}>
            Humidity: {searchResult.humidity}
          </Text>
          <Text style={styles.resultText}>
            Wind Speed: {searchResult.windSpeed}
          </Text>
        </View>
      )}
      <Text style={styles.title}>Favorite Cities</Text>
      <FlatList
        data={favoriteCities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cityItem}>
            <Text style={styles.cityName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#121249",
    marginBottom: 10,
  },
  searchInput: {
    height: 50,
    borderColor: "#121249",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    marginBottom: 20,
  },
  searchResult: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    color: "#121249",
    marginBottom: 5,
  },
  cityItem: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  cityName: {
    fontSize: 18,
    color: "#121249",
  },
});

export default other;
