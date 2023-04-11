import React from "react";
import './swapi-service-context.css'

const {Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer } = React.createContext()


export { SwapiServiceProvider, SwapiServiceConsumer };
