import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Components/Header/header';
import Body from './Components/Body/body';
import Footer from './Components/Footer/footer';

export default function App() {
  return (

    <SafeAreaView style={styles.safearea}>

      <View style={styles.header}>

        <Header prop={styles} />

      </View>

      <View style={styles.body}>

        <Body prop={styles} />

      </View>

      <View style={styles.footer}>

        <Footer prop={styles} />

      </View>

    </SafeAreaView >


  );
}

const styles = StyleSheet.create({

  safearea: ({

    flex: 1,
    fontFamily:"sans-serif"

  }),

  header:({

    flex:1,
    backgroundColor: "#8CC4DF",
    

  }),

  body:({

    flex:4,
    backgroundColor:"white",

  }),

  footer:({

    flex:1,
    backgroundColor:"#122543"

  })

});
