import { useState } from "react"
import axios from 'axios'
import '../App.css'



export default function Client(){
    const [form, setForm] = useState({
        senha:'',
        confSenha:'',
        token:''
      })
      
    
      const handleForm = (e)=>{
        const { name, value } = e.target
        setForm({...form, [name]:value})
      }
    
    
      const resetPassword = (e)=>{
        e.preventDefault()
        
        const body = {
          senha: form.senha,
          confSenha: form.confSenha,
          token: form.token
        }
        axios.put('http://localhost:3003/password/client', body).then(res=>{
          alert(res.data)
        }).catch(e=>{
          alert(e.response.data)
        })
    
      }
    
    
      const cleanFileds = ()=>{
        setForm({ senha:'', confSenha:'', token:'' })
      }
    
    
      return (
        <div id="body">
          <h2>Redefinição de senha do estabelecimento</h2>  
          <form onSubmit={resetPassword}>
            <fieldset>
              <legend>Insira sua nova senha</legend>
              <div id="input-container">
                <input placeholder="Nova senha"
                  type='password'
                  name="senha"
                  value={form.senha}
                  onChange={handleForm} required/>
                <input placeholder="Confirmar senha" 
                  type='password'
                  name="confSenha"
                  value={form.confSenha}
                  onChange={handleForm} required/>
                <textarea placeholder="Cole o código aqui"
                  name="token"
                  value={form.token}
                  onChange={handleForm}/>
              </div>
              <div id="btn-container">
                <input type='button' value='Limpar' onClick={cleanFileds}/>
                <input type='submit' value='Alterar senha'/>
              </div>
            </fieldset>
          </form>    
        </div>
      );
}