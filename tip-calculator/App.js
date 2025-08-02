import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function App() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [people, setPeople] = useState("1");
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // const calculateTip = () => {
  //   const billAmt = parseFloat(bill);
  //   const tipPct = parseFloat(tipPercent);
  //   const numPeople = parseFloat(people);

  //   if (!isNaN(billAmt) && !isNaN(tipPct) && numPeople > 0) {
  //     const tip = ((billAmt * tipPct) / 100).toFixed(2);
  //     const total = (billAmt + parseFloat(tip)).toFixed(2);
  //     setTipAmount(tip);
  //     setTotalAmount(total);
  //   } else {
  //     alert("please enter a vaild number");
  //   }
  // };

  const calculateTip = () => {

    const billAmt = parseFloat(bill);
    const tipPct = parseFloat(tipPercent);
    const numPeople = parseFloat(people);

    if(!isNaN(billAmt) && !isNaN(tipPct) && numPeople > 0) {
      const tip= ((billAmt * tipPct) / 100).toFixed(2);
      const total = (billAmt + parseFloat(tip)).toFixed(2);
      setTipAmount(tip);
      setTotalAmount(total);
    } else {
      alert("please enter a valid number");
    }
  }



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
        Tip Calculator
      </Text>
      <Text style={styles.label}>Bill Amount ($):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter bill amount"
        value={bill}
        onChangeText={setBill} // Update bill state on change
      />
      <Text style={styles.label}>Tip Percentage (%):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter tip %"
        value={tipPercent}
        onChangeText={setTipPercent} // Update tipPercent state
      />
      <Text style={styles.label}>Number of People:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter number of people"
        value={people}
        onChangeText={setPeople} // Update people state
      />
      <TouchableOpacity style={styles.button} onPress={calculateTip}>
        <Text style={styles.buttonText}>Calculate Tip</Text>
      </TouchableOpacity>
      <Text style={styles.result}>Tip Amount: ${tipAmount}</Text>
      <Text style={styles.result}>Total Amount: ${totalAmount}</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, justifyContent: "center" },
  label: { fontSize: 18, marginVertical: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginBottom: 10,
    fontSize: 18,
    borderRadius:12,
  },
  text:{
      fontSize:38,
      marginBottom:60,
      // paddingLeft:60,
      // borderWidth:2,

  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 15,
    marginVertical: 10,
  },
  buttonText: { color: "white", fontSize: 18, textAlign: "center" },
  result: { fontSize: 18, marginTop: 10 },
});
