const layout_model_json = {
  global: { },
  borders: [ ],
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
            "name": "Quoter",
            "component": "grid",
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
            "name": "Trades",
            "component": "grid",
          },
          {
            "type": "tab",
            "name": "Orders",
            "component": "grid"
          }
        ]
      }
    ]
  }
};

export default layout_model_json;