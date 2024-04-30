import { useState } from 'react';
import '../css/Form.css'

export default function Form() {
    const [FormValues, setFormValues] = useState({
        name: '',
        age: null,
        cpf: '',
        position: '',
        salary: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch('/cadastrarFuncionario', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(FormValues)
            })
            const json = await response.json();
            console.log(json);    
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form className='Form' onSubmit={handleSubmit}>
            <label className='Form_label' htmlFor='name'>Nome</label>
            <input className='Form_input' name='name' value={FormValues.name} onChange={handleChange} type='text' required/>

            <label className='Form_label' htmlFor='age'>Idade</label>
            <input className='Form_input' name='age' value={FormValues.age} onChange={handleChange} type='number' required/>

            <label className='Form_label' htmlFor='cpf'>CPF</label>
            <input className='Form_input' name='cpf' value={FormValues.cpf} onChange={handleChange} type='text' required/>

            <label className='Form_label' htmlFor='position'>Cargo</label>
            <input className='Form_input' name='position' value={FormValues.position} onChange={handleChange} type='text' required/>

            <label className='Form_label' htmlFor='salary'>Salário</label>
            <input className='Form_input' name='salary' value={FormValues.salary} onChange={handleChange} type='text' required/>

            <button className='Form_button' type='submit'>Enviar Formulário</button>
        </form>
    )
}