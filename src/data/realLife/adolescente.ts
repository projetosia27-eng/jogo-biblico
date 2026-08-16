import { RealLifeStory } from '../../types';

export const ADOLESCENTE_STORIES: RealLifeStory[] = [
  // 1. PRESSÃO DO GRUPO
  {
    id: 'fora_do_grupo',
    title: 'FORA DO GRUPO',
    subtitle: 'Pressão social, amizade e posicionamento',
    description: 'Um colega da escola virou piada no grupo da turma. Seu melhor amigo te chama para participar da brincadeira. O que você faz?',
    profiles: ['adolescente'],
    theme: 'Pressão Social',
    icon: 'Users',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Até onde você iria para ser aceito por um grupo de amigos?',
    scenes: [
      {
        id: 'fg_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: MENSAGEM NO GRUPO',
        context: 'Um colega da sua sala errou uma apresentação na aula. À noite, o grupo de WhatsApp da turma começa a criar memes com a foto dele. Seu amigo te envia uma das imagens no privado e pergunta: "Muito bom, né? Vai mandar pro pessoal também?"',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'fg_1_a',
            text: 'Compartilhar o meme no grupo para não ficar de fora da brincadeira.',
            consequence: 'Você ri junto com o grupo. A piada se espalha mais rápido, e o colega percebe que você também participou.',
            effects: { fe: 1, coragem: 1 },
            biblicalPrinciple: 'Tratar os outros com consideração e respeito mútuo.',
            biblicalReference: '📖 Filipenses 2:3–4',
            biblicalExplanation: 'Um princípio bíblico nos ensina a olhar não apenas para nossos próprios interesses ou aprovação social, mas para o bem dos outros.'
          },
          {
            id: 'fg_1_b',
            text: 'Não compartilhar, mas responder ao amigo dizendo apenas "complicado" sem se posicionar.',
            consequence: 'Você evita incentivar o zombador diretamente, mas mantém uma postura neutra que não impede a piada de continuar.',
            effects: { sabedoria: 2, integridade: 2 },
            biblicalPrinciple: 'A prudência ao guardar a própria conduta.',
            biblicalReference: '📖 Provérbios 4:23',
            biblicalExplanation: 'Guardar o coração e a língua evita participar do mal, embora a omissão às vezes deixe o ferido sem apoio.'
          },
          {
            id: 'fg_1_c',
            text: 'Mandar uma mensagem no grupo dizendo: "Galera, já deu, isso pode chatear o cara."',
            consequence: 'O grupo fica em silêncio por alguns minutos. A piada perde a força, embora alguns achem você "certinho".',
            effects: { coragem: 4, integridade: 3 },
            biblicalPrinciple: 'Ser pacificador e defender o vulnerável.',
            biblicalReference: '📖 Provérbios 31:8–9',
            biblicalExplanation: 'Falar em favor daqueles que não conseguem se defender requer firmeza e gera paz no ambiente.'
          },
          {
            id: 'fg_1_d',
            text: 'Não mandar nada no grupo, mas enviar uma mensagem privada ao colega perguntando se ele está bem.',
            consequence: 'O colega se sente acolhido e agradece seu apoio. Ele percebe que nem todos na sala estão contra ele.',
            effects: { misericordia: 4, fe: 2, integridade: 2 },
            biblicalPrinciple: 'A compaixão em momentos de dor.',
            biblicalReference: '📖 Colossenses 3:12',
            biblicalExplanation: 'Demonstrar afeto e empatia em particular traz alívio real a quem está sendo ridicularizado.'
          }
        ]
      },
      {
        id: 'fg_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: PRESSÃO NO RECREIO',
        context: 'No dia seguinte no recreio, a turma se junta para rir da situação. O colega atingido está sentado sozinho em um canto. Seus amigos acenam para você se juntar ao grupo deles.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'fg_2_a',
            text: 'Ir ficar com seus amigos normalmente e fingir que não viu o colega sozinho.',
            consequence: 'Você mantém seu conforto social na roda de amigos, mas nota de longe que o colega isolado abaixa a cabeça.',
            effects: { fe: 1, sabedoria: 1 },
            biblicalPrinciple: 'A tentação de buscar aprovação humana.',
            biblicalReference: '📖 Gálatas 1:10',
            biblicalExplanation: 'Buscar agradar a todos ao nosso redor pode nos levar a ignorar valores essenciais de amor ao próximo.'
          },
          {
            id: 'fg_2_b',
            text: 'Mudar o assunto da roda de amigos assim que chegar perto deles.',
            consequence: 'Você redireciona a atenção da turma para futebol ou jogos, amenizando o foco na piada.',
            effects: { sabedoria: 3, integridade: 2 },
            biblicalPrinciple: 'A sabedoria para apaziguar tensões.',
            biblicalReference: '📖 Provérbios 15:1',
            biblicalExplanation: 'Palavras sábias e mudança de foco conseguem desviar a atenção da malícia sem gerar brigas.'
          },
          {
            id: 'fg_2_c',
            text: 'Caminhar até o colega isolado, sentar ao lado dele e começar a conversar.',
            consequence: 'Seus amigos olham surpresos. O colega sorri aliviado por ter alguém ao seu lado.',
            effects: { coragem: 4, misericordia: 4, integridade: 3 },
            biblicalPrinciple: 'A amizade e a lealdade no sofrimento.',
            biblicalReference: '📖 Provérbios 17:17',
            biblicalExplanation: 'O amigo verdadeiro ama em todo o tempo e se faz presente nos momentos de adversidade.'
          },
          {
            id: 'fg_2_d',
            text: 'Convidar o colega sozinho para se juntar a você e comprar um lanche.',
            consequence: 'Vocês dois vão juntos à lanchonete, quebrando o clima de exclusão e construindo uma nova ponte.',
            effects: { misericordia: 3, fe: 3, integridade: 2 },
            biblicalPrinciple: 'A inclusão e o acolhimento sincero.',
            biblicalReference: '📖 Romanos 12:13',
            biblicalExplanation: 'Praticar a hospitalidade e abrir espaço para o outro reflete diretamente o amor generoso.'
          }
        ]
      },
      {
        id: 'fg_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: O CONFRONTO DIRETO',
        context: 'Um dos líderes da turma percebe que você não está rindo e diz bem alto: "Poxa, agora ficou certinho? Vai chorar pelo cara também?" Todos olham para você esperando sua resposta.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'fg_3_a',
            text: 'Dar uma risada sem graça e dizer "nada a ver" para desconversar rápido.',
            consequence: 'A atenção sai de você, mas você sente o peso interno de ter recuado perante a provocação.',
            effects: { fe: 1, misericordia: 1 },
            biblicalPrinciple: 'O medo do julgamento alheio.',
            biblicalReference: '📖 Provérbios 29:25',
            biblicalExplanation: 'O receio dos homens é uma armadilha, mas confiar no que é correto traz segurança interior.'
          },
          {
            id: 'fg_3_b',
            text: 'Responder calmamente: "Acho só que zoação no grupo já deu o que tinha que dar, bola pra frente."',
            consequence: 'Sua resposta serena impõe respeito. O líder da turma dá de ombros e o assunto morre.',
            effects: { coragem: 3, sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'Firmes e serenos diante da pressão.',
            biblicalReference: '📖 1 Pedro 3:15',
            biblicalExplanation: 'Responder com mansidão e respeito demonstra maturidade e caráter sólido.'
          },
          {
            id: 'fg_3_c',
            text: 'Enfrentar o colega dizendo: "Não sou certinho, só acho babaquice rir de quem tá mal."',
            consequence: 'O clima esquenta por um instante, mas vários colegas em silêncio concordam com a sua coragem.',
            effects: { coragem: 5, integridade: 4 },
            biblicalPrinciple: 'Zelo pela verdade sem omissão.',
            biblicalReference: '📖 Efésios 4:15',
            biblicalExplanation: 'Dizer a verdade exige coragem, devendo ser acompanhada de busca pela justiça e pela paz.'
          },
          {
            id: 'fg_3_d',
            text: 'Ignorar a provocação, pegar seu material e ir até a biblioteca para focar em outra coisa.',
            consequence: 'Você se retira da atmosfera tóxica. A provocação fica sem eco e perde a graça.',
            effects: { sabedoria: 3, integridade: 2 },
            biblicalPrinciple: 'Evitar discussões infrutíferas.',
            biblicalReference: '📖 2 Timóteo 2:23',
            biblicalExplanation: 'Evitar contendas tolas é uma marca de sabedoria e autocontrole.'
          }
        ]
      },
      {
        id: 'fg_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: A REPERCUSSÃO NA SALA',
        context: 'O professor percebe o clima pesado e decide fazer um trabalho em duplas escolhidas por ele. Ele coloca você justamente com o colega que foi alvo dos memes.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'fg_4_a',
            text: 'Aceitar a dupla com naturalidade e puxar assunto sobre o tema da aula.',
            consequence: 'O trabalho flui muito bem e vocês descobrem que têm gostos em comum.',
            effects: { integridade: 3, misericordia: 3, fe: 2 },
            biblicalPrinciple: 'A cooperação sincera e amor ao próximo.',
            biblicalReference: '📖 1 João 3:18',
            biblicalExplanation: 'Amar não apenas de palavra, mas em ações práticas e atitudes diárias.'
          },
          {
            id: 'fg_4_b',
            text: 'Olhar para seus amigos com cara de desapontamento antes de sentar com ele.',
            consequence: 'O colega percebe sua reação e fica hesitante em colaborar durante a atividade.',
            effects: { fe: 1 },
            biblicalPrinciple: 'A importância de vigiar os pequenos sinais.',
            biblicalReference: '📖 Tiago 3:9–10',
            biblicalExplanation: 'Nossas expressões e linguagem corporal também comunicam rejeição ou acolhimento.'
          },
          {
            id: 'fg_4_c',
            text: 'Organizar uma divisão clara de tarefas para realizarem um excelente trabalho juntos.',
            consequence: 'A dupla tira a maior nota da sala e demonstra que a parceria funcionou perfeitamente.',
            effects: { sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'Fazer tudo com excelência e dedicação.',
            biblicalReference: '📖 Colossenses 3:23',
            biblicalExplanation: 'Trabalhar de bom grado produz frutos positivos e gera respeito mútuo.'
          },
          {
            id: 'fg_4_d',
            text: 'Aproveitar a oportunidade para pedir desculpas em nome da turma pelo que aconteceu no grupo.',
            consequence: 'O colega desabafa sobre como se sentiu mal e se alegra em encontrar alguém honesto.',
            effects: { misericordia: 5, fe: 3, integridade: 4 },
            biblicalPrinciple: 'A força do perdão e da restauração.',
            biblicalReference: '📖 Efésios 4:32',
            biblicalExplanation: 'Ser bondoso e compassivo promove a cura nas relações humanas.'
          }
        ]
      },
      {
        id: 'fg_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O DESFECHO DO GRUPO',
        context: 'No final da semana, o grupo do WhatsApp volta ao normal e alguns colegas reconhecem que exageraram. Seu amigo pergunta o que você achou de toda a história.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'fg_5_a',
            text: 'Dizer: "Achei zoado o que fizeram, da próxima vez é melhor a gente pensar antes."',
            consequence: 'Seu amigo reflete e concorda: "É verdade, pegamos pesado." A amizade de vocês amadurece.',
            effects: { integridade: 4, coragem: 3, sabedoria: 3 },
            biblicalPrinciple: 'Exortação com amor e verdade.',
            biblicalReference: '📖 Provérbios 27:6',
            biblicalExplanation: 'Lealdade entre amigos inclui dizer a verdade quando necessário.'
          },
          {
            id: 'fg_5_b',
            text: 'Dizer que já passou e que é melhor esquecer o assunto.',
            consequence: 'A rotina volta ao normal, sem grandes conversas sobre o tema.',
            effects: { sabedoria: 2, fe: 2 },
            biblicalPrinciple: 'A busca pela paz cotidiana.',
            biblicalReference: '📖 Romanos 12:18',
            biblicalExplanation: 'Se possível, viver em paz com todos é uma diretriz valiosa.'
          },
          {
            id: 'fg_5_c',
            text: 'Propor que a turma crie um grupo apenas para estudos e tarefas da escola.',
            consequence: 'A ideia é bem recebida e melhora a organização dos trabalhos da sala.',
            effects: { sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'Edificação através de bons ambientes.',
            biblicalReference: '📖 1 Tessalonicenses 5:11',
            biblicalExplanation: 'Construir ambientes edificantes ajuda a prevenir conflitos desnecessários.'
          },
          {
            id: 'fg_5_d',
            text: 'Convidar tanto seu amigo quanto o colega novo para um jogo no fim de semana.',
            consequence: 'Todos se divertem juntos e as rusgas passadas são superadas com convivência real.',
            effects: { misericordia: 4, fe: 4, integridade: 3 },
            biblicalPrinciple: 'Superar o mal com o bem.',
            biblicalReference: '📖 Romanos 12:21',
            biblicalExplanation: 'Atitudes proativas de bem transformam divisões em união verdadeira.'
          }
        ]
      }
    ]
  },

  // 2. FOFOCA
  {
    id: 'fofoca_e_veracidade',
    title: 'O SEGREDO DA SALA',
    subtitle: 'Boatos, veracidade e cuidado com as palavras',
    description: 'Um boato prejudicial sobre uma amiga próxima começa a circular no corredor da escola. Como reagir à tentação da fofoca?',
    profiles: ['adolescente'],
    theme: 'Fofoca e Boatos',
    icon: 'MessageSquare',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Como você reage quando ouve algo surpreendente sobre alguém conhecido?',
    scenes: [
      {
        id: 'fv_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: O COCHICHO NO CORREDOR',
        context: 'Durante o intervalo, um colega puxa você de canto e diz: "Fiquei sabendo que a Julia foi pego colando e vai ser expulsa da escola! Não espalha, tá?" Você sabe que Julia é muito dedicada.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'fv_1_a',
            text: 'Acreditar imediatamente e perguntar mais detalhes ao colega.',
            consequence: 'Você consome o boato não verificado, aumentando a curiosidade e o ruído sobre a situação.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não aceitar boatos sem fundamentos.',
            biblicalReference: '📖 Provérbios 18:8',
            biblicalExplanation: 'As palavras do fofoqueiro são como petiscos doces, mas penetram profundamente produzindo danos.'
          },
          {
            id: 'fv_1_b',
            text: 'Dizer: "Não acredito nisso até ela mesma me contar" e cortar a conversa.',
            consequence: 'O colega recua desapontado por não encontrar espaço para espalhar a história.',
            effects: { sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'Prudência em não dar ouvidos à maledicência.',
            biblicalReference: '📖 Provérbios 14:15',
            biblicalExplanation: 'O inexperiente acredita em qualquer palavra, mas o prudente considera bem seus passos.'
          },
          {
            id: 'fv_1_c',
            text: 'Procurar a Julia diretamente em particular para saber se ela está bem e precisar de apoio.',
            consequence: 'Julia revela surpresa com o boato e explica que apenas foi à diretoria entregar um documento.',
            effects: { misericordia: 4, integridade: 4, sabedoria: 3 },
            biblicalPrinciple: 'Verificar a verdade antes de julgar.',
            biblicalReference: '📖 Tiago 1:19',
            biblicalExplanation: 'Pronto para ouvir e tardio para falar previne julgamentos precipitados e injustos.'
          },
          {
            id: 'fv_1_d',
            text: 'Mandar mensagem no grupo alertando a todos para pararem de inventar coisas sobre a Julia.',
            consequence: 'Sua atitude contém o boato publicamente, embora alguns questionem de onde surgiu o rumor.',
            effects: { coragem: 4, integridade: 3 },
            biblicalPrinciple: 'Defender a honra alheia com coragem.',
            biblicalReference: '📖 Salmos 15:1–3',
            biblicalExplanation: 'Aquele que não difama com a língua nem faz mal ao seu próximo anda em retidão.'
          }
        ]
      },
      {
        id: 'fv_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A MENSAGEM ANÔNIMA',
        context: 'Mais tarde, uma conta anônima do Instagram da escola publica uma charada indicando a mesma história falsa. Vários alunos marcam o perfil da Julia nos comentários.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'fv_2_a',
            text: 'Curtir a publicação para ver os comentários desdobrarem.',
            consequence: 'Sua engajamento ajuda a impulsionar o algoritmo da publicação infundada.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Evitar ser cúmplice do mal.',
            biblicalReference: '📖 Êxodo 23:1',
            biblicalExplanation: 'Não divulgarás notícias falsas, nem te juntarás ao ímpio para seres testemunha maldosa.'
          },
          {
            id: 'fv_2_b',
            text: 'Denunciar a publicação na plataforma e pedir que amigos também denunciem.',
            consequence: 'A publicação é removida por violação de diretrizes de bullying em poucas horas.',
            effects: { sabedoria: 3, integridade: 4 },
            biblicalPrinciple: 'Usar ferramentas para combater a injustiça.',
            biblicalReference: '📖 Isaías 1:17',
            biblicalExplanation: 'Aprendei a fazer o bem; buscai a justiça e defendei o oprimido.'
          },
          {
            id: 'fv_2_c',
            text: 'Comentar na publicação: "Essa informação é falsa, respeitem as pessoas."',
            consequence: 'Seu comentário expõe a falsidade do boato, desarmando a credibilidade da conta fofoqueira.',
            effects: { coragem: 4, integridade: 4 },
            biblicalPrinciple: 'Luz contra as obras das trevas.',
            biblicalReference: '📖 Efésios 5:11',
            biblicalExplanation: 'Não sejamos cúmplices nas obras infrutíferas das trevas, antes as desmascaremos com a verdade.'
          },
          {
            id: 'fv_2_d',
            text: 'Mandar uma mensagem carinhosa de apoio à Julia dizendo que está ao lado dela.',
            consequence: 'Julia se sente fortalecida emocionalmente para enfrentar o constrangimento na escola.',
            effects: { misericordia: 5, fe: 3 },
            biblicalPrinciple: 'Consolador e refúgio na angústia.',
            biblicalReference: '📖 2 Coríntios 1:4',
            biblicalExplanation: 'O conforto que recebemos de Deus nos capacita a consolar aqueles em qualquer tribulação.'
          }
        ]
      },
      {
        id: 'fv_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: A DESCOBERTA DA ORIGEM',
        context: 'Você descobre sem querer quem criou o boato: foi um colega ciumento que tirou uma nota baixa no último trabalho. Ele pede que você não conte nada a ninguém.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'fv_3_a',
            text: 'Confrontar o colega a sós, mostrando o dano que ele causou e sugerindo que ele desminta.',
            consequence: 'Ele fica envergonhado e promete apagar a conta e se retratar pessoalmente com a Julia.',
            effects: { coragem: 4, sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Correção fraterna em particular.',
            biblicalReference: '📖 Mateus 18:15',
            biblicalExplanation: 'Repreender com sabedoria e em particular abre espaço para o arrependimento sem humilhação pública.'
          },
          {
            id: 'fv_3_b',
            text: 'Contar imediatamente para a coordenação quem é o autor do boato.',
            consequence: 'A escola toma providências disciplinares e encerra o problema na raiz institucional.',
            effects: { integridade: 4, sabedoria: 3 },
            biblicalPrinciple: 'A busca por ordem e justiça.',
            biblicalReference: '📖 Romanos 13:1',
            biblicalExplanation: 'Recorrer às autoridades constituídas é um caminho legítimo para restaurar a ordem.'
          },
          {
            id: 'fv_3_c',
            text: 'Expor o nome dele no grupo de WhatsApp da sala para que todos saibam a verdade.',
            consequence: 'A verdade aparece, mas gera uma nova onda de linchamento virtual contra ele.',
            effects: { coragem: 2, misericordia: 1 },
            biblicalPrinciple: 'Evitar pagar o mal com o mal.',
            biblicalReference: '📖 Romanos 12:17',
            biblicalExplanation: 'Não pagueis a ninguém o mal pelo mal; procurai as coisas honestas perante todos.'
          },
          {
            id: 'fv_3_d',
            text: 'Aconselhá-lo a pedir desculpas e se oferecer para acompanhá-lo até a Julia.',
            consequence: 'Sua mediação pacificadora permite que ele assuma o erro e peça perdão com maturidade.',
            effects: { misericordia: 5, fe: 4, sabedoria: 3 },
            biblicalPrinciple: 'O ministério da reconciliação.',
            biblicalReference: '📖 2 Coríntios 5:18',
            biblicalExplanation: 'Promover a reconciliação e o perdão restaura relacionamentos quebrados.'
          }
        ]
      },
      {
        id: 'fv_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O PEDIDO DE PERDÃO',
        context: 'O colega decide reunir coragem e pede desculpas à Julia no final da aula. O clima na sala ainda está tenso e hesitante.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'fv_4_a',
            text: 'Apoiar o momento de reconciliação, incentivando a turma a virar a página com maturidade.',
            consequence: 'A sala percebe o exemplo de superação e o clima pesado se dissipa gradativamente.',
            effects: { sabedoria: 4, misericordia: 4, fe: 3 },
            biblicalPrinciple: 'Bem-aventurados os pacificadores.',
            biblicalReference: '📖 Mateus 5:9',
            biblicalExplanation: 'Os pacificadores constroem pontes onde havia abismos e discórdia.'
          },
          {
            id: 'fv_4_b',
            text: 'Ficar neutro em silêncio observando o desfecho da conversa.',
            consequence: 'O pedido de desculpas acontece, mas sem o reforço de um ambiente comunitário acolhedor.',
            effects: { sabedoria: 2 },
            biblicalPrinciple: 'A prudência no agir.',
            biblicalReference: '📖 Eclesiastes 3:7',
            biblicalExplanation: 'Há tempo de rasgar e tempo de coser; tempo de calar e tempo de falar.'
          },
          {
            id: 'fv_4_c',
            text: 'Lembrar aos colegas que errar e arrepender-se faz parte do amadurecimento de todos.',
            consequence: 'Sua palavra traz uma reflexão profunda sobre compaixão e segunda chance.',
            effects: { fe: 4, misericordia: 3, integridade: 3 },
            biblicalPrinciple: 'A graça e a restauração do caído.',
            biblicalReference: '📖 Gálatas 6:1',
            biblicalExplanation: 'Se alguém for surpreendido nalguma falta, vós que sois espirituais restaurai-o com espírito de mansidão.'
          },
          {
            id: 'fv_4_d',
            text: 'Convidar Julia e o colega para integrarem o mesmo grupo no trabalho de artes.',
            consequence: 'A convivência prática dissolve o ressentimento restante e sela o perdão sincero.',
            effects: { misericordia: 5, integridade: 3, coragem: 2 },
            biblicalPrinciple: 'Superar ofensas na prática.',
            biblicalReference: '📖 Colossenses 3:13',
            biblicalExplanation: 'Suportando-vos uns aos outros e perdoando-vos mutuamente, como Cristo vos perdoou.'
          }
        ]
      },
      {
        id: 'fv_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O APRENDIZADO DA TURMA',
        context: 'Após os acontecimentos, o professor propõe uma roda de conversa sobre cidadania digital e integridade nas palavras.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'fg_5_a_dup',
            text: 'Compartilhar com carinho como o cuidado com a fala protege a vida das pessoas ao nosso redor.',
            consequence: 'Sua fala toca o coração dos colegas e cria um compromisso coletivo contra fofocas.',
            effects: { fe: 4, integridade: 4, sabedoria: 3 },
            biblicalPrinciple: 'Palavras que edificam.',
            biblicalReference: '📖 Efésios 4:29',
            biblicalExplanation: 'Não saia da vossa boca nenhuma palavra torpe, mas só a que for boa para promover a edificação.'
          },
          {
            id: 'fg_5_b_dup',
            text: 'Escutar em silêncio as opiniões dos outros colegas.',
            consequence: 'Você absorve o aprendizado coletivo de forma reflexiva.',
            effects: { sabedoria: 3 },
            biblicalPrinciple: 'Sabedoria em ouvir.',
            biblicalReference: '📖 Provérbios 1:5',
            biblicalExplanation: 'Ouça o sábio e cresça em prudência.'
          },
          {
            id: 'fg_5_c_dup',
            text: 'Sugerir um pacto na turma de nunca compartilhar boatos sem confirmação direta.',
            consequence: 'A iniciativa vira uma regra respeitada por toda a sala durante o ano letivo.',
            effects: { coragem: 3, integridade: 5, sabedoria: 3 },
            biblicalPrinciple: 'Guardar os lábios do engano.',
            biblicalReference: '📖 1 Pedro 3:10',
            biblicalExplanation: 'Quem quer amar a vida e ver dias bons, refreie a sua língua do mal e os seus lábios de falarem engano.'
          },
          {
            id: 'fg_5_d_dup',
            text: 'Agradecer a Julia e ao colega pela coragem de resolverem as coisas com paz.',
            consequence: 'O reconhecimento fortalece a maturidade do grupo como comunidade.',
            effects: { misericordia: 4, fe: 3 },
            biblicalPrinciple: 'Valorizar a paz e a harmonia.',
            biblicalReference: '📖 Salmos 133:1',
            biblicalExplanation: 'Quão bom e suave é viver em união pacífica.'
          }
        ]
      }
    ]
  },

  // 3. REDES SOCIAIS (A FOTO)
  {
    id: 'a_foto',
    title: 'A FOTO EXPOSTA',
    subtitle: 'Redes sociais, privacidade e responsabilidade digital',
    description: 'Uma imagem embaraçosa de um colega circula rapidamente no celular. Qual atitude tomar perante o impulso digital de compartilhar?',
    profiles: ['adolescente'],
    theme: 'Redes Sociais',
    icon: 'Camera',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'O que você publica ou compartilha reflete quem você realmente é?',
    scenes: [
      {
        id: 'af_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: A NOTIFICAÇÃO NO CELULAR',
        context: 'Durante o dever de casa, seu celular vibra sem parar. Um grupo privado criou figurinhas e memes com uma foto tirada escondida de um aluno dormindo e babando na aula de biologia.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'af_1_a',
            text: 'Salvar a figurinha para usar depois em conversas com amigos.',
            consequence: 'Você guarda o conteúdo pejorativo, alimentando a cadeia de exposição alheia.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Não se alegrar com o constrangimento do outro.',
            biblicalReference: '📖 1 Coríntios 13:6',
            biblicalExplanation: 'O amor verdadeiro não se alegra com a injustiça ou com a humilhação do próximo.'
          },
          {
            id: 'af_1_b',
            text: 'Apagar a foto imediatamente do seu celular e não repassar a ninguém.',
            consequence: 'Você interrompe a corrente no seu aparelho, mantendo sua consciência limpa e reta.',
            effects: { integridade: 4, sabedoria: 3 },
            biblicalPrinciple: 'Pureza de atitude em particular.',
            biblicalReference: '📖 Salmos 101:3',
            biblicalExplanation: 'Não porei coisa má diante dos meus olhos; guardo o coração do erro.'
          },
          {
            id: 'af_1_c',
            text: 'Sair do grupo imediatamente para demonstrar que não concorda com o conteúdo.',
            consequence: 'Sua saída chama a atenção dos administradores do grupo, enviando um sinal claro.',
            effects: { coragem: 4, integridade: 3 },
            biblicalPrinciple: 'Separar-se de práticas nocivas.',
            biblicalReference: '📖 Salmos 1:1',
            biblicalExplanation: 'Bem-aventurado o que não anda segundo o conselho dos ímpios nem se assenta na roda dos escarnecedores.'
          },
          {
            id: 'af_1_d',
            text: 'Avisar quem tirou a foto que tirar fotos de pessoas sem permissão é invasão de privacidade.',
            consequence: 'O criador do meme fica constrangido e percebe o risco ético do que fez.',
            effects: { sabedoria: 4, coragem: 3, integridade: 3 },
            biblicalPrinciple: 'Instruir com prudência.',
            biblicalReference: '📖 Provérbios 25:12',
            biblicalExplanation: 'Como brinco de ouro e ornamento de ouro fino é o sábio repreensor para o ouvinte atento.'
          }
        ]
      },
      {
        id: 'af_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A CHUVA DE CURTIDAS',
        context: 'No dia seguinte, a foto foi parar no Stories de uma conta com muitos seguidores. O aluno da foto descobre e demonstra profunda tristeza e vergonha na aula.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'af_2_a',
            text: 'Mandar uma mensagem privada para a conta pedindo educadamente para apagarem o post.',
            consequence: 'A conta lê sua mensagem fundamentada e resolve remover o Stories por prudência.',
            effects: { coragem: 4, sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'Misericórdia ativa e intervenção pacífica.',
            biblicalReference: '📖 Provérbios 24:11',
            biblicalExplanation: 'Livra os que estão sendo levados à ruína; retém os que vão tropeçando.'
          },
          {
            id: 'af_2_b',
            text: 'Ir conversar pessoalmente com o colega exposto para oferecer um abraço e apoio real.',
            consequence: 'Ele desabafa dizendo que nem queria vir à escola e se sente muito consolado por você.',
            effects: { misericordia: 5, fe: 3, integridade: 3 },
            biblicalPrinciple: 'Chorar com os que choram.',
            biblicalReference: '📖 Romanos 12:15',
            biblicalExplanation: 'Alegrai-vos com os que se alegram e chorai com os que choram.'
          },
          {
            id: 'af_2_c',
            text: 'Fazer um post no seu perfil destacando a importância do respeito e da empatia na internet.',
            consequence: 'Vários colegas compartilham sua mensagem positiva, mudando o foco da discussão na escola.',
            effects: { fe: 4, coragem: 3, sabedoria: 3 },
            biblicalPrinciple: 'Promover a luz no ambiente digital.',
            biblicalReference: '📖 Mateus 5:16',
            biblicalExplanation: 'Assim resplandeça a vossa luz perante os homens para que vejam as vossas boas obras.'
          },
          {
            id: 'af_2_d',
            text: 'Aconselhar o colega a conversar com os pais e a direção para resolverem o vazamento.',
            consequence: 'Ele ganha confiança para buscar o suporte necessário com os adultos responsáveis.',
            effects: { sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'Buscar conselho sábio em tempos de crise.',
            biblicalReference: '📖 Provérbios 11:14',
            biblicalExplanation: 'Na multidão de conselheiros há segurança e direção correta.'
          }
        ]
      },
      {
        id: 'af_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: A REUNIÃO NA ESCOLA',
        context: 'A direção descobre o ocorrido e chama alguns alunos para entender a origem do compartilhamento. Perguntam se você sabe quem começou a divulgação.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'af_3_a',
            text: 'Falar a verdade com serenidade, focando nos fatos sem espírito de vingança.',
            consequence: 'A coordenação consegue atuar com clareza e acolher o aluno prejudicado.',
            effects: { integridade: 5, coragem: 4, fe: 3 },
            biblicalPrinciple: 'Falar a verdade em retidão.',
            biblicalReference: '📖 Provérbios 12:17',
            biblicalExplanation: 'O que diz a verdade manifesta a justiça, mas a testemunha falsa traz engano.'
          },
          {
            id: 'af_3_b',
            text: 'Dizer que prefere não citar nomes, mas explicar detalhadamente como o dinamismo das fotos funciona.',
            consequence: 'A escola entende a dinâmica sem gerar um clima de denúncia violenta entre os alunos.',
            effects: { sabedoria: 4, misericordia: 3 },
            biblicalPrinciple: 'Prudência nas palavras.',
            biblicalReference: '📖 Provérbios 10:19',
            biblicalExplanation: 'No muito falar não falta transgressão, mas o que modera os lábios é prudente.'
          },
          {
            id: 'af_3_c',
            text: 'Incentivar o autor do vazamento a se apresentar espontaneamente à direção.',
            consequence: 'O autor assume a responsabilidade de forma madura, amenizando as punições.',
            effects: { sabedoria: 5, integridade: 4, misericordia: 3 },
            biblicalPrinciple: 'Confissão e correção de rota.',
            biblicalReference: '📖 Provérbios 28:13',
            biblicalExplanation: 'O que encobre as suas transgressões nunca prosperará, mas o que as confessa e deixa alcançará misericórdia.'
          },
          {
            id: 'af_3_d',
            text: 'Oferecer-se para ajudar a organizar uma palestra sobre cyberbullying na escola.',
            consequence: 'Sua iniciativa transforma uma crise num momento pedagógico valioso para todos.',
            effects: { coragem: 3, fe: 4, integridade: 4 },
            biblicalPrinciple: 'Transformar o mal em bem.',
            biblicalReference: '📖 Gênesis 50:20',
            biblicalExplanation: 'Vós intentastes o mal contra mim, mas Deus o tornou em bem para preservar a vida.'
          }
        ]
      },
      {
        id: 'af_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: A CONSCIENTIZAÇÃO DIGITAL',
        context: 'Na semana seguinte, a escola promove o dia da Ética Digital. Os alunos são convidados a revisar seus próprios comportamentos nas redes.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'af_4_a',
            text: 'Apagar dos seus grupos e arquivos antigos fotos que possam constranger alguém.',
            consequence: 'Sua atitude prática alinha suas redes sociais aos seus valores de integridade.',
            effects: { integridade: 5, fe: 3 },
            biblicalPrinciple: 'Limpeza de conduta e renovação.',
            biblicalReference: '📖 Salmos 119:9',
            biblicalExplanation: 'Como purificará o jovem o seu caminho? Observando-o segundo a tua palavra.'
          },
          {
            id: 'af_4_b',
            text: 'Conversar com amigos próximos sobre como usar a internet para edificar e incentivar pessoas.',
            consequence: 'Seu círculo próximo adota uma postura muito mais madura e saudável online.',
            effects: { sabedoria: 4, misericordia: 3, fe: 3 },
            biblicalPrinciple: 'Influência positiva e sal da terra.',
            biblicalReference: '📖 Mateus 5:13',
            biblicalExplanation: 'Vós sois o sal da terra; se o sal perder o sabor, para nada mais presta.'
          },
          {
            id: 'af_4_c',
            text: 'Criar um canal de incentivo e mensagens motivacionais entre os colegas.',
            consequence: 'A iniciativa atrai muitos alunos e espalha encorajamento na comunidade escolar.',
            effects: { fe: 4, misericordia: 4 },
            biblicalPrinciple: 'Encaminhar palavras de vida.',
            biblicalReference: '📖 Provérbios 12:25',
            biblicalExplanation: 'A ansiedade no coração abate o homem, mas uma boa palavra o alegra.'
          },
          {
            id: 'af_4_d',
            text: 'Reconhecer em oração que precisa vigiar seus olhos e impulsos no celular.',
            consequence: 'Você desenvolve autodomínio e maturidade espiritual cotidiana.',
            effects: { fe: 5, sabedoria: 4 },
            biblicalPrinciple: 'Vigilância e oração.',
            biblicalReference: '📖 Mateus 26:41',
            biblicalExplanation: 'Vigiai e orai para que não entreis em tentação; o espírito está pronto, mas a carne é fraca.'
          }
        ]
      },
      {
        id: 'af_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O RECOMEÇO',
        context: 'O colega que passou pela situação incômoda retorna aos estudos com paz. Ele te procura no fim da aula para agradecer.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'af_5_a',
            text: 'Agradecer a amizade dele e dizer que ele pode contar com você sempre.',
            consequence: 'Uma amizade sincera e duradoura se consolida sobre bases de respeito real.',
            effects: { misericordia: 5, integridade: 4, fe: 3 },
            biblicalPrinciple: 'Amor fraternal genuíno.',
            biblicalReference: '📖 1 Pedro 1:22',
            biblicalExplanation: 'Amai-vos ardentemente uns aos outros de coração puro.'
          },
          {
            id: 'af_5_b',
            text: 'Dizer que a justiça de Deus e o respeito prevaleceram no final.',
            consequence: 'Ele concorda e se sente abençoado pela postura que você teve.',
            effects: { fe: 5, sabedoria: 3 },
            biblicalPrinciple: 'Dar glória a Deus pela justiça.',
            biblicalReference: '📖 Salmos 37:5–6',
            biblicalExplanation: 'Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.'
          },
          {
            id: 'af_5_c',
            text: 'Convidá-lo para lanchar junto com seu grupo de amigos no final de semana.',
            consequence: 'Ele é integrado em um ambiente saudável e acolhedor.',
            effects: { misericordia: 4, integridade: 3 },
            biblicalPrinciple: 'Comunhão e acolhimento.',
            biblicalReference: '📖 Atos 2:46',
            biblicalExplanation: 'Perseverando unânimes, partiam o pão com alegria e singeleza de coração.'
          },
          {
            id: 'af_5_d',
            text: 'Incentivá-lo a focar nos seus talentos e estudos sem se importar com a opinião maldosa de outros.',
            consequence: 'Ele ganha autoestima e se dedica aos seus sonhos com alegria renovada.',
            effects: { coragem: 4, sabedoria: 4 },
            biblicalPrinciple: 'Guardar a identidade em Deus.',
            biblicalReference: '📖 Salmos 139:14',
            biblicalExplanation: 'Eu te louvarei, porque de um modo assombroso e tão maravilhoso fui feito.'
          }
        ]
      }
    ]
  },

  // 4. AMIZADE (ESCOLHAS DE AMIZADE)
  {
    id: 'escolhas_de_amizade',
    title: 'INFLUÊNCIAS E AMIZADES',
    subtitle: 'Valores, escolhas e fidelidade nos relacionamentos',
    description: 'Seus novos amigos propõem cabular a aula de sexta-feira para ir a um shopping distante. Como gerenciar a fidelidade aos seus princípios e pais?',
    profiles: ['adolescente'],
    theme: 'Amizade e Influência',
    icon: 'HeartHandshake',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Suas amizades aproximam você dos seus valores ou te afastam deles?',
    scenes: [
      {
        id: 'ea_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: O CONVITE INESPERADO',
        context: 'Na quinta-feira à tarde, um grupo de colegas populares te convida para não ir à última aula de sexta-feira e ir com eles a um shopping novo. "Todo mundo vai, seus pais nem vão ficar sabendo", diz um deles.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'ea_1_a',
            text: 'Recusar de imediato dizendo: "Não posso, meus pais não autorizaram e preciso estar na aula."',
            consequence: 'Sua recusa é firme. O grupo te chama de careta, mas você mantém sua palavra reta com seus pais.',
            effects: { integridade: 5, coragem: 3, fe: 2 },
            biblicalPrinciple: 'Honrar pais e manter a verdade.',
            biblicalReference: '📖 Efésios 6:1–2',
            biblicalExplanation: 'Filhos, obedecei a vossos pais no Senhor, pois isto é justo.'
          },
          {
            id: 'ea_1_b',
            text: 'Dizer que vai pensar e que responde mais tarde no grupo.',
            consequence: 'Você ganha tempo para refletir e conversar com sua família antes de decidir impulsivamente.',
            effects: { sabedoria: 3, integridade: 2 },
            biblicalPrinciple: 'Consultar antes de agir.',
            biblicalReference: '📖 Provérbios 15:22',
            biblicalExplanation: 'Onde não há conselho os projetos saem vãos, mas na multidão de conselheiros se estabelecem.'
          },
          {
            id: 'ea_1_c',
            text: 'Propor ao grupo ir ao shopping no sábado à tarde com autorização de todos os pais.',
            consequence: 'Você oferece uma alternativa saudável sem quebrar regras nem enganar a família.',
            effects: { sabedoria: 5, integridade: 3, coragem: 2 },
            biblicalPrinciple: 'Procurar o caminho da integridade sem mentira.',
            biblicalReference: '📖 Provérbios 3:4',
            biblicalExplanation: 'Acharás graça e bom entendimento aos olhos de Deus e dos homens.'
          },
          {
            id: 'ea_1_d',
            text: 'Aceitar o convite com receio para não perder o vínculo com o grupo popular.',
            consequence: 'Você sente a ansiedade e o peso da mentira aumentando no seu peito antes mesmo da sexta-feira.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Cuidado com más companhias.',
            biblicalReference: '📖 1 Coríntios 15:33',
            biblicalExplanation: 'Não vos enganeis: as más conversações corrompem os bons costumes.'
          }
        ]
      },
      {
        id: 'ea_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A CONVERSA EM CASA',
        context: 'À noite em casa, seus pais perguntam como foi seu dia e se você tem alguma atividade na escola na sexta-feira.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'ea_2_a',
            text: 'Contar abertamente sobre o convite dos colegas e dizer que você decidiu não ir.',
            consequence: 'Seus pais elogiam sua maturidade e a confiança entre vocês se fortalece imensamente.',
            effects: { integridade: 5, fe: 3, sabedoria: 3 },
            biblicalPrinciple: 'Transparência e honestidade no lar.',
            biblicalReference: '📖 Provérbios 12:22',
            biblicalExplanation: 'Os lábios mentirosos são abomináveis ao Senhor, mas os que agem fielmente são o seu deleite.'
          },
          {
            id: 'ea_2_b',
            text: 'Perguntar aos seus pais se seria possível eles te levarem ao shopping no fim de semana.',
            consequence: 'Seus pais concordam com alegria em planejar um passeio seguro com você.',
            effects: { sabedoria: 4, misericordia: 2 },
            biblicalPrinciple: 'Aconselhamento e comunhão em família.',
            biblicalReference: '📖 Provérbios 1:8',
            biblicalExplanation: 'Ouve, filho meu, a instrução de teu pai e não deixes o ensino de tua mãe.'
          },
          {
            id: 'ea_2_c',
            text: 'Esconder o assunto e dizer apenas que a sexta-feira será um dia comum de aulas.',
            consequence: 'Você mantém a rotina, mas sente o remorso de omitir pensamentos que te tentaram.',
            effects: { sabedoria: 2 },
            biblicalPrinciple: 'A busca por um coração sincero.',
            biblicalReference: '📖 Salmos 51:6',
            biblicalExplanation: 'Eis que amas a verdade no íntimo e no oculto me fazes conhecer a sabedoria.'
          },
          {
            id: 'ea_2_d',
            text: 'Pedir conselho aos seus pais sobre como dizer "não" a amigos sem gerar conflito.',
            consequence: 'Seus pais te dão dicas valiosas de posicionamento e firmeza pessoal.',
            effects: { fe: 4, sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'Aprender com a experiência dos pais.',
            biblicalReference: '📖 Provérbios 4:1',
            biblicalExplanation: 'Ouvi, filhos, a instrução do pai e estai atentos para conhecerdes a prudência.'
          }
        ]
      },
      {
        id: 'ea_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: A SEXTA-FEIRA NA ESCOLA',
        context: 'Na sexta-feira, os colegas que decidiram cabular a aula te chamam no portão antes de saírem. O inspetor da escola está perto.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'ea_3_a',
            text: 'Permanecer firme dentro da escola e ir para a sala de aula.',
            consequence: 'Você assiste à aula com tranquilidade. Mais tarde descobre que os inspetores notaram a ausência dos outros.',
            effects: { integridade: 5, coragem: 4, fe: 3 },
            biblicalPrinciple: 'Firmeza de caráter.',
            biblicalReference: '📖 1 Coríntios 16:13',
            biblicalExplanation: 'Vigiai, estai firmes na fé, portai-vos varonilmente e sede fortes.'
          },
          {
            id: 'ea_3_b',
            text: 'Avisar educadamente ao inspetor que alguns alunos estão saindo sem autorização.',
            consequence: 'A escola intervém a tempo e evita que os alunos fiquem desprotegidos na rua.',
            effects: { sabedoria: 3, integridade: 4 },
            biblicalPrinciple: 'Zelo pela segurança e pela ordem.',
            biblicalReference: '📖 Provérbios 22:3',
            biblicalExplanation: 'O prudente vê o mal e esconde-se, mas os inexperientes passam e sofrem a pena.'
          },
          {
            id: 'ea_3_c',
            text: 'Enviar uma mensagem no grupo alertando que cabular pode trazer consequências graves na nota.',
            consequence: 'Dois colegas desistem da ideia e retornam para a sala de aula a tempo.',
            effects: { misericordia: 4, sabedoria: 4, coragem: 3 },
            biblicalPrinciple: 'Influência pacificadora e de livramento.',
            biblicalReference: '📖 Tiago 5:19–20',
            biblicalExplanation: 'Aquele que converte o erro do caminho de um irmão livra a sua alma da morte.'
          },
          {
            id: 'ea_3_d',
            text: 'Desejar boa sorte a eles com um sorriso sem participar do ato.',
            consequence: 'Você não participa do erro, mas deixa de oferecer um conselho preventivo.',
            effects: { sabedoria: 2 },
            biblicalPrinciple: 'Cuidado para não ser omisso.',
            biblicalReference: '📖 Tiago 4:17',
            biblicalExplanation: 'Aquele que sabe fazer o bem e não o faz, comete pecado.'
          }
        ]
      },
      {
        id: 'ea_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: A CONSEQUÊNCIA DOS OUTROS',
        context: 'Na segunda-feira, os pais dos alunos que saíram da escola são chamados pela direção. O clima na turma fica bastante tenso.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'ea_4_a',
            text: 'Acolher os colegas sem zombaria nem tom de superioridade ("eu avisei").',
            consequence: 'Eles reconhecem que você estava certo e passam a respeitar profundamente suas atitudes.',
            effects: { misericordia: 5, sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'Humildade e empatia sem orgulho.',
            biblicalReference: '📖 Provérbios 16:18',
            biblicalExplanation: 'A soberba precede a ruína, e a altivez do espírito precede a queda.'
          },
          {
            id: 'ea_4_b',
            text: 'Ajudá-los a colocar as matérias e anotações da aula que perderam em dia.',
            consequence: 'Seu gesto de generosidade demonstra que ser correto não significa ser egoísta.',
            effects: { misericordia: 4, fe: 4, integridade: 3 },
            biblicalPrinciple: 'Servir e fazer o bem.',
            biblicalReference: '📖 Galatas 6:10',
            biblicalExplanation: 'Façamos o bem a todos, mas principalmente aos da família da fé.'
          },
          {
            id: 'ea_4_c',
            text: 'Aproveitar o momento para refletir com eles sobre o valor da confiança dos pais.',
            consequence: 'A conversa estimula uma mudança de atitude genuína nos seus amigos.',
            effects: { sabedoria: 5, fe: 3 },
            biblicalPrinciple: 'Sabedoria ao aconselhar.',
            biblicalReference: '📖 Provérbios 27:17',
            biblicalExplanation: 'Como o ferro com o ferro se afia, assim o homem afia o rosto do seu amigo.'
          },
          {
            id: 'ea_4_d',
            text: 'Ficar em silêncio no seu lugar para não se envolver nos comentários.',
            consequence: 'Você preserva sua rotina de estudos sem atritos.',
            effects: { sabedoria: 3 },
            biblicalPrinciple: 'Guerrear com mansidão e quietude.',
            biblicalReference: '📖 1 Tessalonicenses 4:11',
            biblicalExplanation: 'Procurai viver em paz, cuidar dos vossos próprios negócios e trabalhar.'
          }
        ]
      },
      {
        id: 'ea_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O RECONHECIMENTO',
        context: 'No final do trimestre, seus pais preparam um jantar especial para você em comemoração pela sua responsabilidade e notas.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'ea_5_a',
            text: 'Agradecer a Deus e aos seus pais pelo apoio diário e valores transmitidos.',
            consequence: 'O ambiente familiar transborda gratidão e alegria verdadeira.',
            effects: { fe: 5, integridade: 4, misericordia: 3 },
            biblicalPrinciple: 'Gratidão a Deus e honra à família.',
            biblicalReference: '📖 Colossenses 3:15',
            biblicalExplanation: 'A paz de Cristo seja o árbitro em vossos corações e sede agradecidos.'
          },
          {
            id: 'ea_5_b',
            text: 'Convidar um amigo que precisa de boas referências para participar do jantar com sua família.',
            consequence: 'O amigo presencia um lar estruturado e se sente inspirado por essa convivência.',
            effects: { misericordia: 5, fe: 4 },
            biblicalPrinciple: 'Ser testemunho vivo de amor no lar.',
            biblicalReference: '📖 Mateus 5:14',
            biblicalExplanation: 'Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte.'
          },
          {
            id: 'ea_5_c',
            text: 'Renovar seu compromisso de manter a honestidade em todas as áreas da vida.',
            consequence: 'Você consolida um caráter reto para a juventude e vida adulta.',
            effects: { integridade: 5, sabedoria: 4 },
            biblicalPrinciple: 'Andar em integridade perpétua.',
            biblicalReference: '📖 Provérbios 20:7',
            biblicalExplanation: 'O justo anda na sua integridade; bem-aventurados serão os seus filhos depois dele.'
          },
          {
            id: 'ea_5_d',
            text: 'Guardar parte da mesada economizada para investir em livros e cursos de crescimento.',
            consequence: 'Sua disciplina financeira traz frutos precoces de autonomia.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Prudência na gestão dos recursos.',
            biblicalReference: '📖 Provérbios 21:20',
            biblicalExplanation: 'Tesouro desejável e azeite há na casa do sábio, mas o homem insensato os dissipa.'
          }
        ]
      }
    ]
  },

  // 5. HONESTIDADE NA ESCOLA (NINGUÉM VAI SABER)
  {
    id: 'ninguem_vai_saber',
    title: 'A PROVA DIFÍCIL',
    subtitle: 'Honestidade na escola, cola e consciência',
    description: 'Em uma prova decisiva de matemática, um colega à sua frente coloca a folha de respostas inteiramente visível. A tentação da cola surge.',
    profiles: ['adolescente'],
    theme: 'Honestidade na Escola',
    icon: 'BookOpen',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Vale a pena obter um resultado rápido abrindo mão da sua integridade?',
    scenes: [
      {
        id: 'nvs_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: A FOLHA VISÍVEL',
        context: 'Você estudou para a prova, mas duas questões valiosas estão te deixando na dúvida. O colega da frente inclina o corpo e a folha com as respostas certas fica totalmente aberta na sua linha de visão.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'nvs_1_a',
            text: 'Olhar rapidamente e copiar o resultado das duas questões.',
            consequence: 'Você garante os pontos na prova, mas o sentimento de fraude acompanha seu resultado.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Engano e balança enganosa.',
            biblicalReference: '📖 Provérbios 11:1',
            biblicalExplanation: 'Balança enganosa é abominação para o Senhor, mas o peso justo é o seu prazer.'
          },
          {
            id: 'nvs_1_b',
            text: 'Desviar o olhar deliberadamente, focar na sua própria folha e fazer o seu melhor.',
            consequence: 'Você responde com o que sabe, mantendo a consciência totalmente limpa e justa.',
            effects: { integridade: 5, fe: 3, coragem: 3 },
            biblicalPrinciple: 'Integridade pessoal diante de Deus.',
            biblicalReference: '📖 2 Coríntios 8:21',
            biblicalExplanation: 'Pois zelamos do que é honesto, não só diante do Senhor, mas também diante dos homens.'
          },
          {
            id: 'nvs_1_c',
            text: 'Tocar suavemente na cadeira do colega e avisar em voz baixa para ele proteger a folha.',
            consequence: 'Ele se ajeita e protege a prova dele, evitando que outros se tentem ou que ele seja punido.',
            effects: { sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Proteger o próximo com sabedoria.',
            biblicalReference: '📖 Provérbios 27:5',
            biblicalExplanation: 'Melhor é a repreensão franca do que o amor encoberto.'
          },
          {
            id: 'nvs_1_d',
            text: 'Fazer uma breve oração em silêncio pedindo calma e clareza mental para responder o que estudou.',
            consequence: 'Sua mente se acalma e você se lembra do raciocínio correto para resolver a questão.',
            effects: { fe: 5, sabedoria: 3 },
            biblicalPrinciple: 'Confiança na oração e na preparação.',
            biblicalReference: '📖 Filipenses 4:6–7',
            biblicalExplanation: 'Não estejais inquietos por coisa alguma; antes as vossas petições sejam conhecidas diante de Deus.'
          }
        ]
      },
      {
        id: 'nvs_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: O GRUPO DE COLA NO WHATSAPP',
        context: 'Durante a prova, percebe que alguns alunos estão usando um celular escondido sob a carteira com um grupo aberto no WhatsApp trocando respostas.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'nvs_2_a',
            text: 'Ignorar totalmente os celulares e continuar focado no seu exame.',
            consequence: 'Você não se deixa distrair nem contaminar pela fraude ao seu redor.',
            effects: { integridade: 4, sabedoria: 3 },
            biblicalPrinciple: 'Guardar o foco no dever retilíneo.',
            biblicalReference: '📖 Provérbios 4:25',
            biblicalExplanation: 'Os teus olhos olhem para a frente, e as tuas pálpebras olhem direto diante de ti.'
          },
          {
            id: 'nvs_2_b',
            text: 'Levantar a mão e pedir ao professor para caminhar pela sala fiscalizando as fileiras.',
            consequence: 'O professor anda pela sala e os alunos guardam os celulares imediatamente.',
            effects: { coragem: 4, sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'Zelo pela justiça coletiva.',
            biblicalReference: '📖 Levítico 19:15',
            biblicalExplanation: 'Não farás injustiça no juízo; não favorecerás o pobre nem respeitarás o grande; com justiça julgarás.'
          },
          {
            id: 'nvs_2_c',
            text: 'Mandar um olhar sério para os colegas mostrando que desaprova a atitude.',
            consequence: 'Eles percebem a repreensão silenciosa e guardam o aparelho por receio.',
            effects: { coragem: 3, integridade: 3 },
            biblicalPrinciple: 'Repreensão pacífica pelo testemunho.',
            biblicalReference: '📖 Efésios 5:13',
            biblicalExplanation: 'Todas as coisas são manifestadas quando descobertas pela luz.'
          },
          {
            id: 'nvs_2_d',
            text: 'Ao entregar sua prova, comentar com o professor no privado sobre o uso de celulares na sala.',
            consequence: 'O professor agradece o aviso discreto e planeja reforçar a fiscalização no próximo exame.',
            effects: { sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Agir com discrição e ordem.',
            biblicalReference: '📖 1 Coríntios 14:40',
            biblicalExplanation: 'Todas as coisas sejam feitas com decência e ordem.'
          }
        ]
      },
      {
        id: 'nvs_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: A DEVOLUÇÃO DAS NOTAS',
        context: 'O professor devolve as notas na aula seguinte. Ao somar os pontos da sua prova, você percebe que o professor errou a conta e te deu 2 pontos a mais do que você realmente tirou.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'nvs_3_a',
            text: 'Ficar quieto e aproveitar os 2 pontos extras sem falar nada.',
            consequence: 'Sua nota no boletim fica maior, mas você sabe que aquele resultado não é legítimo.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Lucro desonesto e ganho indevido.',
            biblicalReference: '📖 Provérbios 16:8',
            biblicalExplanation: 'Melhor é o pouco com justiça do que grandes rendas com injustiça.'
          },
          {
            id: 'nvs_3_b',
            text: 'Ir até a mesa do professor e mostrar a soma incorreta para ele corrigir para menos.',
            consequence: 'O professor fica surpreso com sua honestidade exemplar e elogia sua integridade diante de todos.',
            effects: { integridade: 5, coragem: 4, fe: 4 },
            biblicalPrinciple: 'Testemunho irrefutável de honestidade.',
            biblicalReference: '📖 Provérbios 28:6',
            biblicalExplanation: 'Melhor é o pobre que anda na sua integridade do que o perverso de dois caminhos.'
          },
          {
            id: 'nvs_3_c',
            text: 'Aproveitar a ida à mesa do professor para pedir que ele te explique o erro que você cometeu na questão.',
            consequence: 'Além de ser honesto na nota, você aprende o conteúdo e tira 10 no exame seguinte.',
            effects: { sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Buscar a sabedoria e o verdadeiro saber.',
            biblicalReference: '📖 Provérbios 9:9',
            biblicalExplanation: 'Dá instrução ao sábio, e ele se fará mais sábio; ensina ao justo, e ele crescerá em prudência.'
          },
          {
            id: 'nvs_3_d',
            text: 'Comentar com um colega do lado sobre o erro antes de tomar a atitude de corrigir.',
            consequence: 'O colega se impressiona com a sua coragem de abrir mão de pontos por causa da verdade.',
            effects: { fe: 3, integridade: 4, coragem: 3 },
            biblicalPrinciple: 'Ser exemplo vivo para os outros.',
            biblicalReference: '📖 1 Timóteo 4:12',
            biblicalExplanation: 'Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis na palavra, no trato, no amor, na fé, na pureza.'
          }
        ]
      },
      {
        id: 'nvs_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O IMPACTO NA TURMA',
        context: 'A atitude de honestidade gera repercussão na sala. Alguns alunos comentam: "Nossa, quem é que devolve ponto pro professor hoje em dia?"',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'nvs_4_a',
            text: 'Explicar com simplicidade: "Durmo muito melhor sabendo que a minha nota é verdadeira."',
            consequence: 'Sua frase simples faz muitos colegas refletirem sobre paz interior e valores.',
            effects: { fe: 4, integridade: 4, sabedoria: 3 },
            biblicalPrinciple: 'Paz de espírito e boa consciência.',
            biblicalReference: '📖 1 Pedro 3:16',
            biblicalExplanation: 'Tendo uma boa consciência, para que, naquilo em que falam mal de vós, fiquem confundidos.'
          },
          {
            id: 'nvs_4_b',
            text: 'Sorrir e dizer que para você o aprendizado vale mais do que apenas um número no papel.',
            consequence: 'Você demonstra maturidade acadêmica e pessoal inspiradora.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'O valor inestimável do saber real.',
            biblicalReference: '📖 Provérbios 16:16',
            biblicalExplanation: 'Quão melhor é adquirir a sabedoria do que o ouro! E quão mais excelente é adquirir a prudência do que a prata!'
          },
          {
            id: 'nvs_4_c',
            text: 'Se oferecer para montar um grupo de estudos e ajudar os colegas que ficaram com nota baixa.',
            consequence: 'A sala melhora o desempenho coletivo e você compartilha seu conhecimento com generosidade.',
            effects: { misericordia: 5, fe: 3, integridade: 3 },
            biblicalPrinciple: 'A generosidade em ensinar.',
            biblicalReference: '📖 Provérbios 11:25',
            biblicalExplanation: 'A alma generosa prosperará, e aquele que atende também será atendido.'
          },
          {
            id: 'nvs_4_d',
            text: 'Dar de ombros e dizer que cada um sabe do seu próprio caráter.',
            consequence: 'Sua resposta é direta, mas perde a oportunidade de ensinar com amor.',
            effects: { integridade: 3 },
            biblicalPrinciple: 'Cuidado com a rispidez.',
            biblicalReference: '📖 Colossenses 4:6',
            biblicalExplanation: 'A vossa palavra seja sempre agradável, temperada com sal, para que saibais como vos convém responder.'
          }
        ]
      },
      {
        id: 'nvs_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O RECONHECIMENTO FINAL',
        context: 'No final do semestre, o professor te indica para representar a escola na Olimpíada de Conhecimento da região.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'nvs_5_a',
            text: 'Aceitar a oportunidade com gratidão, dedicando seu empenho a Deus e aos estudos.',
            consequence: 'Sua caminhada reta abre portas de futuro brilhante e legítimo.',
            effects: { fe: 5, integridade: 4, sabedoria: 4 },
            biblicalPrinciple: 'A recompensa do caminhar correto.',
            biblicalReference: '📖 Provérbios 22:4',
            biblicalExplanation: 'O galardão da humildade e do temor do Senhor é riquezas, honra e vida.'
          },
          {
            id: 'nvs_5_b',
            text: 'Convidar o colega do grupo de estudos para participar da equipe da olimpíada junto com você.',
            consequence: 'Vocês formam uma dupla forte e motivada para o torneio.',
            effects: { misericordia: 4, integridade: 3, fe: 3 },
            biblicalPrinciple: 'Trabalho em equipe e edificação.',
            biblicalReference: '📖 Eclesiastes 4:9',
            biblicalExplanation: 'Melhor é serem dois do que um, porque têm melhor paga do seu trabalho.'
          },
          {
            id: 'nvs_5_c',
            text: 'Montar um cronograma rigoroso de revisão para dar o seu melhor sem ansiedade.',
            consequence: 'Sua disciplina pessoal garante excelente desempenho.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Diligência e dedicação.',
            biblicalReference: '📖 Provérbios 13:4',
            biblicalExplanation: 'A alma do preguiçoso deseja e coisa nenhuma alcança, mas a alma dos diligentes se engorda.'
          },
          {
            id: 'nvs_5_d',
            text: 'Agradecer publicamente ao professor pelo ensino rigoroso e pelo apoio recebido.',
            consequence: 'Sua gratidão fortalece o vínculo de respeito com os educadores.',
            effects: { fe: 3, misericordia: 4, integridade: 3 },
            biblicalPrinciple: 'Reconhecer e honrar os mestres.',
            biblicalReference: '📖 Galatas 6:6',
            biblicalExplanation: 'O que é instruído na palavra reparta de todos os seus bens com aquele que o instrui.'
          }
        ]
      }
    ]
  },

  // 6. COMPARAÇÃO (O BRILHO DO OUTRO)
  {
    id: 'o_brilho_do_outro',
    title: 'O BRILHO DO OUTRO',
    subtitle: 'Comparação, redes sociais e gratidão',
    description: 'Um colega posta fotos incríveis de viagens, roupas caras e conquistas nas redes. Você começa a sentir descontentamento com a sua própria realidade.',
    profiles: ['adolescente'],
    theme: 'Comparação',
    icon: 'Sparkles',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'O quanto das telas reflete a vida real das pessoas?',
    scenes: [
      {
        id: 'bo_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: O FEED PERFEITO',
        context: 'Rolando o feed do Instagram no domingo à noite, você vê o perfil do Lucas repleto de curtidas, viagens internacionais e equipamentos de última geração. Olhando ao redor do seu quarto simples, um sentimento de inferioridade te atinge.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'bo_1_a',
            text: 'Fechar o aplicativo, respirar fundo e lembrar de 3 coisas pelas quais é grato hoje.',
            consequence: 'Sua mente se preenche com o valor real das bênçãos cotidianas da sua vida.',
            effects: { fe: 5, sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'O poder do contentamento e da gratidão.',
            biblicalReference: '📖 1 Timóteo 6:6',
            biblicalExplanation: 'Grande ganho é a piedade com o contentamento; porque nada trouxemos para este mundo e nada podemos levar.'
          },
          {
            id: 'bo_1_b',
            text: 'Comentar com ironia ou ciúme com um amigo sobre como o Lucas gosta de ostentar.',
            consequence: 'O sentimento de inveja se transforma em amargura e fofoca nas suas conversas.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Cuidado com a inveja que corrói os ossos.',
            biblicalReference: '📖 Provérbios 14:30',
            biblicalExplanation: 'O coração em paz dá vida ao corpo, mas a inveja apodrece os ossos.'
          },
          {
            id: 'bo_1_c',
            text: 'Deixar um elogio sincero no post dele desejando que ele aproveite bastante.',
            consequence: 'Celebrar a alegria alheia destrói o veneno da inveja no seu coração.',
            effects: { misericordia: 5, fe: 3, integridade: 3 },
            biblicalPrinciple: 'Alegrar-se com os que se alegram.',
            biblicalReference: '📖 Romanos 12:15',
            biblicalExplanation: 'Alegrar-se sinceramente com a conquista alheia cura o egoísmo e a comparação.'
          },
          {
            id: 'bo_1_d',
            text: 'Tentar tirar uma foto montada no seu quarto para parecer que também está num lugar chique.',
            consequence: 'Você busca validação artificial e se sente ainda mais vazio após publicar.',
            effects: { integridade: 1 },
            biblicalPrinciple: 'Fazer coisas por vaidade passageira.',
            biblicalReference: '📖 Gálatas 5:26',
            biblicalExplanation: 'Não nos torcemos vangloriosos, provocando-nos uns aos outros, invejando-nos uns aos outros.'
          }
        ]
      },
      {
        id: 'bo_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: A CONVERSA NA ESCOLA',
        context: 'Na segunda-feira, a turma só fala sobre a viagem do Lucas. Você percebe que o próprio Lucas está calado num canto, parecendo distante.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'bo_2_a',
            text: 'Aproximar-se dele e perguntar com interesse real como ele está se sentindo.',
            consequence: 'Lucas desabafa que os pais estão se separando e que a viagem foi uma tentativa frustrada de disfarçar as brigas.',
            effects: { misericordia: 5, sabedoria: 4, fe: 3 },
            biblicalPrinciple: 'Ver além das aparências exteriores.',
            biblicalReference: '📖 1 Samuel 16:7',
            biblicalExplanation: 'O homem vê o que está diante dos olhos, porém o Senhor olha para o coração.'
          },
          {
            id: 'bo_2_b',
            text: 'Passar reto achando que quem tem dinheiro não tem problemas reais.',
            consequence: 'Você mantém um julgamento preconceituoso baseado em recortes de fotos.',
            effects: { sabedoria: 1 },
            biblicalPrinciple: 'Julgamento superficial.',
            biblicalReference: '📖 João 7:24',
            biblicalExplanation: 'Não julgueis segundo a aparência, mas julgar segundo a reta justiça.'
          },
          {
            id: 'bo_2_c',
            text: 'Convidá-lo para lanchar com você e seus amigos sem tocar no assunto das redes.',
            consequence: 'Ele se sente acolhido e relaxa em um ambiente de amizade simples e verdadeira.',
            effects: { misericordia: 4, integridade: 3 },
            biblicalPrinciple: 'O valor da acolhida simples.',
            biblicalReference: '📖 Hebreus 13:2',
            biblicalExplanation: 'Não vos esqueçais da hospitalidade, porque por ela alguns, sem o saberem, hospedaram anjos.'
          },
          {
            id: 'bo_2_d',
            text: 'Oferecer uma palavra de encorajamento ou um versículo bíblico que te fortalece em dias difíceis.',
            consequence: 'Ele guarda sua palavra no coração e se sente profundamente tocado pelo seu carinho.',
            effects: { fe: 5, misericordia: 3 },
            biblicalPrinciple: 'Palavra de consolo no tempo certo.',
            biblicalReference: '📖 Provérbios 25:11',
            biblicalExplanation: 'Como maçãs de ouro em salvas de prata, assim é a palavra dita a seu tempo.'
          }
        ]
      },
      {
        id: 'bo_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: O TEMPO TELA E JEJUM DIGITAL',
        context: 'Percebendo que o excesso de redes sociais estava afetando seus sentimentos, você pensa em estabelecer limites para o uso do celular.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'bo_3_a',
            text: 'Desinstalar aplicativos de fotos por duas semanas para focar na vida real, leitura e oração.',
            consequence: 'Sua mente fica mais leve, sua concentração melhora e seu tempo com Deus se intensifica.',
            effects: { fe: 5, sabedoria: 5, integridade: 4 },
            biblicalPrinciple: 'Autocontrole e domínio próprio.',
            biblicalReference: '📖 Gálatas 5:22–23',
            biblicalExplanation: 'O fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio.'
          },
          {
            id: 'bo_3_b',
            text: 'Colocar um limite diário de 30 minutos de tela nas configurações do celular.',
            consequence: 'Você desenvolve disciplina no uso do tempo sem precisar se isolar completamente.',
            effects: { sabedoria: 4, integridade: 3 },
            biblicalPrinciple: 'Gestão sábia do tempo.',
            biblicalReference: '📖 Efésios 5:15–16',
            biblicalExplanation: 'Vede prudentemente como andais, não como insensatos, mas como sábios, remindo o tempo.'
          },
          {
            id: 'bo_3_c',
            text: 'Começar a seguir perfis edificantes que compartilhem versículos, estudos e aprendizados.',
            consequence: 'Seu feed passa a ser uma fonte de inspiração espiritual em vez de comparação.',
            effects: { fe: 4, sabedoria: 3 },
            biblicalPrinciple: 'Alimentar a mente com o que é puro.',
            biblicalReference: '📖 Filipenses 4:8',
            biblicalExplanation: 'Tudo o que é verdadeiro, honesto, justo, puro, amável, de boa fama, nisso pensai.'
          },
          {
            id: 'bo_3_d',
            text: 'Continuar usando como antes, achando que consegue controlar os sentimentos sozinho.',
            consequence: 'Sem limites práticos, o hábito antigo de rolar telas volta a gerar distrações.',
            effects: { fe: 2 },
            biblicalPrinciple: 'Cuidado com a presunção.',
            biblicalReference: '📖 Provérbios 16:18',
            biblicalExplanation: 'A soberba precede a ruína e a altivez do espírito a queda.'
          }
        ]
      },
      {
        id: 'bo_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O PROJETO VOLUNTÁRIO',
        context: 'Durante seu tempo livre recuperado, você descobre uma ação de distribuição de alimentos e apoio a crianças carentes no seu bairro.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'bo_4_a',
            text: 'Inscrever-se para ajudar todos os sábados de manhã na entrega dos mantimentos.',
            consequence: 'Ao servir os necessitados de perto, você descobre o verdadeiro propósito da vida.',
            effects: { misericordia: 5, fe: 4, integridade: 4 },
            biblicalPrinciple: 'Amor prático ao próximo.',
            biblicalReference: '📖 Tiago 1:27',
            biblicalExplanation: 'A religião pura e imaculada para com Deus é esta: visitar os órfãos e as viúvas nas suas tribulações.'
          },
          {
            id: 'bo_4_b',
            text: 'Convidar Lucas e outros colegas da escola para serem voluntários com você.',
            consequence: 'Lucas aceita o convite e encontra no voluntariado um sentido novo para lidar com as dores da família.',
            effects: { misericordia: 4, sabedoria: 4, fe: 3 },
            biblicalPrinciple: 'Incentivar boas obras comunitárias.',
            biblicalReference: '📖 Hebreus 10:24',
            biblicalExplanation: 'Consideremo-nos uns aos outros, para nos estimularmos ao amor e às boas obras.'
          },
          {
            id: 'bo_4_c',
            text: 'Doar Roupas e brinquedos que você não usa mais para a instituição.',
            consequence: 'Suas doações trazem alegria direta a várias famílias carentes.',
            effects: { misericordia: 4, integridade: 3 },
            biblicalPrinciple: 'Desapego e generosidade.',
            biblicalReference: '📖 Lucas 3:11',
            biblicalExplanation: 'Quem tiver duas túnicas, reparta com o que não tem, e quem tiver alimentos, faça da mesma maneira.'
          },
          {
            id: 'bo_4_d',
            text: 'Divulgar a campanha na escola para arrecadar mais mantimentos.',
            consequence: 'A escola inteira se mobiliza e arrecada mais de meia tonelada de alimentos.',
            effects: { coragem: 3, integridade: 4, sabedoria: 3 },
            biblicalPrinciple: 'Liderança para o bem.',
            biblicalReference: '📖 Mateus 5:16',
            biblicalExplanation: 'Vejam as vossas boas obras e glorifiquem a vosso Pai que está nos céus.'
          }
        ]
      },
      {
        id: 'bo_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O VERDADEIRO VALOR',
        context: 'No fim do mês, você olha para trás e percebe o quanto sua perspectiva sobre felicidade e valor pessoal mudou.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'bo_5_a',
            text: 'Agradecer a Deus por te ensinar que o valor de uma pessoa vem da sua identidade em Cristo, não do que possui.',
            consequence: 'Sua fé se torna madura e inabalável perante as pressões do mundo.',
            effects: { fe: 5, integridade: 5, sabedoria: 4 },
            biblicalPrinciple: 'Identidade firmada no Criador.',
            biblicalReference: '📖 Efésios 2:10',
            biblicalExplanation: 'Somos feitura sua, criados em Cristo Jesus para as boas obras as quais Deus preparou para que andássemos nelas.'
          },
          {
            id: 'bo_5_b',
            text: 'Manter a amizade genuína com o Lucas, apoiando-o nos momentos difíceis.',
            consequence: 'Vocês constroem um laço fraterno de respeito e apoio mútuo.',
            effects: { misericordia: 5, integridade: 3 },
            biblicalPrinciple: 'Amigo mais chegado que um irmão.',
            biblicalReference: '📖 Provérbios 18:24',
            biblicalExplanation: 'Há amigos mais chegados do que um irmão.'
          },
          {
            id: 'bo_5_c',
            text: 'Ajudar outros adolescentes da sua igreja ou comunidade a superarem crises de comparação.',
            consequence: 'Seu testemunho e empatia transformam a vida de vários jovens.',
            effects: { fe: 4, sabedoria: 4, misericordia: 4 },
            biblicalPrinciple: 'Aconselhamento e mentoria juvenil.',
            biblicalReference: '📖 Tito 2:7',
            biblicalExplanation: 'Em tudo te dá por exemplo de boas obras; na doutrina mostra incorrupção, gravidade, sinceridade.'
          },
          {
            id: 'bo_5_d',
            text: 'Continuar praticando o hábito da gratidão diária num caderno de anotações.',
            consequence: 'Sua rotina permanece blindada contra descontentamentos injustos.',
            effects: { sabedoria: 5, integridade: 3 },
            biblicalPrinciple: 'Em tudo dai graças.',
            biblicalReference: '📖 1 Tessalonicenses 5:18',
            biblicalExplanation: 'Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.'
          }
        ]
      }
    ]
  },

  // 7. RELACIONAMENTO COM A FAMÍLIA (DIÁLOGO EM CASA)
  {
    id: 'dialogo_em_casa',
    title: 'CONFLITO EM CASA',
    subtitle: 'Relacionamento com os pais, regras e diálogo',
    description: 'Seus pais estabeleceram um horário rígido para voltar de um aniversário de final de semana. Seus amigos querem ficar até mais tarde. Como agir?',
    profiles: ['adolescente'],
    theme: 'Relacionamento com a Família',
    icon: 'Home',
    completionReward: { xp: 200, coins: 100 },
    reflectionQuestion: 'Como você reage quando as regras da sua casa parecem diferentes das regras dos seus amigos?',
    scenes: [
      {
        id: 'dc_scene_1',
        sceneNumber: 1,
        title: 'SITUAÇÃO 1: O COMBINADO',
        context: 'Seus pais concordaram em te levar para a festa de aniversário de um amigo, mas estipularam que às 22h iriam te buscar. Às 21h45, a festa está no melhor momento e todos dizem que ir embora agora é absurdo.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'dc_1_a',
            text: 'Enviar uma mensagem para os pais pedindo educadamente se é possível estender 30 minutos.',
            consequence: 'Seus pais apreciam o pedido antecipado e autorizam permanecer até 22h30 com tranquilidade.',
            effects: { sabedoria: 4, integridade: 4, fe: 2 },
            biblicalPrinciple: 'Diálogo respeitoso e negociação transparente.',
            biblicalReference: '📖 Provérbios 15:1',
            biblicalExplanation: 'A resposta brando desvia o furor, mas a palavra dura suscita a ira.'
          },
          {
            id: 'dc_1_b',
            text: 'Juntar suas coisas e ir para a frente do local esperar seus pais no horário combinado.',
            consequence: 'Seus pais chegam pontualmente e ficam felizes em ver sua responsabilidade impecável.',
            effects: { integridade: 5, coragem: 3, fe: 3 },
            biblicalPrinciple: 'Honrar a palavra e o compromisso assumido.',
            biblicalReference: '📖 Mateus 5:37',
            biblicalExplanation: 'Seja, porém, o vosso falar: Sim, sim; Não, não; porque o que passa disto é de procedência má.'
          },
          {
            id: 'dc_1_c',
            text: 'Desligar o celular ou ignorar as ligações para dizer depois que a bateria acabou.',
            consequence: 'Seus pais ficam desesperados preocupados com sua segurança e a confiança é quebrada.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Evitar o engano e a falta de consideração.',
            biblicalReference: '📖 Efésios 4:25',
            biblicalExplanation: 'Deixando a mentira, falai a verdade cada um com o seu próximo; porque somos membros uns dos outros.'
          },
          {
            id: 'dc_1_d',
            text: 'Reclamar em voz alta dos seus pais para os amigos da festa antes de sair.',
            consequence: 'Você deshonra sua família publicamente para tentar agradar a opinião alheia.',
            effects: { integridade: 1 },
            biblicalPrinciple: 'Honra e respeito aos pais.',
            biblicalReference: '📖 Efésios 6:2',
            biblicalExplanation: 'Honra a teu pai e a tua mãe, que é o primeiro mandamento com promessa.'
          }
        ]
      },
      {
        id: 'dc_scene_2',
        sceneNumber: 2,
        title: 'SITUAÇÃO 2: O CAMINHO DE VOLTA',
        context: 'Entrando no carro, seus pais percebem que você está sério por ter saído da festa no meio da animação.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'dc_2_a',
            text: 'Conversar com calma: "Obrigado por me levarem. Fiquei um pouco chateado porque estava legal, mas entendo a preocupação de vocês."',
            consequence: 'Sua maturidade ao expressar sentimentos sem gritos impressiona profundamente seus pais.',
            effects: { sabedoria: 5, integridade: 4, misericordia: 3 },
            biblicalPrinciple: 'Falar a verdade com mansidão e amor.',
            biblicalReference: '📖 Provérbios 25:15',
            biblicalExplanation: 'Pela longanimidade se persuade o príncipe, e a língua branda quebranta os ossos.'
          },
          {
            id: 'dc_2_b',
            text: 'Ficar de cara fechada o caminho todo sem responder quando perguntarem algo.',
            consequence: 'O clima no carro fica pesado e gera tensão no ambiente familiar no fim de semana.',
            effects: { sabedoria: 1 },
            biblicalPrinciple: 'Guardar a ira e o ressentimento.',
            biblicalReference: '📖 Efésios 4:26',
            biblicalExplanation: 'Irai-vos e não pequeis; não se ponha o sol sobre a vossa ira.'
          },
          {
            id: 'dc_2_c',
            text: 'Agradecer a Deus em silêncio por ter pais que se importam com a sua segurança.',
            consequence: 'Seu coração se enche de paz e gratidão pelo cuidado do seu lar.',
            effects: { fe: 5, integridade: 3 },
            biblicalPrinciple: 'Reconhecer o amor por trás da proteção.',
            biblicalReference: '📖 Provérbios 3:12',
            biblicalExplanation: 'O Senhor repreende aquele a quem ama, assim como o pai ao filho a quem quer bem.'
          },
          {
            id: 'dc_2_d',
            text: 'Perguntar como foi a noite dos seus pais enquanto você estava na festa.',
            consequence: 'A atenção demonstrada aos pais transforma o trajeto em um momento agradável em família.',
            effects: { misericordia: 4, sabedoria: 3 },
            biblicalPrinciple: 'Interesse mútuo no relacionamento.',
            biblicalReference: '📖 Filipenses 2:4',
            biblicalExplanation: 'Não atente cada um para o que é propriamente seu, mas cada qual também para o dos outros.'
          }
        ]
      },
      {
        id: 'dc_scene_3',
        sceneNumber: 3,
        title: 'SITUAÇÃO 3: AS TAREFAS DE CASA',
        context: 'No sábado de manhã, seus pais pedem sua ajuda para arrumar a casa e organizar seu quarto antes de sair com os amigos.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'dc_3_a',
            text: 'Fazer as tarefas com agilidade, dedicação e sem reclamar.',
            consequence: 'A casa fica organizada rapidamente e seus pais te liberam com alegria para o passeio.',
            effects: { integridade: 5, sabedoria: 3, fe: 3 },
            biblicalPrinciple: 'Fazer tudo de bom grado.',
            biblicalReference: '📖 Colossenses 3:23',
            biblicalExplanation: 'Tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor e não aos homens.'
          },
          {
            id: 'dc_3_b',
            text: 'Arrastar os pés, fazer de má vontade e deixar a metade sem terminar.',
            consequence: 'Seus pais se aborrecem e suspendem seu passeio no período da tarde.',
            effects: { integridade: 1 },
            biblicalPrinciple: 'Evitar a preguiça e a murmuração.',
            biblicalReference: '📖 Filipenses 2:14',
            biblicalExplanation: 'Fazei todas as coisas sem murmurações nem contendas.'
          },
          {
            id: 'dc_3_c',
            text: 'Propor uma divisão de tarefas alegre com seus irmãos ouvindo música.',
            consequence: 'A faxina vira um momento divertido de cooperação entre irmãos.',
            effects: { misericordia: 4, sabedoria: 4 },
            biblicalPrinciple: 'Comunhão e cooperação alegre.',
            biblicalReference: '📖 Salmos 133:1',
            biblicalExplanation: 'Quão bom e suave é que os irmãos vivam em união.'
          },
          {
            id: 'dc_3_d',
            text: 'Organizar seu quarto de forma tão caprichada que surpreende seus pais.',
            consequence: 'Seu zelo demonstra maturidade e responsabilidade pelo seu próprio espaço.',
            effects: { sabedoria: 4, integridade: 4 },
            biblicalPrinciple: 'Fidelidade nas pequenas coisas.',
            biblicalReference: '📖 Lucas 16:10',
            biblicalExplanation: 'Quem é fiel no pouco também é fiel no muito; quem é injusto no pouco também é injusto no muito.'
          }
        ]
      },
      {
        id: 'dc_scene_4',
        sceneNumber: 4,
        title: 'SITUAÇÃO 4: O MOMENTO EM FAMÍLIA',
        context: 'No domingo, seus pais propõem almoçar juntos e fazer um passeio num parque sem o uso de celulares na mesa.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'dc_4_a',
            text: 'Guardar o celular de bom grado e aproveitar as conversas e risadas do almoço.',
            consequence: 'Você descobre histórias engraçadas da infância dos seus pais e se aproxima deles.',
            effects: { misericordia: 5, fe: 3, integridade: 3 },
            biblicalPrinciple: 'Valorizar a presença física e a comunhão.',
            biblicalReference: '📖 Provérbios 17:22',
            biblicalExplanation: 'O coração alegre é como bom remédio, mas o espírito abatido seca até os ossos.'
          },
          {
            id: 'dc_4_b',
            text: 'Ficar olhando o celular escondido embaixo da mesa o tempo todo.',
            consequence: 'Seus pais se sentem desrespeitados e a refeição perde o calor humano.',
            effects: { fe: 1 },
            biblicalPrinciple: 'Respeito e consideração aos presentes.',
            biblicalReference: '📖 Romanos 12:10',
            biblicalExplanation: 'Amai-vos cordialmente uns aos outros com amor fraternal, preferindo-vos em honra uns aos outros.'
          },
          {
            id: 'dc_4_c',
            text: 'Sugerir um jogo de perguntas e respostas em família para animar o passeio.',
            consequence: 'A tarde vira uma memória afetuosa inesquecível para todos.',
            effects: { sabedoria: 4, misericordia: 4 },
            biblicalPrinciple: 'Edificação no lar.',
            biblicalReference: '📖 Provérbios 24:3',
            biblicalExplanation: 'Com a sabedoria se edifica a casa, e com o entendimento ela se estabelece.'
          },
          {
            id: 'dc_4_d',
            text: 'Aproveitar o passeio para pedir perdão por impaciências passadas na semana.',
            consequence: 'Seus pais te abraçam com emoção e abençoam sua vida com palavras de afeto.',
            effects: { fe: 5, misericordia: 5, integridade: 4 },
            biblicalPrinciple: 'O perdão e a cura no ambiente familiar.',
            biblicalReference: '📖 Efésios 4:32',
            biblicalExplanation: 'Antes sede uns para com os outros benignos, misericordiosos, perdoando-vos mutuamente.'
          }
        ]
      },
      {
        id: 'dc_scene_5',
        sceneNumber: 5,
        title: 'SITUAÇÃO 5: O FRUTO DA CONFIANÇA',
        context: 'No mês seguinte, surge uma nova festa no fim de semana. Sem você pedir, seus pais aumentam o horário do combinado voluntariamente.',
        promptQuestion: 'O que você faria?',
        choices: [
          {
            id: 'dc_5_a',
            text: 'Agradecer a confiança dada e reafirmar seu compromisso de sempre honrar os combinados.',
            consequence: 'A relação familiar atinge um nível de maturidade e liberdade responsável exemplar.',
            effects: { integridade: 5, sabedoria: 4, fe: 4 },
            biblicalPrinciple: 'A confiança fruto da fidelidade.',
            biblicalReference: '📖 Provérbios 28:20',
            biblicalExplanation: 'O homem fiel abundará em bênçãos, mas o que se apressa a enriquecer não ficará impune.'
          },
          {
            id: 'dc_5_b',
            text: 'Convidar um amigo que tem conflitos em casa para lanchar com sua família no domingo.',
            consequence: 'Seu lar acolhedor serve de inspiração e refúgio para o seu amigo.',
            effects: { misericordia: 5, fe: 4 },
            biblicalPrinciple: 'Família como canal de bênção para os outros.',
            biblicalReference: '📖 Gênesis 12:2',
            biblicalExplanation: 'Abençoar-te-ei e tu serás uma bênção para os que te cercam.'
          },
          {
            id: 'dc_5_c',
            text: 'Orar agradecendo a Deus pela proteção e orientação constante dos seus pais.',
            consequence: 'Sua vida espiritual se enraíza na gratidão e na honra familiar.',
            effects: { fe: 5, integridade: 3 },
            biblicalPrinciple: 'Oração de gratidão pela família.',
            biblicalReference: '📖 Salmos 127:1',
            biblicalExplanation: 'Se o Senhor não edificar a casa, em vão trabalham os que a edificam.'
          },
          {
            id: 'dc_5_d',
            text: 'Continuar cultivando o hábito de conversar diariamente com seus pais sobre seu dia.',
            consequence: 'O canal de diálogo aberto evita segredos e aproxima gerações.',
            effects: { sabedoria: 5, misericordia: 3 },
            biblicalPrinciple: 'Sabedoria na convivência contínua.',
            biblicalReference: '📖 Provérbios 1:5',
            biblicalExplanation: 'O sábio ouvirá e crescerá em prudência, e o entendido adquirirá sábios conselhos.'
          }
        ]
      }
    ]
  }
];
