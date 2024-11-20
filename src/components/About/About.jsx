import React, { Component } from "react";
import Users from "../Users/Users";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <h1>About Us {items.length}</h1>

        <Users name="John" />

        {({ loginUser }) => {
          return <div>{loginUser}</div>;
        }}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  items: state.cart.items,
});

const mapDispatchToProps = {
  addItem,
  removeItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(About);

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <Users name="John" />
//     </div>
//   );
// };

// class About extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>About Us</h1>

//         <Users name="John" />
//         <UserContext.Consumer>
//           {({ loginUser }) => {
//             return <div>{loginUser}</div>;
//           }}
//         </UserContext.Consumer>
//       </div>
//     );
//   }
// }

// export default About;
