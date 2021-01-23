import React from "react";
import FlexLayout from "flexlayout-react";

import './App.css';
import '../node_modules/flexlayout-react/style/dark.css';

var json = {
  global: {},
  layout: {
      "type": "row",
      "weight": 100,
      "children": [
          {
              "type": "tabset",
              "weight": 50,
              "selected": 0,
              "children": [
                  {
                      "type": "tab",
                      "name": "Things to try",
                      "component": "text",
                      "config": {"text": "<ul><li>drag tabs</li><li>drag splitters</li><li>double click on tab to rename</li><li>double click on tabstrip to maximize</li><li>use the Add button to add another tab</li></ul>"}
                  }
              ]
          },
          {
              "type": "tabset",
              "weight": 50,
              "selected": 0,
              "children": [
                  {
                      "type": "tab",
                      "name": "two",
                      "component": "text",
                      "config": {"text": ""}
                  }
              ]
          },
          {
            "type": "tabset",
            "weight": 50,
            "selected": 0,
            "children": [
              {
                "type":  "tab",
                "name": "three",
                "component": "text",
                "config": {"text": ""}
              }
            ]
          }
      ]
  }
};

class App extends React.Component {

  constructor(props) {
      console.log("created");
      super(props);
      this.state = {model: FlexLayout.Model.fromJson(json)};
      this.layoutRef = React.createRef();
  }

  factory = (node) => {
      var component = node.getComponent();
      if (component === "text") {
          return <div dangerouslySetInnerHTML={{__html:node.getConfig().text}}/>;
      }
  }

  onAdd = (event) => {
    let layout = this.layoutRef.current;
    layout.addTabWithDragAndDropIndirect("Add panel<br>(Drag to location)", {
      component: "text",
      name: "added",
      config: {text: "i was added"}
    }, null);
  }

  render() {
      return (
        <div className="outer">
          <button onClick={this.onAdd}>Add</button>
          <div className="inner">
            <FlexLayout.Layout ref={this.layoutRef}
                          model={this.state.model}
                          factory={this.factory}/>
          </div>
        </div>
      );
  }
}


export default App;
