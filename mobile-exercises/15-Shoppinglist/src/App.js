import React, { useState, useEffect } from 'react';
import './App.css';

// Material-UI
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';


// Firebase imports and config
import firebase from 'firebase/app';
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyATQxM4EKpNaGSaK3k_2fDOuJDSy_smHGQ",
  authDomain: "shoppinglist-378b6.firebaseapp.com",
  databaseURL: "https://shoppinglist-378b6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shoppinglist-378b6",
  storageBucket: "shoppinglist-378b6.appspot.com",
  messagingSenderId: "730108194048",
  appId: "1:730108194048:web:69923c14fc4e5bcc6957e5",
  measurementId: "G-6JKMWWEMB9"
};

firebase.initializeApp(firebaseConfig);


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  headText: {
    textAlign: 'center',
    color: '#754e4b'
  },
  itemInput: {
    margin: theme.spacing(2),
    maxWidth: 130,
  },
  amountDropDown: {
    margin: theme.spacing(2),
    minWidth: 80,
  },
  addButton: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#bec2bf'
  },
  itemCard: {
    margin: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    backgroundColor: '#b3bdb6',
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
}));


function App() {
  const classes = useStyles();

  // Loading state
  const[loading, setLoading] = useState(true);
  // Shopping list items state
  const[items, setItems] = useState([]);
  

  // New item
  const[item, setItem] = useState("");
  const[count, setCount] = useState(1);
  // Add new item to db and shopping list items
  const addItem = async () => {
    // Create a new shopping list item
    let newItem = { name: item, count: count, id: ''};
    // Add to Firebase db
    const db = firebase.firestore();
    let doc = await db.collection('items').add(newItem);
    // Get added item(doc) id and set id to newItem
    newItem.id = doc.id;
    // Update states
    setItems( [...items, newItem] );
    setItem("");
    setCount(1);
  }


  // Delete item from UI and DB
  const deleteItem = async (item) => {
    // Remove from db
    const db = firebase.firestore();
    db.collection('items').doc(item.id).delete();
    // Remove from items state and update state
    let filteredArray = items.filter(collectionItem => collectionItem.id !== item.id);
    setItems(filteredArray);
  }


  // Load shopping list items from firebase
  useEffect(() => {
    const fetchData = async () => {
      // Database
      const db = firebase.firestore();
      // Data
      const data = await db.collection("items").get();
      // Shopping list items: name, count, id
      const items = data.docs.map(doc => {
        return {
          name: doc.data().name,
          count: doc.data().count,
          id: doc.id
        };
      });
      // Set new states
      setItems(items);
      setLoading(false);
    }
    // Start loading data
    fetchData();
  }, []); // Called only once

  // Render while loading
  if (loading) return (<p>Loading...</p>);


  // Create shopping list items
  //<p key={index}>{item.name} - {item.count}</p>
  const sh_items = items.map( (item, index) => {
    return (
      <Card key={index} className={classes.itemCard}>
        <p>{item.name} - {item.count}pc</p>
        <Button onClick={() => deleteItem(item)}>X</Button>
      </Card>
    );
  });


  return (
    <div className={classes.root}>

      <h1 className={classes.headText}>Shopping list</h1>

      <div>
        
        <TextField
          label="New Item"
          id="standard-basic"
          className={classes.itemInput}
          onChange={e => setItem(e.target.value)}
        />

        <FormControl className={classes.amountDropDown}>
          <InputLabel id="demo-simple-select-label">Amount</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={e => setCount(e.target.value)}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
        </FormControl>

        <Button 
          variant="outlined" 
          className={classes.addButton}
          onClick={() => addItem()}>Add</Button>

      </div>

      <div>{sh_items}</div>
    
    </div>
  );
}

export default App;
