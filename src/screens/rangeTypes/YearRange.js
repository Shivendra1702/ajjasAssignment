import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { dateRange } from "../../data/dateRange";

const YearRange = ({ selectedOption, setSelectedOption }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setSelectedOption("thisYear");
        }}
        style={[
          styles.dateRangeTypeContainer,
          { borderBottomWidth: 1, borderBottomColor: "#2B2B2B" },
        ]}
      >
        <View style={styles.dateRangeType}>
          <Text
            style={[
              styles.dateRangeTypeText,
              selectedOption == "thisYear" && styles.active,
            ]}
          >
            This Year
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>
            {dateRange.thisYear}
          </Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "thisYear" && (
            <Image
              source={require("../../assets/rightTick.png")}
              style={{ height: 25, width: 25, tintColor: "#FFBE00" }}
            />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelectedOption("lastYear");
        }}
        style={[
          styles.dateRangeTypeContainer,
          { borderBottomWidth: 1, borderBottomColor: "#2B2B2B" },
        ]}
      >
        <View style={styles.dateRangeType}>
          <Text
            style={[
              styles.dateRangeTypeText,
              selectedOption == "lastYear" && styles.active,
            ]}
          >
            Last Year
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>
            {dateRange.lastYear}
          </Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "lastYear" && (
            <Image
              source={require("../../assets/rightTick.png")}
              style={{ height: 25, width: 25, tintColor: "#FFBE00" }}
            />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelectedOption("lifeTime");
        }}
        style={[styles.dateRangeTypeContainer]}
      >
        <View style={styles.dateRangeType}>
          <Text
            style={[
              styles.dateRangeTypeText,
              selectedOption == "lifeTime" && styles.active,
            ]}
          >
            LifeTime
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>
            {dateRange.lifeTime}
          </Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "lifeTime" && (
            <Image
              source={require("../../assets/rightTick.png")}
              style={{ height: 25, width: 25, tintColor: "#FFBE00" }}
            />
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default YearRange;

const styles = StyleSheet.create({
  dateRangeTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  dateRangeType: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  dateRangeTypeText: {
    fontSize: 18,
    color: "#fff",
  },
  dateRangeTypeRangeText: {
    fontSize: 14,
    color: "#9B9B9B",
  },
  tickContainer: {},
  active: {
    color: "#FFBE00",
  },
});
