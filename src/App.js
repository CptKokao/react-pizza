import React from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

// import { setPizzas }from './redux/actions/pizzas';

// class App extends Component {

//   componentDidMount() {
//     console.log(this.props)
//     axios.get('http://localhost:3000/db.json')
//       .then(({data}) => this.props.setPizzas(data.pizzas));
//   }

//   render() {
//     return (
//       <div className="wrapper">

//         <Header/>

//         <div className="content">
//           <Route path="/" exact >
//             <Home items={this.props.items}/>
//           </Route>
//           <Route path="/cart" component={Cart} exact />
//         </div>
//       </div>
//     )
//   };
// }

function App() {
  return (
    <div className="wrapper">

      <Header/>

      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  )
}

// export default connect(
//   (state) => {
//     return {
//       items: state.pizzas.items,
//       filters: state.filters,
//     };
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items)),
//     };
//   },
// )(App);

export default App;
