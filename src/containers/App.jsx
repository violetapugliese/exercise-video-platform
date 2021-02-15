import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Serch from "../components/Serch";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState"

const App = () => {
    const initialState = useInitialState(API);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className="app">
      <Header />
      <Serch />

      {initialState.mylist.length > 0 && 
      <Categories text="Mi lista">
        <Carousel>
        {initialState.mylist.map(item =>
            <CarouselItem key={item.id} {...item}/>
        )}
        </Carousel>
      </Categories>
      }

      <Categories text="Tendencias">
        <Carousel>
            {initialState.trends.map(item =>
            <CarouselItem key={item.id} {...item}/>
            )}
        </Carousel>
      </Categories>
      <Categories text="Originales de Platzi">
        <Carousel>
        {initialState.originals.map(item =>
            <CarouselItem key={item.id} {...item}/>
            )}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
