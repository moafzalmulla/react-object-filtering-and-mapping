import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
            const theErps = {
                "erpTypes": {
                  "ckp2prxk80000wupkxvj98mvt": {
                    "__typename": "Erp",
                    "id": "ckp2prxk80000wupkxvj98mvt",
                    "name": "SAGE"
                  },
                  "ckp2prxlv0007wupk8wlil9hd": {
                    "__typename": "Erp",
                    "id": "ckp2prxlv0007wupk8wlil9hd",
                    "name": "MS Dynamics 360"
                  }
                }
            };

          const erpKey = "ckp2prxlv0007wupk8wlil9hd"

          const erpTypes = theErps.erpTypes;

           const erpId = Object
          .keys(erpTypes)
          .filter(item => erpTypes[item].id === erpKey);

            const erpMap = Object
          .keys(erpTypes)
          .map(item => erpTypes[item].name);

          const object = {
            "fileTypes": {
              "TEST": {
                "name": "EC",
                "alloweMultipls": "true",
                "color":"blue"
              },
              "TEST1": {
                "name": "ED",
                "alloweMultipls": "false",
                "color":"red"
              }
            }
          };

          const key = 'EC';
          const fileTypes = object.fileTypes;

          const property = Object
          .keys(fileTypes)
          .filter(item => fileTypes[item].name === key);
    
    return (

      <div>
        <Hello name={this.state.name} />
        <p>
         { fileTypes[property].color }<br></br>
         { erpTypes[erpId].name }

        </p>
        <p>
        --{erpMap}
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
