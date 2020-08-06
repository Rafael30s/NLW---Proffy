import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (  <article className="teacher-item">
    <header>
        <img src="https://avatars1.githubusercontent.com/u/57870334?s=460&u=f8fe58e8706c604d945f4cd89075a990c696d905&v=4" alt="Rafael dos Santos"/>
        <div>
            <strong>Rafael dos Satnos</strong>
            <span>Física</span>
        </div>
    </header>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        <br/> <br/>
        Beatae veniam itaque ducimus natus officia quo necessitatibus eveniet vitae id recusandae. Dolor et, natus sint architecto non quisquam eum voluptatem consectetur.
    </p>
    <footer>
        <p>
            Preço/hora
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="whatsapp"/>
            Entrar em contato
        </button>
    </footer>
</article>);
}

export default TeacherItem;