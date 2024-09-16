"use client";
import { dateFormat } from "@/lib/helper/common";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Rubik",
  fonts: [
    {
      src: "/fonts/rubik.ttf",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    color: "#000000",
    fontFamily: "Rubik",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    textAlign: "justify",
    alignSelf: "flex-end",
  },
  date: {
    fontSize: 14,
    textAlign: "justify",
	alignSelf: "flex-end",
	paddingTop: 5,
	paddingBottom: 0,
  },
  block: {
    marginTop: 10,
    backgroundColor: "#FAEAEB",
    padding: 10,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const FoodReportPdf = ({ reports = [], food }: { reports: any; food: any }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title} fixed>
          {food.userFoodReports}
        </Text>
        {reports
          ? reports?.map((food: any, index: number) => (
              <div>
                <Text style={styles.date} fixed>{food?.result_dt ? dateFormat(food?.result_dt) : ""}</Text>
                <View style={styles.block} key={index}>
                  <Text style={styles.text} fixed>
                    {food?.eating_day_free_txt ?? "N/A"}
                  </Text>
                  {/* <Text style={styles.text} fixed>
                    {food?.result_dt ? dateFormat(food?.result_dt) : ""}
                  </Text> */}
                </View>
              </div>
            ))
          : null}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};
export default FoodReportPdf;
