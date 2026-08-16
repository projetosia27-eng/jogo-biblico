import { RealLifeStory } from '../../types';

export const JOVEM_STORIES: RealLifeStory[] = [
  // 1. FACULDADE
  {
    id: 'desafios_na_faculdade',
    title: 'DESAFIOS NA FACULDADE',
    subtitle: 'Fé no meio acadêmico, integridade e coerência',
    description: 'No ambiente universitário, ideias e convicções são testadas diariamente. Como defender seus valores com sabedoria e respeito?',
    profiles: ['jovem'],
    theme: 'Faculdade e Fé',
    icon: 'GraduationCap',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Como você mantém sua fé viva e inteligente quando suas crenças são desafiadas?',
    scenes: [
      {
        id: 'df_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: O DEBATE NA AULA',
        context: 'Durante uma aula de filosofia, o professor ridiculariza a fé cristã e usa termos sarcásticos para se referir a pessoas religiosas. Ele olha para a sala e pergunta se alguém ali discorda da sua tese.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'df_1_a',
            text: 'Levantar a mão com respeito e apresentar argumentos fundamentados sobre a contribuição da fé e da razão.',
            consequence: 'Sua postura serena e fundamentada surpreende o professor e garante o respeito dos colegas.',
            effects: { coragem: 5, sabedoria: 4, fe: 4 },
            biblicalPrinciple: 'Dar razões da esperança com mansidão e temor.',
            biblicalReference: '📖 1 Pedro 3:15',
            biblicalExplanation: 'Estar sempre preparado para responder a qualquer que pedir a razão da esperança, com mansidão e respeito.'
          },
          {
            id: 'df_1_b',
            text: 'Ficar em silêncio por medo de passar vergonha ou perder nota no semestre.',
            consequence: 'Você preserva sua nota, mas sente o incômodo interno de ter se omitido na oportunidade.',
            effects: { fe: 1 },
            biblicalPrinciple: 'O perigo da omissão por receio.',
            biblicalReference: '📖 Provérbios 29:25',
            biblicalExplanation: 'Quem teme o homem cai em armadilhas, mas quem confia no Senhor está seguro.'
          },
          {
            id: 'df_1_c',
            text: 'Responder de forma agressiva atacando a opinião do professor perante a sala.',
            consequence: 'O clima na aula vira uma discussão acalorada sem aprendizado nem testemunho frutífero.',
            effects: { coragem: 2, sabedoria: 1 },
            biblicalPrinciple: 'Evitar contendas violentas de palavras.',
            biblicalReference: '📖 2 Timóteo 2:24',
            biblicalExplanation: 'Ao servo do Senhor não convém contender, mas sim ser brando para com todos, apto para ensinar, paciente.'
          },
          {
            id: 'df_1_d',
            text: 'Conversar com o professor no final da aula em particular de forma educada.',
            consequence: 'O professor aprecia sua atitude reservada e abre espaço para diálogos produtivos durante o semestre.',
            effects: { sabedoria: 5, integridade: 4, fe: 3 },
            biblicalPrinciple: 'Sabedoria no tratamento com autoridades.',
            biblicalReference: '📖 Colossenses 4:5–6',
            biblicalExplanation: 'Andai com sabedoria para com os que estão de fora; a vossa palavra seja sempre agradável.'
          }
        ]
      },
      {
        id: 'df_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: O TRABALHO EM GRUPO',
        context: 'Seu grupo de faculdade quer comprar um trabalho acadêmico pronto na internet para economizar tempo e tirar nota alta fácil.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'df_2_a',
            text: 'Recusar veementemente o plágio e se oferecer para escrever a parte teórica inteira do trabalho.',
            consequence: 'O grupo aceita a sua liderança e vocês entregam um projeto autêntico e de qualidade.',
            effects: { integridade: 5, coragem: 4, sabedoria: 3 },
            biblicalPrinciple: 'Trabalhar com honestidade e empenho.',
            biblicalReference: '📖 Provérbios 21:6',
            biblicalExplanation: 'A aquisição de tesouros por meio da língua mentirosa é vaidade e laço de morte.'
          },
          {
            id: 'df_2_b',
            text: 'Aceitar em silêncio e pagar a sua cota do trabalho comprado.',
            consequence: 'Você tira a nota, mas carrega o peso de ter praticado plágio e fraude intelectual.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Rejeitar ganhos ilícitos.',
            biblicalReference: '📖 Efésios 4:28',
            biblicalExplanation: 'Aquele que furtava não furte mais; antes trabalhe, fazendo com as mãos o que é bom.'
          },
          {
            id: 'df_2_c',
            text: 'Sair do grupo e fazer o trabalho sozinho do zero.',
            consequence: 'Você assume uma carga pesada de estudo, mas garante sua nota com total honestidade.',
            effects: { integridade: 5, coragem: 3 },
            biblicalPrinciple: 'Responsabilidade e zelo pessoal.',
            biblicalReference: '📖 Gálatas 6:5',
            biblicalExplanation: 'Cada qual levará a sua própria carga de responsabilidade.'
          },
          {
            id: 'df_2_d',
            text: 'Alertar o grupo sobre o risco de plágio e expulsão acadêmica previsto no regimento da faculdade.',
            consequence: 'Os colegas se assustam com a consequência legal e desistem de comprar o trabalho.',
            effects: { sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Prudência em prevenir ruínas.',
            biblicalReference: '📖 Provérbios 14:16',
            biblicalExplanation: 'O sábio teme e desvia-se do mal, mas o insensato é arrogante e se dá por seguro.'
          }
        ]
      },
      {
        id: 'df_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: A FESTA DO CENTRO ACADÊMICO',
        context: 'Seus colegas de curso organizam uma grande festa de recepção dos calouros com incentivo ao consumo excessivo de álcool e comportamentos irresponsáveis.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'df_3_a',
            text: 'Não ir à festa e marcar uma pizza em casa com colegas que buscam conversas mais profundas.',
            consequence: 'Você cultiva amizades leais e saudáveis fora do ambiente de excessos.',
            effects: { sabedoria: 4, integridade: 4, fe: 3 },
            biblicalPrinciple: 'Cultivar ambientes edificantes.',
            biblicalReference: '📖 2 Timóteo 2:22',
            biblicalExplanation: 'Foge das paixões da mocidade e segue a justiça, a fé, o amor e a paz com os que invocam o Senhor.'
          },
          {
            id: 'df_3_b',
            text: 'Ir à festa apenas para dar um abraço de parabéns aos calouros e sair antes dos excessos.',
            consequence: 'Você demonstra simpatia social mantendo limites claros sobre seus princípios.',
            effects: { sabedoria: 3, integridade: 3 },
            biblicalPrinciple: 'Prudência no caminhar no mundo.',
            biblicalReference: '📖 João 17:15',
            biblicalExplanation: 'Não peço que os tires do mundo, mas que os guardes do mal.'
          },
          {
            id: 'df_3_c',
            text: 'Ir à festa e beber além da conta para se enturmar rápido.',
            consequence: 'Você perde o autocontrole, faz coisas que se arrepende no dia seguinte e mancha seu testemunho.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Temperança e sobriedade.',
            biblicalReference: '📖 Efésios 5:18',
            biblicalExplanation: 'Não vos embriagueis com vinho, no qual há devassidão, mas enchei-vos do Espírito.'
          },
          {
            id: 'df_3_d',
            text: 'Oferecer carona segura para dois colegas que beberam não dirigirem.',
            consequence: 'Sua responsabilidade evita um grave acidente de trânsito naquela madrugada.',
            effects: { misericordia: 5, integridade: 4, coragem: 3 },
            biblicalPrinciple: 'Proteger a vida do próximo.',
            biblicalReference: '📖 Provérbios 3:27',
            biblicalExplanation: 'Não deixes de fazer o bem a quem de direito, estando na tua mão o poder de fazê-lo.'
          }
        ]
      },
      {
        id: 'df_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O GRUPO DE ESTUDOS E FÉ',
        context: 'Você percebe que outros alunos cristãos na faculdade também se sentem isolados. surge a ideia de criar um grupo de oração e estudos no campus.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'df_4_a',
            text: 'Liderar a criação do grupo universitário de estudo bíblico no horário do almoço.',
            consequence: 'Dezenas de estudantes encontram um oásis de fé, apoio e crescimento intelectual cristão.',
            effects: { fe: 5, coragem: 4, sabedoria: 4 },
            biblicalPrinciple: 'Edificar a igreja nos campi universitários.',
            biblicalReference: '📖 Mateus 28:19–20',
            biblicalExplanation: 'Ide e fazei discípulos de todas as nações, ensinando-os a guardar todas as coisas.'
          },
          {
            id: 'df_4_b',
            text: 'Apoiar o grupo participando semanalmente e trazendo amigos não cristãos para conhecer.',
            consequence: 'Seus amigos são tocados pelo amor genuíno e ambiente acolhedor.',
            effects: { misericordia: 4, fe: 4, integridade: 3 },
            biblicalPrinciple: 'Amor acolhedor e evangelismo.',
            biblicalReference: '📖 João 13:35',
            biblicalExplanation: 'Nisto todos conhecerão que sois meus discípulos: se vos amardes uns aos outros.'
          },
          {
            id: 'df_4_c',
            text: 'Hesitar em participar para não ficar conhecido como "o religioso do curso".',
            consequence: 'Você esconde sua luz debaixo do cesto e perde a oportunidade de impactar pessoas.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não se envergonhar do Evangelho.',
            biblicalReference: '📖 Romanos 1:16',
            biblicalExplanation: 'Não me envergonho do evangelho, pois é o poder de Deus para a salvação de todo aquele que crê.'
          },
          {
            id: 'df_4_d',
            text: 'Organizar arrecadações de livros e palestras de carreira ética para todo o curso.',
            consequence: 'O grupo ganha admiração da coordenação e impacta o ambiente acadêmico como um todo.',
            effects: { sabedoria: 5, integridade: 4, coragem: 3 },
            biblicalPrinciple: 'Luz do mundo e sal da terra.',
            biblicalReference: '📖 Mateus 5:14',
            biblicalExplanation: 'A luz deve resplandecer perante os homens para que vejam as vossas boas obras.'
          }
        ]
      },
      {
        id: 'df_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: A FORMATURA E O FUTURO',
        context: 'No dia da formatura, você olha para trás e percebe que concluiu o curso com excelência acadêmica e fé fortalecida.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'df_5_a',
            text: 'Agradecer a Deus por ter mantido seus pés firmes durante toda a jornada universitária.',
            consequence: 'Você inicia sua trajetória profissional preparado espiritualmente e tecnicamente.',
            effects: { fe: 5, integridade: 5, sabedoria: 4 },
            biblicalPrinciple: 'Gratidão e perseverança vitoriosa.',
            biblicalReference: '📖 2 Timóteo 4:7',
            biblicalExplanation: 'Combati o bom combate, acabei a carreira, guardei a fé.'
          },
          {
            id: 'df_5_b',
            text: 'Agradecer aos professores e colegas que te desafiaram a pensar com mais profundidade.',
            consequence: 'Sua humildade consolida portas abertas para mestrado e parcerias profissionais.',
            effects: { sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Honra e consideração.',
            biblicalReference: '📖 Romanos 13:7',
            biblicalExplanation: 'Dai a cada um o que lhe é devido: a quem honra, honra.'
          },
          {
            id: 'df_5_c',
            text: 'Comprometer-se a exercer sua profissão futura como um sacerdócio de serviço ao próximo.',
            consequence: 'Sua carreira ganha um propósito muito maior do que apenas ganhos financeiros.',
            effects: { misericordia: 5, fe: 4, integridade: 4 },
            biblicalPrinciple: 'Vocação e serviço.',
            biblicalReference: '📖 1 Pedro 4:10',
            biblicalExplanation: 'Servi uns aos outros conforme o dom que cada um recebeu, como bons dispensadores da multiforme graça de Deus.'
          },
          {
            id: 'df_5_d',
            text: 'Mentorar os novos calouros do seu curso para que não cometam os erros que você evitou.',
            consequence: 'Você deixa um legado vivo de mentoria cristã na universidade.',
            effects: { fe: 4, sabedoria: 5, misericordia: 3 },
            biblicalPrinciple: 'Passar o bastão da fé.',
            biblicalReference: '📖 2 Timóteo 2:2',
            biblicalExplanation: 'O que de mim ouviste, confia-o a homens fiéis que sejam idôneos para também ensinarem a outros.'
          }
        ]
      }
    ]
  },

  // 2. PRIMEIRO EMPREGO (A PROPOSTA)
  {
    id: 'a_proposta',
    title: 'PRIMEIRO EMPREGO',
    subtitle: 'Ética profissional, responsabilidade e escolhas',
    description: 'No seu primeiro trabalho formal, o seu chefe pede para você alterar relatórios financeiros para fazer a empresa parecer mais lucrativa.',
    profiles: ['jovem'],
    theme: 'Carreira e Trabalho',
    icon: 'Briefcase',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Até onde você vai para manter seu emprego quando exigem que descumpra seus princípios?',
    scenes: [
      {
        id: 'ap_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: A SOLICITAÇÃO DO CHEFE',
        context: 'Seu gestor direto te chama na sala dele e entrega uma planilha: "Ajuste esses números aqui. Se não batermos a meta no papel, o diretor vai cortar nossa equipe."',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'ap_1_a',
            text: 'Dizer com firmeza e respeito que não pode falsificar relatórios por uma questão de integridade.',
            consequence: 'O chefe fica irritado, mas percebe que você não cederá a fraudes na empresa.',
            effects: { integridade: 5, coragem: 5, fe: 3 },
            biblicalPrinciple: 'Recusa em praticar a falsidade.',
            biblicalReference: '📖 Provérbios 10:9',
            biblicalExplanation: 'Quem anda em integridade anda seguro, mas o que perverte os seus caminhos será conhecido.'
          },
          {
            id: 'ap_1_b',
            text: 'Alterar os números morrendo de medo para não perder o emprego no seu período de experiência.',
            consequence: 'Você mantém a vaga temporariamente, mas vive apreensivo com a possibilidade de uma auditoria.',
            effects: { fe: 1 },
            biblicalPrinciple: 'O perigo do ganho desonesto sob pressão.',
            biblicalReference: '📖 Provérbios 15:27',
            biblicalExplanation: 'O que é ávido por lucro desonesto transtorna a sua casa, mas o que odeia subornos viverá.'
          },
          {
            id: 'ap_1_c',
            text: 'Perguntar se há outra forma legítima de otimizar os custos reais antes de fechar o mês.',
            consequence: 'Você oferece uma solução profissional que reduz gastos sem precisar mentir.',
            effects: { sabedoria: 5, integridade: 4, coragem: 3 },
            biblicalPrinciple: 'Excelência e resolução sábia de problemas.',
            biblicalReference: '📖 Provérbios 22:29',
            biblicalExplanation: 'Ves um homem hábil no seu trabalho? Perante reis será posto.'
          },
          {
            id: 'ap_1_d',
            text: 'Pedir tempo até o final do dia para analisar as planilhas detalhadamente.',
            consequence: 'Você ganha tempo para orar, refletir e consultar uma orientação jurídica ou familiar.',
            effects: { sabedoria: 4, fe: 3 },
            biblicalPrinciple: 'Refletir antes de responder.',
            biblicalReference: '📖 Provérbios 15:28',
            biblicalExplanation: 'O coração do justo medita o que há de responder, mas a boca dos ímpios jorra coisas más.'
          }
        ]
      },
      {
        id: 'ap_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A REUNIÃO COM O RH',
        context: 'Percebendo que a prática ilícita é recorrente no setor, você precisa decidir se leva o fato ao canal de denúncias da empresa.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'ap_2_a',
            text: 'Relatar o ocorrido anonimamente no canal de compliance e ética da empresa.',
            consequence: 'Uma auditoria interna é aberta e as irregularidades são corrigidas sem te expor diretamente.',
            effects: { integridade: 5, sabedoria: 4, coragem: 3 },
            biblicalPrinciple: 'Promover a verdade e combater a corrupção.',
            biblicalReference: '📖 Efésios 5:11',
            biblicalExplanation: 'Não sejais cúmplices nas obras infrutíferas das trevas, antes desmascarai-as.'
          },
          {
            id: 'ap_2_b',
            text: 'Pedir demissão imediatamente para não se contaminar com o ambiente corrupto.',
            consequence: 'Você sai da empresa com as mãos limpas, confiando que Deus providenciará outro emprego.',
            effects: { fe: 5, coragem: 4, integridade: 4 },
            biblicalPrinciple: 'Confiança na provisão divina após decisão íntegra.',
            biblicalReference: '📖 Salmos 37:25',
            biblicalExplanation: 'Fui moço e agora sou velho, mas nunca vi desamparado o justo nem a sua descendência a mendigar o pão.'
          },
          {
            id: 'ap_2_c',
            text: 'Fazer apenas a sua parte do trabalho estritamente correta e ignorar os erros dos outros.',
            consequence: 'Você se protege pessoalmente, mas o setor continua acumulando problemas estruturais.',
            effects: { integridade: 3, sabedoria: 2 },
            biblicalPrinciple: 'Guardar os próprios caminhos.',
            biblicalReference: '📖 Gálatas 6:4',
            biblicalExplanation: 'Examine cada um a sua própria obra e então terá motivo de glória somente em si mesmo.'
          },
          {
            id: 'ap_2_d',
            text: 'Conversar com um colega mais antigo de confiança para entender a cultura da empresa.',
            consequence: 'Ele revela que a diretoria geral não sabe dos abusos do chefe e apoia que o RH seja informado.',
            effects: { sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'Buscar discernimento através de conselhos.',
            biblicalReference: '📖 Provérbios 20:18',
            biblicalExplanation: 'Os planos se estabelecem pelos conselhos; assim, com prudência faze a guerra.'
          }
        ]
      },
      {
        id: 'ap_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: O NOVO PROCESSO SELETIVO',
        context: 'Após os desdobramentos, você se inscreve em um processo seletivo numa multinacional reconhecida por seus valores éticos.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'ap_3_a',
            text: 'Demonstrar competência técnica e falar com sinceridade sobre sua visão de ética e responsabilidade.',
            consequence: 'Os entrevistadores ficam impressionados com seu caráter sólido e te contratam imediatamente.',
            effects: { integridade: 5, fe: 4, sabedoria: 4 },
            biblicalPrinciple: 'Testemunho de retidão que abre portas.',
            biblicalReference: '📖 Daniel 1:19–20',
            biblicalExplanation: 'Em toda matéria de sabedoria e de discernimento, o rei os achou dez vezes mais sábios.'
          },
          {
            id: 'ap_3_b',
            text: 'Aumentar suas qualificações no currículo para ter certeza de que será aprovado.',
            consequence: 'Você é aprovado, mas vive em pânico de ser testado em habilidades que mentiu possuir.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Falsidade em apresentações.',
            biblicalReference: '📖 Provérbios 12:19',
            biblicalExplanation: 'O lábio da verdade permanece para sempre, mas a língua mentirosa dura só um momento.'
          },
          {
            id: 'ap_3_c',
            text: 'Preparar-se intensamente estudando o mercado e orando por direção de Deus para a vaga.',
            consequence: 'Sua excelente preparação unida à fé gera uma entrevista impecável e serena.',
            effects: { fe: 5, sabedoria: 4 },
            biblicalPrinciple: 'Dedicação e oração unidas.',
            biblicalReference: '📖 Provérbios 16:3',
            biblicalExplanation: 'Confia ao Senhor as tuas obras e os teus pensamentos serão estabelecidos.'
          },
          {
            id: 'ap_3_d',
            text: 'Perguntar ao recrutador abertamente quais são os valores práticos da cultura daquela empresa.',
            consequence: 'Sua pergunta demonstra maturidade de quem escolhe onde quer trabalhar com propósito.',
            effects: { sabedoria: 5, coragem: 3 },
            biblicalPrinciple: 'Prudência nas escolhas.',
            biblicalReference: '📖 Provérbios 14:8',
            biblicalExplanation: 'A sabedoria do prudente é entender o seu caminho.'
          }
        ]
      },
      {
        id: 'ap_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O PRIMEIRO DESAFIO NO NOVO EMPREGO',
        context: 'No novo trabalho, você recebe um projeto complexo com prazo apertado. A tentação de levar trabalho para fazer no final de semana sem descansar surge.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'ap_4_a',
            text: 'Organizar um cronograma de trabalho focado durante o expediente e guardar o domingo para descanso e culto.',
            consequence: 'Você produz com alto rendimento durante a semana e renova suas forças no dia do Senhor.',
            effects: { fe: 5, sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Princípio do descanso e do Shabat.',
            biblicalReference: '📖 Êxodo 20:8–10',
            biblicalExplanation: 'Lembra-te do dia do sábado para o santificar; seis dias trabalharás, mas o sétimo é o sábado do Senhor.'
          },
          {
            id: 'ap_4_b',
            text: 'Trabalhar 16 horas por dia ininterruptamente, ignorando saúde, família e igreja.',
            consequence: 'Você entrega o projeto, mas tem uma crise de exaustão e burnout na semana seguinte.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Inutilidade do trabalho sem a bênção do descanso.',
            biblicalReference: '📖 Salmos 127:2',
            biblicalExplanation: 'Inútil vos será levantar de madrugada, repousar tarde; aos seus amados dá ele o sono.'
          },
          {
            id: 'ap_4_c',
            text: 'Pedir ajuda à equipe e delegar tarefas com transparência quando o prazo parecer curto.',
            consequence: 'A equipe se une em cooperação e o projeto é entregue com extrema qualidade técnica.',
            effects: { sabedoria: 5, integridade: 3, misericordia: 3 },
            biblicalPrinciple: 'Trabalho em equipe e humildade.',
            biblicalReference: '📖 Provérbios 15:22',
            biblicalExplanation: 'Onde não há conselho os projetos saem vãos, mas na multidão de conselheiros se estabelecem.'
          },
          {
            id: 'ap_4_d',
            text: 'Informar ao gestor com antecedência e clareza sobre o ritmo de entrega real do projeto.',
            consequence: 'O gestor elogia sua clareza de planejamento e ajusta o cronograma com os clientes.',
            effects: { integridade: 4, sabedoria: 4, coragem: 3 },
            biblicalPrinciple: 'Comunicação transparente.',
            biblicalReference: '📖 Provérbios 17:7',
            biblicalExplanation: 'Não convém ao tolo a fala excelente; quanto menos ao príncipe o falar mentiroso!'
          }
        ]
      },
      {
        id: 'ap_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O RECONHECIMENTO E PROMOÇÃO',
        context: 'Ao final do primeiro ano, sua conduta íntegra e alta produtividade rendem uma promoção a analista sênior.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'ap_5_a',
            text: 'Atribuir a promoção à graça de Deus e dedicar parte do novo salário a projetos sociais.',
            consequence: 'Sua prosperidade se transforma em abençoadora de vidas necessitadas.',
            effects: { fe: 5, misericordia: 5, integridade: 4 },
            biblicalPrinciple: 'Dízimo, ofertas e generosidade.',
            biblicalReference: '📖 Provérbios 3:9–10',
            biblicalExplanation: 'Honra ao Senhor com os teus bens e com as primícias de toda a tua renda; e se encherão os teus celeiros.'
          },
          {
            id: 'ap_5_b',
            text: 'Assumir o novo cargo comprometendo-se a ser um gestor humano e justo com os estagiários.',
            consequence: 'Seus liderados te enxergam como um líder inspirador e ético.',
            effects: { misericordia: 4, sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Liderança servidora.',
            biblicalReference: '📖 Mateus 20:26–27',
            biblicalExplanation: 'Quem quiser tornar-se grande entre vós será esse o vosso servo.'
          },
          {
            id: 'ap_5_c',
            text: 'Comprar bens caros imediatamente para mostrar aos amigos do antigo emprego o seu sucesso.',
            consequence: 'Você cai na armadilha do orgulho profissional e esgota sua reserva de emergência.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Fazer coisas por soberba da vida.',
            biblicalReference: '📖 1 João 2:16',
            biblicalExplanation: 'Tudo o que há no mundo... a soberba da vida, não é do Pai, mas do mundo.'
          },
          {
            id: 'ap_5_d',
            text: 'Agradecer à sua família e mentores que te apoiaram nos momentos de incerteza inicial.',
            consequence: 'Sua gratidão fortalece suas raízes de humildade perante o crescimento profissional.',
            effects: { integridade: 4, misericordia: 4, fe: 3 },
            biblicalPrinciple: 'Reconhecimento das fontes de apoio.',
            biblicalReference: '📖 Provérbios 27:10',
            biblicalExplanation: 'Não abandones o teu amigo, nem o amigo de teu pai.'
          }
        ]
      }
    ]
  },

  // 3. NAMORO (ESCOLHAS NO NAMORO)
  {
    id: 'escolhas_no_namoro',
    title: 'RELACIONAMENTO E PROPÓSITO',
    subtitle: 'Namoro cristão, limites e alinhamento de vida',
    description: 'Você está apaixonado por alguém com valores opostos aos seus em fé, hábitos e visão de futuro. Como conduzir o relacionamento com sabedoria?',
    profiles: ['jovem'],
    theme: 'Namoro e Afeto',
    icon: 'Heart',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'O afeto cego pode te afastar dos propósitos eternos da sua vida?',
    scenes: [
      {
        id: 'en_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: A INCOMPATIBILIDADE DE VALORES',
        context: 'Após alguns meses de conversa, a pessoa com quem você está saindo deixa claro que não entende sua fé, odeia ir à igreja e acha ridículo guardar limites de pureza.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'en_1_a',
            text: 'Ter uma conversa transparente e decidir não avançar para um namoro sem alinhamento espiritual.',
            consequence: 'A decisão dói no momento, mas preserva seu coração e sua fé para o futuro.',
            effects: { sabedoria: 5, fe: 5, integridade: 4 },
            biblicalPrinciple: 'Evitar o jugo desigual no relacionamento.',
            biblicalReference: '📖 2 Coríntios 6:14',
            biblicalExplanation: 'Não vos ponhais em jugo desigual com os incrédulos; pois que sociedade tem a justiça com a iniquidade?'
          },
          {
            id: 'en_1_b',
            text: 'Ignorar as diferenças achando que com o tempo você conseguirá mudar a pessoa.',
            consequence: 'Você entra num relacionamento com conflitos diários e desgaste da sua vida espiritual.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Presunção em achar que altera o coração alheio.',
            biblicalReference: '📖 Provérbios 4:23',
            biblicalExplanation: 'Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.'
          },
          {
            id: 'en_1_c',
            text: 'Convidá-la para ir a um culto especial ou estudo para conhecer mais da sua fé antes de decidir.',
            consequence: 'A pessoa aceita ir, abrindo espaço para um diálogo sincero e respeito mútuo.',
            effects: { fe: 4, misericordia: 3, sabedoria: 3 },
            biblicalPrinciple: 'Oportunidade de testemunho.',
            biblicalReference: '📖 1 Pedro 3:1',
            biblicalExplanation: 'Sejam ganhos sem palavra, pelo procedimento... observando a vossa conduta pura e respeitosa.'
          },
          {
            id: 'en_1_d',
            text: 'Pedir conselho ao seu pastor ou casal de mentores de confiança na igreja.',
            consequence: 'Você recebe um direcionamento maduro e equilibrado baseado na Palavra.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Conselho sábio no relacionamento.',
            biblicalReference: '📖 Provérbios 11:14',
            biblicalExplanation: 'Não havendo sábia direção, o povo cai, mas na multidão de conselheiros há segurança.'
          }
        ]
      },
      {
        id: 'en_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: LIMITES DE PUREZA E RESPEITO',
        context: 'Em um namoro com alinhamento de fé, vocês são pressionados pela cultura ao redor a avançar para a intimidade física antes do casamento.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'en_2_a',
            text: 'Conversar abertamente com o namorado(a) e estabelecerem juntos limites práticos e claros de proteção.',
            consequence: 'O relacionamento ganha profundidade emocional, cumplicidade e paz com Deus.',
            effects: { integridade: 5, fe: 4, sabedoria: 4 },
            biblicalPrinciple: 'Honrar o corpo e a pureza no namoro.',
            biblicalReference: '📖 1 Tessalonicenses 4:3–5',
            biblicalExplanation: 'Esta é a vontade de Deus, a vossa santificação: que vos abstendes da imoralidade; que cada um saiba possuir o seu vaso em santificação e honra.'
          },
          {
            id: 'en_2_b',
            text: 'Ceder às pressões do momento sem conversar sobre o assunto.',
            consequence: 'A culpa e o peso espiritual enfraquecem a confiança entre o casal.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Fugir das tentações da carne.',
            biblicalReference: '📖 1 Coríntios 6:18',
            biblicalExplanation: 'Fugi da imoralidade. Qualquer outro pecado que o homem comete é fora do corpo; mas o que se prostitui peca contra o seu próprio corpo.'
          },
          {
            id: 'en_2_c',
            text: 'Evitar ficar a sós em locais isolados no período da noite.',
            consequence: 'A estratégia prática de fugir das oportunidades protege os sentimentos e o corpo de ambos.',
            effects: { sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Prudência e fuga do perigo.',
            biblicalReference: '📖 Provérbios 22:3',
            biblicalExplanation: 'O prudente vê o mal e esconde-se, mas os inexperientes passam e sofrem a pena.'
          },
          {
            id: 'en_2_d',
            text: 'Orar juntos no início ou final dos encontros pedindo a bênção de Deus para o namoro.',
            consequence: 'A vida de oração a dois edifica uma aliança sólida ancorada no Senhor.',
            effects: { fe: 5, misericordia: 3, integridade: 3 },
            biblicalPrinciple: 'Deus como centro do relacionamento.',
            biblicalReference: '📖 Eclesiastes 4:12',
            biblicalExplanation: 'Se alguém quiser prevalecer contra um, os dois lhe resistirão; e o cordão de três dobras não se quebra tão depressa.'
          }
        ]
      },
      {
        id: 'en_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: O CONFLITO FAMILIAR',
        context: 'A família da sua namorada passa por uma crise financeira grave e ela pensa em trancar a faculdade por desespero.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'en_3_a',
            text: 'Oferecer apoio emocional constante e ajudá-la a reorganizar o orçamento pessoal.',
            consequence: 'Ela se sente fortalecida e descobre alternativas de bolsas e trabalhos na faculdade.',
            effects: { misericordia: 5, integridade: 4, sabedoria: 4 },
            biblicalPrinciple: 'Amor servidor na adversidade.',
            biblicalReference: '📖 Provérbios 17:17',
            biblicalExplanation: 'O amigo ama em todo o tempo; e para a angústia nasce o irmão.'
          },
          {
            id: 'en_3_b',
            text: 'Afastar-se aos poucos por não querer se envolver nos problemas da família dela.',
            consequence: 'Seu egoísmo destrói o vínculo de confiança e demonstra falta de amor real.',
            effects: { misericordia: 1 },
            biblicalPrinciple: 'Cuidado com o egoísmo nos afetos.',
            biblicalReference: '📖 1 João 3:17',
            biblicalExplanation: 'Quem tiver bens do mundo e, vendo o seu irmão necessitado, fechar-lhe o seu coração, como permanece nele o amor de Deus?'
          },
          {
            id: 'en_3_c',
            text: 'Envolver sua própria família para tentar ajudar com contatos de trabalho para os pais dela.',
            consequence: 'A rede de apoio cristão consegue uma entrevista e a família dela se reestrutura.',
            effects: { fe: 4, misericordia: 5, integridade: 3 },
            biblicalPrinciple: 'Solidariedade entre as famílias.',
            biblicalReference: '📖 Galatas 6:2',
            biblicalExplanation: 'Levai as cargas uns dos outros e assim cumprireis a lei de Cristo.'
          },
          {
            id: 'en_3_d',
            text: 'Orar com fervor com ela todas as noites pedindo a provisão de Deus.',
            consequence: 'A fé dela é renovada e uma solução inesperada surge no final do mês.',
            effects: { fe: 5, misericordia: 4 },
            biblicalPrinciple: 'Poder da oração concordante.',
            biblicalReference: '📖 Mateus 18:19',
            biblicalExplanation: 'Se dois de vós concordarem na terra acerca de qualquer coisa que pedirem, isso lhes será feito por meu Pai.'
          }
        ]
      },
      {
        id: 'en_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: A DECISÃO DE NOIVADO',
        context: 'Após anos de namoro maduro e abençoado, vocês sentem no coração que é o momento de dar o passo rumo ao casamento.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'en_4_a',
            text: 'Conversar com os pais de ambos para pedir a bênção formal antes de propor o noivado.',
            consequence: 'Os pais ficam emocionados com a honra e abençoam a nova família que se formará.',
            effects: { integridade: 5, sabedoria: 5, fe: 4 },
            biblicalPrinciple: 'Honrar a autoridade familiar no casamento.',
            biblicalReference: '📖 Efésios 6:2',
            biblicalExplanation: 'Honra a teu pai e a tua mãe para que te vá bem.'
          },
          {
            id: 'en_4_b',
            text: 'Fazer o pedido em segredo e só contar aos pais após tudo pronto.',
            consequence: 'O ato empolga o casal, mas gera certo distanciamento das famílias no processo.',
            effects: { sabedoria: 2 },
            biblicalPrinciple: 'Envolver a comunidade de fé e família.',
            biblicalReference: '📖 Provérbios 15:22',
            biblicalExplanation: 'Na multidão de conselheiros estabelecem-se os planos.'
          },
          {
            id: 'en_4_c',
            text: 'Planejar um curso de noivos completo na igreja para aprenderem sobre finanças, comunicação e lar.',
            consequence: 'O casal se edifica sobre rocha firme antes mesmo da celebração do casamento.',
            effects: { sabedoria: 5, fe: 4, integridade: 4 },
            biblicalPrinciple: 'Construção do lar sobre a Rocha.',
            biblicalReference: '📖 Mateus 7:24',
            biblicalExplanation: 'Todo aquele que ouve estas minhas palavras e as pratica será comparado a um homem sábio que edificou a sua casa sobre a rocha.'
          },
          {
            id: 'en_4_d',
            text: 'Montar um orçamento simples para o casamento sem se endividar com festas ostentosas.',
            consequence: 'Vocês iniciam a vida a dois com paz financeira e sem dívidas acumuladas.',
            effects: { integridade: 4, sabedoria: 5 },
            biblicalPrinciple: 'Prudência nas finanças do lar.',
            biblicalReference: '📖 Provérbios 22:7',
            biblicalExplanation: 'O rico domina sobre os pobres e o que toma emprestado é servo do que empresta.'
          }
        ]
      },
      {
        id: 'en_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O NOVO LAR',
        context: 'No dia do casamento, vocês trocam votos abençoados perante a comunidade de fé, a família e Deus.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'en_5_a',
            text: 'Consagrar o novo lar a Deus, estabelecendo o hábito do culto doméstico e da oração diária.',
            consequence: 'Sua casa se torna um refúgio de paz, amor e presença de Deus para a futura geração.',
            effects: { fe: 5, integridade: 5, misericordia: 4 },
            biblicalPrinciple: 'Eu e a minha casa serviremos ao Senhor.',
            biblicalReference: '📖 Josué 24:15',
            biblicalExplanation: 'Eu e a minha casa serviremos ao Senhor.'
          },
          {
            id: 'en_5_b',
            text: 'Comprometer-se a praticar o perdão e o diálogo diário sem deixar o sol se pôr sobre a ira.',
            consequence: 'Os conflitos normais da convivência são resolvidos rapidamente com amor.',
            effects: { misericordia: 5, sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Perdão contínuo no matrimônio.',
            biblicalReference: '📖 Efésios 4:26',
            biblicalExplanation: 'Não se ponha o sol sobre a vossa ira.'
          },
          {
            id: 'en_5_c',
            text: 'Abrir a casa para acolher jovens e noivos que precisam de bons exemplos de relacionamento.',
            consequence: 'Seu casamento se torna um farol de esperança na comunidade.',
            effects: { fe: 4, misericordia: 5, sabedoria: 4 },
            biblicalPrinciple: 'Hospitalidade e mentoria matrimonial.',
            biblicalReference: '📖 Tito 2:3–4',
            biblicalExplanation: 'Ensine o bem para que instruam as mais jovens a amarem seus maridos e seus filhos.'
          },
          {
            id: 'en_5_d',
            text: 'Manter a fidelidade absoluta em pensamentos, olhos e atitudes por toda a vida.',
            consequence: 'A aliança conjugal permanece inabalável contra todas as tentações do mundo.',
            effects: { integridade: 5, fe: 4, coragem: 4 },
            biblicalPrinciple: 'Fidelidade e honra ao leito conjugal.',
            biblicalReference: '📖 Hebreus 13:4',
            biblicalExplanation: 'Venerado seja entre todos o casamento e o leito sem mácula.'
          }
        ]
      }
    ]
  },

  // 4. PRESSÃO SOCIAL NA JUVENTUDE (O RITMO DA TURMA)
  {
    id: 'o_ritmo_da_turma',
    title: 'PRESSÃO NA JUVENTUDE',
    subtitle: 'Estilo de vida, baladas e postura moral',
    description: 'Seus colegas de trabalho te convidam para um pós-expediente regado a bebidas e flertes irresponsáveis. Como manter sua identidade firme sem parecer arrogante?',
    profiles: ['jovem'],
    theme: 'Pressão Social e Estilo de Vida',
    icon: 'PartyPopper',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Sua conduta muda de acordo com o grupo com o qual você está convivendo?',
    scenes: [
      {
        id: 'rt_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: O CONVITE DO HAPPY HOUR',
        context: 'A equipe inteira do seu setor combina de ir a um bar badalado na sexta-feira. Um colega te pressiona: "Você nunca vai a lugar nenhum, tá na hora de virar gente grande e curtir a vida!"',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'rt_1_a',
            text: 'Aceitar ir, tomar um suco, conversar com o pessoal por uma hora e depois ir para casa.',
            consequence: 'Você marca presença profissional e social sem precisar consumir bebidas ou mudar seus hábitos.',
            effects: { sabedoria: 4, integridade: 4, coragem: 3 },
            biblicalPrinciple: 'Ser sal da terra sem perder o sabor.',
            biblicalReference: '📖 Mateus 5:13',
            biblicalExplanation: 'Vós sois o sal da terra... se o sal for insípido, com que se há de salgar?'
          },
          {
            id: 'rt_1_b',
            text: 'Recusar com rispidez dizendo que aquele ambiente é promíscuo e impróprio.',
            consequence: 'Os colegas te julgam como fanático e fecham as portas de convivência e diálogo.',
            effects: { coragem: 2, sabedoria: 1 },
            biblicalPrinciple: 'Evitar a arrogância e o julgamento Farisaico.',
            biblicalReference: '📖 Lucas 18:11–12',
            biblicalExplanation: 'O fariseu orava de si para si: Ó Deus, graças te dou porque não sou como os demais homens...'
          },
          {
            id: 'rt_1_c',
            text: 'Ceder à pressão e beber além da conta para mostrar que sabe "curtir".',
            consequence: 'Você comete excessos dos quais se arrepende e perde o respeito dos colegas que te admiravam.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não se conformar com este século.',
            biblicalReference: '📖 Romanos 12:2',
            biblicalExplanation: 'Não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento.'
          },
          {
            id: 'rt_1_d',
            text: 'Declinar gentilmente dizendo que já tem um compromisso na igreja ou em família naquela noite.',
            consequence: 'Sua recusa é educada e aceita sem maiores questionamentos pela equipe.',
            effects: { integridade: 4, fe: 3, sabedoria: 3 },
            biblicalPrinciple: 'Priorizar compromissos com Deus e família.',
            biblicalReference: '📖 Salmos 16:11',
            biblicalExplanation: 'Tu me farás ver a vereda da vida; na tua presença há fartura de alegrias.'
          }
        ]
      },
      {
        id: 'rt_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A CONVERSA INCONVENIENTE',
        context: 'Durante o almoço na empresa, a roda de conversa começa a rir de piadas pesadas com conotação sexual e preconceituosa.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'rt_2_a',
            text: 'Mudar discretamente o rumo da conversa para um assunto sobre esportes ou filmes.',
            consequence: 'A roda acompanha a mudança de assunto e o clima volta a ser agradável.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Desviar a conversa da torpeza.',
            biblicalReference: '📖 Efésios 5:4',
            biblicalExplanation: 'Nem torpitudes, nem conversas tolas, nem chocarrices, que não convêm; mas antes ações de graças.'
          },
          {
            id: 'rt_2_b',
            text: 'Rir junto para não parecer desenturmado ou deslocado.',
            consequence: 'Você valida a piada preconceituosa e fere seus próprios princípios mentais.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não participar das obras infrutíferas.',
            biblicalReference: '📖 Salmos 1:1',
            biblicalExplanation: 'Bem-aventurado o homem que não anda no conselho dos ímpios nem se assenta na roda dos escarnecedores.'
          },
          {
            id: 'rt_2_c',
            text: 'Levantar-se com educação para pegar um café ou terminar de almoçar em outro lugar.',
            consequence: 'Sua atitude de saída discreta envia um recado de respeito sem necessidade de sermões.',
            effects: { integridade: 4, coragem: 3, sabedoria: 3 },
            biblicalPrinciple: 'Retirar-se da zombaria.',
            biblicalReference: '📖 Provérbios 22:10',
            biblicalExplanation: 'Lança fora o escarnecedor, e sairá a contenda; e cessará a demanda e a injúria.'
          },
          {
            id: 'rt_2_d',
            text: 'Comentar com firmeza: "Galera, essa piada é meio pesada com o pessoal, né?"',
            consequence: 'Alguns colegas ficam sem graça e reconhecem o exagero do comentário.',
            effects: { coragem: 4, integridade: 4 },
            biblicalPrinciple: 'Repreensão em favor do respeito.',
            biblicalReference: '📖 Levítico 19:17',
            biblicalExplanation: 'Não odiarás a teu irmão no teu coração; repreenderás o teu próximo e não levarás sobre ti pecado por causa dele.'
          }
        ]
      },
      {
        id: 'rt_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: O CONVITE DE VIAGEM',
        context: 'A turma combina um final de semana numa praia com bebidas liberadas e aluguel de casa compartilhada sem divisões claras.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'rt_3_a',
            text: 'Declinar a viagem e organizar um acampamento ou retiro jovem com sua igreja.',
            consequence: 'Seu final de semana é revigorante, cheio de comunhão e fortalecimento espiritual.',
            effects: { fe: 5, sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Alegria pura e edificante.',
            biblicalReference: '📖 Salmos 133:1',
            biblicalExplanation: 'Oh! quão bom e quão suave é que os irmãos vivam em união!'
          },
          {
            id: 'rt_3_b',
            text: 'Ir para a viagem acreditando que vai conseguir mudar todo o ambiente sozinho.',
            consequence: 'Você se vê cercado por situações constrangedoras e difíceis de administrar.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Prudência ao medir limites.',
            biblicalReference: '📖 Provérbios 27:12',
            biblicalExplanation: 'O prudente vê o mal e esconde-se, mas os inexperientes passam e sofrem a pena.'
          },
          {
            id: 'rt_3_c',
            text: 'Propor uma viagem em grupo diferente para uma pousada tranquila focada em ecoturismo.',
            consequence: 'Dois colegas topam a ideia alternativa e se divertem bastante com você.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Criar alternativas saudáveis de lazer.',
            biblicalReference: '📖 Eclesiastes 11:9',
            biblicalExplanation: 'Alegra-te, jovem, na tua mocidade... mas sabe que por todas estas coisas te trará Deus a juízo.'
          },
          {
            id: 'rt_3_d',
            text: 'Orar pelos colegas para que tenham um final de semana protegido sem acidentes.',
            consequence: 'Sua intercessão sincera demonstra amor sem conivência com o erro.',
            effects: { fe: 4, misericordia: 5 },
            biblicalPrinciple: 'Intercessão pelos outros.',
            biblicalReference: '📖 1 Timóteo 2:1',
            biblicalExplanation: 'Admoesto-te, pois, antes de tudo, que se façam deprecações, orações, intercessões e ações de graças por todos os homens.'
          }
        ]
      },
      {
        id: 'rt_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O TESTEMUNHO SILENCIOSO',
        context: 'Um dos colegas da empresa que mais zombava da sua postura passa por uma grave crise pessoal e vem te procurar em particular.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'rt_4_a',
            text: 'Escutá-lo com total atenção, oferecer um abraço sincero e orar por ele naquele momento.',
            consequence: 'Ele chora desabafando e reconhece a paz diferente que habita na sua vida.',
            effects: { misericordia: 5, fe: 5, integridade: 4 },
            biblicalPrinciple: 'Amor ao próximo e compaixão.',
            biblicalReference: '📖 Colossenses 3:12',
            biblicalExplanation: 'Revesti-vos, pois, como eleitos de Deus, santos e amados, de entraranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade.'
          },
          {
            id: 'rt_4_b',
            text: 'Lembrar a ele das zombarias passadas antes de aceitar conversar.',
            consequence: 'Seu orgulho afasta o colega ferido e destrói o testemunho da graça de Cristo.',
            effects: { misericordia: 1 },
            biblicalPrinciple: 'Perdoar e não guardar ressentimento.',
            biblicalReference: '📖 Efésios 4:32',
            biblicalExplanation: 'Sede uns para com os outros benignos, misericordiosos, perdoando-vos mutuamente, como também Deus vos perdoou em Cristo.'
          },
          {
            id: 'rt_4_c',
            text: 'Indicar a ele um bom livro de conselho bíblico e colocar-se à disposição para conversar sempre.',
            consequence: 'Ele começa a ler o livro e encontra respostas para suas inquietações de vida.',
            effects: { fe: 4, sabedoria: 4, misericordia: 3 },
            biblicalPrinciple: 'Guiar para a verdade.',
            biblicalReference: '📖 Salmos 119:105',
            biblicalExplanation: 'Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.'
          },
          {
            id: 'rt_4_d',
            text: 'Convidá-lo para um almoço tranquilo para conversarem fora do ambiente de trabalho.',
            consequence: 'A conversa restaura o coração dele e sela uma amizade profunda.',
            effects: { misericordia: 4, integridade: 4 },
            biblicalPrinciple: 'Cuidado pessoal no relacionamento.',
            biblicalReference: '📖 Gálatas 6:10',
            biblicalExplanation: 'Enquanto temos tempo, façamos bem a todos.'
          }
        ]
      },
      {
        id: 'rt_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: A TRANSFORMAÇÃO DO AMBIENTE',
        context: 'Meses depois, a postura da equipe em relação a você mudou de zombeteira para profundo respeito e admiração.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'rt_5_a',
            text: 'Continuar sendo um profissional de excelência, humilde e sempre pronto para ajudar.',
            consequence: 'Sua consistência gera um impacto duradouro de luz no seu ambiente de trabalho.',
            effects: { fe: 5, integridade: 5, sabedoria: 4 },
            biblicalPrinciple: 'Constância no bem.',
            biblicalReference: '📖 1 Coríntios 15:58',
            biblicalExplanation: 'Sede firmes e constantes, sempre abundantes na obra do Senhor, sabendo que o vosso trabalho não é vão no Senhor.'
          },
          {
            id: 'rt_5_b',
            text: 'Aproveitar a abertura para organizar uma campanha de doação de sangue ou alimentos no setor.',
            consequence: 'Toda a equipe participa unida e a empresa abraça a causa com alegria.',
            effects: { misericordia: 5, coragem: 4, integridade: 4 },
            biblicalPrinciple: 'Liderar em boas obras.',
            biblicalReference: '📖 Tito 3:8',
            biblicalExplanation: 'Os que crêem em Deus procurem aplicar-se às boas obras; estas coisas são boas e proveitosas aos homens.'
          },
          {
            id: 'rt_5_c',
            text: 'Agradecer a Deus em oração por ter mantido sua integridade sem se contaminar.',
            consequence: 'Seu coração transborda gratidão e maturidade espiritual.',
            effects: { fe: 5, sabedoria: 4 },
            biblicalPrinciple: 'A glória pertence a Deus.',
            biblicalReference: '📖 Salmos 115:1',
            biblicalExplanation: 'Não a nós, Senhor, não a nós, mas ao teu nome dá glória, por amor da tua misericórdia e da tua fidelidade.'
          },
          {
            id: 'rt_5_d',
            text: 'Continuar estudando e se aprimorando para crescer na carreira com propósito.',
            consequence: 'Seu crescimento técnico e ético inspira outros jovens a trilharem o mesmo caminho.',
            effects: { sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Desenvolvimento de talentos.',
            biblicalReference: '📖 Mateus 25:21',
            biblicalExplanation: 'Bem está, servo bom e fiel. Sobre o pouco foste fiel, sobre muito te colocarei.'
          }
        ]
      }
    ]
  },

  // 5. CARREIRA (SUCESSO VS INTEGRIDADE)
  {
    id: 'sucesso_vs_integridade',
    title: 'COMPETIÇÃO E CARREIRA',
    subtitle: 'Sucesso, rivalidade profissional e caráter',
    description: 'Um colega de trabalho tenta puxar o seu tapete para ficar com a promoção do ano. Como reagir à rivalidade com nobreza e fé?',
    profiles: ['jovem'],
    theme: 'Carreira e Sucesso',
    icon: 'TrendingUp',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Vale a pena vencer na carreira sacrificando o caráter e o amor ao próximo?',
    scenes: [
      {
        id: 'sc_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: A RIVALIDADE DESLEAL',
        context: 'Você descobre que um colega usou dados do seu projeto sem te dar o crédito numa apresentação importante para os diretores da empresa.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'sc_1_a',
            text: 'Conversar a sós com o colega demonstrando com clareza o erro dele, sem descer ao nível da agressão.',
            consequence: 'Ele fica desconcertado perante sua firmeza serena e promete incluir seu nome nos créditos oficiais.',
            effects: { coragem: 4, sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Confronto direto e pacífico.',
            biblicalReference: '📖 Mateus 18:15',
            biblicalExplanation: 'Se teu irmão pecar contra ti, vai e repreende-o entre ti e ele só.'
          },
          {
            id: 'sc_1_b',
            text: 'Fazer uma cena na frente de toda a equipe acusando o colega de roubo intelectual.',
            consequence: 'A discussão mancha a imagem de ambos perante a diretoria da empresa.',
            effects: { coragem: 2, sabedoria: 1 },
            biblicalPrinciple: 'Evitar o descontrole emocional no conflito.',
            biblicalReference: '📖 Provérbios 29:11',
            biblicalExplanation: 'O tolo revela todo o seu irascível, mas o sábio o refreia e aplaca.'
          },
          {
            id: 'sc_1_c',
            text: 'Enviar um e-mail formal ao gestor anexando os arquivos com datas originais de criação.',
            consequence: 'O gestor analisa as provas técnicas e restaura a autoria correta do seu projeto.',
            effects: { integridade: 5, sabedoria: 4 },
            biblicalPrinciple: 'Provas justas e ordem legal.',
            biblicalReference: '📖 Provérbios 14:25',
            biblicalExplanation: 'A testemunha verdadeira livra as almas, mas o enganador profere mentiras.'
          },
          {
            id: 'sc_1_d',
            text: 'Orar pedindo a Deus que guarde seu coração da amargura e da vingança.',
            consequence: 'Você mantém a paz interior para trabalhar com excelência no projeto seguinte.',
            effects: { fe: 5, misericordia: 4 },
            biblicalPrinciple: 'Guardar o coração contra o ressentimento.',
            biblicalReference: '📖 Romanos 12:19',
            biblicalExplanation: 'Não vos vingueis a vós mesmos, amados, mas dai lugar à ira; porque está escrito: Minha é a vingança; eu recompensarei, diz o Senhor.'
          }
        ]
      },
      {
        id: 'sc_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A OPORTUNIDADE DE TROCO',
        context: 'Semanas depois, o mesmo colega comete um erro grave na planilha dele. Se ninguém avisar, o projeto dele vai falhar feio na reunião.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'sc_2_a',
            text: 'Avisá-lo em particular sobre o erro antes da reunião para que ele possa corrigir a tempo.',
            consequence: 'Sua atitude nobre de salvá-lo emociona o colega, que se arrepende profundamente de ter te prejudicado antes.',
            effects: { misericordia: 5, fe: 5, integridade: 5 },
            biblicalPrinciple: 'Vencer o mal com o bem.',
            biblicalReference: '📖 Romanos 12:20–21',
            biblicalExplanation: 'Se o teu inimigo tiver fome, dá-lhe de comer... Não te deixes vencer do mal, mas vence o mal com o bem.'
          },
          {
            id: 'sc_2_b',
            text: 'Ficar quieto e esperar a reunião começar para ver o fracasso dele acontecer publicamente.',
            consequence: 'O erro acontece, mas você sente o gosto amargo de ter agido por vingança omissa.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não se alegrar com a queda do adversário.',
            biblicalReference: '📖 Provérbios 24:17–18',
            biblicalExplanation: 'Quando cair o teu inimigo, não te me alegres, nem quando tropeçar se regozije o teu coração.'
          },
          {
            id: 'sc_2_c',
            text: 'Oferecer-se para sentar com ele por 15 minutos e corrigirem a fórmula juntos.',
            consequence: 'O projeto é salvo e vocês iniciam uma surpreendente aliança de colaboração no setor.',
            effects: { misericordia: 5, sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Serviço e pacificação.',
            biblicalReference: '📖 Mateus 5:9',
            biblicalExplanation: 'Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus.'
          },
          {
            id: 'sc_2_d',
            text: 'Lembrar a ele discretamente de conferir as células da planilha antes de apresentar.',
            consequence: 'Ele percebe a dica, confere e corrige o erro no momento exato.',
            effects: { sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Prudência e alerta amigável.',
            biblicalReference: '📖 Provérbios 27:6',
            biblicalExplanation: 'Leais são as feridas feitas pelo amigo, mas os beijos do inimigo são enganosos.'
          }
        ]
      },
      {
        id: 'sc_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: A AVALIAÇÃO ANUAL',
        context: 'Na reunião de avaliação de desempenho, a diretoria pede que você avalie o trabalho desse colega com quem teve os atritos.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'sc_3_a',
            text: 'Fazer uma avaliação honesta e justa, destacando os pontos fortes dele e as áreas de melhoria profissional.',
            consequence: 'A diretoria elogia sua imparcialidade técnica e maturidade ética de liderança.',
            effects: { integridade: 5, sabedoria: 5, fe: 3 },
            biblicalPrinciple: 'Justiça e imparcialidade nos julgamentos.',
            biblicalReference: '📖 Levítico 19:15',
            biblicalExplanation: 'Não farás injustiça no juízo; não favorecerás o pobre nem respeitarás o grande; com justiça julgarás.'
          },
          {
            id: 'sc_3_b',
            text: 'Dar nota mínima em tudo para diminuir as chances dele na promoção.',
            consequence: 'Você demonstra rancor e fere a reputação da avaliação interna.',
            effects: { integridade: 1 },
            biblicalPrinciple: 'Rejeitar a falsa testemunha.',
            biblicalReference: '📖 Provérbios 19:5',
            biblicalExplanation: 'A falsa testemunha não ficará impune; e o que profere mentiras não escapará.'
          },
          {
            id: 'sc_3_c',
            text: 'Aproveitar para pontuar como a equipe pode trabalhar melhor de forma integrada no futuro.',
            consequence: 'Sua visão sistêmica inspira melhorias de processos em todo o departamento.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Foco na edificação coletiva.',
            biblicalReference: '📖 1 Coríntios 14:12',
            biblicalExplanation: 'Procurai abundar neles para edificação da igreja.'
          },
          {
            id: 'sc_3_d',
            text: 'Elogiar a mudança de postura e o crescimento que ele demonstrou nos últimos meses.',
            consequence: 'O colega fica sabendo do seu elogio e passa a te defender abertamente para todos.',
            effects: { misericordia: 5, fe: 4, integridade: 4 },
            biblicalPrinciple: 'Reconhecer a melhoria do próximo.',
            biblicalReference: '📖 Filipenses 2:3',
            biblicalExplanation: 'Nada façais por contenda ou por vanglória, mas por humildade; considerando cada um os outros superiores a si mesmo.'
          }
        ]
      },
      {
        id: 'sc_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: A ESCOLHA DO DIRETOR',
        context: 'A diretoria anuncia a decisão: você foi escolhido para o cargo de liderança devido à sua excelência técnica e maturidade de caráter.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'sc_4_a',
            text: 'Receber o cargo com humildade e convidar o colega para ser o seu braço direito na equipe.',
            consequence: 'Ele aceita emocionado e a equipe se torna a mais produtiva e unida da empresa.',
            effects: { misericordia: 5, sabedoria: 5, integridade: 5, fe: 4 },
            biblicalPrinciple: 'Liderança humilde e reconciliadora.',
            biblicalReference: '📖 Provérbios 16:7',
            biblicalExplanation: 'Sendo os caminhos do homem agradáveis ao Senhor, até a seus inimigos faz que tenham paz com ele.'
          },
          {
            id: 'sc_4_b',
            text: 'Comemorar ostensivamente demonstrando que você venceu a disputa pessoal.',
            consequence: 'Sua postura vaidosa cria antipatia na equipe recém-liderada.',
            effects: { fe: 1 },
            biblicalPrinciple: 'A soberba precede a queda.',
            biblicalReference: '📖 Provérbios 16:18',
            biblicalExplanation: 'A soberba precede a ruína, e a altivez do espírito precede a queda.'
          },
          {
            id: 'sc_4_c',
            text: 'Agradecer a Deus em oração no seu escritório reconhecendo que a promoção vem do Senhor.',
            consequence: 'Sua fé se consolida na certeza da provisão e justiça divina.',
            effects: { fe: 5, integridade: 4 },
            biblicalPrinciple: 'Reconhecer a soberania de Deus.',
            biblicalReference: '📖 Salmos 75:6–7',
            biblicalExplanation: 'Porque nem do oriente, nem do ocidente, nem do deserto vem a exaltação. Mas Deus é o Juiz.'
          },
          {
            id: 'sc_4_d',
            text: 'Apresentar um plano de metas focado na saúde mental e desenvolvimento de todos os liderados.',
            consequence: 'O setor reduz o estresse e alcança resultados históricos de eficiência.',
            effects: { sabedoria: 5, misericordia: 4, integridade: 4 },
            biblicalPrinciple: 'Cuidar do rebanho sob sua responsabilidade.',
            biblicalReference: '📖 Provérbios 27:23',
            biblicalExplanation: 'Procura conhecer o estado das tuas ovelhas e cuida dos teus rebanhos.'
          }
        ]
      },
      {
        id: 'sc_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O LEGADO PROFISSIONAL',
        context: 'Anos depois, você se torna diretor da empresa e olha para trás vendo uma carreira pautada na ética, fé e amor.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'sc_5_a',
            text: 'Criar um programa interno de integridade e contratação de jovens aprendizes carentes.',
            consequence: 'Sua liderança transforma o destino profissional de centenas de jovens.',
            effects: { misericordia: 5, integridade: 5, fe: 4, sabedoria: 4 },
            biblicalPrinciple: 'Impactar a sociedade com justiça.',
            biblicalReference: '📖 Isaías 58:10',
            biblicalExplanation: 'Se abrires a tua alma ao faminto e fartares a alma aflita, então a tua luz nascerá nas trevas.'
          },
          {
            id: 'sc_5_b',
            text: 'Continuar sendo um mentor acessível para qualquer funcionário que precise de orientação.',
            consequence: 'Seu legado de carinho e sabedoria é lembrado por gerações na empresa.',
            effects: { misericordia: 5, sabedoria: 5 },
            biblicalPrinciple: 'Aconselhar com amor paternal.',
            biblicalReference: '📖 Provérbios 4:11',
            biblicalExplanation: 'No caminho da sabedoria te ensinei, e por veredas de retidão te fiz andar.'
          },
          {
            id: 'sc_5_c',
            text: 'Publicar um livro sobre liderança cristã e ética nos negócios.',
            consequence: 'Sua obra inspira milhares de empresários e executivos no país.',
            effects: { fe: 5, sabedoria: 5, coragem: 3 },
            biblicalPrinciple: 'Multiplicar a instrução.',
            biblicalReference: '📖 Provérbios 9:9',
            biblicalExplanation: 'Dá instrução ao sábio, e ele se fará mais sábio; ensina ao justo, e ele crescerá em prudência.'
          },
          {
            id: 'sc_5_d',
            text: 'Dedicar-se com alegria à sua família e à sua igreja local.',
            consequence: 'Sua vida pessoal e espiritual permanece em perfeito equilíbrio e paz.',
            effects: { fe: 5, integridade: 5 },
            biblicalPrinciple: 'Prioridades bem ordenadas.',
            biblicalReference: '📖 Mateus 6:33',
            biblicalExplanation: 'Buscai primeiro o reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas.'
          }
        ]
      }
    ]
  },

  // 6. DINHEIRO (GESTÃO E GENEROSIDADE)
  {
    id: 'gestao_e_generosidade',
    title: 'FINANÇAS E GENEROSIDADE',
    subtitle: 'Primeiro salário, dízimo, economia e desapego',
    description: 'Você começa a receber seu próprio salário e se vê diante de muitas opções de consumo, dívidas e oportunidade de praticar a generosidade.',
    profiles: ['jovem'],
    theme: 'Finanças e Generosidade',
    icon: 'DollarSign',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Você é dono do seu dinheiro ou o dinheiro se tornou seu senhor?',
    scenes: [
      {
        id: 'gg_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: O PRIMEIRÍSSIMO SALÁRIO',
        context: 'O valor do seu primeiro salário cai na conta bancária. A tentação de gastar tudo em compras impulsivas no shopping é enorme.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'gg_1_a',
            text: 'Separar imediatamente o dízimo e uma oferta de gratidão a Deus antes de qualquer outra despesa.',
            consequence: 'Sua atitude de fé reconhece a soberania de Deus sobre seus recursos e abre as portas da bênção.',
            effects: { fe: 5, integridade: 4, sabedoria: 3 },
            biblicalPrinciple: 'Honrar a Deus com as primícias.',
            biblicalReference: '📖 Provérbios 3:9–10',
            biblicalExplanation: 'Honra ao Senhor com os teus bens e com as primícias de toda a tua renda.'
          },
          {
            id: 'gg_1_b',
            text: 'Gastar tudo em roupas de grife e festas no primeiro final de semana.',
            consequence: 'Você fica sem dinheiro para o transporte do resto do mês e precisa pedir emprestado.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Prudência contra a prodigalidade.',
            biblicalReference: '📖 Provérbios 21:20',
            biblicalExplanation: 'Tesouro desejável e azeite há na casa do sábio, mas o homem insensato os dissipa.'
          },
          {
            id: 'gg_1_c',
            text: 'Montar uma planilha dividindo seu salário em: Deus, Poupança, Contas fixas e Lazer.',
            consequence: 'Sua organização financeira traz paz, clareza e previsibilidade para seu futuro.',
            effects: { sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Planejamento e mordomia sábia.',
            biblicalReference: '📖 Lucas 14:28',
            biblicalExplanation: 'Pois qual de vós, querendo edificar uma torre, não se assenta primeiro a calcular as despesas?'
          },
          {
            id: 'gg_1_d',
            text: 'Comprar um presente especial de agradecimento para seus pais pelo apoio de vida.',
            consequence: 'Seus pais se emocionam com o gesto de honra e gratidão filial.',
            effects: { misericordia: 5, integridade: 4, fe: 3 },
            biblicalPrinciple: 'Honrar os pais com frutos do trabalho.',
            biblicalReference: '📖 1 Timóteo 5:4',
            biblicalExplanation: 'Apreendam primeiro a exercer piedade para com a sua própria família e a recompensar seus pais.'
          }
        ]
      },
      {
        id: 'gg_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A ARMADILHA DO CARTÃO DE CRÉDITO',
        context: 'O banco oferece um limite de cartão de crédito 5 vezes maior do que o seu salário. Seus amigos sugerem parcelar viagens e celulares caros.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'gg_2_a',
            text: 'Reduzir o limite do cartão no aplicativo para um valor que você consegue pagar à vista no mês.',
            consequence: 'Você se protege do endividamento e do juro abusivo do crédito rotativo.',
            effects: { sabedoria: 5, integridade: 4, coragem: 3 },
            biblicalPrinciple: 'Fugir do escravismo do endividamento.',
            biblicalReference: '📖 Provérbios 22:7',
            biblicalExplanation: 'O rico domina sobre os pobres e o que toma emprestado é servo do que empresta.'
          },
          {
            id: 'gg_2_b',
            text: 'Usar todo o limite para comprar bens de consumo e pagar só a fatura mínima.',
            consequence: 'Os juros viram uma bola de neve e metade do seu salário futuro fica comprometida.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Evitar laços financeiros.',
            biblicalReference: '📖 Provérbios 6:1–2',
            biblicalExplanation: 'Se ficaste por fiador... enredaste-te com as palavras da tua boca.'
          },
          {
            id: 'gg_2_c',
            text: 'Guardar o cartão apenas para emergências de saúde e despesas essenciais.',
            consequence: 'Você cultiva o hábito de só comprar aquilo que tem dinheiro para pagar.',
            effects: { sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Disciplina e autodomínio.',
            biblicalReference: '📖 Provérbios 25:28',
            biblicalExplanation: 'Como a cidade derribada, que não tem muro, assim é o homem que não pode conter o seu espírito.'
          },
          {
            id: 'gg_2_d',
            text: 'Ler livros sobre educação financeira e investimentos sob perspectiva bíblica.',
            consequence: 'Seu conhecimento financeiro se expande e você aprende a multiplicar recursos com ética.',
            effects: { sabedoria: 5, fe: 3 },
            biblicalPrinciple: 'Multiplicação sábia dos talentos.',
            biblicalReference: '📖 Mateus 25:16',
            biblicalExplanation: 'O que recebera cinco talentos foi e negociou com eles, e ganhou outros cinco talentos.'
          }
        ]
      },
      {
        id: 'gg_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: O AMIGO EM DIFICULDADE',
        context: 'Um amigo de infância atravessa um momento difícil e pede um empréstimo em dinheiro sem garantia de devolução rápida.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'gg_3_a',
            text: 'Dar o valor a ele como doação de coração, sem esperar receber de volta nem cobrar juros.',
            consequence: 'Sua generosidade alivia o sofrimento dele sem criar uma cobrança que destruiria a amizade.',
            effects: { misericordia: 5, fe: 5, integridade: 4 },
            biblicalPrinciple: 'Dar sem esperar retribuição.',
            biblicalReference: '📖 Lucas 6:35',
            biblicalExplanation: 'Emprestai, sem nada esperardes em retorno; e grande será o vosso galardão.'
          },
          {
            id: 'gg_3_b',
            text: 'Recusar rispidamente dizendo que cada um deve cuidar da sua própria vida financeira.',
            consequence: 'Sua dureza de coração fere o amigo em momento de vulnerabilidade.',
            effects: { misericordia: 1 },
            biblicalPrinciple: 'Evitar fechar as entranhas de compaixão.',
            biblicalReference: '📖 1 João 3:17',
            biblicalExplanation: 'Quem tiver bens do mundo e ver seu irmão em necessidade e fechar o coração...'
          },
          {
            id: 'gg_3_c',
            text: 'Ajudar a encontrar um trabalho temporário para que ele consiga renda própria.',
            consequence: 'Sua ajuda ensina dignidade e capacita o amigo a sair da crise com o próprio esforço.',
            effects: { sabedoria: 5, misericordia: 4, integridade: 3 },
            biblicalPrinciple: 'Ensinar a trabalhar com dignidade.',
            biblicalReference: '📖 2 Tessalonicenses 3:10',
            biblicalExplanation: 'Se alguém não quer trabalhar, também não coma.'
          },
          {
            id: 'gg_3_d',
            text: 'Comprar uma cesta básica completa de alimentos e entregar na casa dele.',
            consequence: 'A família dele tem alimento na mesa e louva a Deus pela sua vida.',
            effects: { misericordia: 5, fe: 4 },
            biblicalPrinciple: 'Socorro prático de mantimentos.',
            biblicalReference: '📖 Tiago 2:15–16',
            biblicalExplanation: 'Se um irmão estiver nu e necessitado do alimento cotidiano e lhe disserdes: Ide em paz... e não lhe derdes o necessário?'
          }
        ]
      },
      {
        id: 'gg_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O PROJETO DE MISSÕES',
        context: 'A sua igreja apresenta um projeto missionário no sertão para construir um poço artesiano de água potável para uma comunidade carente.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'gg_4_a',
            text: 'Ofertar uma quantia generosa da sua reserva financeira para viabilizar a obra.',
            consequence: 'O poço é construído e centenas de pessoas passam a ter água limpa e ouvem do amor de Jesus.',
            effects: { fe: 5, misericordia: 5, integridade: 4 },
            biblicalPrinciple: 'Investir no reino de Deus e nas pessoas.',
            biblicalReference: '📖 Mateus 6:20',
            biblicalExplanation: 'Ajuntai para vós tesouros no céu, onde nem a traça nem a ferrugem consomem.'
          },
          {
            id: 'gg_4_b',
            text: 'Viajar com a equipe missionária como voluntário para trabalhar na construção do poço.',
            consequence: 'A experiência transforma profundamente sua visão de vida e compaixão humana.',
            effects: { coragem: 4, misericordia: 5, fe: 5 },
            biblicalPrinciple: 'Servir com o próprio corpo e tempo.',
            biblicalReference: '📖 Isaías 6:8',
            biblicalExplanation: 'Eis-me aqui, envia-me a mim.'
          },
          {
            id: 'gg_4_c',
            text: 'Organizar um bazar beneficente com os jovens da igreja para arrecadar os recursos necessários.',
            consequence: 'A mobilização do grupo arrecada o dobro do valor estimado para a missão.',
            effects: { sabedoria: 5, fe: 4, integridade: 3 },
            biblicalPrinciple: 'Liderança e cooperação em boas obras.',
            biblicalReference: '📖 2 Coríntios 9:7',
            biblicalExplanation: 'Cada um contribua segundo propôs no seu coração... porque Deus ama ao que dá com alegria.'
          },
          {
            id: 'gg_4_d',
            text: 'Divulgar o projeto nas suas redes sociais convidando empresários e amigos a contribuírem.',
            consequence: 'Sua campanha digital ganha força e atrai doadores de várias cidades.',
            effects: { coragem: 3, integridade: 4, sabedoria: 4 },
            biblicalPrinciple: 'Usar influência para causas nobres.',
            biblicalReference: '📖 Provérbios 31:8',
            biblicalExplanation: 'Abre a tua boca a favor do mudo, pela causa de todos os que se acham em desolação.'
          }
        ]
      },
      {
        id: 'gg_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: A LIBERDADE FINANCEIRA',
        context: 'Anos depois, praticando princípios de economia, dízimo, ofertas e investimentos corretos, você vive em paz financeira.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'gg_5_a',
            text: 'Ensinar educação financeira cristã para jovens e casais novos na sua comunidade.',
            consequence: 'Dezenas de famílias se libertam das dívidas e aprendem a ser generosas.',
            effects: { sabedoria: 5, fe: 4, misericordia: 4, integridade: 4 },
            biblicalPrinciple: 'Transmitir conhecimento transformador.',
            biblicalReference: '📖 Provérbios 11:25',
            biblicalExplanation: 'A alma generosa prosperará, e aquele que atende também será atendido.'
          },
          {
            id: 'gg_5_b',
            text: 'Manter um estilo de vida simples sem ostentação, destinando os excedentes para missões e caridade.',
            consequence: 'Sua vida reflete a verdadeira riqueza espiritual que não se corrompe.',
            effects: { fe: 5, integridade: 5, misericordia: 5 },
            biblicalPrinciple: 'Simplicidade e desapego.',
            biblicalReference: '📖 1 Timóteo 6:17–18',
            biblicalExplanation: 'Manda aos ricos deste mundo que não sejam altivos... que façam o bem, enriqueçam em boas obras, sejam generosos.'
          },
          {
            id: 'gg_5_c',
            text: 'Criar um fundo de reserva para financiar bolsas de estudo para jovens carentes.',
            consequence: 'O fundo permite que muitos jovens cursem a universidade e mudem a história de suas famílias.',
            effects: { misericordia: 5, sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Semear no futuro do próximo.',
            biblicalReference: '📖 2 Coríntios 9:10',
            biblicalExplanation: 'Aquele que dá a semente ao que sema, e pão para comer, também multiplicará a vossa sementeira.'
          },
          {
            id: 'gg_5_d',
            text: 'Agradecer a Deus diariamente por ser um mordomo fiel das riquezas que pertencem a Ele.',
            consequence: 'Sua consciência permanece leve e em plena comunhão com o Criador.',
            effects: { fe: 5, integridade: 5 },
            biblicalPrinciple: 'Mordomia cristã consciente.',
            biblicalReference: '📖 1 Coríntios 4:2',
            biblicalExplanation: 'Além disso, requer-se dos despenseiros que cada um se ache fiel.'
          }
        ]
      }
    ]
  },

  // 7. PROPÓSITO E ESCOLHAS (QUAL O MEU CAMINHO)
  {
    id: 'qual_o_meu_caminho',
    title: 'O DESCOBRIR DO PROPÓSITO',
    subtitle: 'Vocação, escolhas de vida e vontade de Deus',
    description: 'Você precisa escolher entre uma carreira garantida de alto salário mas sem significado, ou um caminho vocacional alinhado ao serviço e aos seus dons.',
    profiles: ['jovem'],
    theme: 'Propósito e Vocação',
    icon: 'Compass',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Você prefere o conforto de um caminho fácil ou o impacto de uma vida com propósito?',
    scenes: [
      {
        id: 'qc_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: A ENCRUZILHADA DE CARREIRA',
        context: 'Você recebe duas propostas ao mesmo tempo: um cargo burocrático de alto salário numa corporação fria, ou uma vaga num projeto educacional transformador que paga o suficiente para viver simples.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'qc_1_a',
            text: 'Buscar a Deus em oração, jejum e aconselhamento bíblico antes de tomar qualquer decisão.',
            consequence: 'Sua busca espiritual traz clareza de paz sobre qual caminho está alinhado com seu propósito eterno.',
            effects: { fe: 5, sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Buscar primeiro a direção de Deus.',
            biblicalReference: '📖 Provérbios 3:5–6',
            biblicalExplanation: 'Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.'
          },
          {
            id: 'qc_1_b',
            text: 'Escolher o cargo de alto salário sem pensar na sua saúde mental ou propósito de vida.',
            consequence: 'Você acumula bens materiais, mas vive com um vazio constante e desmotivação ao acordar.',
            effects: { fe: 1 },
            biblicalPrinciple: 'O perigo de viver apenas pelo dinheiro.',
            biblicalReference: '📖 Mateus 16:26',
            biblicalExplanation: 'Pois que aproveita ao homem ganhar o mundo inteiro, se perder a sua alma?'
          },
          {
            id: 'qc_1_c',
            text: 'Escolher o projeto educacional focado no impacto de vidas e desenvolvimento humano.',
            consequence: 'Seu trabalho traz alegria profunda, sentido diário e transformação real para a comunidade.',
            effects: { misericordia: 5, fe: 4, coragem: 4, integridade: 4 },
            biblicalPrinciple: 'Serviço com dons espirituais e vocação.',
            biblicalReference: '📖 1 Pedro 4:10',
            biblicalExplanation: 'Servi uns aos outros conforme o dom que cada um recebeu.'
          },
          {
            id: 'qc_1_d',
            text: 'Conversar abertamente com seus pais e mentores espirituais para ouvir a experiência deles.',
            consequence: 'Os conselhos amadurecidos de quem te ama te dão segurança na escolha.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Multidão de conselheiros.',
            biblicalReference: '📖 Provérbios 15:22',
            biblicalExplanation: 'Onde não há conselho os projetos saem vãos, mas na multidão de conselheiros se estabelecem.'
          }
        ]
      },
      {
        id: 'qc_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A PRESSÃO EXTERNA',
        context: 'Pessoas próximas dizem que você é "louco" por recusar um salário alto para trabalhar em algo de impacto social.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'qc_2_a',
            text: 'Manter sua convicção serena, sabendo que sua aprovação vem de Deus e não da expectativa dos homens.',
            consequence: 'Sua firmeza inspira respeito e cala os críticos ao longo do tempo.',
            effects: { coragem: 5, fe: 5, integridade: 4 },
            biblicalPrinciple: 'Aprovação de Deus em primeiro lugar.',
            biblicalReference: '📖 Gálatas 1:10',
            biblicalExplanation: 'Porventura procuro eu agora o favor dos homens ou o de Deus? Se agradasse ainda aos homens, não seria servo de Cristo.'
          },
          {
            id: 'qc_2_b',
            text: 'Voltar atrás por medo da opinião alheia e aceitar a vaga burocrática.',
            consequence: 'Você vive uma vida moldada pelas expectativas dos outros e não pela vontade de Deus.',
            effects: { fe: 1 },
            biblicalPrinciple: 'O receio dos homens é uma armadilha.',
            biblicalReference: '📖 Provérbios 29:25',
            biblicalExplanation: 'O receio dos homens arma laços, mas o que confia no Senhor fica em segurança.'
          },
          {
            id: 'qc_2_c',
            text: 'Explicar com amor a visão e o propósito do trabalho que você escolheu exercer.',
            consequence: 'Eles passam a entender seu coração e começam a admirar sua coragem moral.',
            effects: { sabedoria: 4, misericordia: 4, fe: 3 },
            biblicalPrinciple: 'Comunicar a visão com sabedoria.',
            biblicalReference: '📖 Habacuque 2:2',
            biblicalExplanation: 'Escreve a visão e torna-a bem legível sobre tábuas, para que a possa ler o que passa correndo.'
          },
          {
            id: 'qc_2_d',
            text: 'Demonstrar na prática com frutos de alegria e dedicação que sua escolha foi a correta.',
            consequence: 'Seus resultados e realização pessoal falam mais alto do que qualquer argumento.',
            effects: { integridade: 5, sabedoria: 4 },
            biblicalPrinciple: 'Pelos frutos os conhecereis.',
            biblicalReference: '📖 Mateus 7:20',
            biblicalExplanation: 'Portanto, pelos seus frutos os conhecereis.'
          }
        ]
      },
      {
        id: 'qc_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: O PRIMEIRO FRUTO VOCACIONAL',
        context: 'No novo projeto, você ajuda a transformar a trajetória de um jovem que estava prestes a abandonar os estudos.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'qc_3_a',
            text: 'Dar toda a glória a Deus por usar sua vida como instrumento de transformação na história daquele jovem.',
            consequence: 'Você experimenta a alegria indescritível de ver uma vida salva e redirecionada.',
            effects: { fe: 5, misericordia: 5, integridade: 4 },
            biblicalPrinciple: 'Servos inúteis que fazem o seu dever.',
            biblicalReference: '📖 Lucas 17:10',
            biblicalExplanation: 'Assim também vós, quando fizerdes tudo o que vos for mandado, dizei: Somos servos inúteis, porque fizemos somente o que devíamos fazer.'
          },
          {
            id: 'qc_3_b',
            text: 'Dedicar horas extras para criar um programa de mentoria para mais alunos do projeto.',
            consequence: 'Sua iniciativa expande o alcance do projeto e resgata dezenas de jovens.',
            effects: { misericordia: 5, coragem: 4, sabedoria: 4 },
            biblicalPrinciple: 'Multiplicar o serviço ao próximo.',
            biblicalReference: '📖 Gálatas 6:9',
            biblicalExplanation: 'E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido.'
          },
          {
            id: 'qc_3_c',
            text: 'Aproveitar para ensinar valores bíblicos e fé durante os atendimentos individuais.',
            consequence: 'O jovem não só volta aos estudos, mas entrega sua vida a Jesus Cristo com alegria.',
            effects: { fe: 5, sabedoria: 4 },
            biblicalPrinciple: 'Evangelismo vocacional e discipulado.',
            biblicalReference: '📖 2 Timóteo 4:2',
            biblicalExplanation: 'Prega a palavra, insta a tempo e fora de tempo, repreende, meiga, exorta, com toda a longanimidade e doutrina.'
          },
          {
            id: 'qc_3_d',
            text: 'Registrar os depoimentos de transformação para apresentar a novos investidores sociais.',
            consequence: 'Os doadores se emocionam e garantem recursos para o projeto por mais 5 anos.',
            effects: { sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Gestão de testemunhos para o bem.',
            biblicalReference: '📖 Salmos 105:1',
            biblicalExplanation: 'Rendei graças ao Senhor, invocai o seu nome, fazei conhecidos os seus feitos entre os povos.'
          }
        ]
      },
      {
        id: 'qc_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O RECONHECIMENTO INESPERADO',
        context: 'A instituição onde você atua ganha um prêmio nacional de inovação social e você é convidado para discursar na cerimônia.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'qc_4_a',
            text: 'Usar seu discurso para testificar da fidelidade de Deus e do valor de servir ao próximo com amor.',
            consequence: 'Sua mensagem emociona a plateia de autoridades e leva a luz de Cristo ao evento.',
            effects: { fe: 5, coragem: 5, integridade: 4 },
            biblicalPrinciple: 'Testemunhar diante de autoridades.',
            biblicalReference: '📖 Mateus 10:18',
            biblicalExplanation: 'Sereis levados à presença de governadores e reis por minha causa, para lhes servir de testemunho.'
          },
          {
            id: 'qc_4_b',
            text: 'Dividir a homenagem com toda a equipe de voluntários e funcionários do projeto.',
            consequence: 'Sua atitude humilde fortalece a união e a motivação do grupo.',
            effects: { misericordia: 5, integridade: 5, sabedoria: 4 },
            biblicalPrinciple: 'Humildade e honra aos companheiros.',
            biblicalReference: '📖 Romanos 12:10',
            biblicalExplanation: 'Amai-vos cordialmente uns aos outros com amor fraternal, preferindo-vos em honra uns aos outros.'
          },
          {
            id: 'qc_4_c',
            text: 'Focar o discurso na urgência de apoiar jovens em situação de vulnerabilidade pelo país.',
            consequence: 'Várias empresas presentes decidem financiar novos núcleos do projeto em outras cidades.',
            effects: { sabedoria: 5, misericordia: 4 },
            biblicalPrinciple: 'Voz em favor do vulnerável.',
            biblicalReference: '📖 Provérbios 31:8–9',
            biblicalExplanation: 'Abre a tua boca a favor do mudo... julga retamente e defende a causa dos pobres e dos necessitados.'
          },
          {
            id: 'qc_4_d',
            text: 'Agradecer à sua família pelo apoio constante desde o momento da decisão inicial.',
            consequence: 'Sua família chora de orgulho e gratidão ao ver os frutos da sua escolha.',
            effects: { integridade: 4, misericordia: 4, fe: 3 },
            biblicalPrinciple: 'Honrar o lar.',
            biblicalReference: '📖 Provérbios 23:25',
            biblicalExplanation: 'Alegrem-se teu pai e tua mãe, e regozije-se a que te deu à luz.'
          }
        ]
      },
      {
        id: 'qc_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O VERDADEIRO LEGADO',
        context: 'Olhando para a sua trajetória, você percebe que viver no centro da vontade de Deus é o lugar de maior segurança e plena realização.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'qc_5_a',
            text: 'Renovar diariamente seu compromisso de caminhar segundo o propósito e o chamado do Pai.',
            consequence: 'Sua vida se torna um exemplo vivo de que vale a pena seguir o Senhor com integridade.',
            effects: { fe: 5, integridade: 5, sabedoria: 5 },
            biblicalPrinciple: 'A boa, agradável e perfeita vontade de Deus.',
            biblicalReference: '📖 Romanos 12:2',
            biblicalExplanation: 'Para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus.'
          },
          {
            id: 'qc_5_b',
            text: 'Escrever um diário de memórias para inspirar seus filhos e futuros netos a buscarem o propósito em Deus.',
            consequence: 'Sua história fica registrada como uma herança espiritual para as próximas gerações.',
            effects: { fe: 5, sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Herança espiritual para os filhos.',
            biblicalReference: '📖 Salmos 78:4',
            biblicalExplanation: 'Não os encobriremos aos seus filhos, mostrando à geração futura os louvores do Senhor.'
          },
          {
            id: 'qc_5_c',
            text: 'Continuar abrindo novos caminhos de serviço e acolhimento para os necessitados.',
            consequence: 'Seu ministério de vida floresce continuamente trazendo frutos eternos.',
            effects: { misericordia: 5, fe: 4, integridade: 4 },
            biblicalPrinciple: 'Frutos que permanecem.',
            biblicalReference: '📖 João 15:16',
            biblicalExplanation: 'Eu vos escolhi a vós e vos nomeei para que vades e deis fruto e o vosso fruto permaneça.'
          },
          {
            id: 'qc_5_d',
            text: 'Agradecer ao Senhor Jesus por ter guiado cada um dos seus passos com amor incomparável.',
            consequence: 'Sua vida é um hino perpétuo de louvor e adoração ao Criador.',
            effects: { fe: 5, integridade: 5 },
            biblicalPrinciple: 'Tudo é dele, por ele e para ele.',
            biblicalReference: '📖 Romanos 11:36',
            biblicalExplanation: 'Porque dele e por ele, e para ele, são todas as coisas; glória, pois, a ele eternamente. Amém.'
          }
        ]
      }
    ]
  }
];
