import React from 'react';
import adorno from '../assets/Adornonegro.png'

const Frase = () => {
    return (
        <section className='container text-center p-5 d-flex flex-column aling-items-center' data-aos="fade-left">
            <img src={adorno} alt="" width={300}/>
            <p className='frase1 my-3'>Mi vida es como un cuento de hadas, llena de alegrías y sorpresas inesperadas, 
                 y ahora me presento como una princesa para invitarte a mis quince primaveras</p>
                  <img src={adorno} alt="" width={300}/>
        </section>
    );
};

export default Frase;