# :memo: Histórias de Usuário e Cenários de Teste

## Cadastrar Novo Usuário
> _"Como usuário, gostaria de realizar meu cadastro no sistema, para poder acessá-lo em uma conta pessoal e utilizar suas funcionalidades"_

* _Cenário de Teste Principal:_  

    Dado que o usuário está na página de login e não possui um cadastro, quando ele seleciona a opção "Cadastre-se" e preenche todos os campos corretamente, então o sistema cria uma nova conta e ele é redirecionado a página de login.  

* _Cenários de Teste Alternativos:_
    * Nome com caracteres inválido:  O sistema exibe mensagem informando que são aceitos apenas letras
    * E-mail já existente:  O sistema exibe mensagem informando que o e-mail já está cadastrado no sistema
    * Senha não cumpre parâmetros:  O sistema exibe mensagem informando os parâmetros necessários
    * Senhas não coincidem:  O sistema exibe mensagem informando que as senhas não coincidem
    * Campos não preenchidos:  O sistema exibe mensagem informando que existem campos não preenchidos

## Autenticar Usuário
> _"Como usuário, gostaria de acessar o sistema por meio de minhas credenciais, para utilizar todos os recursos disponibilizados"_

* _Cenário de Teste Principal:_  
  
   Dado que o usuário se encontra na página de login, quando ele incluir o e-mail e senha cadastrado, então ele será direcionado a página incial do sistema.

*  _Cenários de Teste Alternativos:_
    * Crendencias inválidas: O sistema exibe mensagem informando que o e-mail ou senha são inválidos
    * Campos não preenchidos: O sistema exibe mensagem informando que existem campos não preenchidos

## Cadastrar Animal para Adoção
> _"Como doador, gostaria de cadastrar um animal incluindo suas informações, para gerar interesse em um possível adotante"_
* _Cenário de Teste Principal:_  

    Dado que o doador se encontra na aba **"Disponibilizar animal para adoção"**, quando ele preenche todos os campos obrigatórios e seleciona a opção **"Cadastrar"**, então o sistema emite uma mensagem confirmando o cadastro do animal e exibe seu anúncio.

* _Cenários de Teste Alternativos:_
    * Usuário não preencheu todos os campos obrigatórios:  O sistema exibe uma mensagem informando que existem campos não preenchidos.

## Visualizar Animais Disponíveis para Adoção
> _"Como adotante, gostaria de visualizar os animais disponíveis, bem como filtrar a pesquisa, para encontrar com maior facilidade os animais de minha preferência"_

* _Cenário de Teste Principal:_    

    Dado que o adotante se encontra na aba **"Animais disponíveis para adoção"**, então ele poderá poderá filtrar aqueles de sua preferência e terá acesso aos animais anunciados por outros usuários.

* _Cenários de Teste Alternativos:_
    * Não existem animais anunciados: O sistema exibe uma mensagem informando que não existem animais disponíveis.
    * Não há resultados para os filtros: O sistema exibe uma mensagem informando que não existem animais disponíveis e pode ser utilizada a opção "Limpar filtros" para visualizar demais aninmais.

## Editar Dados do Usuário
> _"Como usuário, gostaria de editar meus dados pessoais no sitema, para manter minhas informações sempre atualizadas"_
* _Cenário de Teste Principal:_  
  Dado que o usuário está na aba **"Editar dados pessoais"**, quando ele preencher os campos que deseja alterar seguindo os critérios do sistema e selecionar "Salvar alterações", então ele recebe uma mensagem informando que os dados foram alterados com sucesso.

* _Cenários de Teste Alternativos:_
     * Nome com caracteres inválido:  O sistema exibe mensagem informando que são aceitos apenas letras
    * E-mail já existente:  O sistema exibe mensagem informando que não foi possível atualizar os dados.
    * Senha não cumpre parâmetros:  O sistema exibe mensagem informando informando os parâmetros necessários
    * Senhas não coincidem:  O sistema exibe mensagem informando que as senhas não coincidem
    * Campos não preenchidos:  O sistema exibe mensagem informando que existem campos não preenchidos

##  Listar Meus Animais Disponíveis
>_"Como doador, gostaria de visualizar meus animais disponíveis para adoção, para gerenciar todos aqueles que já estão incluídos na plataforma"_

* _Cenário de Teste Principal:_  

    Dado que o usuário se encontra na aba **"Meus animais disponíveis para adoção"**, então o sistema apresenta seus animais disponíveis para adoção.

* _Cenários de Teste Alternativos:_
    * O usuário não possui animais cadastrados: O sistema exibe mensagem informando que não há animais cadastrados e disponibiliza redirecionamento para a aba de cadastro pelo botão **"aqui"**


## Confirmar Adoção

>_"Como um doador, gostaria de confirmar a adoção de um animal, para não haver conflitos com os outros adotantes interessados"_

* _Cenário de Teste Principal:_  
 
    Dado que o doador se encontra na aba **"Meus animais disponíveis para adoção"**, quando ele seleciona a opção "Confirmar adoção", então o anúncio deixa de ser exibido e o animal é classificado como adotado.

## Entrar em Contato com o Doador
>_"Como um adotante, gostaria de entrar em contato com o doador para conversarmos sobre as adoção do animal"_
* _Cenário de Teste Principal:_  
   
    Dado que o adotante se encontra na aba **"Animais disponíveis para adoção"** e clica na opção **"Saiba mais"** de algum dos anúncios, quando ele selecionar a opção "Entar em contato com o dono" então ele é redirecionado para uma conversa com o doador do animal.
 
