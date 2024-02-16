import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import React from "react"
import ProjectForm from '../project/ProjectForm'

function NewProject (){
    
    const navigate = useNavigate()

    function createPost (project) {
        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
                const state = { message: "Projeto criado com sucesso!" };
                navigate("/projects", {state});
                // navigate.push('/projects',{state: { message: 'Projeto criado com sucesso!'},}) 
            })
            .catch ((err) => console.log(err))
            }
    
    return( 
    <div className={styles.newproject_container}>
    <h1>NewProject</h1>
    <p>Build your project after add the services</p>
    <p>Formulario</p>
    <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
    )
}

export default NewProject