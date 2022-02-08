import React from 'react';
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement.
       Otherwise, this.props will be undefined in the constrctor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr'},
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs'},
        { id: 3, value: 'Bread', qty: 3, unit: 'x'},
        { id: 4, value: 'Eggs', qty: 16, unit: 'x'},
      ]
    }
  }
      addItems = (desc, unit) => {
        let amount = Math.floor(Math.random() * (11-1) + 1);

        let newItems = [...this.state.items];
        let oldItemIndex = newItems.findIndex(i => i.value == desc);
        if(oldItemIndex != -1){
          let newElement = { ...newItems[oldItemIndex] };
          newElement.qty += amount;
          newItems[oldItemIndex] = newElement;
        }else{
          newItems = [...this.state.items, { 
            id: this.state.items.length + 1, 
            value: desc, 
            qty: amount, 
            unit: unit
          }]
        }
        this.setState({items: newItems});
    }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.ShoppingList }>
      <Title
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ () => this.addItems('Carrots', 'pcs') }>Add carrots</button>
      <button onClick={ () => this.addItems('Strawberries', 'kg') }>Add strawberries</button>
      <button onClick={ () => this.addItems('Yogurt', 'ltr') }>Add yogurt</button>
      <button onClick={ () => this.addItems('Beer', 'x') }>Add beer</button>
    </div>
  }
}

export default App;
