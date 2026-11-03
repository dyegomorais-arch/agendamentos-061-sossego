# OS 061 - SOSSEGO: conectar ao Firebase (projeto novo)

Faça UMA vez, antes de publicar. Leva uns 10 minutos.

## 1. Criar o projeto
1. Acesse https://console.firebase.google.com e clique em **Adicionar projeto**.
2. Nome sugerido: `agenda-061-sossego`. Pode desativar o Google Analytics. **Criar projeto**.

## 2. Ligar o login por e-mail e senha
1. Menu **Build > Authentication > Vamos começar**.
2. Aba **Sign-in method** > **E-mail/senha** > ative e salve.
3. Aba **Users** > **Adicionar usuário**: crie o e-mail e a senha de cada pessoa que vai usar.

## 3. Criar o banco (Firestore)
1. Menu **Build > Firestore Database > Criar banco de dados**.
2. Local: `southamerica-east1 (São Paulo)`. Modo: **produção**.
3. Aba **Regras**: apague tudo, cole o conteúdo do arquivo `firestore.rules` e clique em **Publicar**.

## 4. Pegar a configuração do site
1. Engrenagem (Configurações do projeto) > **Seus apps** > ícone **</>** (Web).
2. Apelido: `agenda-061-sossego`. **Registrar app** (não precisa marcar Hosting).
3. Copie os valores de `firebaseConfig` e cole em `js/firebase-config.js`, no lugar dos `COLE_AQUI`.

## 5. Publicar no GitHub Pages
1. Crie um repositório novo (sugestão: `agendamentos-061-sossego`) e envie os arquivos desta pasta na raiz.
2. Settings > Pages > Deploy from a branch > main > / (root).
3. O link será `https://dyegomorais-arch.github.io/agendamentos-061-sossego/`.
4. No portal (`script.js`), troque a linha do Sossego por:
   `{os:'061',local:'Sossego',url:'https://dyegomorais-arch.github.io/agendamentos-061-sossego/'}`

## Teste local (opcional)
ES modules não funcionam abrindo o arquivo direto. Use `npx serve .` na pasta.
