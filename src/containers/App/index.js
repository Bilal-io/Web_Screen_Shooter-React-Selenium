import React, { PureComponent } from "react";

import Header from "../../components/Header";
import Form from "../Form";
import DisplayCards from "../DisplayCards";
import GlobalStyle from "../../components/GlobalStyle";

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
