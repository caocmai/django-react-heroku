import React from "react";
import logo from "./logo.svg";
import test from "./test.png";
import { Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <div>Hello, World!</div>
      <img src={logo} alt="Logo" />
      <img src={test} alt="TEST image" />
      <Button bsStyle="primary">Primary</Button>{' '}
      <Button type="button" class="btn btn-primary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}

      <button type="button" class="btn btn-primary">Primary BOotStrap</button>
<button type="button" class="btn btn-secondary">Secondary BOotstap</button>

    </div>

  )
};

export default App;
