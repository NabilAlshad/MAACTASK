import React from 'react'
import Counter from '../../Components/Home/Counter/Counter'
import FAQ from '../../Components/Home/FAQ/FAQ'
import Features from '../../Components/Home/Features/Features'
import Footer from '../../Components/Home/Footer/Footer'
import Header from '../../Components/Home/Header'
import Menu from '../../Components/Home/Menu'
import Products from '../../Components/Home/Products/Products'
import Teams from '../../Components/Home/Teams/Teams'

export default function Home() {
    return (
        <>
            <Menu></Menu>
            <Header></Header>
            <Features></Features>
            <Products></Products>
            <Counter></Counter>
            <FAQ></FAQ>
            <Teams></Teams>
            <Footer></Footer>
        </>
    )
}
