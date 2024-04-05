import React from "react";
import './style.scss';
import Man from '../../assets/img/carousel-1.jpg';
import { SpecialOffer } from "../../components/SpecialOffer";
import { About } from "../../components/About";
import { SectionTitle } from "../../components/SectionTitle";
import { Categories } from "../../components/Categories";
import { ProductCard } from "../../components/ProductCard";
import { SpecialOfferNew } from "../../components/SpecialOfferNew";
import { Sponsor } from "../../components/Sponsor";

export const Home = () => {

    return <>
        <section className="G-container">
            <div className="shop-offer G-flex">
                <div style={{ backgroundImage: `url('${Man}')` }} className="shop-now G-center G-flex-column">
                    <h1>Men Fashion</h1>
                    <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                    <button>Shop Now</button>
                </div>
                <SpecialOffer/>
            </div>
        </section>
        <section className="G-container">
            <About/>
        </section>
        <section className="G-container">
            <SectionTitle title={'Categories'}/>
            <Categories/>
        </section>
        <section className="G-container">
            <SectionTitle title={'featured products'}/>
            <ProductCard/>
        </section>
        <section className="G-container">
             <SpecialOfferNew/>
        </section>
        <section className="G-container">
            <SectionTitle title={'recent products'}/>
            <ProductCard/>
        </section>
        <section className="G-container">
            <Sponsor/>
        </section>
    </>

}