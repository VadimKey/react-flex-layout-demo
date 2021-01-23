import React from "react";
import ReactDOM from "react-dom";
import FlexLayout from "flexlayout-react";
import layout_model_json from "./model";

<link rel="stylesheet" href="node_modules/flexlayout-react/style/dark.css" />

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {model: FlexLayout.Model.fromJson(layout_model_json)}; 
    this.state.model.setOnAllowDrop(this.allowDrop);
  }

  allowDrop(dragNode, dropInfo) {
    const dropNode = dropInfo.node;

    // prevent non-border tabs dropping into borders
    if (dropNode.getType() === "border" 
      && (dragNode.getParent() == null || dragNode.getParent().getType() !== "border")) {
        return false;
    }

    // prevent border tabs dropping into main layout
    if (dropNode.getType() !== "border"
      && (dragNode.getParent() != null && dragNode.getParent().getType() === "border") ) {
        return false;
    }

    return true;
  }

  factory = (node) => {
    const component = node.getComponent();
    if (component === "grid") {
      return <div className="panel">Panel {node.getName()}</div>;
    }
  }

  render() {
    return(
      <FlexLayout.Layout model={this.state.model} factory={this.factory}/>
    );
  }

};

ReactDOM.render(<Main/>, document.getElementById("root"));

export default Main;