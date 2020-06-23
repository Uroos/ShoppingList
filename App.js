import React, {useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, FlatList} from "react-native"
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem'
import {uuid} from 'uuidv4';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const App = () => {
  const [items, setItems] = useState ( [
    {id: '1',title: 'Milk',},
    {id: '2',title: 'Butter',},
    {id: '3',title: 'Eggs',},
  ]);

  const addItem = (title) =>{
    setItems(prevItems =>{
      // ... means it will take prevItems and put in front of it
      return[{id:'5', title},...prevItems]
    });
  }
  const deleteItem = (id) => {
    setItems(prevItems =>{
      // return all items whose id doesn't match with the passed
      // in id.
      return prevItems.filter(item=>item.id!=id)
    })
  }
  return(
      <View style={styles.container}>
        <Header></Header>
        <AddItem addItem = {addItem}/>
        <FlatList
          data={items}
          renderItem={({ item }) => 
          <ListItem item = {item} deleteItem = {deleteItem}/> }
          keyExtractor={item => item.id}
        />
    </View>
    );
};

const styles=StyleSheet.create({
  container: {
    flex:1,
    paddingTop:0,
  },
});

export default App;
