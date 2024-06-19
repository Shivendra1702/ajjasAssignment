import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { dateRange } from "../../data/dateRange";

const WeekRange = ({ selectedOption, setSelectedOption }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setSelectedOption("thisWeek");
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
              selectedOption == "thisWeek" && styles.active,
            ]}
          >
            This Week
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>
            {dateRange.thisWeek}
          </Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "thisWeek" && (
            <Image
              source={require("../../assets/rightTick.png")}
              style={{ height: 25, width: 25, tintColor: "#FFBE00" }}
            />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelectedOption("lastWeek");
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
              selectedOption == "lastWeek" && styles.active,
            ]}
          >
            Last Week
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>
            {dateRange.lastWeek}
          </Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "lastWeek" && (
            <Image
              source={require("../../assets/rightTick.png")}
              style={{ height: 25, width: 25, tintColor: "#FFBE00" }}
            />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelectedOption("lastSevenDays");
        }}
        style={[styles.dateRangeTypeContainer, ,]}
      >
        <View style={styles.dateRangeType}>
          <Text
            style={[
              styles.dateRangeTypeText,
              selectedOption == "lastSevenDays" && styles.active,
            ]}
          >
            Last Seven Days
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>
            {dateRange.lastSevenDays}
          </Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "lastSevenDays" && (
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

export default WeekRange;

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
