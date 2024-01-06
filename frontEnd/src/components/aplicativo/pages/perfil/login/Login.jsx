import styles from '../Perfil.module.scss'

export default function Login(props) {
    const tema = props.tema

    const handleSubmit = async ( event ) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        const formData = { email, password }

        try {
            const response = await fetch("http://localhost:4000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (responseData.data.success) {
                alert('success')
            } else {
                alert('no success')
            }
        }
        catch (err) {
            console.error("Erro ao fazer login:", err);
        }
    }

    return (
        <div className={styles.formulario} id={tema === 'Escuro' ? styles.temaDark : null}>
            <form onSubmit={handleSubmit}>
                <h1 className={styles.title}>Login</h1>

                <div className={styles.inputContainer}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required className={styles.input}/>
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="password" className={styles.label}>Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" required className={styles.input}/>
                </div>


                <button type="submit"  className={styles.buttonSubmit}>Entrar</button>
                <a href='/perfil/register' className={styles.buttonSubmit}>Não possuo uma conta</a>
            </form>
        </div>
    )
}