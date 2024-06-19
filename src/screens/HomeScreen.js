import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { dateRange, DateRange } from "../data/dateRange";
import { useNavigation } from "@react-navigation/native";
import { DateRangeContext } from "../DateRangerContext";
import { data } from "../data/dummyData";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { selectedRange } = useContext(DateRangeContext);

  const handleRangePress = () => {
    navigation.navigate("RangeSelection");
  };

  const [ridingScore, setRidingScore] = useState();
  const [distanceTravelled, setDistanceTravelled] = useState();
  const [timeDuration, setTimeDuration] = useState();
  const [averageSpeed, setAverageSpeed] = useState();
  const [topSpeed, setTopSpeed] = useState();
  const [fuelConsumed, setFuelConsumed] = useState();
  const [fuelCost, setFuelCost] = useState();

  useEffect(() => {
    try {
      const filteredData = data.filter((item) => {
        return (
          item.startDate >= DateRange[selectedRange].start &&
          item.startDate <= DateRange[selectedRange].end
        );
      });

      const totalScore = filteredData.reduce((total, item) => {
        return total + item.score;
      }, 0);
      setRidingScore(totalScore / filteredData.length);

      const totalDistance = filteredData.reduce((total, item) => {
        return total + item.distance;
      }, 0);
      setDistanceTravelled(totalDistance / 1000);

      const totalTimeDuration = filteredData.reduce((total, item) => {
        return total + item.duration;
      }, 0);
      const hours = Math.floor(totalTimeDuration / 3600);
      const minutes = Math.floor((totalTimeDuration % 3600) / 60);
      setTimeDuration(`${hours}.${minutes}`);

      const avgSpeed = filteredData.reduce((total, item) => {
        return total + item.averageSpeed;
      }, 0);
      setAverageSpeed(avgSpeed / filteredData.length);

      let topSpeed = null;
      filteredData.forEach((item) => {
        if (topSpeed === null || item.topSpeed > topSpeed) {
          topSpeed = item.topSpeed;
        }
      });
      setTopSpeed(topSpeed);
    } catch (error) {
      console.log("Error in setting data", error);
    }
  }, [selectedRange]);

  const selectedRangeKeyValue = {
    today: "Today",
    yesterday: "Yesterday",
    dayBeforeYesterday: "Day Before Yesterday",
    lastSevenDays: "LastSevenDays",
    thisWeek: "ThisWeek",
    lastWeek: "Last Week",
    lastThirtyDays: "Last Thirty Days",
    thisMonth: "This Month",
    lastMonth: "Last Month",
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#191919" />
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>Statistics</Text>
        </View>
        <View style={styles.headerRange}>
          <TouchableOpacity
            onPress={handleRangePress}
            style={styles.headerRangeContainer}
          >
            <Image
              source={require("../assets/Calendar.png")}
              style={{ height: 20, width: 20 }}
            />
            <Text style={styles.headerRangeContainerText}>
              {`${dateRange[selectedRange]} (${selectedRangeKeyValue[selectedRange]})`}
            </Text>
          </TouchableOpacity>
          <View style={styles.headerArrowContainer}>
            <Image
              source={require("../assets/leftArrow.png")}
              style={{ height: 24, width: 24, tintColor: "white" }}
            />
            <Image
              source={require("../assets/rightArrow.png")}
              style={{ height: 24, width: 24, tintColor: "grey" }}
            />
          </View>
        </View>
      </View>

      <ScrollView style={styles.cardsContainer}>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.cardTitleText}>Riding Behaviour</Text>
            <Image
              source={require("../assets/arrow.png")}
              style={{ height: 25, width: 25 }}
            />
          </View>
          <View style={styles.ridingBehaviourRangeContainer}>
            <View
              style={[
                styles.ridingBehaviourRangeValue,
                ridingScore >= 0 && ridingScore <= 40 && styles.poor,
                ridingScore >= 41 && ridingScore <= 70 && styles.average,
                ridingScore >= 71 && ridingScore <= 90 && styles.good,
                ridingScore >= 91 && ridingScore <= 100 && styles.excellent,
              ]}
            >
              <Text style={[styles.rangeValue, { paddingHorizontal: 8 }]}>
                {ridingScore ? `${ridingScore.toFixed(1)}%` : "--"}
              </Text>
              <Text
                style={[
                  styles.rangeValue,
                  {
                    backgroundColor: "#222222",
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 4,
                  },
                ]}
              >
                {ridingScore >= 0 && ridingScore <= 40 && "Poor"}
                {ridingScore >= 41 && ridingScore <= 70 && "Average"}
                {ridingScore >= 71 && ridingScore <= 90 && "Good"}
                {ridingScore >= 91 && ridingScore <= 100 && "Excellent"}
              </Text>
            </View>
            <View style={styles.rateContainer}>
              <Image
                source={require("../assets/downFall.png")}
                style={{ height: 20, width: 20, tintColor: "red" }}
              />
              <Text style={styles.rateValue}>24%</Text>
              <Text style={styles.rateText}>VS preceding period</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.cardTitleText}>Journey</Text>
            <Image
              source={require("../assets/arrow.png")}
              style={{ height: 25, width: 25 }}
            />
          </View>

          <View style={styles.dataContainer}>
            <View style={[styles.rightView, styles.dataView]}>
              <View style={styles.dataAbout}>
                <Image
                  source={require("../assets/distance.png")}
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "#2A403C",
                    tintColor: "#6EDDC9",
                    borderRadius: 100,
                  }}
                />
                <Text style={styles.aboutText}>Distance Travelled</Text>
              </View>
              <View style={styles.dataValue}>
                <Text style={styles.dataValueText}>
                  {distanceTravelled ? distanceTravelled.toFixed(2) : "--"}
                </Text>
                <Text style={styles.dataValueUnit}>Km</Text>
              </View>
              <View style={styles.rateContainer}>
                <Image
                  source={require("../assets/downFall.png")}
                  style={{ height: 20, width: 20, tintColor: "red" }}
                />
                <Text style={styles.rateValue}>24%</Text>
                <Text style={styles.rateText}>VS preceding period</Text>
              </View>
            </View>

            <View style={[styles.leftView, styles.dataView]}>
              <View style={styles.dataAbout}>
                <Image
                  source={require("../assets/time.png")}
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "#143641",
                    tintColor: "#00AE82",
                    borderRadius: 100,
                  }}
                />
                <Text style={styles.aboutText}>Time Duration</Text>
              </View>
              <View style={styles.dataValue}>
                <Text style={styles.dataValueText}>
                  {timeDuration ? timeDuration.split(".")[0] : "--"}
                </Text>
                <Text style={styles.dataValueUnit}>Hr</Text>
                <Text style={styles.dataValueText}>
                  {timeDuration ? timeDuration.split(".")[1] : "--"}
                </Text>
                <Text style={styles.dataValueUnit}>min</Text>
              </View>
              <View style={styles.rateContainer}>
                <Image
                  source={require("../assets/downFall.png")}
                  style={{ height: 20, width: 20, tintColor: "red" }}
                />
                <Text style={styles.rateValue}>24%</Text>
                <Text style={styles.rateText}>VS preceding period</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.cardTitleText}>Speed</Text>
            <Image
              source={require("../assets/arrow.png")}
              style={{ height: 25, width: 25 }}
            />
          </View>

          <View style={styles.dataContainer}>
            <View style={[styles.rightView, styles.dataView]}>
              <View style={styles.dataAbout}>
                <Image
                  source={require("../assets/avgSpeed.png")}
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "#362817",
                    tintColor: "#AC630D",
                    borderRadius: 100,
                  }}
                />
                <Text style={styles.aboutText}>Average Speed</Text>
              </View>
              <View style={styles.dataValue}>
                <Text style={styles.dataValueText}>
                  {averageSpeed ? averageSpeed.toFixed(2) : "--"}
                </Text>
                <Text style={styles.dataValueUnit}>Km/hr</Text>
              </View>
              <View style={styles.rateContainer}>
                <Image
                  source={require("../assets/downFall.png")}
                  style={{ height: 20, width: 20, tintColor: "red" }}
                />
                <Text style={styles.rateValue}>24%</Text>
                <Text style={styles.rateText}>VS preceding period</Text>
              </View>
            </View>

            <View style={[styles.leftView, styles.dataView]}>
              <View style={styles.dataAbout}>
                <Image
                  source={require("../assets/maxSpeed.png")}
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "#413819",
                    tintColor: "#E2B519",
                    borderRadius: 100,
                  }}
                />
                <Text style={styles.aboutText}>Top Speed</Text>
              </View>
              <View style={styles.dataValue}>
                <Text style={styles.dataValueText}>
                  {topSpeed ? topSpeed.toFixed(2) : "--"}
                </Text>
                <Text style={styles.dataValueUnit}>Km/hr</Text>
              </View>
              <View style={styles.rateContainer}>
                <Image
                  source={require("../assets/riseUp.png")}
                  style={{ height: 20, width: 20, tintColor: "green" }}
                />
                <Text style={[styles.rateValue, { color: "green" }]}>24%</Text>
                <Text style={styles.rateText}>VS preceding period</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.cardTitleText}>Fuel</Text>
            <Image
              source={require("../assets/arrow.png")}
              style={{ height: 25, width: 25 }}
            />
          </View>

          <View style={styles.dataContainer}>
            <View style={[styles.rightView, styles.dataView]}>
              <View style={styles.dataAbout}>
                <Image
                  source={require("../assets/fuel.png")}
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "#38402A",
                    tintColor: "#B3DD6E",
                    borderRadius: 100,
                  }}
                />
                <Text style={styles.aboutText}>Fuel Consumed</Text>
              </View>
              <View style={styles.dataValue}>
                <Text style={styles.dataValueText}>
                  {fuelConsumed ? fuelConsumed : "--"}
                </Text>
                <Text style={styles.dataValueUnit}>L</Text>
              </View>
              <View style={styles.rateContainer}>
                <Image
                  source={require("../assets/downFall.png")}
                  style={{ height: 20, width: 20, tintColor: "red" }}
                />
                <Text style={styles.rateValue}>24%</Text>
                <Text style={styles.rateText}>VS preceding period</Text>
              </View>
            </View>

            <View style={[styles.leftView, styles.dataView]}>
              <View style={styles.dataAbout}>
                <Image
                  source={require("../assets/cost.png")}
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "#2B321F",
                    tintColor: "#719438",
                    borderRadius: 100,
                  }}
                />
                <Text style={styles.aboutText}>Fuel Cost</Text>
              </View>
              <View style={styles.dataValue}>
                <Text style={styles.dataValueUnit}>₹</Text>
                <Text style={styles.dataValueText}>
                  {fuelCost ? fuelCost : "--"}
                </Text>
              </View>
              <View style={styles.rateContainer}>
                <Image
                  source={require("../assets/downFall.png")}
                  style={{ height: 20, width: 20, tintColor: "red" }}
                />
                <Text style={styles.rateValue}>24%</Text>
                <Text style={styles.rateText}>VS preceding period</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
    // paddingTop: StatusBar.currentHeight,
  },
  headerTitle: {
    padding: 20,
  },
  headerTitleText: {
    fontSize: 24,
    color: "#E8E8E8",
    fontWeight: "bold",
  },
  headerRange: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  headerRangeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRangeContainerText: {
    color: "#E8E8E8",
    marginLeft: 10,
    fontWeight: "bold",
  },
  headerArrowContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 25,
  },

  cardsContainer: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#191919",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#464646",
    padding: 16,
    gap: 20,
    marginBottom: 20,
  },
  cardTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitleText: {
    color: "#E8E8E8",
    fontSize: 20,
    fontWeight: "bold",
  },

  ridingBehaviourRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222222",
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#464646",
  },
  ridingBehaviourRangeValue: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "grey",
    padding: 2,
    borderRadius: 4,
  },
  rangeValue: {
    color: "#E8E8E8",
    fontWeight: "bold",
  },
  rateContainer: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    color: "#E8E8E8",
  },
  rateValue: {
    color: "red",
    fontSize: 12,
  },
  rateText: {
    color: "#A7A7A7",
    fontWeight: "bold",
    fontSize: 12,
  },

  dataContainer: {
    flexDirection: "row",
  },
  rightView: {
    borderRightWidth: 1,
    borderRightColor: "#464646",
    flex: 1,
    paddingRight: 12,
  },
  leftView: {
    flex: 1,
    paddingLeft: 12,
  },
  dataView: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 6,
  },
  dataAbout: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  aboutText: {
    color: "#A3A3A3",
    fontWeight: "bold",
    fontSize: 14,
  },
  dataValue: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 2,
  },
  dataValueText: {
    color: "#E8E8E8",
    fontSize: 28,
    fontWeight: "bold",
  },
  dataValueUnit: {
    color: "#A3A3A3",
    fontWeight: "bold",
    fontSize: 14,
  },

  excellent: {
    backgroundColor: "#0D99FF",
  },
  good: {
    backgroundColor: "#259DFE",
  },
  average: {
    backgroundColor: "#E3703C",
  },
  poor: {
    backgroundColor: "#C14345",
  },
});
