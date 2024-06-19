import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DateRangeContext } from "../DateRangerContext";

import DayRange from "./rangeTypes/DayRange";
import WeekRange from "./rangeTypes/WeekRange";
import MonthRange from "./rangeTypes/MonthRange";
import YearRange from "./rangeTypes/YearRange";

export default function RangeSelectionScreen() {
  const navigation = useNavigation();
  const { selectedRange, setSelectedRange } = useContext(DateRangeContext);

  const [selectedRangeType, setSelectedRangeType] = useState(selectedRange);

  const renderItem = (item, selectedOption, setSelectedOption) => {
    switch (item) {
      case "day":
        return (
          <DayRange
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      case "week":
        return (
          <WeekRange
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      case "month":
        return (
          <MonthRange
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      case "other":
        return (
          <YearRange
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
      default:
        return (
          <DayRange
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        );
    }
  };

  const [currentTab, setCurrentTab] = useState("day");

  const handleSave = () => {
    setSelectedRange(selectedRangeType);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" backgroundColor="#191919" /> */}
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <View style={styles.headerTitleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../assets/cross.png")}
                style={{ height: 25, width: 25 }}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitleText}>Date Range</Text>
          </View>
          <TouchableOpacity style={styles.saveBtn} onPress={() => handleSave()}>
            <Text style={styles.saveBtnText}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tabHeaderContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              currentTab === "day" && styles.activeTabButton,
            ]}
            onPress={() => {
              setCurrentTab("day");
            }}
          >
            <Text
              style={[
                styles.tabButtonText,
                currentTab === "day" && styles.activeTabButtonText,
              ]}
            >
              Day
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              currentTab === "week" && styles.activeTabButton,
            ]}
            onPress={() => {
              setCurrentTab("week");
            }}
          >
            <Text
              style={[
                styles.tabButtonText,
                currentTab === "week" && styles.activeTabButtonText,
              ]}
            >
              Week
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              currentTab === "month" && styles.activeTabButton,
            ]}
            onPress={() => {
              setCurrentTab("month");
            }}
          >
            <Text
              style={[
                styles.tabButtonText,
                currentTab === "month" && styles.activeTabButtonText,
              ]}
            >
              Month
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              currentTab === "other" && styles.activeTabButton,
            ]}
            onPress={() => {
              setCurrentTab("other");
            }}
          >
            <Text
              style={[
                styles.tabButtonText,
                currentTab === "other" && styles.activeTabButtonText,
              ]}
            >
              Other
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        {renderItem(currentTab, selectedRangeType, setSelectedRangeType)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060606",
  },
  header: {
    backgroundColor: "#191919",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: StatusBar.currentHeight,
  },
  headerTitle: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  headerTitleText: {
    fontSize: 24,
    color: "#E8E8E8",
    fontWeight: "bold",
  },
  saveBtn: {},
  saveBtnText: {
    color: "#FFBE00",
    fontSize: 20,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  tabHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
  tabButton: {
    padding: 10,
  },
  tabButtonText: {
    color: "#E8E8E8",
    fontSize: 18,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#FFBE00",
  },
  activeTabButtonText: {
    color: "#FFBE00",
    fontWeight: "bold",
  },
});
