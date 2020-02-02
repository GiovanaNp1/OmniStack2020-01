import React from 'react';

import './global.css'
import './App.css'
// Os 3 principais conceitos do React 
//Componente:Bloco isolado de HTML, CSS e JS, a qual não inferfera na restante da aplicação
//Estado: Informações mantidas pelo componente (Importante: React trabalha com imultabilidade)
//Propriedade: Funciona igual a um atributo em HTML, informações que um componente pai passa para o componente filho

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="">?Usuário do GitHub</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div class="input-block">
            <label htmlFor="">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div class="input-block">
            <label htmlFor="">Úsuario do GitHub</label>
            <input name="github_username" id="usernname_github" required/>

            <label htmlFor="">Úsuario do GitHub</label>
            <input name="github_username" id="usernname_github" required/>
          </div>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
