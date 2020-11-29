import React, { Component } from "react";

class Counter extends Component {
  // renderTags() {
  //   if (this.state.tags.length === 0) return "There are no tags";
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  style = {
    fontSize: 30,
    fontWeight: "bold"
  };

  //   constructor() {
  //     super();
  //     console.log("Constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  //   //obj.method(); 这里用this，就是引用这个object
  //   //function(); 这里的this就会undefined。就是这是否是个class的member function
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <React.Fragment>
        {this.props.children}
        {this.props.counter.id}
        {this.props.counter.value}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        <br></br>
        {/* {this.state.tags.length === 0 && "Please create new tags!"}
        
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    //   return count === 0 ? 'Zero' : this.state.count;
  }
}

export default Counter;
