import React from 'react';
import Banktree from '../../assets/bank-tree.jpeg';


export default class Hero extends React.Component{
    render(){
        return(
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
                <img src={Banktree} alt="background index" className="background-index"/>
            </div>
        )
    }
}