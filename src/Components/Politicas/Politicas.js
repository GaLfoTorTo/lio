import React from 'react';
import { Text, View } from 'react-native';
import estilo from './estilo';

const Politicas = () => {
    return (
        <View style={estilo.container}>
            <View style={estilo.bloco}>
                <Text style={estilo.title}>Política Privacidade</Text>
                <Text style={estilo.text}>
                    A sua privacidade é importante para nós. É política do testes respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site testes, e outros sites que possuímos e operamos.
                </Text>
                <Text style={estilo.text}>
                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                </Text>
                <Text style={estilo.text}>
                    Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </Text>
                <Text style={estilo.text}>
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </Text>
                <Text style={estilo.text}>
                    O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                </Text>
                <Text style={estilo.text}>
                    Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                </Text>
                <Text style={estilo.text}>
                    O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
                </Text>
            </View>
            <View style={estilo.bloco}>
                <Text style={estilo.title}>Política de Cookies Lio</Text>
                <Text style={estilo.subTitle}>O que são cookies?</Text>
                <Text style={estilo.text}>
                    Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.
                </Text>
            </View>
            <View style={estilo.bloco}>
                <Text style={estilo.subTitle}>Como usamos os cookies?</Text>
                <Text style={estilo.text}>
                    Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados ​​para fornecer um serviço que você usa.
                </Text>  
                <Text style={estilo.subTitle}>Desativar cookies</Text>
                <Text style={estilo.text}>
                    Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que                        você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.
                </Text>
                <Text style={estilo.title}>Cookies que definimos</Text>
                <View style={estilo.cardTitle}>
                    <View style={estilo.ponto}></View>
                    <Text style={estilo.subTitle}>Cookies relacionados à conta</Text>
                </View>
                <Text style={estilo.text}>
                    Se você criar uma conta connosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair. 
                </Text>
                <Text style={estilo.text}>
                    Cookies relacionados ao login Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.
                </Text>
                <View style={estilo.cardTitle}>
                    <View style={estilo.ponto}></View>                                                                       
                    <Text style={estilo.subTitle}>Cookies relacionados a boletins por e-mail</Text>
                </View>
                <Text style={estilo.text}>
                    Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados ​​para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos / não inscritos.
                </Text>
                <View style={estilo.cardTitle}>
                    <View style={estilo.ponto}></View>                                                                         
                    <Text style={estilo.subTitle}>Pedidos processando cookies relacionados</Text>
                </View>
                <Text style={estilo.text}>
                    Este site oferece facilidades de comércio eletrônico ou pagamento e alguns cookies são essenciais para garantir que seu pedido seja lembrado entre as páginas, para que possamos processá-lo adequadamente.
                </Text>
                <View style={estilo.cardTitle}>
                    <View style={estilo.ponto}></View>
                    <Text style={estilo.subTitle}>Cookies relacionados a pesquisas</Text>
                </View>
                <Text style={estilo.text}>
                    Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.
                </Text>
                <View style={estilo.cardTitle}>
                    <View style={estilo.ponto}></View>                                                                        
                    <Text style={estilo.subTitle}>Cookies relacionados a formulários</Text>
                </View>
                <Text style={estilo.text}>
                    Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.
                </Text>
                <View style={estilo.cardTitle}>
                    <View style={estilo.ponto}></View>                                                                       
                    <Text style={estilo.subTitle}>Cookies de preferências do site</Text>
                </View>
                <Text style={estilo.text}>
                    Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.
                </Text>
                <View style={estilo.cardTitle}>
                    <View style={estilo.ponto}></View>                                                         
                    <Text style={estilo.subTitle}>Cookies de Terceiros</Text>                    
                </View>
                <Text style={estilo.text}>
                    Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.
                </Text>                                                                       
                <Text style={estilo.text}>
                    Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis ​​da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.
                </Text>                                                               
                <Text style={estilo.text}>
                    Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.
                </Text>                                                                        
                <Text style={estilo.text}>
                    As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você.
                </Text>                                                   
                <Text style={estilo.text}>
                    Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados ​​para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam.
                </Text>                                                    
                <Text style={estilo.text}>
                    À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analizar nossos custos de publicidade e produtos para garantir o melhor preço possível.
                </Text>
                <View style={estilo.cardTitle}>
                    <View style={estilo.ponto}></View>                                                 
                    <Text style={estilo.subTitle}>Compromisso do Usuário</Text>                                
                </View>
                <Text style={estilo.text}>
                    O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o testes oferece no site e com caráter enunciativo, mas não limitativo:
                </Text>                                                                
                <Text style={[estilo.text, estilo.textPadding]}>
                    A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
                </Text>                        
                <Text style={[estilo.text, estilo.textPadding]}>
                    B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou apostas online (ex.: Moosh), jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                </Text>                        
                <Text style={[estilo.text, estilo.textPadding]}>
                    C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do testes, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                </Text>                                                            
            </View>
            <View style={estilo.bloco}>
                <Text style={estilo.subTitle}>Mais informações</Text>
                <Text style={estilo.text}>
                    Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                </Text>
                <Text style={estilo.text}>Esta política é efetiva a partir de Setembro/2021.</Text>
            </View>
        </View>
    );
}

export default Politicas;