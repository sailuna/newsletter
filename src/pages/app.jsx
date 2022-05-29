import React from "react"
import { Router } from "@reach/router"
import {Layout} from "../components/layout"
import {PrivateRoute} from "../components/PrivateRoute"
import {Login} from "../components/Login"
import { FormWithValidation } from "../components/FormWithValidation"
import { FormWithoutValidation } from "../components/FormWithoutValidation"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/form-with-validation" component={FormWithValidation} />
      <PrivateRoute path="/app/form-without-validation" component={FormWithoutValidation} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App