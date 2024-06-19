import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { dateRange } from "../../data/dateRange";

const DayRange = ({ selectedOption, setSelectedOption }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setSelectedOption("today");
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
              selectedOption == "today" && styles.active,
            ]}
          >
            Today
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>{dateRange.today}</Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "today" && (
            <Image
              source={require("../../assets/rightTick.png")}
              style={{ height: 25, width: 25, tintColor: "#FFBE00" }}
            />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelectedOption("yesterday");
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
              selectedOption == "yesterday" && styles.active,
            ]}
          >
            Yesterday
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>
            {dateRange.yesterday}
          </Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "yesterday" && (
            <Image
              source={require("../../assets/rightTick.png")}
              style={{ height: 25, width: 25, tintColor: "#FFBE00" }}
            />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelectedOption("dayBeforeYesterday");
        }}
        style={[styles.dateRangeTypeContainer, ,]}
      >
        <View style={styles.dateRangeType}>
          <Text
            style={[
              styles.dateRangeTypeText,
              selectedOption == "dayBeforeYesterday" && styles.active,
            ]}
          >
            Day Before Yesterday
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>
            {dateRange.dayBeforeYesterday}
          </Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "dayBeforeYesterday" && (
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

export default DayRange;

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
