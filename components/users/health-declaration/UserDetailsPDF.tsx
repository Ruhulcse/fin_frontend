"use client";
import { registrationInputs } from "@/lib/helper/inputs";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

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
  },
  answer: {
    fontSize: 18,
    marginTop: 4,
    alignSelf: "flex-end",
  },
  text: {
    fontSize: 14,
    textAlign: "justify",
    alignSelf: "flex-end",
  },
  view: {
    marginTop: 10,
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

const getlabel = (key: string, locale: string) => {
  const found = registrationInputs?.find((input: any) => input.name === key);
  const label = locale === "en" ? found?.label : found?.label_he;
  return label;
};

const UserDetailsPDF = ({
  userDetails,
  userDetl,
  locale = "he",
}: {
  userDetails: any;
  userDetl: string;
  locale: string;
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title} fixed>
        {userDetl}
      </Text>
      {userDetails &&
        Object.entries(userDetails).map(([key, value]: any) => (
          <View key={key} style={styles.view}>
            <Text style={styles.text}>
              {
                // registrationInputs.find((input) => input.name === key)?.label ??
                //   key?.split("_").join(" ").toUpperCase()
                getlabel(key, locale)
              }
            </Text>
            <Text style={styles.answer}>
              {value?.length > 0 ? value : "N/A"}
            </Text>
          </View>
        ))}
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

export default UserDetailsPDF;
