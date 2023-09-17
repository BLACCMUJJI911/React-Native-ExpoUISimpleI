import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Body() {

    // let [item, setItem] = useState({
    //     name: ""
    // })


    // const handleChange = e => {
    //     setItem({ [item.name]: e.target.value })
    // }

    // const onAdd = e => {
    //     console.log("add", item);
    //     alert('Added')
    //     //    setItem(item.name)

    // }


    return (
        <>



            <View style={styles.inpContainer}>

                <View style={styles.inpBtnCont}>

                    <TextInput placeholder="Enter Todo Items" style={styles.txtInp} ></TextInput>

                    <TouchableOpacity  activeOpacity={0.6} style={styles.add}>

                        <Text>+</Text>

                    </TouchableOpacity>


                    
                        {/* 
        {
            item.map((v) => {
                return(
                    <>
                    <Text> {v.item} </Text>
                    </>
                )
            })
        } */}

        {/* onPress={e => setItem(e.item)} 
        onChange={e => setItem(e)}
        */}

         


                </View>
{/* 
                <View>

        <Text>

        {item}

        </Text>

                </View> */}

            </View>

            {/* style={{fontSize:30, textAlign:"center"}} */}

        </>

    )
}


const styles = StyleSheet.create({

    inpContainer: ({

        height: 100 + "%",
        width: 100 + "%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#8CC4DF",
        padding: 8

    }),

    txtInp: ({

        backgroundColor: "#DFE3EE",
        borderRadius: 50,
        padding: 4,
        width: 50 + "%",


    }),

    add: ({

        backgroundColor: "blue",
        padding: 8,
        width: 15 + "%",
        borderRadius: 20,
        display: "flex",
        alignItems: "center"

    }),

    inpBtnCont: ({

        display: "flex",
        flexDirection: "row",
        gap: 6,
        width: 100 + "%",
        justifyContent: "center"

    })




})