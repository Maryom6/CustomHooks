import { useForm } from "../hooks/useForm"

export const FormsApp = () => {

    //Info de las exportaciones del form
    const initialForm = {
        username: '',
        nickname: '',
        email: '',
        password: ''
    
    }
    //Aca indicamos para que reciba lo exportado
    const {username, nickname, email, password, onInputChange} = useForm(initialForm)

    //handleSubmit para que no se reinicie la pagina
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username, nickname, email, password) //Esto se manda a un backEnd
    }

    //Comment: si agrego mas campos solo debo aumentar el useState



  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                    type="text"
                    className="form-control"
                    id="username"
                    name='username'
                    value={username}
                    onChange={onInputChange}
                />
            </div>
            
           <> Agregado </>
            <div className="mb-3">
                <label htmlFor="nickname" className="form-label">Nickname</label>
                <input 
                    type="text"
                    className="form-control"
                    id="nickname"
                    name='nickname'
                    value={nickname}
                    onChange={onInputChange}
                />
            </div>
           <>Finaliza el agregado </>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Emai</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name='email'
                    value={email}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name='password'
                    value={password}
                    onChange={onInputChange}
                />
            </div>
          
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}
