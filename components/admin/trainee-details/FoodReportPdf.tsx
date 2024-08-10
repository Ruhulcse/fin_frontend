"use client";
import { dateFormat } from "@/lib/helper/common";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { useTranslations } from "next-intl";

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    color: "#000000",
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

const FoodReportPdf = ({ reports = [] }: { reports: any }) => {
  const t = useTranslations("traineeDetails");
  const food = t.raw("foodEntries");
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title} fixed>
          {food.userFoodReports}
        </Text>
        {reports
          ? reports?.map((food: any, index: number) => (
              <View style={styles.block} key={index}>
                <Text style={styles.text} fixed>
                  {food?.eating_day_free_txt ?? "N/A"}
                </Text>
                <Text style={styles.text} fixed>
                  {food?.result_dt ? dateFormat(food?.result_dt) : ""}
                </Text>
              </View>
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
