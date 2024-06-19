import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { dateRange } from "../../data/dateRange";

const MonthRange = ({ selectedOption, setSelectedOption }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setSelectedOption("thisMonth");
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
              selectedOption == "thisMonth" && styles.active,
            ]}
          >
            This Month
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>
            {dateRange.thisMonth}
          </Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "thisMonth" && (
            <Image
              source={require("../../assets/rightTick.png")}
              style={{ height: 25, width: 25, tintColor: "#FFBE00" }}
            />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelectedOption("lastMonth");
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
              selectedOption == "lastMonth" && styles.active,
            ]}
          >
            Last Month
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>
            {dateRange.lastMonth}
          </Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "lastMonth" && (
            <Image
              source={require("../../assets/rightTick.png")}
              style={{ height: 25, width: 25, tintColor: "#FFBE00" }}
            />
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelectedOption("lastThirtyDays");
        }}
        style={[styles.dateRangeTypeContainer, ,]}
      >
        <View style={styles.dateRangeType}>
          <Text
            style={[
              styles.dateRangeTypeText,
              selectedOption == "lastThirtyDays" && styles.active,
            ]}
          >
            Last Thirty Days
          </Text>
          <Text style={styles.dateRangeTypeRangeText}>
            {dateRange.lastThirtyDays}
          </Text>
        </View>
        <View style={styles.tickContainer}>
          {selectedOption == "lastThirtyDays" && (
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

export default MonthRange;

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
