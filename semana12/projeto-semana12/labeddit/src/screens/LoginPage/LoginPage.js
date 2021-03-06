import { Button, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { login } from '../../services/user';
import logoReddit from '../../assets/logo-reddit.png';
import logoLabenu from '../../assets/logo-labenu.png'
import { FormContainer, LoginPageContainer, Logos, TittleContainer } from './styled';
import { useHistory } from 'react-router-dom';
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage';
import { goToSignUp } from '../../routes/coordinator';
import LoggedContext from '../../context/LoggedContext';


const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()
    const loggedContext = useContext(LoggedContext)
    const { form, onChange } = useForm({ email: "", password: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history, loggedContext.setLogged)
    }

    return (
        <div>
            <TittleContainer>
                <Logos src={logoLabenu} />
                <h1>labeddit</h1>
                <Logos src={logoReddit} />
            </TittleContainer>
            <LoginPageContainer>
                <FormContainer onSubmit={handleSubmission}>
                    <TextField
                        label="E-mail"
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Senha"
                        required
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Login
                    </Button>
                </FormContainer>
                <Button
                    color="primary"
                    onClick={() => goToSignUp(history)}
                >
                    Cadastrar aqui!
                </Button>
            </LoginPageContainer>
        </div >
    )
}

export default LoginPage