import React, { PureComponent } from "react";

import Header from "../../components/Header";
import GlobalStyle from "../../components/GlobalStyle";

import Form from "../Form";
import DisplayCards from "../DisplayCards";

class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Form />
        <DisplayCards />
        <GlobalStyle />
      </>
    );
  }
}

export default App;
