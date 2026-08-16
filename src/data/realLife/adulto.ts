import { RealLifeStory } from '../../types';

export const ADULTO_STORIES: RealLifeStory[] = [
  // 1. TRABALHO (ÉTICA NO TRABALHO)
  {
    id: 'etica_no_trabalho',
    title: 'ÉTICA NO TRABALHO',
    subtitle: 'Liderança, integridade corporativa e decisões sob pressão',
    description: 'Como gestor, você descobre que um fornecedor oferece suborno para vencer uma licitação valiosa. Como conduzir a situação com justiça?',
    profiles: ['adulto'],
    theme: 'Trabalho e Liderança',
    icon: 'Briefcase',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Como você reage quando a facilidade do atalho financeiro ameaça seus princípios de integridade?',
    scenes: [
      {
        id: 'et_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: A PROPOSTA INDECOROSA',
        context: 'Durante um almoço de negócios sobre a licitação da empresa, o representante de um fornecedor deixa um envelope no canto da mesa dizendo: "Isso é um incentivo para você priorizar nossa empresa. Ninguém precisa saber."',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'et_1_a',
            text: 'Devolver o envelope imediatamente na mesa e dizer com firmeza que não aceita qualquer tipo de suborno.',
            consequence: 'O fornecedor fica pálido, guarda o envelope e percebe que sua postura ética é inegociável.',
            effects: { integridade: 5, coragem: 5, fe: 4 },
            biblicalPrinciple: 'Rejeição categórica do suborno.',
            biblicalReference: '📖 Êxodo 23:8',
            biblicalExplanation: 'Também suborno não aceitarás; porque o suborno cega os que têm vista e perverte as palavras dos justos.'
          },
          {
            id: 'et_1_b',
            text: 'Pegar o envelope em silêncio pensando em usar o dinheiro para quitar dívidas da sua família.',
            consequence: 'Você aceita a propina, mas vive com o pânico de uma auditoria fiscal que pode destruir sua carreira.',
            effects: { fe: 1 },
            biblicalPrinciple: 'A ruína do lucro desonesto.',
            biblicalReference: '📖 Provérbios 15:27',
            biblicalExplanation: 'O que é ávido por lucro desonesto transtorna a sua casa, mas o que odeia subornos viverá.'
          },
          {
            id: 'et_1_c',
            text: 'Informar ao comitê de compliance da empresa sobre a tentativa de suborno com dados da reunião.',
            consequence: 'A empresa desqualifica o fornecedor corrupto e elogia sua conduta exemplar no relatório anual.',
            effects: { integridade: 5, sabedoria: 4, coragem: 4 },
            biblicalPrinciple: 'Promover a transparência e a ordem.',
            biblicalReference: '📖 Provérbios 28:20',
            biblicalExplanation: 'O homem fiel abundará em bênçãos, mas o que se apressa a enriquecer não ficará impune.'
          },
          {
            id: 'et_1_d',
            text: 'Encerrar o almoço imediatamente e levantar-se da mesa sem tocar na comida.',
            consequence: 'Sua atitude contundente deixa clara sua reprovação moral ao ato ilícito.',
            effects: { coragem: 4, integridade: 4, sabedoria: 3 },
            biblicalPrinciple: 'Fugir da aparência do mal.',
            biblicalReference: '📖 1 Tessalonicenses 5:22',
            biblicalExplanation: 'Abstende-vos de toda a aparência do mal.'
          }
        ]
      },
      {
        id: 'et_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A PRESSÃO DA DIRETORIA',
        context: 'O fornecedor desqualificado tem amizade com um diretor da empresa, que te chama no escritório e exige que você reconsidere a proposta dele.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'et_2_a',
            text: 'Manter sua decisão com serenidade, apresentando os laudos técnicos de todos os concorrentes de forma transparente.',
            consequence: 'A qualidade dos laudos técnicos prova que outra empresa é mais eficiente e barata para a corporação.',
            effects: { sabedoria: 5, integridade: 5, coragem: 4 },
            biblicalPrinciple: 'Firmeza e embasamento na verdade.',
            biblicalReference: '📖 Provérbios 12:17',
            biblicalExplanation: 'O que diz a verdade manifesta a justiça, mas a testemunha falsa traz engano.'
          },
          {
            id: 'et_2_b',
            text: 'Ceder à exigência do diretor para não arriscar seu cargo executivo.',
            consequence: 'Você cede, mas perde o respeito da sua equipe que sabia da fraude do fornecedor.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não temer a ameaça dos homens.',
            biblicalReference: '📖 Provérbios 29:25',
            biblicalExplanation: 'O receio dos homens arma laços, mas o que confia no Senhor fica em segurança.'
          },
          {
            id: 'et_2_c',
            text: 'Orar antes da reunião pedindo sabedoria e serenidade para falar o que é correto.',
            consequence: 'Sua fala articulada e calma desarma a pressão do diretor sem gerar briga.',
            effects: { fe: 5, sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Sabedoria ao falar perante superiores.',
            biblicalReference: '📖 Provérbios 25:15',
            biblicalExplanation: 'Pela longanimidade se persuade o príncipe, e a língua branda quebranta os ossos.'
          },
          {
            id: 'et_2_d',
            text: 'Avisar ao conselho fiscal da empresa sobre o conflito de interesses na indicação.',
            consequence: 'O conselho intervém e garante um processo de escolha totalmente isento.',
            effects: { integridade: 5, coragem: 4 },
            biblicalPrinciple: 'Zelo pela justiça coletiva.',
            biblicalReference: '📖 Isaías 1:17',
            biblicalExplanation: 'Aprendei a fazer o bem; buscai a justiça, socorrei o oprimido.'
          }
        ]
      },
      {
        id: 'et_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: A DEMISSÃO NECESSÁRIA',
        context: 'Como gestor, você precisa desligar um funcionário talentoso mas que constantemente desrespeita e humilha os colegas de equipe.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'et_3_a',
            text: 'Conduzir a demissão em particular com profundo respeito, clareza sobre os motivos e garantia de todos os direitos.',
            consequence: 'O funcionário compreende os limites, a equipe respira aliviada e o ambiente de trabalho se harmoniza.',
            effects: { sabedoria: 5, misericordia: 4, integridade: 4 },
            biblicalPrinciple: 'Liderança justa e firme com respeito humano.',
            biblicalReference: '📖 Colossenses 4:1',
            biblicalExplanation: 'Vós, senhores, fazei o que é de justiça e equidade aos vossos servos, sabendo que também tendes um Senhor nos céus.'
          },
          {
            id: 'et_3_b',
            text: 'Adiar a demissão indefinidamente por medo do confronto e ignorar o sofrimento da equipe.',
            consequence: 'Sua omissão faz dois excelentes funcionários pedirem demissão por conta do ambiente tóxico.',
            effects: { sabedoria: 1 },
            biblicalPrinciple: 'Cuidado com a omissão da liderança.',
            biblicalReference: '📖 Provérbios 22:10',
            biblicalExplanation: 'Lança fora o escarnecedor, e sairá a contenda; e cessará a demanda e a injúria.'
          },
          {
            id: 'et_3_c',
            text: 'Oferecer um programa de treinamento de inteligência emocional e segunda chance antes do desligamento definitivo.',
            consequence: 'Ele aceita o treinamento e demonstra uma mudança sincera de comportamento com a equipe.',
            effects: { misericordia: 5, sabedoria: 4, fe: 3 },
            biblicalPrinciple: 'Restauração e oportunidade de melhoria.',
            biblicalReference: '📖 Gálatas 6:1',
            biblicalExplanation: 'Se alguém for surpreendido nalguma falta, vós que sois espirituais restaurai-o com espírito de mansidão.'
          },
          {
            id: 'et_3_d',
            text: 'Indicar uma consultoria de recolocação profissional para ajudá-lo a encontrar um novo emprego.',
            consequence: 'Seu gesto de generosidade ameniza o impacto da demissão na vida da família dele.',
            effects: { misericordia: 5, integridade: 4 },
            biblicalPrinciple: 'Tratar o próximo com dignidade até no término de contratos.',
            biblicalReference: '📖 Mateus 7:12',
            biblicalExplanation: 'Tudo o que quereis que os homens vos façam, fazei-o vós também a eles.'
          }
        ]
      },
      {
        id: 'et_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O RECONHECIMENTO PÚBLICO',
        context: 'A licitação é vencida pela melhor empresa técnica e transparente. O projeto rende economia de milhões para a corporação.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'et_4_a',
            text: 'Atribuir o sucesso a toda a equipe e agradecer a Deus em oração particular pelo discernimento.',
            consequence: 'Sua liderança humilde inspira lealdade em todos os seus liderados.',
            effects: { fe: 5, integridade: 5, sabedoria: 4 },
            biblicalPrinciple: 'Dar glória a Deus e honra à equipe.',
            biblicalReference: '📖 Salmos 115:1',
            biblicalExplanation: 'Não a nós, Senhor, não a nós, mas ao teu nome dá glória.'
          },
          {
            id: 'et_4_b',
            text: 'Bater no peito nas reuniões dizendo que sem a sua coragem nada disso teria acontecido.',
            consequence: 'Sua vaidade cria vaidade e distanciamento entre você e seus liderados.',
            effects: { fe: 1 },
            biblicalPrinciple: 'A soberba traz desonra.',
            biblicalReference: '📖 Provérbios 11:2',
            biblicalExplanation: 'Em vindo a soberba, virá também a afronta; mas com os humildes está a sabedoria.'
          },
          {
            id: 'et_4_c',
            text: 'Recomendar o bônus financeiro de fim de ano para todos os analistas que ajudaram na análise técnica.',
            consequence: 'A equipe se sente valorizada e motivada a trabalhar com ainda mais empenho.',
            effects: { misericordia: 5, integridade: 4, sabedoria: 4 },
            biblicalPrinciple: 'Recompensar o trabalhador com justiça.',
            biblicalReference: '📖 1 Timóteo 5:18',
            biblicalExplanation: 'Digno é o obreiro do seu salário.'
          },
          {
            id: 'et_4_d',
            text: 'Organizar um momento de celebração e jantar com as famílias da equipe.',
            consequence: 'O evento aproxima as famílias e fortalece a cultura saudável na empresa.',
            effects: { misericordia: 4, sabedoria: 4 },
            biblicalPrinciple: 'Alegria e comunhão no trabalho.',
            biblicalReference: '📖 Eclesiastes 3:12–13',
            biblicalExplanation: 'Não há coisa melhor para eles do que se alegrarem e fazerem o bem na sua vida... é dom de Deus.'
          }
        ]
      },
      {
        id: 'et_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O EXEMPLO DE VIDA',
        context: 'Ao olhar para a sua carreira madura, você é convidado para fazer parte da diretoria executiva principal da multinacional.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'et_5_a',
            text: 'Aceitar o cargo com o compromisso de promover políticas de ética, responsabilidade social e equidade no ambiente de trabalho.',
            consequence: 'Sua gestão transforma a empresa em uma referência nacional de integridade corporativa.',
            effects: { fe: 5, integridade: 5, sabedoria: 5 },
            biblicalPrinciple: 'Liderar com justiça como despenseiro de Deus.',
            biblicalReference: '📖 Provérbios 29:2',
            biblicalExplanation: 'Quando os justos se engrandecem, o povo se alegra, mas quando o ímpio domina, o povo geme.'
          },
          {
            id: 'et_5_b',
            text: 'Manter a simplicidade da sua vida pessoal sem se deixar deslumbrar pelo status do cargo.',
            consequence: 'Seu caráter permanece inabalável perante o sucesso e o poder.',
            effects: { fe: 5, integridade: 5 },
            biblicalPrinciple: 'Humildade nas posições elevadas.',
            biblicalReference: '📖 Filipenses 4:12',
            biblicalExplanation: 'Sei estar abatido, e sei também ter abundância; em toda a maneira, e em todas as coisas estou instruído.'
          },
          {
            id: 'et_5_c',
            text: 'Destinar parte dos novos rendimentos para projetos de capacitação profissional em comunidades carentes.',
            consequence: 'Sua riqueza se transforma em canal de libertação e oportunidade para milhares de jovens.',
            effects: { misericordia: 5, fe: 4, integridade: 4 },
            biblicalPrinciple: 'Prosperidade como canal de bênção.',
            biblicalReference: '📖 2 Coríntios 9:11',
            biblicalExplanation: 'Enriquecidos em tudo para toda a generosidade, a qual produz por nosso intermédio ações de graças a Deus.'
          },
          {
            id: 'et_5_d',
            text: 'Mentorar futuros líderes cristãos no ambiente corporativo.',
            consequence: 'Você forma uma nova geração de executivos éticos e firmes na Palavra.',
            effects: { sabedoria: 5, fe: 4, integridade: 4 },
            biblicalPrinciple: 'Transmitir a sabedoria e a retidão.',
            biblicalReference: '📖 2 Timóteo 2:2',
            biblicalExplanation: 'O que de mim ouviste, confia-o a homens fiéis que sejam idôneos para também ensinarem a outros.'
          }
        ]
      }
    ]
  },

  // 2. FAMÍLIA (DENTRO DE CASA)
  {
    id: 'dentro_de_casa',
    title: 'ROUTINA FAMILIAR E FILHOS',
    subtitle: 'Criação de filhos, cansaço e presença no lar',
    description: 'Após um dia exaustivo de trabalho, seus filhos pedem sua atenção para brincar e conversar, enquanto a casa precisa de arrumação. Como priorizar o amor?',
    profiles: ['adulto'],
    theme: 'Família e Filhos',
    icon: 'Home',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'O seu trabalho consome o melhor da sua energia, deixando apenas as sobras para sua família?',
    scenes: [
      {
        id: 'dc_scene_1_ad',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: A CHEGADA EM CASA',
        context: 'Você chega em casa às 19h30 exausto fisicamente e mentalmente. Seu filho de 8 anos corre até a porta segurando um desenho que fez na escola e diz: "Papai/Mamãe, olha o que eu fiz pra você! Vamos brincar?"',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'dc_1_a_ad',
            text: 'Ajoelhar-se na altura dele, dar um abraço bem apertado e passar 20 minutos brincando antes de qualquer outra tarefa.',
            consequence: 'Os olhos do seu filho brilham de alegria por se sentir amado e priorizado sobre o cansaço do dia.',
            effects: { misericordia: 5, fe: 4, integridade: 4 },
            biblicalPrinciple: 'Amar e valorizar os filhos.',
            biblicalReference: '📖 Salmos 127:3',
            biblicalExplanation: 'Eis que os filhos são herança do Senhor, e o fruto do ventre o seu galardão.'
          },
          {
            id: 'dc_1_b_ad',
            text: 'Dizer com voz irritada: "Agora não dá, estou muito cansado! Vai ver TV e me deixa em paz."',
            consequence: 'O menino abaixa a cabeça triste e se isola no quarto sentindo-se um estorvo na sua vida.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não irritar nem desanimar os filhos.',
            biblicalReference: '📖 Colossenses 3:21',
            biblicalExplanation: 'Vós, pais, não irriteis a vossos filhos, para que não percam o ânimo.'
          },
          {
            id: 'dc_1_c_ad',
            text: 'Explicar com carinho que precisa de um banho de 10 minutos para tirar o cansaço e que em seguida ficarão juntos.',
            consequence: 'Ele compreende o limite com maturidade e aguarda animado na sala.',
            effects: { sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Comunicação amorosa e equilibrada.',
            biblicalReference: '📖 Provérbios 15:1',
            biblicalExplanation: 'A resposta branda desvia o furor, mas a palavra dura suscita a ira.'
          },
          {
            id: 'dc_1_d_ad',
            text: 'Convidá-lo para te ajudar a preparar o jantar enquanto conversam sobre o dia na escola.',
            consequence: 'A cozinha vira um ambiente de risadas, aprendizado e cumplicidade entre pais e filhos.',
            effects: { misericordia: 4, sabedoria: 4, fe: 3 },
            biblicalPrinciple: 'Instruir e conviver no cotidiano.',
            biblicalReference: '📖 Deuteronômio 6:7',
            biblicalExplanation: 'As ensinarás a teus filhos e delas falarás assentado em tua casa, e andando pelo caminho.'
          }
        ]
      },
      {
        id: 'dc_scene_2_ad',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: O CONFLITO ENTRE IRMÃOS',
        context: 'Durante o jantar, seus dois filhos começam uma discussão ruidosa disputando um brinquedo e um acusa o outro de mentir.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'dc_2_a_ad',
            text: 'Desligar a TV, sentar-se com os dois e ensiná-los a pedir perdão e a repartir o brinquedo com carinho.',
            consequence: 'Eles se abraçam pedindo desculpas e aprendem o valor do amor fraternal na prática.',
            effects: { sabedoria: 5, misericordia: 5, fe: 4 },
            biblicalPrinciple: 'Educação pacífica e reconciliadora no lar.',
            biblicalReference: '📖 Efésios 6:4',
            biblicalExplanation: 'E vós, pais... criai-os na doutrina e admoestação do Senhor.'
          },
          {
            id: 'dc_2_b_ad',
            text: 'Gritar com ambos, tirar o brinquedo e mandá-los para o quarto sem jantar.',
            consequence: 'O conflito é interrompido pelo medo, mas a mágoa e o ressentimento permanecem no coração deles.',
            effects: { sabedoria: 1 },
            biblicalPrinciple: 'Evitar o uso da ira descontrolada.',
            biblicalReference: '📖 Tiago 1:20',
            biblicalExplanation: 'Porque a ira do homem não opera a justiça de Deus.'
          },
          {
            id: 'dc_2_c_ad',
            text: 'Pedir que cada um conte a sua versão da história em silêncio antes de você tomar uma decisão justa.',
            consequence: 'Eles aprendem a ouvir, a ter autocrítica e a respeitar a justiça imparcial dos pais.',
            effects: { integridade: 5, sabedoria: 4 },
            biblicalPrinciple: 'Ouvir antes de julgar.',
            biblicalReference: '📖 Provérbios 18:13',
            biblicalExplanation: 'O que responde antes de ouvir comete estultícia e vergonha.'
          },
          {
            id: 'dc_2_d_ad',
            text: 'Propor um jogo cooperativo em família onde todos precisam se ajudar para vencer.',
            consequence: 'A rivalidade se transforma em espírito de equipe e diversão familiar.',
            effects: { sabedoria: 4, misericordia: 4 },
            biblicalPrinciple: 'Fomentar a união dos irmãos.',
            biblicalReference: '📖 Salmos 133:1',
            biblicalExplanation: 'Quão bom e suave é que os irmãos vivam em união.'
          }
        ]
      },
      {
        id: 'dc_scene_3_ad',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: O CULTO DOMÉSTICO',
        context: 'Antes das crianças dormirem, você pensa em estabelecer o hábito de ler uma história bíblica e orar em família.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'dc_3_a_ad',
            text: 'Dedicar 15 minutos para ler um trecho da Bíblia, cantar uma música e orar abençoando a vida dos seus filhos.',
            consequence: 'Seus filhos adormecem em paz profunda e enraízam a fé no coração desde a infância.',
            effects: { fe: 5, integridade: 5, misericordia: 4 },
            biblicalPrinciple: 'Instruir o filho no caminho em que deve andar.',
            biblicalReference: '📖 Provérbios 22:6',
            biblicalExplanation: 'Instrui o menino no caminho em que deve andar, e até quando envelhecer não se desviará dele.'
          },
          {
            id: 'dc_3_b_ad',
            text: 'Deixar as crianças no celular jogando até adormecerem de exaustão.',
            consequence: 'As telas causam agitação no sono e afastam o lar dos momentos espirituais profundos.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Cuidado com as distrações do mundo no lar.',
            biblicalReference: '📖 Provérbios 29:15',
            biblicalExplanation: 'A vara e a repreensão dão sabedoria, mas o filho entregue a si mesmo envergonha a sua mãe.'
          },
          {
            id: 'dc_3_c_ad',
            text: 'Pedir que um dos filhos faça a oração da noite com suas próprias palavras simples.',
            consequence: 'A criança desenvolve intimidade e confiança na oração pessoal com Deus.',
            effects: { fe: 5, sabedoria: 4 },
            biblicalPrinciple: 'Incentivar a fé espontânea das crianças.',
            biblicalReference: '📖 Mateus 21:16',
            biblicalExplanation: 'Da boca dos meninos e das criancinhas de peito tiraste o perfeito louvor.'
          },
          {
            id: 'dc_3_d_ad',
            text: 'Aproveitar a leitura bíblica para responder às dúvidas curiosas deles sobre o amor de Deus.',
            consequence: 'O diálogo abre portas para uma fé racional, alegre e afetuosa no lar.',
            effects: { fe: 4, sabedoria: 5, misericordia: 3 },
            biblicalPrinciple: 'Ensinar com paciência e sabedoria.',
            biblicalReference: '📖 2 Timóteo 3:15',
            biblicalExplanation: 'Desde a infância sabes as sagradas letras que podem fazer-te sábio para a salvação.'
          }
        ]
      },
      {
        id: 'dc_scene_4_ad',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O DIÁLOGO CONJUGAL',
        context: 'Após as crianças dormirem, você e seu cônjuge estão cansados. É o momento de conversar sobre as finanças e o futuro da família.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'dc_4_a_ad',
            text: 'Desligar os celulares, preparar um chá e conversarem com carinho e transparência sobre as metas da casa.',
            consequence: 'A cumplicidade do casal se renova e ambos se sentem apoiados para enfrentar as lutas cotidianas.',
            effects: { integridade: 5, misericordia: 5, sabedoria: 4, fe: 3 },
            biblicalPrinciple: 'Comunhão e amor conjugal.',
            biblicalReference: '📖 Efésios 5:28',
            biblicalExplanation: 'Assim devem os maridos amar as suas próprias mulheres, como a seus próprios corpos. Quem ama a sua mulher, ama-se a si mesmo.'
          },
          {
            id: 'dc_4_b_ad',
            text: 'Começar a apontar os erros de gastos do outro de forma acusatória e ir dormir irritado.',
            consequence: 'O ambiente do quarto fica frio e a distância emocional entre o casal aumenta.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não deixar o sol se pôr sobre a ira.',
            biblicalReference: '📖 Efésios 4:26',
            biblicalExplanation: 'Irai-vos e não pequeis; não se ponha o sol sobre a vossa ira.'
          },
          {
            id: 'dc_4_c_ad',
            text: 'Orarem juntos de mãos dadas entregando as ansiedades e projetos do lar ao Senhor.',
            consequence: 'A paz de Deus guarda o coração e a mente do casal durante a noite.',
            effects: { fe: 5, integridade: 4 },
            biblicalPrinciple: 'União espiritual do casal.',
            biblicalReference: '📖 Filipenses 4:6–7',
            biblicalExplanation: 'Não estejais inquietos por coisa alguma; antes as vossas petições sejam conhecidas diante de Deus pela oração.'
          },
          {
            id: 'dc_4_d_ad',
            text: 'Agradecer ao cônjuge pelo esforço e dedicação diária com a família.',
            consequence: 'O reconhecimento sincero enche o coração do seu cônjuge de alegria e renova o amor.',
            effects: { misericordia: 5, sabedoria: 4 },
            biblicalPrinciple: 'Elogio e valorização mútua.',
            biblicalReference: '📖 Provérbios 31:28',
            biblicalExplanation: 'Levantam-se seus filhos e chamam-na bem-aventurada; seu marido também, e ele a louva.'
          }
        ]
      },
      {
        id: 'dc_scene_5_ad',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O LEGADO DA FAMÍLIA',
        context: 'Anos se passam e seus filhos crescem vendo um lar pautado na oração, no perdão, no trabalho e na alegria.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'dc_5_a_ad',
            text: 'Agradecer a Deus por ter te dado a graça de edificar uma casa sobre a Rocha inabalável.',
            consequence: 'Seus filhos se tornam adultos tementes a Deus, maduros e honrados na sociedade.',
            effects: { fe: 5, integridade: 5, sabedoria: 5, misericordia: 4 },
            biblicalPrinciple: 'Eu e minha casa serviremos ao Senhor.',
            biblicalReference: '📖 Josué 24:15',
            biblicalExplanation: 'Porém eu e a minha casa serviremos ao Senhor.'
          },
          {
            id: 'dc_5_b_ad',
            text: 'Continuar sendo o porto seguro e conselheiro amoroso dos seus filhos na fase adulta.',
            consequence: 'Sua casa permanece como o centro de encontros de paz e alegria da família.',
            effects: { misericordia: 5, sabedoria: 5 },
            biblicalPrinciple: 'Amor paternal perpétuo.',
            biblicalReference: '📖 Provérbios 17:6',
            biblicalExplanation: 'A coroa dos velhos são os filhos dos filhos; e a glória dos filhos são seus pais.'
          },
          {
            id: 'dc_5_c_ad',
            text: 'Ajudar outros casais jovens da igreja a estruturarem seus lares sob princípios bíblicos.',
            consequence: 'Sua experiência de vida abençoa e restaura dezenas de famílias na comunidade.',
            effects: { fe: 4, sabedoria: 5, misericordia: 4 },
            biblicalPrinciple: 'Mentoria familiar.',
            biblicalReference: '📖 Tito 2:2–4',
            biblicalExplanation: 'Ensine os mais velhos a serem sóbrios, graves, prudentes... para que instruam os mais novos.'
          },
          {
            id: 'dc_5_d_ad',
            text: 'Manter a chama do amor e do namoro acesa no seu casamento por toda a vida.',
            consequence: 'Vocês chegam à velhice felizes, apaixonados e cheios de boas memórias compartilhadas.',
            effects: { integridade: 5, fe: 4, misericordia: 4 },
            biblicalPrinciple: 'Fidelidade e amor duradouro.',
            biblicalReference: '📖 Cânticos 8:7',
            biblicalExplanation: 'As muitas águas não podem apagar este amor, nem os rios afogá-lo.'
          }
        ]
      }
    ]
  },

  // 3. RELACIONAMENTO (COMUNICAÇÃO E PACIÊNCIA)
  {
    id: 'comunicacao_e_paciencia',
    title: 'CASAMENTO E CONFLITOS',
    subtitle: 'Comunicação no casamento, paciência e perdão',
    description: 'Pequenos desentendimentos sobre tarefas domésticas e orçamento geram um clima de frieza no casamento. Como reatar o diálogo com sabedoria?',
    profiles: ['adulto'],
    theme: 'Relacionamento e Casamento',
    icon: 'Heart',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Você busca ter razão no argumento ou busca ter paz no seu relacionamento?',
    scenes: [
      {
        id: 'cp_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: A DISCUSSÃO BOBA',
        context: 'Uma discussão sobre quem deveria ter pago uma conta de energia que atrasou gera ironias e frases ríspidas entre você e seu cônjuge.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'cp_1_a',
            text: 'Respirar fundo, engolir o orgulho e dizer: "Me desculpe pela forma como falei. Vamos resolver a conta juntos agora."',
            consequence: 'Sua humildade desarma o conflito na hora e evita que um problema pequeno vire uma grande crise.',
            effects: { misericordia: 5, sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Mandar embora a ira com palavras brandas.',
            biblicalReference: '📖 Provérbios 15:1',
            biblicalExplanation: 'A resposta branda desvia o furor, mas a palavra dura suscita a ira.'
          },
          {
            id: 'cp_1_b',
            text: 'Aumentar o tom de voz e listar todas as falhas passadas do cônjuge dos últimos 6 meses.',
            consequence: 'A discussão vira uma briga dolorosa e vocês passam o final de semana sem se falar.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não guardar ressentimentos ou ressentir o mal.',
            biblicalReference: '📖 1 Coríntios 13:5',
            biblicalExplanation: 'O amor não se ufana, não se ensoberbece... não guarda rancor.'
          },
          {
            id: 'cp_1_c',
            text: 'Colocar a conta em débito automático no banco para que o erro nunca mais se repita.',
            consequence: 'Você resolve a causa prática do problema com inteligência financeira.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Prudência na gestão prática do lar.',
            biblicalReference: '📖 Provérbios 24:3',
            biblicalExplanation: 'Com a sabedoria se edifica a casa, e com o entendimento ela se estabelece.'
          },
          {
            id: 'cp_1_d',
            text: 'Propor uma pausa de 10 minutos para se acalmarem antes de continuarem a conversa.',
            consequence: 'A pausa acalma os ânimos e vocês conversam com maturidade e respeito.',
            effects: { sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Tardio para irar-se.',
            biblicalReference: '📖 Tiago 1:19',
            biblicalExplanation: 'Todo o homem seja pronto para ouvir, tardio para falar, tardio para se irar.'
          }
        ]
      },
      {
        id: 'cp_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: O CANSAÇO DA ROTINA',
        context: 'A rotina de trabalho, filhos e tarefas de casa consome o tempo do casal. Vocês percebem que não têm um momento a sós há meses.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'cp_2_a',
            text: 'Planejar um jantar surpresa a sós, pedindo ajuda aos avós para cuidarem das crianças por algumas horas.',
            consequence: 'O casal se reconecta, conversa sobre sonhos e renova o carinho e o namoro no casamento.',
            effects: { misericordia: 5, fe: 4, sabedoria: 4 },
            biblicalPrinciple: 'Cultivar o afeto e a dedicação conjugal.',
            biblicalReference: '📖 Cânticos 2:10',
            biblicalExplanation: 'O meu amado fala e me diz: Levanta-te, meu amor, formosa minha, e vem.'
          },
          {
            id: 'cp_2_b',
            text: 'Aceitar o distanciamento como "normal" no casamento e focar apenas no celular nas horas vagas.',
            consequence: 'A frieza se instala e o casamento vira uma mera sociedade de criação de filhos.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Combater a apatia no matrimônio.',
            biblicalReference: '📖 Apocalipse 2:4',
            biblicalExplanation: 'Tenho, porém, contra ti que deixaste o teu primeiro amor.'
          },
          {
            id: 'cp_2_c',
            text: 'Começarem a fazer uma caminhada diária de 20 minutos juntos no final da tarde.',
            consequence: 'A rotina simples de caminhada vira o momento preferido do casal para desabafar e rir.',
            effects: { sabedoria: 5, misericordia: 4 },
            biblicalPrinciple: 'Companheirismo no caminhar.',
            biblicalReference: '📖 Eclesiastes 4:9',
            biblicalExplanation: 'Melhor é serem dois do que um, porque têm melhor paga do seu trabalho.'
          },
          {
            id: 'cp_2_d',
            text: 'Escrever uma carta de amor sincera demonstrando gratidão pela parceria do cônjuge.',
            consequence: 'Seu cônjuge se emociona profundamente e guarda a carta como um tesouro do lar.',
            effects: { fe: 4, misericordia: 5, integridade: 4 },
            biblicalPrinciple: 'Expressar amor com palavras de edificação.',
            biblicalReference: '📖 Provérbios 16:24',
            biblicalExplanation: 'As palavras suaves são favos de mel, dores para a alma e saúde para os ossos.'
          }
        ]
      },
      {
        id: 'cp_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: A INFLUÊNCIA DOS PARENTES',
        context: 'Seus sogros/pais tentam interferir nas decisões financeiras e de criação dos filhos da sua casa, gerando desconforto.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'cp_3_a',
            text: 'Conversar com seu cônjuge em particular e alinharem uma postura única, educada e firme perante a família estendida.',
            consequence: 'Vocês protegem a autoridade do seu lar mantendo o respeito e o amor pelos pais.',
            effects: { sabedoria: 5, integridade: 5, fe: 4 },
            biblicalPrinciple: 'Deixar pai e mãe e unir-se ao cônjuge.',
            biblicalReference: '📖 Gênesis 2:24',
            biblicalExplanation: 'Portanto deixará o homem o seu pai e a sua mãe, e apegar-se-á à sua mulher, e serão ambos uma carne.'
          },
          {
            id: 'cp_3_b',
            text: 'Brigar com os parentes na mesa de domingo e proibi-los de visitarem a casa.',
            consequence: 'A briga gera ressentimentos duradouros e divide a família estendida.',
            effects: { sabedoria: 1 },
            biblicalPrinciple: 'Buscar a paz com todos.',
            biblicalReference: '📖 Romanos 12:18',
            biblicalExplanation: 'Se for possível, quanto estiver em vós, tende paz com todos os homens.'
          },
          {
            id: 'cp_3_c',
            text: 'Ouvir os conselhos dos parentes com humildade, filtrando com seu cônjuge apenas o que é edificante.',
            consequence: 'Você aproveita a sabedoria dos mais velhos sem abrir mão da liderança da sua casa.',
            effects: { sabedoria: 4, misericordia: 4 },
            biblicalPrinciple: 'Filtrar o bem e reter o que é edificante.',
            biblicalReference: '📖 1 Tessalonicenses 5:21',
            biblicalExplanation: 'Examinai tudo. Retende o bem.'
          },
          {
            id: 'cp_3_d',
            text: 'Agradecer o carinho da família reforçando delicadamente como vocês dois decidiram conduzir a questão.',
            consequence: 'A família compreende os limites e passa a respeitar as decisões do casal.',
            effects: { integridade: 4, sabedoria: 4 },
            biblicalPrinciple: 'Firmeza com mansidão.',
            biblicalReference: '📖 Colossenses 4:6',
            biblicalExplanation: 'A vossa palavra seja sempre agradável, temperada com sal.'
          }
        ]
      },
      {
        id: 'cp_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O PERDÃO NAS PEQUENAS MÁGOAS',
        context: 'Num dia difícil, seu cônjuge esquece uma data importante do casal e você se sente magoado.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'cp_4_a',
            text: 'Perdoar de coração no mesmo dia, expressar sua chateação com carinho e comemorarem no dia seguinte.',
            consequence: 'O perdão rápido evita que a mágoa crie raízes no seu coração e no casamento.',
            effects: { misericordia: 5, fe: 5, integridade: 4 },
            biblicalPrinciple: 'Prática do perdão contínuo.',
            biblicalReference: '📖 Colossenses 3:13',
            biblicalExplanation: 'Suportando-vos uns aos outros, e perdoando-vos uns aos outros... assim fazei vós também.'
          },
          {
            id: 'cp_4_b',
            text: 'Fazer chantagem emocional e punir o cônjuge com silêncio por uma semana inteira.',
            consequence: 'A punição por silêncio envenena o clima do lar e desgasta a confiança mútua.',
            effects: { misericordia: 1 },
            biblicalPrinciple: 'Evitar o rancor e a vingança.',
            biblicalReference: '📖 Efésios 4:31',
            biblicalExplanation: 'Toda a amargura, e ira, e cólera, e gritaria, e blasfêmia e toda a malícia sejam tiradas dentre vós.'
          },
          {
            id: 'cp_4_c',
            text: 'Preparar uma sobremesa gostosa e rirem juntos do esquecimento sem cobranças pesadas.',
            consequence: 'Sua leveza de espírito transforma um erro num momento de graça e risadas.',
            effects: { misericordia: 5, sabedoria: 4 },
            biblicalPrinciple: 'Alegria e leveza na convivência.',
            biblicalReference: '📖 Provérbios 17:22',
            biblicalExplanation: 'O coração alegre é como bom remédio, mas o espírito abatido seca até os ossos.'
          },
          {
            id: 'cp_4_d',
            text: 'Aproveitar para colocarem as datas importantes num calendário compartilhado no celular.',
            consequence: 'A solução prática evita futuros esquecimentos para ambos.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Ordem e previdência.',
            biblicalReference: '📖 1 Coríntios 14:40',
            biblicalExplanation: 'Faça-se tudo com decência e ordem.'
          }
        ]
      },
      {
        id: 'cp_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: A RENOVAÇÃO DA ALIANÇA',
        context: 'Completando mais um aniversário de casamento, vocês olham para as tempestades superadas com a graça de Deus.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'cp_5_a',
            text: 'Renovar os votos de fidelidade, amor e serviço mútuo perante a igreja e a família.',
            consequence: 'Sua união sólida serve de testemunho vivo de que o casamento cristão é abençoado e duradouro.',
            effects: { fe: 5, integridade: 5, misericordia: 5, sabedoria: 5 },
            biblicalPrinciple: 'Aliança inabalável selada por Deus.',
            biblicalReference: '📖 Mateus 19:6',
            biblicalExplanation: 'Assim não são mais dois, mas uma só carne. Portanto, o que Deus ajuntou não o separe o homem.'
          },
          {
            id: 'cp_5_b',
            text: 'Viajar em casal para agradecer a Deus pelo dom da vida a dois.',
            consequence: 'Vocês vivem dias inesquecíveis de descanso, comunhão e alegria conjugal.',
            effects: { misericordia: 4, fe: 4 },
            biblicalPrinciple: 'Desfrutar das bênçãos do matrimônio.',
            biblicalReference: '📖 Eclesiastes 9:9',
            biblicalExplanation: 'Goza a vida com a mulher que amas, todos os dias da tua vida vã.'
          },
          {
            id: 'cp_5_c',
            text: 'Escrever um guia simples de conselhos para casais noivos da igreja local.',
            consequence: 'Sua experiência de superação ajuda novos casais a evitarem armadilhas de convivência.',
            effects: { sabedoria: 5, fe: 4, misericordia: 4 },
            biblicalPrinciple: 'Ensinar aos mais novos.',
            biblicalReference: '📖 Tito 2:4',
            biblicalExplanation: 'Para que instruam as mulheres novas a amarem seus maridos, a amarem seus filhos.'
          },
          {
            id: 'cp_5_d',
            text: 'Orar diariamente juntos abençoando o futuro dos filhos e netos.',
            consequence: 'Seu lar transborda a presença de Deus por todas as gerações.',
            effects: { fe: 5, integridade: 4 },
            biblicalPrinciple: 'Oração contínua no lar.',
            biblicalReference: '📖 1 Tessalonicenses 5:17',
            biblicalExplanation: 'Orai sem cessar.'
          }
        ]
      }
    ]
  },

  // 4. FINANÇAS COTIDIANAS (ORÇAMENTO E PRIORIDADES)
  {
    id: 'orcamento_e_prioridades',
    title: 'FINANÇAS DO LAR',
    subtitle: 'Orçamento doméstico, imprevistos e fidelidade',
    description: 'Um imprevisto mecânico no carro da família consome a reserva financeira do mês. Como equilibrar as contas sem perder a paz e a generosidade?',
    profiles: ['adulto'],
    theme: 'Finanças e Família',
    icon: 'DollarSign',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Como sua fé se comporta quando a conta bancária fica apertada?',
    scenes: [
      {
        id: 'op_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: O IMPREVISTO FINANCEIRO',
        context: 'O motor do carro quebra na volta do trabalho. O orçamento do conserto consome quase toda a sua reserva de emergência do mês.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'op_1_a',
            text: 'Manter a calma, pagar o conserto com a reserva e ajustar o orçamento familiar cortando supérfluos.',
            consequence: 'Sua postura serena evita o pânico e a família passa o mês com tranquilidade e responsabilidade.',
            effects: { sabedoria: 5, integridade: 4, fe: 4 },
            biblicalPrinciple: 'Uso sábio das reservas de emergência.',
            biblicalReference: '📖 Provérbios 21:20',
            biblicalExplanation: 'Tesouro desejável e azeite há na casa do sábio, mas o homem insensato os dissipa.'
          },
          {
            id: 'op_1_b',
            text: 'Desesperar-se, culpar Deus pela quebra do carro e deixar de entregar o dízimo no domingo.',
            consequence: 'A murmuração traz perturbação espiritual ao lar e gera descontentamento.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não murmurar nas provações.',
            biblicalReference: '📖 Filipenses 2:14',
            biblicalExplanation: 'Fazei todas as coisas sem murmurações nem contendas.'
          },
          {
            id: 'op_1_c',
            text: 'Reunir a família para orar pedindo a provisão de Deus e paciência durante o mês apertado.',
            consequence: 'A família se une em fé e vivencia milagres de economia e provisão diária.',
            effects: { fe: 5, integridade: 4, misericordia: 4 },
            biblicalPrinciple: 'Confiança na provisão do Pai.',
            biblicalReference: '📖 Mateus 6:31–32',
            biblicalExplanation: 'Não andeis, pois, inquietos... porque vosso Pai celestial bem sabe que necessitais de todas estas coisas.'
          },
          {
            id: 'op_1_d',
            text: 'Procurar duas orçamentos de oficinas mecânicas antes de autorizar o serviço.',
            consequence: 'Você economiza 30% do valor no segundo mecânico de confiança.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Pesquisar e agir com prudência.',
            biblicalReference: '📖 Provérbios 14:15',
            biblicalExplanation: 'O inexperiente acredita em qualquer palavra, mas o prudente considera bem seus passos.'
          }
        ]
      },
      {
        id: 'op_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A TENTAÇÃO DAS DÍVIDAS',
        context: 'Com o orçamento apertado, a gerente do banco te liga oferecendo um empréstimo pré-aprovado de juros altos.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'op_2_a',
            text: 'Recusar o empréstimo de juros altos e preferir readequar o padrão de vida temporariamente.',
            consequence: 'Você preserva sua família de cair na bola de neve do endividamento bancário.',
            effects: { integridade: 5, sabedoria: 5, coragem: 3 },
            biblicalPrinciple: 'Fugir da servidão das dívidas.',
            biblicalReference: '📖 Provérbios 22:7',
            biblicalExplanation: 'O que toma emprestado é servo do que empresta.'
          },
          {
            id: 'op_2_b',
            text: 'Pegar o empréstimo para continuar gastando no mesmo padrão sem cortes.',
            consequence: 'As parcelas mensais comprometem o orçamento da família por mais de um ano.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Evitar a ilusão do crédito facilitado.',
            biblicalReference: '📖 Provérbios 22:26–27',
            biblicalExplanation: 'Não estejas entre os que se obrigam... se não tens com que pagar, por que tirariam a tua cama de debaixo de ti?'
          },
          {
            id: 'op_2_c',
            text: 'Buscar uma renda extra honesta no final de semana vendendo produtos ou prestando serviços.',
            consequence: 'O trabalho extra cobre o rombo do carro sem necessidade de empréstimos.',
            effects: { integridade: 4, sabedoria: 4, coragem: 4 },
            biblicalPrinciple: 'Valorizar o trabalho diligente.',
            biblicalReference: '📖 Provérbios 10:4',
            biblicalExplanation: 'O que trabalha com mão enganosa enriquece a ninguém, mas a mão dos diligentes enriquece.'
          },
          {
            id: 'op_2_d',
            text: 'Negociar descontos e prazos nas contas do mês com antecedência e clareza.',
            consequence: 'Os credores renegociam prazos sem juros pela sua honestidade de avisar.',
            effects: { sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Honestidade e clareza nas negociações.',
            biblicalReference: '📖 Salmos 37:21',
            biblicalExplanation: 'O ímpio toma emprestado e não paga, mas o justo se compadece e dá.'
          }
        ]
      },
      {
        id: 'op_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: A FIDELIDADE NO POUCO',
        context: 'No domingo de culto, chega o momento do dízimo e das ofertas. O orçamento está justo, mas você se lembra da fidelidade de Deus.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'op_3_a',
            text: 'Entregar seu dízimo com alegria e fé, confiando totalmente na provisão de Deus para a semana.',
            consequence: 'Sua fé é honrada e uma renda inesperada entra no seu orçamento na terça-feira.',
            effects: { fe: 5, integridade: 5, sabedoria: 3 },
            biblicalPrinciple: 'Provar a fidelidade de Deus nos dízimos.',
            biblicalReference: '📖 Malaquias 3:10',
            biblicalExplanation: 'Trazei todos os dízimos à casa do tesouro... e provai-me nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu.'
          },
          {
            id: 'op_3_b',
            text: 'Guardar o dinheiro do dízimo dizendo a si mesmo que Deus "entende" o seu aperto.',
            consequence: 'Você resolve a urgência humana, mas sente a fragilidade do seu compromisso de fé.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Fidelidade constante no pouco e no muito.',
            biblicalReference: '📖 Lucas 16:10',
            biblicalExplanation: 'Quem é fiel no pouco, também é fiel no muito.'
          },
          {
            id: 'op_3_c',
            text: 'Entregar o dízimo e ofertar também um valor para o trabalho com moradores de rua.',
            consequence: 'Sua generosidade sacia a fome de pessoas e traz paz indescritível ao seu coração.',
            effects: { fe: 5, misericordia: 5, integridade: 4 },
            biblicalPrinciple: 'Ofertar com alegria na fraqueza.',
            biblicalReference: '📖 2 Coríntios 9:7',
            biblicalExplanation: 'Deus ama ao que dá com alegria.'
          },
          {
            id: 'op_3_d',
            text: 'Testemunhar para seus filhos sobre como Deus sempre sustentou a família nas crises.',
            consequence: 'Seus filhos aprendem a confiar em Deus ao verem o exemplo prático dos pais.',
            effects: { fe: 5, sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Passar o testemunho de fé às gerações.',
            biblicalReference: '📖 Salmos 78:4',
            biblicalExplanation: 'Mostrando à geração futura os louvores do Senhor, assim como a sua força.'
          }
        ]
      },
      {
        id: 'op_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O RECOMEÇO DAS RESERVAS',
        context: 'O mês termina, as contas foram pagas sem dívidas e sobra um pequeno valor no final das contas.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'op_4_a',
            text: 'Depositar o valor imediatamente na poupança de emergência para reconstruir a reserva do lar.',
            consequence: 'Sua disciplina financeira restabelece a proteção do lar contra novos imprevistos.',
            effects: { sabedoria: 5, integridade: 4, fe: 3 },
            biblicalPrinciple: 'Constância na economia.',
            biblicalReference: '📖 Provérbios 13:11',
            biblicalExplanation: 'A riqueza adquirida às pressas diminuirá, mas quem a ajunta pouco a Pouco a multiplicará.'
          },
          {
            id: 'op_4_b',
            text: 'Gastar a sobra num almoço caro para compensar o estresse do mês.',
            consequence: 'Você perde a oportunidade de recomeçar sua reserva financeira.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Evitar o impulso de consumo.',
            biblicalReference: '📖 Provérbios 21:17',
            biblicalExplanation: 'O que ama os prazeres empobrecerá.'
          },
          {
            id: 'op_4_c',
            text: 'Agradecer a Deus em família pelo livramento de ter passado o mês sem dívidas.',
            consequence: 'O lar se enche de gratidão e louvor pelo sustento do Pai celestial.',
            effects: { fe: 5, integridade: 4, misericordia: 3 },
            biblicalPrinciple: 'Em tudo dai graças.',
            biblicalReference: '📖 1 Tessalonicenses 5:18',
            biblicalExplanation: 'Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.'
          },
          {
            id: 'op_4_d',
            text: 'Ajudar um vizinho que passou por uma necessidade parecida na mesma semana.',
            consequence: 'Seu gesto de solidariedade abençoa a vida do vizinho e testemunha do amor divino.',
            effects: { misericordia: 5, fe: 4, integridade: 3 },
            biblicalPrinciple: 'Socorrer o próximo na adversidade.',
            biblicalReference: '📖 Galatas 6:10',
            biblicalExplanation: 'Façamos o bem a todos.'
          }
        ]
      },
      {
        id: 'op_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: A PAZ FINANCEIRA',
        context: 'Anos se passam e a disciplina aliada à fé transformam a saúde financeira da sua família.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'op_5_a',
            text: 'Manter a vida financeira pautada na modéstia, generosidade e investimento no reino de Deus.',
            consequence: 'Sua família vive com abundância de paz, livre de dívidas e pronta para abençoar vidas.',
            effects: { fe: 5, integridade: 5, sabedoria: 5, misericordia: 4 },
            biblicalPrinciple: 'Prosperidade com propósito bíblico.',
            biblicalReference: '📖 1 Timóteo 6:18',
            biblicalExplanation: 'Que façam o bem, enriqueçam em boas obras, sejam generosos em reter e prontos a repartir.'
          },
          {
            id: 'op_5_b',
            text: 'Ensinar aos seus filhos como montar orçamentos e poupar desde o primeiro trabalho.',
            consequence: 'Seus filhos crescem educados financeiramente e protegidos da ganância.',
            effects: { sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Instrução de vida para os filhos.',
            biblicalReference: '📖 Provérbios 1:8',
            biblicalExplanation: 'Ouve, filho meu, a instrução de teu pai.'
          },
          {
            id: 'op_5_c',
            text: 'Financiar a reforma do templo ou projetos sociais da sua comunidade local.',
            consequence: 'Sua generosidade deixa um legado duradouro de amor para milhares de pessoas.',
            effects: { fe: 5, misericordia: 5, integridade: 4 },
            biblicalPrinciple: 'Edificar a casa do Senhor.',
            biblicalReference: '📖 Ageu 1:8',
            biblicalExplanation: 'Subi ao monte, e trazei madeira, e edificai a casa; e dela me agradarei, e serei glorificado.'
          },
          {
            id: 'op_5_d',
            text: 'Dar glória a Deus por ser o verdadeiro Doador de todo bom alimento e sustento.',
            consequence: 'Sua alma descansa na certeza da fidelidade eterna do Criador.',
            effects: { fe: 5, integridade: 5 },
            biblicalPrinciple: 'Toda boa dádiva vem do alto.',
            biblicalReference: '📖 Tiago 1:17',
            biblicalExplanation: 'Toda a boa dádiva e todo o dom perfeito vem do alto, descendo do Pai das luzes.'
          }
        ]
      }
    ]
  },

  // 5. PERDÃO (O PESO DA MÁGOA)
  {
    id: 'o_peso_da_magoa',
    title: 'O PESO DA MÁGOA',
    subtitle: 'Perdão familiar, reconciliação e cura interior',
    description: 'Um desentendimento antigo sobre herança ou negócios dividiu sua família há anos. Surge a oportunidade de liberar o perdão. Como reagir?',
    profiles: ['adulto'],
    theme: 'Perdão e Reconciliação',
    icon: 'Heart',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Até quando você carregará o peso de uma mágoa que só fere o seu próprio coração?',
    scenes: [
      {
        id: 'pm_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: A NOTÍCIA DA ENFERMIDADE',
        context: 'Você recebe a notícia de que o parente com quem não fala há 5 anos por causa de um conflito financeiro está internado em estado delicado.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'pm_1_a',
            text: 'Irmetiatamente ao hospital para visitá-lo, estender a mão e liberar o perdão sincero.',
            consequence: 'O reencontro é marcado por lágrimas, abraços emocionado e cura profunda de ambos os corações.',
            effects: { misericordia: 5, fe: 5, coragem: 4, integridade: 4 },
            biblicalPrinciple: 'Perdão e reconciliação sem demora.',
            biblicalReference: '📖 Efésios 4:32',
            biblicalExplanation: 'Antes sede uns para com os outros benignos, misericordiosos, perdoando-vos mutuamente, como também Deus vos perdoou em Cristo.'
          },
          {
            id: 'pm_1_b',
            text: 'Dizer a si mesmo que "ele colheu o que plantou" e recusar-se a ir ao hospital.',
            consequence: 'Você mantém a amargura no coração e carrega o remorso caso ele faleça sem a reconciliação.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Cuidado com a raiz de amargura.',
            biblicalReference: '📖 Hebreus 12:15',
            biblicalExplanation: 'Tendo cuidado de que ninguém se prive da graça de Deus, e de que nenhuma raiz de amargura, brotando, vos perturbe.'
          },
          {
            id: 'pm_1_c',
            text: 'Mandar uma mensagem carinhosa ou flores para a família dele demonstrando apoio no momento difícil.',
            consequence: 'Sua atitude abre portas para que a mágoa antiga comece a se dissolver na família.',
            effects: { misericordia: 4, sabedoria: 4, fe: 3 },
            biblicalPrinciple: 'Iniciativa de paz.',
            biblicalReference: '📖 Romanos 12:18',
            biblicalExplanation: 'Se for possível, quanto estiver em vós, tende paz com todos os homens.'
          },
          {
            id: 'pm_1_d',
            text: 'Orar em silêncio pedindo que Deus cure a saúde e a alma daquele parente.',
            consequence: 'Sua oração limpa seu coração e prepara sua mente para o reencontro.',
            effects: { fe: 5, misericordia: 4 },
            biblicalPrinciple: 'Orar pelos que nos ofenderam.',
            biblicalReference: '📖 Mateus 5:44',
            biblicalExplanation: 'Amai a vossos inimigos, bendizei os que vos maldizem, fazei bem aos que vos odeiam, e orai pelos que vos maltratam.'
          }
        ]
      },
      {
        id: 'pm_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A CONVERSA NO LEITO',
        context: 'Ao lado do leito, o parente segura sua mão com dificuldade e pede desculpas pelo erro que cometeu no passado.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'pm_2_a',
            text: 'Olhar nos olhos dele e dizer: "Eu te perdoo de todo o meu coração. A paz de Cristo está entre nós."',
            consequence: 'O peso de anos de amargura desaparece do quarto e a paz celestial envolve a ambos.',
            effects: { misericordia: 5, fe: 5, integridade: 5 },
            biblicalPrinciple: 'Perdoar assim como fomos perdoados.',
            biblicalReference: '📖 Colossenses 3:13',
            biblicalExplanation: 'Perdoando-vos mutuamente, caso alguém tenha motivo de queixa contra outrem. Assim como o Senhor vos perdoou, assim fazei vós também.'
          },
          {
            id: 'pm_2_b',
            text: 'Lembrar a ele de todo o prejuízo financeiro que ele te causou antes de aceitar desculpas.',
            consequence: 'Sua cobrança traz dor desnecessária a um momento que exigia compaixão.',
            effects: { misericordia: 1 },
            biblicalPrinciple: 'Não cobrar dívidas de quem busca perdão.',
            biblicalReference: '📖 Mateus 18:32–33',
            biblicalExplanation: 'Servo malvado, perdoei-te toda aquela dívida... Não devias tu também ter compaixão do teu companheiro?'
          },
          {
            id: 'pm_2_c',
            text: 'Orar junto com ele pela recuperação da saúde e pela salvação da sua alma.',
            consequence: 'Ele aceita Jesus Cristo naquele leito e chora em profunda paz espiritual.',
            effects: { fe: 5, misericordia: 5, coragem: 3 },
            biblicalPrinciple: 'Graça e salvação no momento de vulnerabilidade.',
            biblicalReference: '📖 Lucas 23:43',
            biblicalExplanation: 'Em verdade te digo que hoje estarás comigo no Paraíso.'
          },
          {
            id: 'pm_2_d',
            text: 'Chamar os outros membros da família para presenciarem o abraço de reconciliação.',
            consequence: 'A família inteira é restaurada vendo o milagre da reconciliação acontecer.',
            effects: { misericordia: 5, sabedoria: 5, fe: 4 },
            biblicalPrinciple: 'O ministério da reconciliação familiar.',
            biblicalReference: '📖 2 Coríntios 5:18',
            biblicalExplanation: 'Tudo isto provém de Deus, que nos reconciliou consigo mesmo por Jesus Cristo e nos deu o ministério da reconciliação.'
          }
        ]
      },
      {
        id: 'pm_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: A RECUPERAÇÃO E O ALMOÇO',
        context: 'O parente se recupera da enfermidade e a família organiza um almoço de domingo para celebrar a saúde e a paz restabelecida.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'pm_3_a',
            text: 'Participar do almoço com alegria sincera, sem mencionar os problemas do passado.',
            consequence: 'A comunhão familiar é selada com risadas, respeito e amor renascido.',
            effects: { misericordia: 5, sabedoria: 4, integridade: 4, fe: 3 },
            biblicalPrinciple: 'Lançar os erros no fundo do mar.',
            biblicalReference: '📖 Miquéias 7:19',
            biblicalExplanation: 'Tornará a ter compaixão de nós; pisará as nossas iniquidades e lançará todos os nossos pecados nas profundezas do mar.'
          },
          {
            id: 'pm_3_b',
            text: 'Ficar num canto isolado checando o celular sem se misturar com os parentes.',
            consequence: 'Sua distância passa a impressão de que o perdão não foi verdadeiro.',
            effects: { fe: 2 },
            biblicalPrinciple: 'O perdão deve ser de coração sincero.',
            biblicalReference: '📖 Mateus 18:35',
            biblicalExplanation: 'Se do coração não perdoardes, cada um a seu irmão, as suas ofensas.'
          },
          {
            id: 'pm_3_c',
            text: 'Fazer um brinde de agradecimento a Deus pela vida e pela unidade da família.',
            consequence: 'Seu discurso emociona a todos e consagra o lar a Deus.',
            effects: { fe: 5, misericordia: 4, sabedoria: 4 },
            biblicalPrinciple: 'Alegria pela restauração do irmão.',
            biblicalReference: '📖 Lucas 15:32',
            biblicalExplanation: 'Era justo alegrarmo-nos e regozijarmo-nos, porque este teu irmão estava morto e revivedu; e tinha-se perdido e achou-se.'
          },
          {
            id: 'pm_3_d',
            text: 'Oferecer-se para ajudar na organização e preparo dos pratos na cozinha.',
            consequence: 'O serviço humilde aproxima você dos parentes no trabalho de equipe.',
            effects: { misericordia: 4, integridade: 4 },
            biblicalPrinciple: 'Servir aos irmãos com amor.',
            biblicalReference: '📖 Galatas 5:13',
            biblicalExplanation: 'Servi-vos uns aos outros pelo amor.'
          }
        ]
      },
      {
        id: 'pm_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: A RESTITUIÇÃO ESPONTÂNEA',
        context: 'Semanas depois, o parente te procura e faz questão de devolver a quantia financeira que tinha sido motivo da discórdia no passado.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'pm_4_a',
            text: 'Aceitar a devolução com gratidão, reconhecendo o desejo sincero dele de reparar o erro.',
            consequence: 'A restituição traz cura completa e encerra qualquer pendência legal ou moral.',
            effects: { integridade: 5, sabedoria: 4, fe: 3 },
            biblicalPrinciple: 'Fruto digno de arrependimento e restituição.',
            biblicalReference: '📖 Lucas 19:8',
            biblicalExplanation: 'Se em alguma coisa tenho defraudado alguém, o restituo quadruplicado.'
          },
          {
            id: 'pm_4_b',
            text: 'Recusar o dinheiro dizendo que o perdão foi de graça e doar a quantia para uma obra missionária.',
            consequence: 'O valor financeiro se transforma em mantimento para famílias carentes.',
            effects: { fe: 5, misericordia: 5, integridade: 4 },
            biblicalPrinciple: 'Transformar restituição em bênção.',
            biblicalReference: '📖 2 Coríntios 9:11',
            biblicalExplanation: 'Enriquecidos em tudo para toda a generosidade.'
          },
          {
            id: 'pm_4_c',
            text: 'Propor usarem esse dinheiro para fazerem uma viagem em família todos juntos.',
            consequence: 'A viagem vira uma celebração inesquecível da unidade familiar.',
            effects: { misericordia: 5, sabedoria: 4 },
            biblicalPrinciple: 'Aproveitar a paz restaurada.',
            biblicalReference: '📖 Salmos 133:1',
            biblicalExplanation: 'Quão bom e suave é viver em união.'
          },
          {
            id: 'pm_4_d',
            text: 'Agradecer pela postura honesta dele e reafirmar que a amizade de vocês vale mais que qualquer dinheiro.',
            consequence: 'Ele se sente profundamente valorizado como ser humano e irmão.',
            effects: { misericordia: 5, integridade: 5, fe: 4 },
            biblicalPrinciple: 'O valor inestimável das pessoas sobre coisas.',
            biblicalReference: '📖 Provérbios 22:1',
            biblicalExplanation: 'Mais digno de ser escolhido é o bom nome do que as muitas riquezas.'
          }
        ]
      },
      {
        id: 'pm_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: A LIBERDADE DO CORAÇÃO',
        context: 'Livre do peso da mágoa, você sente uma leveza e paz espiritual que não experimentava há anos.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'pm_5_a',
            text: 'Agradecer a Deus por ter tirado a pedra do ressentimento do seu peito e te ensinado a perdoar.',
            consequence: 'Sua vida espiritual atinge um patamar elevado de comunhão com o Pai.',
            effects: { fe: 5, integridade: 5, misericordia: 5, sabedoria: 5 },
            biblicalPrinciple: 'Corativo do perdão na alma.',
            biblicalReference: '📖 Mateus 6:14',
            biblicalExplanation: 'Porque, se perdoardes aos homens as suas ofensas, também vosso Pai celestial vos perdoará a vós.'
          },
          {
            id: 'pm_5_b',
            text: 'Ajudar amigos que estão enfrentando divisões familiares a buscarem o caminho do perdão.',
            consequence: 'Seu testemunho real convence outros a perdoarem antes que seja tarde demais.',
            effects: { misericordia: 5, fe: 4, sabedoria: 5 },
            biblicalPrinciple: 'Embaixadores da reconciliação.',
            biblicalReference: '📖 2 Coríntios 5:20',
            biblicalExplanation: 'De sorte que somos embaixadores da parte de Cristo, como se Deus por nós rogasse.'
          },
          {
            id: 'pm_5_c',
            text: 'Manter a vigilância diária para não permitir que pequenas ofensas virem novas mágoas no futuro.',
            consequence: 'Seu coração permanece blindado na paz e na graça de Deus.',
            effects: { sabedoria: 5, integridade: 4, fe: 4 },
            biblicalPrinciple: 'Guardar o coração continuamente.',
            biblicalReference: '📖 Provérbios 4:23',
            biblicalExplanation: 'Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.'
          },
          {
            id: 'pm_5_d',
            text: 'Celebrar datas comemorativas reunindo sempre toda a família em ambiente de amor e oração.',
            consequence: 'Sua casa se torna a referência de unidade da família inteira.',
            effects: { fe: 4, misericordia: 5, integridade: 4 },
            biblicalPrinciple: 'Legado de paz comunitária.',
            biblicalReference: '📖 Mateus 5:9',
            biblicalExplanation: 'Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus.'
          }
        ]
      }
    ]
  },

  // 6. PRIORIDADES (TEMPO PARA O QUE IMPORTA)
  {
    id: 'tempo_para_o_que_importa',
    title: 'RITMO DE VIDA E PRIORIDADES',
    subtitle: 'Equilíbrio, saúde, trabalho e tempo com Deus',
    description: 'Sua rotina acelerada causa estresse, insônia e falta de tempo para oração e saúde. Como desacelerar e reordenar suas prioridades sob a vontade divina?',
    profiles: ['adulto'],
    theme: 'Prioridades e Saúde',
    icon: 'Clock',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'O que adianta conquistar a agenda inteira se você perder a comunhão com Deus e com os seus?',
    scenes: [
      {
        id: 'tp_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: O ALERTA DO CORPO',
        context: 'Seu médico alerta que seus exames de rotina alteraram por conta de estresse, má alimentação e falta de sono. Você vive correndo contra o relógio.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'tp_1_a',
            text: 'Reconhecer que seu corpo é templo do Espírito Santo e reestruturar sua agenda para ter sono, exercícios e boa alimentação.',
            consequence: 'Sua disposição física renasce e sua mente ganha clareza e produtividade equilibrada.',
            effects: { sabedoria: 5, integridade: 5, fe: 4 },
            biblicalPrinciple: 'Cuidar do corpo como templo de Deus.',
            biblicalReference: '📖 1 Coríntios 6:19–20',
            biblicalExplanation: 'Ou não sabeis que o vosso corpo é o templo do Espírito Santo... glorificai, pois, a Deus no vosso corpo.'
          },
          {
            id: 'tp_1_b',
            text: 'Ignorar o conselho médico e continuar trabalhando 14 horas por dia até ter um colapso.',
            consequence: 'Você tem uma crise de exaustão e precisa se afastar compulsoriamente do trabalho.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Prudência contra o excesso de presunção.',
            biblicalReference: '📖 Salmos 127:2',
            biblicalExplanation: 'Inútil vos será levantar de madrugada, repousar tarde, comer o pão de dores.'
          },
          {
            id: 'tp_1_c',
            text: 'Estabelecer um momento fixo de 30 minutos todos os dias pela manhã para devocional e oração em silêncio.',
            consequence: 'Sua alma se enche de paz e você começa o dia guiado por Deus, sem ansiedade.',
            effects: { fe: 5, sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Buscar o Senhor nas primeiras horas.',
            biblicalReference: '📖 Salmos 5:3',
            biblicalExplanation: 'Pela manhã ouvirás a minha voz, ó Senhor; pela manhã me apresentarei a ti, e olharei para cima.'
          },
          {
            id: 'tp_1_d',
            text: 'Conversar com seu gestor para redefinir prazos e metas realistas no seu setor.',
            consequence: 'Seu gestor concorda e a carga de estresse de toda a equipe é reduzida.',
            effects: { sabedoria: 4, integridade: 4, coragem: 3 },
            biblicalPrinciple: 'Diálogo sábio sobre limites.',
            biblicalReference: '📖 Provérbios 15:22',
            biblicalExplanation: 'Onde não há conselho os projetos saem vãos.'
          }
        ]
      },
      {
        id: 'tp_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: O SHABAT E O DOMINGO',
        context: 'Seu trabalho envia e-mails e mensagens no grupo do WhatsApp durante o domingo exigindo respostas imediatas.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'tp_2_a',
            text: 'Desligar as notificações do trabalho no domingo para se dedicar ao culto, à família e ao descanso pleno.',
            consequence: 'Sua mente descansa profundamente e você retorna na segunda-feira revigorado e mais inteligente.',
            effects: { fe: 5, integridade: 5, sabedoria: 4 },
            biblicalPrinciple: 'O princípio do descanso e santificação.',
            biblicalReference: '📖 Êxodo 20:8–10',
            biblicalExplanation: 'Lembra-te do dia do sábado para o santificar... seis dias trabalharás, mas o sétimo é o sábado do Senhor.'
          },
          {
            id: 'tp_2_b',
            text: 'Ficar checando e respondendo e-mails o domingo inteiro na mesa do almoço em família.',
            consequence: 'Sua família se sente trocada e seu corpo não descansa das tensões corporativas.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Respeitar os tempos e estações.',
            biblicalReference: '📖 Eclesiastes 3:1',
            biblicalExplanation: 'Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu.'
          },
          {
            id: 'tp_2_c',
            text: 'Avisar educadamente na reunião de segunda-feira que mensagens de domingo serão respondidas no horário comercial.',
            consequence: 'A equipe passa a respeitar o limite de tempo livre de todos os funcionários.',
            effects: { coragem: 4, sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Liderar com clareza e respeito ao descanso.',
            biblicalReference: '📖 Provérbios 22:3',
            biblicalExplanation: 'O prudente vê o mal e esconde-se.'
          },
          {
            id: 'tp_2_d',
            text: 'Aproveitar o domingo para fazer um passeio na natureza com sua família sem celulares.',
            consequence: 'A beleza da criação de Deus renova a alegria e a saúde emocional do lar.',
            effects: { misericordia: 5, fe: 4, sabedoria: 4 },
            biblicalPrinciple: 'Contemplação das obras de Deus.',
            biblicalReference: '📖 Salmos 19:1',
            biblicalExplanation: 'Os céus declaram a glória de Deus e o firmamento anuncia a obra das suas mãos.'
          }
        ]
      },
      {
        id: 'tp_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: A TENTAÇÃO DO CONSUMISMO',
        context: 'Sua nova renda te permitiria trocar de carro por um modelo muito mais caro, mas isso exigiria trabalhar horas extras aos sábados.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'tp_3_a',
            text: 'Manter seu carro atual em bom estado e valorizar seu tempo livre com a família nos sábados.',
            consequence: 'Você escolhe a riqueza do tempo presente em vez do status passageiro de um bem material.',
            effects: { sabedoria: 5, fe: 5, integridade: 4 },
            biblicalPrinciple: 'Contentamento e rejeição da vaidade.',
            biblicalReference: '📖 1 Timóteo 6:6',
            biblicalExplanation: 'Grande ganho é a piedade com o contentamento.'
          },
          {
            id: 'tp_3_b',
            text: 'Comprar o carro caro e passar todos os sábados trabalhando longe de casa.',
            consequence: 'O carro fica na garagem enquanto seus filhos crescem sem a sua presença nos finais de semana.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não trocar o essencial pelo supérfluo.',
            biblicalReference: '📖 Lucas 12:15',
            biblicalExplanation: 'A vida de qualquer um não consiste na abundância das coisas que possui.'
          },
          {
            id: 'tp_3_c',
            text: 'Usar o tempo do sábado para servir na sua comunidade ou ensinar algo aos seus filhos.',
            consequence: 'Seus sábados viram sementes de legado eterno na vida dos seus amados.',
            effects: { misericordia: 5, fe: 4, integridade: 4 },
            biblicalPrinciple: 'Investir o tempo no amor.',
            biblicalReference: '📖 Efésios 5:16',
            biblicalExplanation: 'Remindo o tempo, porquanto os dias são maus.'
          },
          {
            id: 'tp_3_d',
            text: 'Separar o dinheiro que gastaria nas parcelas do carro para criar um fundo de estudos para os filhos.',
            consequence: 'Sua visão de futuro garante a educação superior da próxima geração.',
            effects: { sabedoria: 5, integridade: 5 },
            biblicalPrinciple: 'Deixar herança e provisão para os filhos.',
            biblicalReference: '📖 Provérbios 13:22',
            biblicalExplanation: 'O homem de bem deixa uma herança aos filhos de seus filhos.'
          }
        ]
      },
      {
        id: 'tp_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O SERVIÇO NA IGREJA LOCAL',
        context: 'Sua igreja convida você para ajudar em um ministério de acolhimento aos domingos de manhã.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'tp_4_a',
            text: 'Aceitar com alegria, organizando sua semana para servir com entusiasmo e amor aos irmãos.',
            consequence: 'Seu serviço abençoa visitantes e enche seu coração da verdadeira alegria de servir.',
            effects: { fe: 5, misericordia: 5, integridade: 4 },
            biblicalPrinciple: 'Servir no corpo de Cristo com alegria.',
            biblicalReference: '📖 Salmos 100:2',
            biblicalExplanation: 'Servi ao Senhor com alegria; e entrai diante dele com canto.'
          },
          {
            id: 'tp_4_b',
            text: 'Recusar dizendo que já trabalha demais durante a semana e não tem tempo para a igreja.',
            consequence: 'Sua vida se torna seca espiritualmente pelo isolamento da comunhão servidora.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não deixar a congregação.',
            biblicalReference: '📖 Hebreus 10:25',
            biblicalExplanation: 'Não deixando a nossa congregação, como é costume de alguns; antes admoestando-nos uns aos outros.'
          },
          {
            id: 'tp_4_c',
            text: 'Servir no ministério acompanhado de toda a sua família, ensinando seus filhos a servirem juntos.',
            consequence: 'Seus filhos aprendem o amor à igreja e ao próximo vendo o exemplo dos pais.',
            effects: { fe: 5, misericordia: 4, sabedoria: 4 },
            biblicalPrinciple: 'Serviço em família.',
            biblicalReference: '📖 Josué 24:15',
            biblicalExplanation: 'Eu e a minha casa serviremos ao Senhor.'
          },
          {
            id: 'tp_4_d',
            text: 'Oferecer seus conhecimentos de gestão e profissionalismo para organizar a recepção da igreja.',
            consequence: 'A organização do acolhimento melhora e centenas de novos visitantes se sentem amados.',
            effects: { sabedoria: 5, integridade: 4, fe: 4 },
            biblicalPrinciple: 'Usar talentos para a edificação.',
            biblicalReference: '📖 1 Pedro 4:10',
            biblicalExplanation: 'Cada um administre aos outros o dom como o recebeu, como bons despenseiros da multiforme graça de Deus.'
          }
        ]
      },
      {
        id: 'tp_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: A PLENITUDE DE VIDA',
        context: 'Em uma fase madura, você olha para sua saúde renovada, sua família unida, seu trabalho íntegro e sua comunhão com Deus.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'tp_5_a',
            text: 'Louvar a Deus de todo o seu coração por te ensinar a viver no equilíbrio e na paz do Evangelho.',
            consequence: 'Sua vida é um testemunho radiante da boa, agradável e perfeita vontade de Deus.',
            effects: { fe: 5, integridade: 5, sabedoria: 5, misericordia: 5 },
            biblicalPrinciple: 'A boa, agradável e perfeita vontade de Deus.',
            biblicalReference: '📖 Romanos 12:2',
            biblicalExplanation: 'Para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus.'
          },
          {
            id: 'tp_5_b',
            text: 'Continuar sendo uma referência de equilíbrio e paz para os mais jovens.',
            consequence: 'Seu conselho ilumina o caminho de centenas de adultos em busca de sentido de vida.',
            effects: { sabedoria: 5, misericordia: 5, fe: 4 },
            biblicalPrinciple: 'Mentoria e exemplo vivo.',
            biblicalReference: '📖 Tito 2:7',
            biblicalExplanation: 'Em tudo te dá por exemplo de boas obras; na doutrina mostra incorrupção, gravidade, sinceridade.'
          },
          {
            id: 'tp_5_c',
            text: 'Manter a disciplina diária de oração, leitura bíblica e caminhadas ao ar livre.',
            consequence: 'Sua velhice permanece forte, lúcida e cheia do Espírito Santo.',
            effects: { fe: 5, sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Vigor espiritual na maturidade.',
            biblicalReference: '📖 Salmos 92:14',
            biblicalExplanation: 'Na velhice ainda darão frutos; serão viçosos e florescentes.'
          },
          {
            id: 'tp_5_d',
            text: 'Aproveitar cada momento com seus netos, transmitindo as histórias da fidelidade de Deus.',
            consequence: 'Sua herança de fé se perpetua forte pelas próximas gerações.',
            effects: { fe: 5, misericordia: 5, integridade: 5 },
            biblicalPrinciple: 'Fidelidade de geração em geração.',
            biblicalReference: '📖 Salmos 100:5',
            biblicalExplanation: 'Porque o Senhor é bom, e eterna a sua misericórdia; e a sua verdade dura de geração em geração.'
          }
        ]
      }
    ]
  }
];
