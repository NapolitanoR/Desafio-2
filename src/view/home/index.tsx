import React, { useState, useEffect } from 'react';

import {Link} from 'react-router-dom';

import Cart from '../../assets/cart.png'

import {Container} from '../../styles';

import api from '../../services/api';

interface Iproduct{
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {
    const [ data, setData ] = useState<Iproduct[]> ([]);
    const [ cart, setCart ] = useState<Iproduct[]> ([]);

    useEffect(() => {
        api.get('').then(
            Response => {
                setData(Response.data)
            }
        )
    }, [])

const handleCart = (index: number) => {
    let push: any = [ ...cart, cart.push(data[index])]
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
}

    return (
        <Container>
            <div className="content-header">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/400px-VTEX_Logo.svg.png" alt="Vtex logo" width="200px" height="auto"></img>
                </div>
                

                <Link to="/cadastro" > Cadastre-se</Link>

                <div>
                    <img src={Cart} width="50px" height="auto" alt="Cart"></img>
                    <span>{cart.length} - Produtos </span>
                </div>
            </div>
            <section>
                { data.map( (prod, index) => 
                
                    <div className="product-content" key={prod.id}>
                        <img src={prod.photo} alt="Produto" width="200px" height="200px" />
                        <h4 className="texto">{prod.name}</h4>
                        <span className="texto">{prod.description}</span>
                        <h5 className="texto">R$ {prod.price}</h5>
                        <button className="product-content-button" onClick={ () => handleCart(index)}>Adicionar ao Carrinho</button>
                    </div>
                )}
            </section>
        </Container>
    );

    
}

export default Home;