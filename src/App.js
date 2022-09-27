import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SectionList,
  ScrollView,
  Image
} from "react-native";

const cake1 =
  "https://i.dailymail.co.uk/1s/2019/06/16/16/14856266-7147307-image-a-44_1560699474847.jpg";
const cake2 =
  "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/11/funny-cake-fails8.jpg?iv=380";
const cake3 =
  "https://bunkstrutts.files.wordpress.com/2020/06/hedgehog-cake-5.png?w=400";

const cake4 =
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/09/hedgehog-fails14.jpg";
const cake5 =
  "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/09/hedgehog-fails21.jpg";
const cake6 =
  "https://thechive.com/wp-content/uploads/2021/10/cake-fails11.jpg?attachment_cache_bust=3832621&quality=85&strip=info&w=400";

function Element({ img }) {
  return (
    <View style={{ backgroundColor: "pink", padding: 10 }}>
      {/* <Text>{title}</Text> */}
      <Image source={img} style={{ height: 100, width: 150 }} />
      <Button title="заказать" />
    </View>
  );
}

function App() {
  const menu = [
    {
      title: "десерты1",
      // data: ["тортик 1", "тортик 2", "тортик 3"],
      data: [cake1, cake2, cake3]
    },
    {
      title: "и еще тортики",
      // data: ["тортик 4", "тортик 5", "тортик 6"],
      data: [cake4, cake5, cake6]
    }
  ];
  return (
    <ScrollView style={styles.app}>
      <SectionList
        sections={menu}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Element img={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto"
  }
});

export default App;
