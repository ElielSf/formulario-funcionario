import { useState } from 'react';
import './css/EmployeeForm.css'

export default function EmployeeForm() {
    //const [error, setError] = useState(false);
    const [employeeForm, setEmployeeForm] = useState({
        name: '',
        age: '',
        cpf: '',
        position: '',
        salary: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`http://localhost:3000/cadastrar/funcionario`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(employeeForm)
            });
            const json = await response.json();
            console.log(response);
            console.log(json);   
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form className='EmployeeForm' onSubmit={handleSubmit}>
            <label className='EmployeeForm_label' htmlFor='name'>Nome</label>
            <input className='EmployeeForm_input' name='name' 
            value={employeeForm.name} 
            onChange={handleChange} 
            type='text' 
            required/>

            <label className='EmployeeForm_label' htmlFor='age'>Idade</label>
            <input className='EmployeeForm_input' name='age' 
            value={employeeForm.age} 
            onChange={handleChange} 
            type='number' 
            required/>

            <label className='EmployeeForm_label' htmlFor='cpf'>CPF</label>
            <input className='EmployeeForm_input' name='cpf' 
            value={employeeForm.cpf} 
            onChange={handleChange} 
            type='text' 
            required/>

            <label className='EmployeeForm_label' htmlFor='position'>Cargo</label>
            <input className='EmployeeForm_input' name='position' 
            value={employeeForm.position} 
            onChange={handleChange} 
            type='text' 
            required/>

            <label className='EmployeeForm_label' htmlFor='salary'>Salário</label>
            <input className='EmployeeForm_input' name='salary' 
            value={employeeForm.salary} 
            onChange={handleChange} 
            type='text' 
            required/>

            <button className='EmployeeForm_button' type='submit'>Enviar Formulário</button>
        </form>
    )
}