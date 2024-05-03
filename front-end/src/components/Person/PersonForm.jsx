import { useState } from "react"
import './css/PersonForm.css'

export default function PersonForm() {
    const [PersonForm, setPersonForm] = useState({
        name: '',
        age: 0,
        cpf: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch('http://localhost:3000/cadastrar/pessoa', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(PersonForm)
            });
            const json = await response.json();
            console.log(response);
            console.log(json);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form className='PersonForm' onSubmit={handleSubmit}>
            <div className='PersonForm_image'>
                <img src='' alt='Imagem de uma pessoa' />
            </div>
            <div className='PersonForm_form'>
                <input className='PersonForm_input' name='name' 
                    type='text' 
                    placeholder='Nome'
                    value={PersonForm.name}
                    onChange={handleChange}
                    required/>

                <input className='PersonForm_input' name='age' 
                    type='number' 
                    placeholder='Idade'
                    value={PersonForm.age}
                    onChange={handleChange}
                    required/>

                <input className='PersonForm_input' name='cpf'
                    type='text'
                    placeholder='CPF'
                    value={PersonForm.cpf}
                    onChange={handleChange}
                    required/>

                <button className='PersonForm_button' type='submit'>Enviar Formulário</button>
            </div>
        </form>
    )
}