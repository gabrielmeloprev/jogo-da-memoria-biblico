/* ===========================================================
   Dados do jogo: modos, itens, ilustrações SVG e curiosidades
   =========================================================== */

const MODE_LABELS = {
  characters: "👤 Personagens",
  objects:    "⚔ Objetos Bíblicos",
  cities:     "🏛 Cidades Bíblicas",
  miracles:   "✨ Milagres",
};

/* Helper para envolver SVG em um frame consistente */
const svg = (content) =>
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bgGrad" cx="50%" cy="45%" r="55%">
        <stop offset="0%" stop-color="#fff8dc" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#f5e6b8" stop-opacity="0.2"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="46" fill="url(#bgGrad)"/>
    ${content}
  </svg>`;

/* =================== PERSONAGENS =================== */
const CHARACTERS = [
  {
    id: "jesus", name: "Jesus",
    icon: svg(`
      <circle cx="50" cy="30" r="14" fill="none" stroke="#f1c96b" stroke-width="2"/>
      <circle cx="50" cy="30" r="10" fill="#ffe8a8"/>
      <rect x="46" y="30" width="8" height="48" fill="#8b5a2b"/>
      <rect x="32" y="42" width="36" height="8" fill="#8b5a2b"/>
      <g stroke="#f1c96b" stroke-width="1.2" opacity="0.7">
        <line x1="50" y1="8" x2="50" y2="14"/>
        <line x1="28" y1="18" x2="32" y2="22"/>
        <line x1="72" y1="18" x2="68" y2="22"/>
      </g>`),
    fact: "Jesus nasceu em Belém e cresceu em Nazaré. Seu primeiro milagre foi transformar água em vinho nas bodas de Caná (João 2)."
  },
  {
    id: "maria", name: "Maria",
    icon: svg(`
      <circle cx="50" cy="32" r="10" fill="#f4d1a1"/>
      <path d="M30 80 Q30 45 50 42 Q70 45 70 80 Z" fill="#4a6fa5"/>
      <path d="M36 38 Q50 20 64 38 Q58 30 50 30 Q42 30 36 38" fill="#3a5a8a"/>
      <circle cx="50" cy="24" r="14" fill="none" stroke="#f1c96b" stroke-width="1.5"/>
      <circle cx="46" cy="32" r="1" fill="#333"/>
      <circle cx="54" cy="32" r="1" fill="#333"/>`),
    fact: "Maria era de Nazaré e foi visitada pelo anjo Gabriel. Ela cantou o 'Magnificat' ao visitar sua prima Isabel (Lucas 1)."
  },
  {
    id: "moises", name: "Moisés",
    icon: svg(`
      <rect x="28" y="25" width="20" height="55" rx="4" fill="#8b7355" stroke="#5a4a2a" stroke-width="2"/>
      <rect x="52" y="25" width="20" height="55" rx="4" fill="#8b7355" stroke="#5a4a2a" stroke-width="2"/>
      <text x="38" y="45" font-size="10" fill="#2a1e0e" text-anchor="middle" font-family="serif">I</text>
      <text x="38" y="58" font-size="10" fill="#2a1e0e" text-anchor="middle" font-family="serif">II</text>
      <text x="38" y="71" font-size="10" fill="#2a1e0e" text-anchor="middle" font-family="serif">III</text>
      <text x="62" y="45" font-size="9" fill="#2a1e0e" text-anchor="middle" font-family="serif">VI</text>
      <text x="62" y="58" font-size="9" fill="#2a1e0e" text-anchor="middle" font-family="serif">VII</text>
      <text x="62" y="71" font-size="8" fill="#2a1e0e" text-anchor="middle" font-family="serif">VIII</text>`),
    fact: "Moisés libertou o povo hebreu do Egito após 10 pragas e recebeu os 10 Mandamentos no Monte Sinai. Viveu 120 anos (Deuteronômio 34:7)."
  },
  {
    id: "davi", name: "Davi",
    icon: svg(`
      <path d="M50 18 L58 40 L80 40 L62 54 L70 76 L50 62 L30 76 L38 54 L20 40 L42 40 Z"
            fill="#f1c96b" stroke="#8b5a2b" stroke-width="1.5"/>
      <path d="M50 28 L56 42 L70 42 L59 51 L63 65 L50 56 L37 65 L41 51 L30 42 L44 42 Z"
            fill="none" stroke="#5a3a1a" stroke-width="1"/>`),
    fact: "Davi era pastor antes de se tornar rei de Israel. Derrotou Golias ainda jovem com uma funda e cinco pedras (1 Samuel 17)."
  },
  {
    id: "noe", name: "Noé",
    icon: svg(`
      <path d="M15 60 Q20 78 50 78 Q80 78 85 60 L80 55 L20 55 Z" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1.5"/>
      <rect x="30" y="35" width="40" height="22" fill="#a67c4e" stroke="#4a2a0e" stroke-width="1.5"/>
      <path d="M28 35 L50 20 L72 35" fill="#6a3a1a" stroke="#4a2a0e" stroke-width="1.5"/>
      <rect x="44" y="42" width="12" height="15" fill="#4a2a0e"/>
      <path d="M20 82 Q30 78 40 82 Q50 78 60 82 Q70 78 80 82" fill="none" stroke="#4a9ed4" stroke-width="2"/>`),
    fact: "Noé construiu a arca durante cerca de 100 anos. O dilúvio durou 40 dias e 40 noites. A arca tinha 3 andares (Gênesis 6-9)."
  },
  {
    id: "abraao", name: "Abraão",
    icon: svg(`
      <circle cx="30" cy="25" r="3" fill="#f1c96b"/>
      <circle cx="50" cy="18" r="3.5" fill="#f1c96b"/>
      <circle cx="70" cy="25" r="3" fill="#f1c96b"/>
      <circle cx="20" cy="40" r="2.5" fill="#f1c96b"/>
      <circle cx="80" cy="40" r="2.5" fill="#f1c96b"/>
      <path d="M20 85 L50 50 L80 85 Z" fill="#c9a676" stroke="#5a3a1a" stroke-width="1.5"/>
      <rect x="44" y="70" width="12" height="15" fill="#4a2a0e"/>`),
    fact: "Abraão saiu de Ur aos 75 anos em obediência a Deus. Sua descendência foi prometida como as estrelas do céu (Gênesis 15:5)."
  },
  {
    id: "daniel", name: "Daniel",
    icon: svg(`
      <ellipse cx="50" cy="60" rx="28" ry="18" fill="#c9873a"/>
      <circle cx="50" cy="45" r="18" fill="#d4a055"/>
      <path d="M32 42 Q28 30 36 25 Q32 20 40 22 Q38 15 46 18 Q44 12 52 15 Q54 10 58 16 Q64 14 62 22 Q70 22 66 30 Q72 34 68 42" fill="#a67030"/>
      <circle cx="44" cy="45" r="2" fill="#2a1a0a"/>
      <circle cx="56" cy="45" r="2" fill="#2a1a0a"/>
      <path d="M40 52 Q50 58 60 52" stroke="#2a1a0a" stroke-width="1.5" fill="none"/>
      <path d="M42 55 L40 52 M44 56 L43 53 M56 56 L57 53 M58 55 L60 52" stroke="#fff" stroke-width="1.5"/>`),
    fact: "Daniel foi lançado na cova dos leões por orar a Deus. Passou a noite ileso e os leões não o tocaram (Daniel 6)."
  },
  {
    id: "jonas", name: "Jonas",
    icon: svg(`
      <path d="M15 50 Q25 30 50 30 Q75 30 85 50 Q75 70 50 70 Q25 70 15 50 Z" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1.5"/>
      <path d="M15 50 L5 40 L8 50 L5 60 Z" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1.5"/>
      <circle cx="70" cy="45" r="2.5" fill="#fff"/>
      <circle cx="70" cy="45" r="1.2" fill="#2a1a0a"/>
      <path d="M60 35 Q65 30 72 32" stroke="#2a4a7a" stroke-width="1" fill="none"/>
      <path d="M20 48 L12 45 M20 52 L12 55" stroke="#fff" stroke-width="1" opacity="0.7"/>`),
    fact: "Jonas fugiu de Deus e foi engolido por um grande peixe. Ficou 3 dias e 3 noites no ventre dele antes de obedecer (Jonas 1-2)."
  },
  {
    id: "jose", name: "José do Egito",
    icon: svg(`
      <path d="M35 30 L65 30 L72 80 L28 80 Z" fill="#d4a84b"/>
      <path d="M35 30 L42 80 L28 80 Z" fill="#c9434a"/>
      <path d="M42 30 L47 80 L42 80 Z" fill="#4a9e62"/>
      <path d="M47 30 L53 80 L47 80 Z" fill="#4a6fa5"/>
      <path d="M53 30 L58 80 L53 80 Z" fill="#8a4fa8"/>
      <path d="M58 30 L65 80 L58 80 Z" fill="#d4673a"/>
      <ellipse cx="50" cy="28" rx="18" ry="5" fill="#8b5a2b"/>
      <circle cx="50" cy="20" r="8" fill="#f4d1a1"/>`),
    fact: "José foi vendido por seus irmãos e tornou-se governador do Egito. Interpretou sonhos do faraó salvando muitos povos da fome (Gênesis 37-50)."
  },
  {
    id: "sansao", name: "Sansão",
    icon: svg(`
      <circle cx="50" cy="30" r="12" fill="#f4d1a1"/>
      <path d="M35 28 Q30 15 40 12 Q38 8 48 10 Q50 6 55 10 Q62 8 62 15 Q72 18 65 28" fill="#3a2010"/>
      <path d="M38 38 Q50 70 62 38 L60 35 L40 35 Z" fill="#3a2010"/>
      <rect x="42" y="40" width="16" height="30" fill="#8b5a2b"/>
      <circle cx="32" cy="50" r="8" fill="#d4a84b"/>
      <circle cx="68" cy="50" r="8" fill="#d4a84b"/>
      <rect x="24" y="48" width="8" height="4" fill="#8b5a2b"/>
      <rect x="68" y="48" width="8" height="4" fill="#8b5a2b"/>`),
    fact: "Sansão tinha força sobrenatural nos seus cabelos. Matou 1.000 filisteus com uma queixada de jumento (Juízes 15:15)."
  },
  {
    id: "pedro", name: "Pedro",
    icon: svg(`
      <g transform="rotate(-30 50 50)">
        <circle cx="38" cy="50" r="10" fill="none" stroke="#d4a84b" stroke-width="3"/>
        <rect x="46" y="47" width="30" height="6" fill="#d4a84b"/>
        <rect x="68" y="42" width="4" height="8" fill="#d4a84b"/>
        <rect x="62" y="42" width="4" height="8" fill="#d4a84b"/>
      </g>
      <g transform="rotate(30 50 50)">
        <circle cx="38" cy="50" r="10" fill="none" stroke="#c9873a" stroke-width="3"/>
        <rect x="46" y="47" width="30" height="6" fill="#c9873a"/>
        <rect x="68" y="42" width="4" height="8" fill="#c9873a"/>
        <rect x="62" y="42" width="4" height="8" fill="#c9873a"/>
      </g>`),
    fact: "Pedro era pescador na Galileia. Jesus lhe deu as 'chaves do reino dos céus' e ele foi um dos principais apóstolos (Mateus 16:19)."
  },
  {
    id: "paulo", name: "Paulo",
    icon: svg(`
      <rect x="20" y="25" width="60" height="50" fill="#f5e6b8" stroke="#8b5a2b" stroke-width="1.5"/>
      <circle cx="20" cy="25" r="6" fill="#8b5a2b"/>
      <circle cx="80" cy="25" r="6" fill="#8b5a2b"/>
      <circle cx="20" cy="75" r="6" fill="#8b5a2b"/>
      <circle cx="80" cy="75" r="6" fill="#8b5a2b"/>
      <line x1="30" y1="38" x2="70" y2="38" stroke="#5a3a1a" stroke-width="1"/>
      <line x1="30" y1="46" x2="70" y2="46" stroke="#5a3a1a" stroke-width="1"/>
      <line x1="30" y1="54" x2="70" y2="54" stroke="#5a3a1a" stroke-width="1"/>
      <line x1="30" y1="62" x2="60" y2="62" stroke="#5a3a1a" stroke-width="1"/>`),
    fact: "Paulo era Saulo, perseguidor de cristãos, até ser convertido no caminho de Damasco. Escreveu 13 cartas do Novo Testamento (Atos 9)."
  },
  {
    id: "salomao", name: "Salomão",
    icon: svg(`
      <path d="M25 55 L25 35 L35 45 L42 30 L50 42 L58 30 L65 45 L75 35 L75 55 Z"
            fill="#d4a84b" stroke="#5a3a1a" stroke-width="1.5"/>
      <rect x="25" y="55" width="50" height="8" fill="#c9873a" stroke="#5a3a1a" stroke-width="1.5"/>
      <circle cx="35" cy="45" r="3" fill="#c9434a"/>
      <circle cx="50" cy="42" r="3.5" fill="#4a9e62"/>
      <circle cx="65" cy="45" r="3" fill="#4a6fa5"/>
      <rect x="28" y="63" width="44" height="4" fill="#8b5a2b"/>`),
    fact: "Salomão pediu sabedoria a Deus e recebeu riquezas também. Construiu o primeiro Templo em Jerusalém (1 Reis 6)."
  },
  {
    id: "ester", name: "Ester",
    icon: svg(`
      <circle cx="50" cy="35" r="12" fill="#f4d1a1"/>
      <path d="M38 25 L50 10 L62 25 L58 30 L50 22 L42 30 Z" fill="#d4a84b" stroke="#8b5a2b" stroke-width="1"/>
      <circle cx="50" cy="15" r="2" fill="#c9434a"/>
      <path d="M30 80 Q30 45 50 45 Q70 45 70 80 Z" fill="#8a2a5a"/>
      <path d="M40 55 Q50 50 60 55 L58 75 Q50 72 42 75 Z" fill="#c9434a"/>
      <circle cx="46" cy="36" r="1" fill="#333"/>
      <circle cx="54" cy="36" r="1" fill="#333"/>`),
    fact: "Ester era judia órfã que se tornou rainha da Pérsia. Salvou seu povo da morte arriscando a própria vida (Ester 4:16)."
  },
  {
    id: "rute", name: "Rute",
    icon: svg(`
      <ellipse cx="50" cy="70" rx="25" ry="8" fill="#c9873a"/>
      <path d="M30 60 L35 30 L40 60 Z" fill="#d4a055"/>
      <path d="M45 55 L50 20 L55 55 Z" fill="#d4a055"/>
      <path d="M60 60 L65 30 L70 60 Z" fill="#d4a055"/>
      <path d="M35 30 Q32 27 30 30 L35 30 Q38 27 35 30" fill="#a67030"/>
      <path d="M50 20 Q47 17 45 20 L50 20 Q53 17 50 20" fill="#a67030"/>
      <path d="M65 30 Q62 27 60 30 L65 30 Q68 27 65 30" fill="#a67030"/>`),
    fact: "Rute era moabita e seguiu sua sogra Noemi a Israel. Casou com Boaz e tornou-se bisavó do rei Davi (Rute 4:17)."
  },
  {
    id: "joao", name: "João Batista",
    icon: svg(`
      <path d="M30 75 Q50 20 70 75 Z" fill="#c9a676" stroke="#5a3a1a" stroke-width="1.5"/>
      <circle cx="40" cy="45" r="3" fill="#d4a84b"/>
      <circle cx="50" cy="55" r="3" fill="#d4a84b"/>
      <circle cx="60" cy="45" r="3" fill="#d4a84b"/>
      <circle cx="45" cy="65" r="3" fill="#d4a84b"/>
      <circle cx="55" cy="65" r="3" fill="#d4a84b"/>
      <path d="M25 80 Q35 75 50 80 Q65 75 75 80" stroke="#4a9ed4" stroke-width="2.5" fill="none"/>`),
    fact: "João Batista vivia no deserto, comia gafanhotos e mel silvestre. Batizou Jesus no rio Jordão (Mateus 3:4)."
  },
  {
    id: "golias", name: "Golias",
    icon: svg(`
      <ellipse cx="50" cy="30" rx="16" ry="18" fill="#a8a8a8" stroke="#555" stroke-width="1.5"/>
      <rect x="34" y="28" width="32" height="8" fill="#5a5a5a"/>
      <circle cx="42" cy="30" r="2" fill="#c9434a"/>
      <circle cx="58" cy="30" r="2" fill="#c9434a"/>
      <path d="M30 50 L70 50 L72 80 L28 80 Z" fill="#8a8a8a" stroke="#555" stroke-width="1.5"/>
      <rect x="44" y="50" width="12" height="30" fill="#5a5a5a"/>
      <circle cx="50" cy="40" r="2" fill="#c9434a"/>`),
    fact: "Golias media cerca de 2,9 metros de altura. Era o campeão dos filisteus e foi derrotado por Davi com uma só pedra (1 Samuel 17)."
  },
  {
    id: "eliseu", name: "Eliseu",
    icon: svg(`
      <circle cx="50" cy="28" r="9" fill="#f4d1a1"/>
      <path d="M41 25 Q38 15 45 14 Q48 10 55 14 Q62 12 59 25" fill="#d4a84b"/>
      <path d="M32 78 Q32 40 50 37 Q68 40 68 78 Z" fill="#c9873a"/>
      <rect x="70" y="20" width="4" height="60" fill="#8b5a2b"/>
      <path d="M70 20 Q67 16 72 14 Q76 18 74 22" fill="#8b5a2b"/>
      <path d="M20 55 Q30 50 40 55" stroke="#4a9ed4" stroke-width="2" fill="none"/>`),
    fact: "Eliseu recebeu porção dobrada do espírito de Elias e realizou 16 milagres registrados, como purificar águas e ressuscitar um menino (2 Reis 4)."
  },
  {
    id: "sara", name: "Sara",
    icon: svg(`
      <circle cx="50" cy="28" r="10" fill="#f4d1a1"/>
      <path d="M40 26 Q36 14 48 13 Q52 8 58 13 Q66 14 60 26" fill="#dcdcdc"/>
      <path d="M32 80 Q32 45 50 42 Q68 45 68 80 Z" fill="#a8875a"/>
      <ellipse cx="50" cy="62" rx="11" ry="8" fill="#f5e6b8" stroke="#c9a676" stroke-width="1"/>
      <circle cx="50" cy="60" r="4" fill="#f4d1a1"/>
      <circle cx="47" cy="29" r="1" fill="#333"/>
      <circle cx="53" cy="29" r="1" fill="#333"/>`),
    fact: "Sara teve seu filho Isaque aos 90 anos e Abraão aos 100. Riu quando ouviu a promessa de Deus (Gênesis 18:12; 21:5)."
  },
  {
    id: "isaque", name: "Isaque",
    icon: svg(`
      <rect x="28" y="65" width="44" height="8" fill="#888" stroke="#555" stroke-width="1"/>
      <rect x="32" y="73" width="36" height="12" fill="#999" stroke="#555" stroke-width="1"/>
      <rect x="35" y="55" width="30" height="10" fill="#aaa" stroke="#555" stroke-width="1"/>
      <path d="M38 55 L42 45 L46 55 L50 42 L54 55 L58 45 L62 55" fill="#ff6a3a" stroke="#c9434a" stroke-width="0.5"/>
      <path d="M42 50 Q46 42 50 48 Q54 40 58 50" fill="#ffaa3a"/>
      <circle cx="50" cy="22" r="8" fill="#f4d1a1"/>
      <path d="M42 22 Q45 12 50 14 Q55 12 58 22" fill="#5a3a1a"/>`),
    fact: "Isaque foi quase sacrificado pelo pai Abraão, mas Deus providenciou um carneiro no lugar. Viveu 180 anos (Gênesis 22:13; 35:28)."
  },
  {
    id: "jaco", name: "Jacó",
    icon: svg(`
      <rect x="40" y="15" width="4" height="75" fill="#8b5a2b"/>
      <rect x="56" y="15" width="4" height="75" fill="#8b5a2b"/>
      <rect x="38" y="28" width="24" height="3" fill="#8b5a2b"/>
      <rect x="38" y="42" width="24" height="3" fill="#8b5a2b"/>
      <rect x="38" y="56" width="24" height="3" fill="#8b5a2b"/>
      <rect x="38" y="70" width="24" height="3" fill="#8b5a2b"/>
      <g fill="#fff" opacity="0.85">
        <ellipse cx="25" cy="18" rx="10" ry="4"/>
        <ellipse cx="75" cy="22" rx="10" ry="4"/>
      </g>
      <g opacity="0.9">
        <path d="M25 35 L22 40 L28 40 Z" fill="#f1c96b"/>
        <path d="M75 40 L72 45 L78 45 Z" fill="#f1c96b"/>
      </g>`),
    fact: "Jacó sonhou com uma escada que ligava a terra ao céu, com anjos subindo e descendo. Deus falou com ele ali (Gênesis 28:12)."
  },
  {
    id: "elias", name: "Elias",
    icon: svg(`
      <path d="M25 85 Q25 60 35 55 Q50 52 65 55 Q75 60 75 85 Z" fill="#c9873a"/>
      <circle cx="50" cy="45" r="10" fill="#f4d1a1"/>
      <path d="M40 42 Q35 28 45 26 Q50 20 58 26 Q66 28 60 42" fill="#aaa"/>
      <path d="M15 30 Q25 15 35 25 Q30 40 20 35" fill="#ff6a3a" opacity="0.8"/>
      <path d="M65 25 Q75 10 85 25 Q80 40 70 35" fill="#ff6a3a" opacity="0.8"/>
      <path d="M20 25 L15 15 L25 18 L22 8" stroke="#ffaa3a" stroke-width="2" fill="none"/>
      <path d="M78 25 L85 15 L75 18 L80 8" stroke="#ffaa3a" stroke-width="2" fill="none"/>`),
    fact: "Elias foi arrebatado vivo ao céu em um carro de fogo com cavalos de fogo, sem experimentar a morte (2 Reis 2:11)."
  },
  {
    id: "samuel", name: "Samuel",
    icon: svg(`
      <circle cx="50" cy="30" r="9" fill="#f4d1a1"/>
      <path d="M41 28 Q38 20 45 18 Q50 14 56 18 Q62 20 59 28" fill="#3a2010"/>
      <path d="M33 80 Q33 45 50 42 Q67 45 67 80 Z" fill="#f5e6b8" stroke="#c9a676" stroke-width="1"/>
      <rect x="46" y="55" width="8" height="15" fill="#d4a84b"/>
      <path d="M38 55 L62 55 L58 48 L42 48 Z" fill="#d4a84b"/>
      <circle cx="50" cy="12" r="4" fill="#ff9a3a" opacity="0.8"/>
      <g stroke="#f1c96b" stroke-width="1" opacity="0.7">
        <line x1="50" y1="4" x2="50" y2="8"/>
        <line x1="42" y1="7" x2="44" y2="10"/>
        <line x1="58" y1="7" x2="56" y2="10"/>
      </g>`),
    fact: "Samuel ouviu a voz de Deus ainda criança, no templo. Tornou-se juiz, sacerdote e profeta, ungindo os reis Saul e Davi (1 Samuel 3)."
  },
  {
    id: "gideao", name: "Gideão",
    icon: svg(`
      <circle cx="50" cy="28" r="9" fill="#f4d1a1"/>
      <path d="M41 25 Q38 15 45 14 Q50 10 55 14 Q62 12 59 25" fill="#3a2010"/>
      <path d="M32 80 Q32 45 50 42 Q68 45 68 80 Z" fill="#8b5a2b"/>
      <ellipse cx="30" cy="60" rx="10" ry="7" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <g fill="#ff9a3a" opacity="0.9">
        <path d="M70 55 Q73 45 76 55 Q75 60 70 60 Z"/>
        <path d="M72 50 Q74 42 76 50" fill="#fff8a0"/>
      </g>
      <rect x="68" y="58" width="10" height="18" fill="#8b5a2b"/>`),
    fact: "Gideão derrotou 135 mil midianitas com 300 homens armados apenas com trombetas, tochas e cântaros vazios (Juízes 7)."
  },
];

/* =================== OBJETOS =================== */
const OBJECTS = [
  {
    id: "estilingue", name: "Estilingue de Davi",
    icon: svg(`
      <path d="M25 20 Q40 35 40 55 Q40 75 50 78 Q60 75 60 55 Q60 35 75 20" stroke="#8b5a2b" stroke-width="2.5" fill="none"/>
      <ellipse cx="50" cy="65" rx="14" ry="8" fill="#a67030" stroke="#5a3a1a" stroke-width="1.5"/>
      <circle cx="50" cy="65" r="4" fill="#5a5a5a" stroke="#2a2a2a" stroke-width="1"/>
      <line x1="40" y1="64" x2="30" y2="62" stroke="#8b5a2b" stroke-width="1.5"/>
      <line x1="60" y1="64" x2="70" y2="62" stroke="#8b5a2b" stroke-width="1.5"/>`),
    fact: "A funda de Davi lançava pedras a mais de 100 km/h. Com 5 pedras escolhidas do ribeiro, ele derrotou Golias (1 Samuel 17:40)."
  },
  {
    id: "arca_noe", name: "Arca de Noé",
    icon: svg(`
      <path d="M10 55 Q15 78 50 78 Q85 78 90 55 L85 50 L15 50 Z" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1.5"/>
      <rect x="25" y="28" width="50" height="25" fill="#a67c4e" stroke="#4a2a0e" stroke-width="1.5"/>
      <path d="M22 28 L50 12 L78 28" fill="#6a3a1a" stroke="#4a2a0e" stroke-width="1.5"/>
      <rect x="44" y="38" width="12" height="15" fill="#4a2a0e"/>
      <rect x="30" y="33" width="6" height="6" fill="#4a9ed4"/>
      <rect x="64" y="33" width="6" height="6" fill="#4a9ed4"/>`),
    fact: "A arca tinha 137m de comprimento, 23m de largura e 14m de altura. Abrigou Noé, sua família e dois de cada animal (Gênesis 6:15)."
  },
  {
    id: "cajado", name: "Cajado de Moisés",
    icon: svg(`
      <path d="M50 90 L50 25 Q50 15 40 15 Q32 15 32 25" stroke="#8b5a2b" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="36" cy="20" r="3" fill="#d4a84b"/>
      <path d="M48 40 L52 40 M48 55 L52 55 M48 70 L52 70" stroke="#5a3a1a" stroke-width="1"/>`),
    fact: "O cajado de Moisés virou serpente diante do faraó, abriu o Mar Vermelho e fez jorrar água da rocha (Êxodo 4:17)."
  },
  {
    id: "tabuas", name: "Tábuas dos Mandamentos",
    icon: svg(`
      <path d="M25 25 Q25 18 32 18 L48 18 L48 82 L25 82 Z" fill="#a8a8a8" stroke="#555" stroke-width="1.5"/>
      <path d="M52 18 L68 18 Q75 18 75 25 L75 82 L52 82 Z" fill="#a8a8a8" stroke="#555" stroke-width="1.5"/>
      <text x="36" y="35" font-size="8" text-anchor="middle" fill="#2a2a2a" font-family="serif">I</text>
      <text x="36" y="45" font-size="8" text-anchor="middle" fill="#2a2a2a" font-family="serif">II</text>
      <text x="36" y="55" font-size="8" text-anchor="middle" fill="#2a2a2a" font-family="serif">III</text>
      <text x="36" y="65" font-size="8" text-anchor="middle" fill="#2a2a2a" font-family="serif">IV</text>
      <text x="36" y="75" font-size="8" text-anchor="middle" fill="#2a2a2a" font-family="serif">V</text>
      <text x="63" y="35" font-size="7" text-anchor="middle" fill="#2a2a2a" font-family="serif">VI</text>
      <text x="63" y="45" font-size="7" text-anchor="middle" fill="#2a2a2a" font-family="serif">VII</text>
      <text x="63" y="55" font-size="6" text-anchor="middle" fill="#2a2a2a" font-family="serif">VIII</text>
      <text x="63" y="65" font-size="7" text-anchor="middle" fill="#2a2a2a" font-family="serif">IX</text>
      <text x="63" y="75" font-size="7" text-anchor="middle" fill="#2a2a2a" font-family="serif">X</text>`),
    fact: "As tábuas foram escritas pelo próprio dedo de Deus. Moisés quebrou as primeiras ao ver o bezerro de ouro (Êxodo 32:19)."
  },
  {
    id: "harpa", name: "Harpa de Davi",
    icon: svg(`
      <path d="M25 80 Q15 50 30 20 Q50 15 70 20 Q55 50 70 80 Z" fill="none" stroke="#d4a84b" stroke-width="3"/>
      <line x1="32" y1="28" x2="58" y2="73" stroke="#f5e6b8" stroke-width="0.8"/>
      <line x1="38" y1="26" x2="61" y2="72" stroke="#f5e6b8" stroke-width="0.8"/>
      <line x1="45" y1="25" x2="64" y2="72" stroke="#f5e6b8" stroke-width="0.8"/>
      <line x1="52" y1="25" x2="67" y2="72" stroke="#f5e6b8" stroke-width="0.8"/>
      <line x1="58" y1="26" x2="69" y2="73" stroke="#f5e6b8" stroke-width="0.8"/>`),
    fact: "Davi tocava a harpa para acalmar o rei Saul. Compôs a maioria dos 150 salmos do livro dos Salmos (1 Samuel 16:23)."
  },
  {
    id: "arca_alianca", name: "Arca da Aliança",
    icon: svg(`
      <rect x="22" y="45" width="56" height="30" fill="#d4a84b" stroke="#8b5a2b" stroke-width="2"/>
      <rect x="22" y="42" width="56" height="5" fill="#f1c96b" stroke="#8b5a2b" stroke-width="1"/>
      <path d="M30 42 Q25 25 35 22 Q40 30 38 42" fill="#f1c96b" stroke="#8b5a2b" stroke-width="1.5"/>
      <path d="M70 42 Q75 25 65 22 Q60 30 62 42" fill="#f1c96b" stroke="#8b5a2b" stroke-width="1.5"/>
      <circle cx="35" cy="30" r="2" fill="#8b5a2b"/>
      <circle cx="65" cy="30" r="2" fill="#8b5a2b"/>
      <rect x="12" y="55" width="10" height="4" fill="#d4a84b" stroke="#8b5a2b" stroke-width="1"/>
      <rect x="78" y="55" width="10" height="4" fill="#d4a84b" stroke="#8b5a2b" stroke-width="1"/>`),
    fact: "A Arca continha as tábuas da Lei, o maná e a vara de Arão. Era coberta de ouro puro e só podia ser tocada pelos levitas (Êxodo 25)."
  },
  {
    id: "candelabro", name: "Menorá",
    icon: svg(`
      <rect x="47" y="70" width="6" height="15" fill="#d4a84b"/>
      <rect x="35" y="85" width="30" height="4" fill="#d4a84b"/>
      <path d="M50 70 L50 40" stroke="#d4a84b" stroke-width="3"/>
      <path d="M50 55 Q30 55 30 40" stroke="#d4a84b" stroke-width="3" fill="none"/>
      <path d="M50 55 Q35 55 35 40" stroke="#d4a84b" stroke-width="3" fill="none"/>
      <path d="M50 55 Q40 55 40 40" stroke="#d4a84b" stroke-width="3" fill="none"/>
      <path d="M50 55 Q60 55 60 40" stroke="#d4a84b" stroke-width="3" fill="none"/>
      <path d="M50 55 Q65 55 65 40" stroke="#d4a84b" stroke-width="3" fill="none"/>
      <path d="M50 55 Q70 55 70 40" stroke="#d4a84b" stroke-width="3" fill="none"/>
      <ellipse cx="30" cy="37" rx="3" ry="5" fill="#ff9a3a"/>
      <ellipse cx="35" cy="37" rx="3" ry="5" fill="#ff9a3a"/>
      <ellipse cx="40" cy="37" rx="3" ry="5" fill="#ff9a3a"/>
      <ellipse cx="50" cy="37" rx="3" ry="5" fill="#ff9a3a"/>
      <ellipse cx="60" cy="37" rx="3" ry="5" fill="#ff9a3a"/>
      <ellipse cx="65" cy="37" rx="3" ry="5" fill="#ff9a3a"/>
      <ellipse cx="70" cy="37" rx="3" ry="5" fill="#ff9a3a"/>`),
    fact: "A menorá tinha 7 braços feitos de um só pedaço de ouro puro. Ficava no Tabernáculo e ardia continuamente (Êxodo 25:31)."
  },
  {
    id: "trombeta", name: "Shofar",
    icon: svg(`
      <path d="M15 55 Q20 40 40 45 Q60 50 75 40 Q85 35 88 45 Q80 55 60 55 Q40 55 25 65 Q18 60 15 55 Z"
            fill="#d4a84b" stroke="#8b5a2b" stroke-width="1.5"/>
      <path d="M25 55 Q40 53 60 54" stroke="#8b5a2b" stroke-width="1" fill="none" opacity="0.5"/>
      <path d="M75 45 L75 38 L78 36 L78 43 Z" fill="#8b5a2b"/>`),
    fact: "O shofar é feito de chifre de carneiro. Seu som derrubou as muralhas de Jericó após 7 voltas no sétimo dia (Josué 6:20)."
  },
  {
    id: "pao", name: "Pão da Vida",
    icon: svg(`
      <ellipse cx="50" cy="55" rx="30" ry="18" fill="#d4a055" stroke="#8b5a2b" stroke-width="1.5"/>
      <ellipse cx="50" cy="53" rx="25" ry="14" fill="#e8bc6a"/>
      <path d="M35 50 Q40 45 45 50 M50 48 Q55 43 60 48 M40 58 Q45 53 50 58" stroke="#a67030" stroke-width="1" fill="none"/>
      <ellipse cx="42" cy="55" rx="1.5" ry="1" fill="#a67030"/>
      <ellipse cx="55" cy="52" rx="1.5" ry="1" fill="#a67030"/>
      <ellipse cx="48" cy="60" rx="1.5" ry="1" fill="#a67030"/>`),
    fact: "Jesus multiplicou 5 pães e 2 peixes para alimentar mais de 5.000 pessoas. Ainda sobraram 12 cestos (Mateus 14:19-21)."
  },
  {
    id: "coroa", name: "Coroa de Espinhos",
    icon: svg(`
      <path d="M20 50 Q25 35 30 45 Q35 30 42 42 Q48 28 55 42 Q62 30 68 45 Q75 32 80 50 Q75 60 68 55 Q62 65 55 58 Q48 68 42 58 Q35 65 30 55 Q25 62 20 50 Z"
            fill="none" stroke="#5a3a1a" stroke-width="2.5"/>
      <path d="M30 45 L28 35 M42 42 L40 30 M55 42 L57 28 M68 45 L72 32 M35 55 L33 65 M50 58 L52 68 M62 55 L64 65"
            stroke="#5a3a1a" stroke-width="1.5"/>
      <circle cx="33" cy="36" r="1" fill="#c9434a"/>
      <circle cx="52" cy="30" r="1" fill="#c9434a"/>
      <circle cx="70" cy="34" r="1" fill="#c9434a"/>`),
    fact: "A coroa de espinhos foi colocada em Jesus antes da crucificação. Soldados romanos a fizeram para zombar do 'Rei dos Judeus' (João 19:2)."
  },
  {
    id: "moedas", name: "30 Moedas de Prata",
    icon: svg(`
      <circle cx="35" cy="40" r="12" fill="#c0c0c0" stroke="#5a5a5a" stroke-width="1.5"/>
      <circle cx="55" cy="50" r="12" fill="#c0c0c0" stroke="#5a5a5a" stroke-width="1.5"/>
      <circle cx="45" cy="65" r="12" fill="#c0c0c0" stroke="#5a5a5a" stroke-width="1.5"/>
      <text x="35" y="44" font-size="10" text-anchor="middle" fill="#5a5a5a" font-family="serif">30</text>
      <text x="55" y="54" font-size="10" text-anchor="middle" fill="#5a5a5a" font-family="serif">30</text>
      <text x="45" y="69" font-size="10" text-anchor="middle" fill="#5a5a5a" font-family="serif">30</text>`),
    fact: "Judas traiu Jesus por 30 moedas de prata, o preço de um escravo. Depois, arrependido, jogou-as no templo (Mateus 26:15)."
  },
  {
    id: "manjedoura", name: "Manjedoura",
    icon: svg(`
      <path d="M20 55 L80 55 L70 85 L30 85 Z" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1.5"/>
      <ellipse cx="50" cy="55" rx="25" ry="8" fill="#d4a055"/>
      <path d="M30 55 Q35 48 40 55 M45 55 Q50 47 55 55 M60 55 Q65 48 70 55" stroke="#c9873a" stroke-width="1" fill="none"/>
      <path d="M50 15 L54 25 L64 25 L56 32 L60 42 L50 36 L40 42 L44 32 L36 25 L46 25 Z" fill="#f1c96b" stroke="#8b5a2b" stroke-width="1"/>`),
    fact: "Jesus nasceu numa manjedoura — onde o gado comia — porque não havia lugar na hospedaria de Belém (Lucas 2:7)."
  },
  {
    id: "cruz", name: "Cruz",
    icon: svg(`
      <rect x="46" y="15" width="8" height="70" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1"/>
      <rect x="28" y="32" width="44" height="8" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1"/>
      <path d="M46 15 L54 15 L54 85 L46 85" stroke="#6a3a1a" stroke-width="0.5" fill="none" opacity="0.6"/>
      <circle cx="50" cy="36" r="1.5" fill="#3a2010"/>
      <circle cx="50" cy="70" r="1.5" fill="#3a2010"/>`),
    fact: "A crucificação romana durava dias. Jesus morreu em 6 horas, algo incomum — pois entregou o espírito voluntariamente (João 19:30)."
  },
  {
    id: "manto_jose", name: "Manto de José",
    icon: svg(`
      <path d="M35 25 L65 25 L72 82 L28 82 Z" fill="#d4a84b" stroke="#8b5a2b" stroke-width="1.5"/>
      <path d="M35 25 L42 82 L28 82 Z" fill="#c9434a"/>
      <path d="M42 25 L47 82 L42 82 Z" fill="#4a9e62"/>
      <path d="M52 25 L58 82 L52 82 Z" fill="#4a6fa5"/>
      <path d="M58 25 L65 82 L58 82 Z" fill="#8a4fa8"/>`),
    fact: "A túnica de várias cores era sinal de privilégio — geralmente do primogênito. Causou inveja nos irmãos, que o venderam (Gênesis 37:3)."
  },
  {
    id: "espada", name: "Espada de Gideão",
    icon: svg(`
      <rect x="47" y="15" width="6" height="50" fill="#c0c0c0" stroke="#555" stroke-width="1"/>
      <polygon points="47,15 53,15 50,8" fill="#c0c0c0" stroke="#555" stroke-width="1"/>
      <rect x="40" y="65" width="20" height="5" fill="#d4a84b" stroke="#8b5a2b" stroke-width="1"/>
      <rect x="45" y="70" width="10" height="15" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1"/>
      <rect x="43" y="84" width="14" height="4" fill="#d4a84b" stroke="#8b5a2b" stroke-width="1"/>
      <line x1="50" y1="18" x2="50" y2="62" stroke="#fff" stroke-width="0.5" opacity="0.5"/>`),
    fact: "Gideão derrotou 135 mil midianitas com apenas 300 homens, tochas e trombetas, sem usar espadas (Juízes 7:22)."
  },
  {
    id: "rede", name: "Rede de Pescar",
    icon: svg(`
      <path d="M20 30 Q50 25 80 30 Q75 75 50 85 Q25 75 20 30 Z" fill="#c9a676" opacity="0.6" stroke="#8b5a2b" stroke-width="1"/>
      <g stroke="#5a3a1a" stroke-width="0.8" fill="none">
        <line x1="30" y1="35" x2="30" y2="75"/>
        <line x1="40" y1="32" x2="40" y2="80"/>
        <line x1="50" y1="30" x2="50" y2="83"/>
        <line x1="60" y1="32" x2="60" y2="80"/>
        <line x1="70" y1="35" x2="70" y2="75"/>
        <line x1="22" y1="40" x2="78" y2="40"/>
        <line x1="22" y1="55" x2="78" y2="55"/>
        <line x1="25" y1="70" x2="75" y2="70"/>
      </g>
      <path d="M55 50 Q65 48 68 55 Q65 58 55 56 Z" fill="#4a7ab5"/>
      <path d="M30 60 Q38 58 40 63 Q37 66 30 64 Z" fill="#4a7ab5"/>`),
    fact: "Pedro pescou a noite inteira sem nada. Ao obedecer Jesus e lançar a rede, pegou tantos peixes que a rede se rompia (Lucas 5:6)."
  },
  {
    id: "pergaminho", name: "Pergaminho Sagrado",
    icon: svg(`
      <circle cx="25" cy="30" r="8" fill="#8b5a2b"/>
      <circle cx="75" cy="30" r="8" fill="#8b5a2b"/>
      <circle cx="25" cy="70" r="8" fill="#8b5a2b"/>
      <circle cx="75" cy="70" r="8" fill="#8b5a2b"/>
      <rect x="25" y="25" width="50" height="50" fill="#f5e6b8" stroke="#8b5a2b" stroke-width="1.5"/>
      <line x1="30" y1="35" x2="68" y2="35" stroke="#5a3a1a" stroke-width="1"/>
      <line x1="30" y1="42" x2="68" y2="42" stroke="#5a3a1a" stroke-width="1"/>
      <line x1="30" y1="49" x2="65" y2="49" stroke="#5a3a1a" stroke-width="1"/>
      <line x1="30" y1="56" x2="68" y2="56" stroke="#5a3a1a" stroke-width="1"/>
      <line x1="30" y1="63" x2="60" y2="63" stroke="#5a3a1a" stroke-width="1"/>`),
    fact: "A Bíblia foi escrita em papiro e pergaminho por ~40 autores ao longo de 1.500 anos. Tem 66 livros e 1.189 capítulos."
  },
  {
    id: "azeite", name: "Frasco de Azeite",
    icon: svg(`
      <path d="M45 20 L55 20 L55 30 L60 35 L60 80 Q60 85 55 85 L45 85 Q40 85 40 80 L40 35 L45 30 Z"
            fill="#d4a055" stroke="#8b5a2b" stroke-width="1.5"/>
      <ellipse cx="50" cy="55" rx="15" ry="22" fill="#f1c96b" opacity="0.6"/>
      <ellipse cx="50" cy="50" rx="4" ry="2" fill="#fff" opacity="0.5"/>`),
    fact: "O azeite representa o Espírito Santo. Davi foi ungido rei por Samuel com um chifre de azeite (1 Samuel 16:13)."
  },
  {
    id: "pomba", name: "Pomba de Noé",
    icon: svg(`
      <ellipse cx="50" cy="55" rx="22" ry="10" fill="#f5f5f5" stroke="#888" stroke-width="1"/>
      <circle cx="68" cy="45" r="7" fill="#f5f5f5" stroke="#888" stroke-width="1"/>
      <path d="M74 42 L82 40 L82 43 L76 45 Z" fill="#ff9a3a"/>
      <circle cx="70" cy="43" r="1" fill="#333"/>
      <path d="M30 52 Q35 45 45 48 L42 55 Z" fill="#e5e5e5" stroke="#888" stroke-width="0.8"/>
      <path d="M35 55 Q40 62 48 60 Q45 55 40 55 Z" fill="#5ab872"/>
      <path d="M40 58 L36 62 L42 60" stroke="#2a5a32" stroke-width="1"/>`),
    fact: "Noé enviou uma pomba que voltou com um ramo de oliveira no bico, sinal de que as águas diminuíram (Gênesis 8:11)."
  },
  {
    id: "altar", name: "Altar de Pedras",
    icon: svg(`
      <rect x="28" y="60" width="44" height="10" fill="#888" stroke="#555" stroke-width="1"/>
      <rect x="32" y="70" width="36" height="10" fill="#999" stroke="#555" stroke-width="1"/>
      <rect x="36" y="50" width="28" height="10" fill="#aaa" stroke="#555" stroke-width="1"/>
      <rect x="24" y="75" width="52" height="10" fill="#777" stroke="#555" stroke-width="1"/>
      <path d="M40 50 Q42 35 46 48 Q50 30 54 48 Q58 35 60 50" fill="#ff6a3a" stroke="#c9434a" stroke-width="0.5"/>
      <path d="M45 45 Q48 35 51 43 Q54 35 55 45" fill="#ffaa3a"/>
      <path d="M48 40 Q50 35 52 40" fill="#fff8a0"/>
      <g stroke="#888" stroke-width="0.5" opacity="0.6">
        <line x1="35" y1="55" x2="40" y2="58"/>
        <line x1="60" y1="55" x2="65" y2="58"/>
      </g>`),
    fact: "Altares eram feitos de pedras não lavradas, para oferecer sacrifícios a Deus. Noé, Abraão e Moisés construíram muitos (Êxodo 20:25)."
  },
  {
    id: "manto_elias", name: "Manto de Elias",
    icon: svg(`
      <path d="M25 20 Q50 18 75 20 L80 85 L20 85 Z" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1.5"/>
      <path d="M25 20 Q50 25 75 20" fill="#a67030" stroke="#4a2a0e" stroke-width="1"/>
      <g fill="#4a2a0e" opacity="0.4">
        <ellipse cx="30" cy="40" rx="3" ry="5"/>
        <ellipse cx="45" cy="50" rx="3" ry="5"/>
        <ellipse cx="60" cy="45" rx="3" ry="5"/>
        <ellipse cx="70" cy="55" rx="3" ry="5"/>
        <ellipse cx="35" cy="65" rx="3" ry="5"/>
        <ellipse cx="55" cy="70" rx="3" ry="5"/>
      </g>
      <path d="M25 20 L20 85 M75 20 L80 85 M50 20 L50 85" stroke="#4a2a0e" stroke-width="0.5" opacity="0.5"/>`),
    fact: "Quando Elias foi arrebatado, seu manto caiu sobre Eliseu, que recebeu porção dobrada do seu espírito (2 Reis 2:13)."
  },
  {
    id: "vaso", name: "Vaso de Alabastro",
    icon: svg(`
      <path d="M40 20 L60 20 L58 28 L65 35 Q70 55 60 80 Q50 85 40 80 Q30 55 35 35 L42 28 Z"
            fill="#e8ddcc" stroke="#a89670" stroke-width="1.5"/>
      <ellipse cx="50" cy="20" rx="10" ry="3" fill="#a89670"/>
      <g opacity="0.4" stroke="#a89670" stroke-width="0.5">
        <path d="M37 40 Q45 42 53 40" fill="none"/>
        <path d="M37 55 Q45 57 55 55" fill="none"/>
        <path d="M38 70 Q48 72 58 70" fill="none"/>
      </g>
      <ellipse cx="45" cy="35" rx="3" ry="5" fill="#fff" opacity="0.4"/>`),
    fact: "Uma mulher quebrou um vaso de alabastro com perfume caríssimo (300 denários) e ungiu Jesus antes da crucificação (Marcos 14:3)."
  },
  {
    id: "anel", name: "Anel do Faraó",
    icon: svg(`
      <circle cx="50" cy="55" r="22" fill="none" stroke="#d4a84b" stroke-width="6"/>
      <circle cx="50" cy="55" r="22" fill="none" stroke="#f1c96b" stroke-width="2"/>
      <ellipse cx="50" cy="32" rx="12" ry="10" fill="#d4a84b" stroke="#8b5a2b" stroke-width="1.5"/>
      <circle cx="50" cy="32" r="6" fill="#c9434a" stroke="#8b5a2b" stroke-width="1"/>
      <circle cx="48" cy="30" r="2" fill="#fff" opacity="0.6"/>
      <g stroke="#f1c96b" stroke-width="1" opacity="0.7">
        <line x1="50" y1="15" x2="50" y2="20"/>
        <line x1="35" y1="20" x2="38" y2="25"/>
        <line x1="65" y1="20" x2="62" y2="25"/>
      </g>`),
    fact: "O Faraó colocou seu anel-sinete na mão de José, dando-lhe autoridade sobre todo o Egito (Gênesis 41:42)."
  },
  {
    id: "sandalias", name: "Sandálias",
    icon: svg(`
      <ellipse cx="35" cy="55" rx="13" ry="22" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1.5"/>
      <ellipse cx="65" cy="55" rx="13" ry="22" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1.5"/>
      <path d="M35 40 L35 70 M30 45 L40 65 M40 45 L30 65"
            stroke="#d4a84b" stroke-width="1.5" fill="none"/>
      <path d="M65 40 L65 70 M60 45 L70 65 M70 45 L60 65"
            stroke="#d4a84b" stroke-width="1.5" fill="none"/>
      <circle cx="35" cy="55" r="2" fill="#d4a84b"/>
      <circle cx="65" cy="55" r="2" fill="#d4a84b"/>`),
    fact: "Moisés tirou as sandálias diante da sarça ardente, pois estava em terra santa (Êxodo 3:5). João Batista se dizia indigno de desatar as de Jesus."
  },
];

/* =================== CIDADES =================== */
const CITIES = [
  {
    id: "jerusalem", name: "Jerusalém",
    icon: svg(`
      <rect x="15" y="55" width="70" height="30" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M15 55 L20 50 L25 55 L30 50 L35 55 L40 50 L45 55 L50 50 L55 55 L60 50 L65 55 L70 50 L75 55 L80 50 L85 55" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="40" y="35" width="20" height="20" fill="#d4a84b" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M38 35 L50 20 L62 35" fill="#f1c96b" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="47" y="45" width="6" height="10" fill="#5a3a1a"/>
      <circle cx="50" cy="25" r="2" fill="#d4a84b"/>`),
    fact: "Jerusalém é chamada 'Cidade Santa'. Seu nome significa 'cidade da paz'. Foi capital do reino de Davi e onde Jesus foi crucificado."
  },
  {
    id: "belem", name: "Belém",
    icon: svg(`
      <path d="M50 15 L53 25 L63 25 L55 31 L58 41 L50 35 L42 41 L45 31 L37 25 L47 25 Z" fill="#f1c96b" stroke="#8b5a2b" stroke-width="1"/>
      <g stroke="#f1c96b" stroke-width="1" opacity="0.7">
        <line x1="50" y1="5" x2="50" y2="10"/>
        <line x1="40" y1="10" x2="43" y2="15"/>
        <line x1="60" y1="10" x2="57" y2="15"/>
      </g>
      <rect x="20" y="55" width="60" height="30" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M20 55 L35 45 L50 55 L65 45 L80 55" fill="#d4a055" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="46" y="70" width="8" height="15" fill="#5a3a1a"/>
      <rect x="28" y="62" width="6" height="6" fill="#8b5a2b"/>
      <rect x="66" y="62" width="6" height="6" fill="#8b5a2b"/>`),
    fact: "Belém significa 'Casa do Pão'. Foi berço de Davi e Jesus. Ficava a apenas 9 km de Jerusalém (Miqueias 5:2)."
  },
  {
    id: "nazare", name: "Nazaré",
    icon: svg(`
      <path d="M10 70 Q30 40 50 50 Q70 40 90 70 L90 85 L10 85 Z" fill="#8a7a5a" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="35" y="55" width="30" height="25" fill="#d4a055" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M33 55 L50 42 L67 55" fill="#c9434a" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="46" y="65" width="8" height="15" fill="#5a3a1a"/>
      <rect x="40" y="60" width="5" height="5" fill="#4a6fa5"/>
      <rect x="55" y="60" width="5" height="5" fill="#4a6fa5"/>`),
    fact: "Nazaré era uma pequena aldeia desprezada. 'De Nazaré pode vir algo bom?' perguntavam. Jesus cresceu ali (João 1:46)."
  },
  {
    id: "jerico", name: "Jericó",
    icon: svg(`
      <rect x="15" y="50" width="70" height="35" fill="#c9a676" stroke="#5a3a1a" stroke-width="1.5"/>
      <path d="M15 50 L25 45 L30 55 L40 48 L50 50 L60 45 L70 52 L80 48 L85 55"
            stroke="#8b5a2b" stroke-width="2" fill="none"/>
      <rect x="25" y="60" width="8" height="10" fill="#5a3a1a" opacity="0.5"/>
      <rect x="45" y="60" width="8" height="10" fill="#5a3a1a" opacity="0.5"/>
      <rect x="65" y="60" width="8" height="10" fill="#5a3a1a" opacity="0.5"/>
      <path d="M12 50 Q14 40 20 42" stroke="#8b5a2b" stroke-width="1.5" fill="none"/>
      <path d="M82 45 Q86 40 88 50" stroke="#8b5a2b" stroke-width="1.5" fill="none"/>`),
    fact: "Jericó é uma das cidades mais antigas do mundo (~9.000 a.C.). Suas muralhas caíram após 7 voltas ao som de trombetas (Josué 6)."
  },
  {
    id: "ninive", name: "Nínive",
    icon: svg(`
      <rect x="10" y="55" width="80" height="30" fill="#a67030" stroke="#5a3a1a" stroke-width="1.5"/>
      <rect x="25" y="35" width="15" height="20" fill="#c9873a" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="45" y="30" width="15" height="25" fill="#c9873a" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="65" y="40" width="12" height="15" fill="#c9873a" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M25 35 L32 28 L40 35 M45 30 L52 22 L60 30 M65 40 L71 33 L77 40" fill="#d4a84b" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="46" y="70" width="8" height="15" fill="#3a2010"/>`),
    fact: "Nínive era a capital da Assíria, com cerca de 120 mil habitantes. Jonas pregou lá e toda a cidade se arrependeu (Jonas 3)."
  },
  {
    id: "babilonia", name: "Babilônia",
    icon: svg(`
      <path d="M25 85 L30 20 L70 20 L75 85 Z" fill="#c9873a" stroke="#5a3a1a" stroke-width="1.5"/>
      <line x1="28" y1="30" x2="72" y2="30" stroke="#5a3a1a" stroke-width="1"/>
      <line x1="27" y1="45" x2="73" y2="45" stroke="#5a3a1a" stroke-width="1"/>
      <line x1="26" y1="60" x2="74" y2="60" stroke="#5a3a1a" stroke-width="1"/>
      <line x1="25" y1="75" x2="75" y2="75" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M30 20 L35 15 L65 15 L70 20" fill="#d4a84b" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="44" y="75" width="12" height="10" fill="#3a2010"/>`),
    fact: "Babilônia tinha os 'Jardins Suspensos', uma das 7 Maravilhas. O povo de Judá foi exilado lá por 70 anos (Jeremias 25:11)."
  },
  {
    id: "eden", name: "Jardim do Éden",
    icon: svg(`
      <path d="M50 85 L50 40" stroke="#5a3a1a" stroke-width="4"/>
      <ellipse cx="50" cy="35" rx="28" ry="20" fill="#4a9e62"/>
      <ellipse cx="40" cy="30" rx="10" ry="7" fill="#5ab872"/>
      <ellipse cx="60" cy="30" rx="10" ry="7" fill="#5ab872"/>
      <circle cx="40" cy="40" r="4" fill="#c9434a"/>
      <circle cx="58" cy="38" r="4" fill="#c9434a"/>
      <circle cx="50" cy="45" r="4" fill="#c9434a"/>
      <path d="M15 85 Q25 80 35 85 Q45 80 55 85 Q65 80 75 85 Q85 80 95 85" stroke="#4a9ed4" stroke-width="2" fill="none"/>`),
    fact: "No Éden havia a Árvore da Vida e a Árvore do Conhecimento. Um rio saía dali e se dividia em 4 (Gênesis 2:10)."
  },
  {
    id: "sinai", name: "Monte Sinai",
    icon: svg(`
      <path d="M10 85 L30 50 L45 65 L55 35 L70 55 L90 85 Z" fill="#8a7a5a" stroke="#5a3a1a" stroke-width="1.5"/>
      <path d="M50 40 L53 30 L55 35 L58 25 L60 32" fill="#a89670"/>
      <g opacity="0.8">
        <path d="M30 20 Q40 15 50 18 Q60 15 70 20 Q65 25 50 24 Q35 25 30 20" fill="#777" stroke="#555" stroke-width="1"/>
        <path d="M35 15 Q45 10 55 13 Q65 10 75 15" fill="#999" opacity="0.6"/>
      </g>
      <g stroke="#f1c96b" stroke-width="1.5" opacity="0.9">
        <path d="M40 25 L45 20 L40 15"/>
        <path d="M60 25 L55 20 L60 15"/>
      </g>`),
    fact: "No Sinai, Moisés viu a sarça ardente e recebeu os 10 Mandamentos. A montanha tremia e se cobria de fumaça (Êxodo 19:18)."
  },
  {
    id: "galileia", name: "Mar da Galileia",
    icon: svg(`
      <ellipse cx="50" cy="55" rx="38" ry="22" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1.5"/>
      <path d="M20 50 Q30 47 40 50 M55 53 Q65 50 75 53 M25 60 Q35 57 45 60 M55 65 Q65 62 75 65"
            stroke="#fff" stroke-width="0.8" fill="none" opacity="0.6"/>
      <path d="M40 45 L50 35 L60 45 Z" fill="#8b5a2b"/>
      <path d="M40 45 L60 45 L55 50 L45 50 Z" fill="#5a3a1a"/>
      <line x1="50" y1="35" x2="50" y2="25" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M50 25 L58 30 L50 32 Z" fill="#f5e6b8"/>`),
    fact: "Jesus chamou seus primeiros discípulos às margens do Mar da Galileia. Ali caminhou sobre as águas e acalmou a tempestade (Mateus 14)."
  },
  {
    id: "sodoma", name: "Sodoma",
    icon: svg(`
      <rect x="20" y="65" width="60" height="20" fill="#5a3a3a" stroke="#2a1a0a" stroke-width="1"/>
      <rect x="30" y="55" width="12" height="12" fill="#6a4a4a" stroke="#2a1a0a" stroke-width="1"/>
      <rect x="50" y="50" width="14" height="17" fill="#6a4a4a" stroke="#2a1a0a" stroke-width="1"/>
      <path d="M15 30 Q20 20 30 25 Q25 35 15 30" fill="#ff6a3a" opacity="0.8"/>
      <path d="M40 20 Q45 10 55 15 Q50 28 40 20" fill="#ffaa3a" opacity="0.8"/>
      <path d="M65 25 Q75 18 85 28 Q75 35 65 25" fill="#ff6a3a" opacity="0.8"/>
      <path d="M25 40 L30 50 L20 50 Z" fill="#c9434a" opacity="0.7"/>
      <path d="M70 38 L75 48 L65 48 Z" fill="#c9434a" opacity="0.7"/>`),
    fact: "Sodoma e Gomorra foram destruídas com fogo e enxofre do céu. A mulher de Ló virou estátua de sal ao olhar para trás (Gênesis 19)."
  },
  {
    id: "cafarnaum", name: "Cafarnaum",
    icon: svg(`
      <path d="M10 70 L90 70 L85 85 L15 85 Z" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1"/>
      <path d="M25 55 L30 65 L60 65 L55 55 Z" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1"/>
      <line x1="42" y1="55" x2="42" y2="25" stroke="#4a2a0e" stroke-width="1.5"/>
      <path d="M42 25 L70 40 L42 45 Z" fill="#f5e6b8"/>
      <rect x="20" y="40" width="12" height="15" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M18 40 L26 32 L34 40" fill="#d4a055" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="70" y="45" width="12" height="15" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M68 45 L76 37 L84 45" fill="#d4a055" stroke="#5a3a1a" stroke-width="1"/>`),
    fact: "Cafarnaum foi a 'cidade de Jesus'. Ali Ele curou a sogra de Pedro, o paralítico e o servo do centurião (Marcos 2)."
  },
  {
    id: "damasco", name: "Damasco",
    icon: svg(`
      <rect x="15" y="60" width="70" height="25" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="30" y="45" width="15" height="15" fill="#d4a055" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="55" y="40" width="15" height="20" fill="#d4a055" stroke="#5a3a1a" stroke-width="1"/>
      <circle cx="37" cy="40" r="6" fill="#f1c96b" stroke="#5a3a1a" stroke-width="1"/>
      <circle cx="62" cy="35" r="7" fill="#f1c96b" stroke="#5a3a1a" stroke-width="1"/>
      <g opacity="0.7">
        <line x1="50" y1="10" x2="50" y2="20" stroke="#fff" stroke-width="3"/>
        <line x1="45" y1="12" x2="55" y2="12" stroke="#fff" stroke-width="2"/>
        <circle cx="50" cy="15" r="5" fill="#fff" opacity="0.5"/>
      </g>`),
    fact: "Saulo (depois Paulo) ia prender cristãos em Damasco quando viu uma luz do céu e ouviu a voz de Jesus. Ficou cego 3 dias (Atos 9)."
  },
  {
    id: "canaa", name: "Canaã",
    icon: svg(`
      <rect x="10" y="60" width="80" height="25" fill="#4a9e62"/>
      <ellipse cx="25" cy="58" rx="8" ry="10" fill="#7dd39b"/>
      <ellipse cx="75" cy="58" rx="8" ry="10" fill="#7dd39b"/>
      <rect x="23" y="60" width="4" height="10" fill="#8b5a2b"/>
      <rect x="73" y="60" width="4" height="10" fill="#8b5a2b"/>
      <ellipse cx="50" cy="40" rx="18" ry="12" fill="#8a4fa8"/>
      <circle cx="45" cy="35" r="3" fill="#5a2a6a"/>
      <circle cx="52" cy="33" r="3" fill="#5a2a6a"/>
      <circle cx="49" cy="40" r="3" fill="#5a2a6a"/>
      <circle cx="55" cy="42" r="3" fill="#5a2a6a"/>
      <circle cx="44" cy="45" r="3" fill="#5a2a6a"/>
      <path d="M50 28 Q48 24 52 22" stroke="#5a3a1a" stroke-width="1.5" fill="none"/>`),
    fact: "Canaã era a 'Terra Prometida', descrita como 'terra que mana leite e mel'. Os espiões trouxeram um cacho de uvas tão grande que 2 homens o carregavam (Números 13:23)."
  },
  {
    id: "egito", name: "Egito",
    icon: svg(`
      <path d="M20 85 L45 30 L70 85 Z" fill="#d4a84b" stroke="#8b5a2b" stroke-width="1.5"/>
      <path d="M55 85 L75 40 L95 85 Z" fill="#c9873a" stroke="#8b5a2b" stroke-width="1.5"/>
      <rect x="10" y="78" width="80" height="8" fill="#f1c96b"/>
      <circle cx="85" cy="20" r="10" fill="#ff9a3a"/>
      <g stroke="#ff9a3a" stroke-width="1.5" opacity="0.7">
        <line x1="85" y1="5" x2="85" y2="10"/>
        <line x1="70" y1="20" x2="75" y2="20"/>
      </g>
      <path d="M40 30 L45 25 L50 30 Z" fill="#8b5a2b"/>
      <path d="M70 40 L75 35 L80 40 Z" fill="#8b5a2b"/>`),
    fact: "O povo hebreu viveu 430 anos no Egito. Foram escravizados e libertados por Moisés após as 10 pragas (Êxodo 12:40)."
  },
  {
    id: "emaus", name: "Emaús",
    icon: svg(`
      <path d="M10 80 Q30 75 50 80 Q70 85 90 80 L90 88 L10 88 Z" fill="#a67030"/>
      <path d="M15 80 L85 80" stroke="#8b5a2b" stroke-width="1" stroke-dasharray="3,2"/>
      <rect x="60" y="50" width="25" height="30" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M58 50 L72 38 L87 50" fill="#d4a055" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="68" y="65" width="8" height="15" fill="#5a3a1a"/>
      <circle cx="25" cy="70" r="3" fill="#8b5a2b"/>
      <rect x="23" y="72" width="2" height="10" fill="#8b5a2b"/>
      <circle cx="35" cy="68" r="3" fill="#8b5a2b"/>
      <rect x="33" y="70" width="2" height="10" fill="#8b5a2b"/>
      <circle cx="45" cy="70" r="3" fill="#f1c96b"/>
      <rect x="43" y="72" width="2" height="10" fill="#f1c96b"/>`),
    fact: "No caminho de Emaús, dois discípulos conversaram com Jesus ressuscitado sem reconhecê-lo — só O reconheceram ao partir o pão (Lucas 24:31)."
  },
  {
    id: "roma", name: "Roma",
    icon: svg(`
      <ellipse cx="50" cy="80" rx="40" ry="6" fill="#8a7a5a"/>
      <path d="M15 75 L15 35 Q15 25 50 22 Q85 25 85 35 L85 75 Z" fill="#c9a676" stroke="#5a3a1a" stroke-width="1.5"/>
      <g fill="#5a3a1a">
        <rect x="22" y="38" width="7" height="12" rx="3"/>
        <rect x="35" y="38" width="7" height="12" rx="3"/>
        <rect x="48" y="38" width="7" height="12" rx="3"/>
        <rect x="61" y="38" width="7" height="12" rx="3"/>
        <rect x="74" y="38" width="7" height="12" rx="3"/>
        <rect x="22" y="55" width="7" height="12" rx="3"/>
        <rect x="35" y="55" width="7" height="12" rx="3"/>
        <rect x="48" y="55" width="7" height="12" rx="3"/>
        <rect x="61" y="55" width="7" height="12" rx="3"/>
        <rect x="74" y="55" width="7" height="12" rx="3"/>
      </g>
      <path d="M15 22 Q50 10 85 22" stroke="#8b5a2b" stroke-width="2" fill="none"/>`),
    fact: "Paulo foi levado preso a Roma e pregou o Evangelho por 2 anos ali. Diz a tradição que foi decapitado sob o imperador Nero (Atos 28)."
  },
  {
    id: "corinto", name: "Corinto",
    icon: svg(`
      <rect x="20" y="50" width="60" height="35" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="30" y="35" width="8" height="15" fill="#d4a84b"/>
      <rect x="46" y="35" width="8" height="15" fill="#d4a84b"/>
      <rect x="62" y="35" width="8" height="15" fill="#d4a84b"/>
      <rect x="26" y="30" width="48" height="6" fill="#e5d4a0" stroke="#8b5a2b" stroke-width="1"/>
      <path d="M26 30 L30 22 L70 22 L74 30 Z" fill="#d4a84b" stroke="#8b5a2b" stroke-width="1"/>
      <path d="M10 80 Q20 75 30 80 Q40 85 50 80 Q60 75 70 80 Q80 85 90 80" stroke="#4a7ab5" stroke-width="2" fill="none"/>`),
    fact: "Corinto era um grande porto comercial grego. Paulo ficou 18 meses lá e escreveu duas cartas aos coríntios (Atos 18:11)."
  },
  {
    id: "samaria", name: "Samaria",
    icon: svg(`
      <path d="M10 85 L25 55 L40 68 L55 45 L70 60 L90 85 Z" fill="#8a7a5a" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="40" y="55" width="20" height="20" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M38 55 L50 45 L62 55" fill="#d4a055" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="47" y="63" width="6" height="12" fill="#5a3a1a"/>
      <circle cx="28" cy="75" r="5" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1"/>
      <path d="M28 70 L28 75 M25 72 L31 72" stroke="#fff" stroke-width="1"/>`),
    fact: "Na Samaria, Jesus conversou com a mulher samaritana junto ao poço de Jacó, revelando-se como o Messias (João 4:26)."
  },
  {
    id: "betania", name: "Betânia",
    icon: svg(`
      <rect x="25" y="50" width="50" height="35" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M22 50 L50 30 L78 50" fill="#a67030" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="45" y="65" width="10" height="20" fill="#5a3a1a"/>
      <rect x="30" y="58" width="8" height="8" fill="#4a6fa5"/>
      <rect x="62" y="58" width="8" height="8" fill="#4a6fa5"/>
      <ellipse cx="15" cy="70" rx="8" ry="12" fill="#5ab872"/>
      <rect x="13" y="75" width="4" height="10" fill="#8b5a2b"/>
      <ellipse cx="85" cy="70" rx="8" ry="12" fill="#5ab872"/>
      <rect x="83" y="75" width="4" height="10" fill="#8b5a2b"/>`),
    fact: "Betânia ficava perto de Jerusalém. Era a casa de Lázaro, Marta e Maria, onde Jesus frequentemente se hospedava (João 11:1)."
  },
  {
    id: "antioquia", name: "Antioquia",
    icon: svg(`
      <rect x="10" y="60" width="80" height="25" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="40" y="30" width="20" height="30" fill="#d4a84b" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="36" y="25" width="28" height="6" fill="#e5d4a0" stroke="#8b5a2b" stroke-width="1"/>
      <path d="M36 25 L50 15 L64 25" fill="#f1c96b" stroke="#8b5a2b" stroke-width="1"/>
      <rect x="45" y="45" width="10" height="15" fill="#5a3a1a"/>
      <rect x="20" y="45" width="12" height="15" fill="#d4a055" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="68" y="45" width="12" height="15" fill="#d4a055" stroke="#5a3a1a" stroke-width="1"/>
      <text x="50" y="77" font-size="6" text-anchor="middle" fill="#5a3a1a" font-family="serif">✝</text>`),
    fact: "Foi em Antioquia que os seguidores de Jesus foram chamados 'cristãos' pela primeira vez na história (Atos 11:26)."
  },
  {
    id: "hebrom", name: "Hebrom",
    icon: svg(`
      <path d="M10 85 Q30 50 50 60 Q70 50 90 85 Z" fill="#8a7a5a" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="30" y="55" width="40" height="25" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M28 55 L50 40 L72 55" fill="#d4a84b" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M40 60 Q40 52 50 52 Q60 52 60 60 L60 78 L40 78 Z" fill="#5a3a1a"/>
      <path d="M42 55 L42 48 L44 48 L44 55 M56 55 L56 48 L58 48 L58 55" stroke="#888" stroke-width="0.5"/>`),
    fact: "Em Hebrom estão sepultados Abraão, Sara, Isaque, Rebeca, Jacó e Lia — na caverna de Macpela, comprada por Abraão (Gênesis 23)."
  },
];

/* =================== MILAGRES =================== */
const MIRACLES = [
  {
    id: "mar_vermelho", name: "Mar Vermelho Aberto",
    icon: svg(`
      <path d="M10 55 L40 55 L40 85 L10 85 Z" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1"/>
      <path d="M60 55 L90 55 L90 85 L60 85 Z" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1"/>
      <rect x="40" y="55" width="20" height="30" fill="#c9a676"/>
      <path d="M10 55 Q20 45 40 55" stroke="#fff" stroke-width="1.5" fill="none" opacity="0.6"/>
      <path d="M60 55 Q75 45 90 55" stroke="#fff" stroke-width="1.5" fill="none" opacity="0.6"/>
      <circle cx="48" cy="70" r="2" fill="#3a2010"/>
      <circle cx="52" cy="75" r="2" fill="#3a2010"/>
      <path d="M45 35 L50 50" stroke="#8b5a2b" stroke-width="3"/>`),
    fact: "Deus abriu o Mar Vermelho para Israel atravessar a seco. O exército egípcio foi engolido pelas águas ao persegui-los (Êxodo 14:21)."
  },
  {
    id: "ressurreicao", name: "Ressurreição",
    icon: svg(`
      <path d="M15 85 Q15 40 50 40 Q85 40 85 85 Z" fill="#8a7a5a" stroke="#5a3a1a" stroke-width="1.5"/>
      <ellipse cx="50" cy="55" rx="18" ry="25" fill="#1a1238"/>
      <rect x="30" y="78" width="40" height="6" fill="#5a3a1a"/>
      <rect x="62" y="55" width="20" height="4" fill="#6a4a2a" transform="rotate(-15 72 57)"/>
      <g opacity="0.8">
        <circle cx="20" cy="20" r="6" fill="#fff8dc"/>
        <g stroke="#f1c96b" stroke-width="1.5" fill="none">
          <line x1="20" y1="8" x2="20" y2="14"/>
          <line x1="8" y1="20" x2="14" y2="20"/>
          <line x1="12" y1="12" x2="15" y2="15"/>
          <line x1="28" y1="12" x2="25" y2="15"/>
        </g>
      </g>`),
    fact: "Jesus ressuscitou no terceiro dia. Um anjo rolou a pedra do túmulo, que pesava mais de 1 tonelada (Mateus 28:2)."
  },
  {
    id: "paes_peixes", name: "Pães e Peixes",
    icon: svg(`
      <ellipse cx="35" cy="55" rx="14" ry="8" fill="#d4a055" stroke="#8b5a2b" stroke-width="1"/>
      <ellipse cx="55" cy="48" rx="14" ry="8" fill="#d4a055" stroke="#8b5a2b" stroke-width="1"/>
      <ellipse cx="70" cy="58" rx="14" ry="8" fill="#d4a055" stroke="#8b5a2b" stroke-width="1"/>
      <ellipse cx="30" cy="75" rx="12" ry="6" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1"/>
      <path d="M42 75 L48 72 L48 78 Z" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1"/>
      <circle cx="26" cy="74" r="1" fill="#fff"/>
      <ellipse cx="65" cy="75" rx="12" ry="6" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1"/>
      <path d="M77 75 L83 72 L83 78 Z" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1"/>
      <circle cx="61" cy="74" r="1" fill="#fff"/>
      <g stroke="#f1c96b" stroke-width="1" opacity="0.7">
        <line x1="50" y1="20" x2="50" y2="28"/>
        <line x1="35" y1="25" x2="40" y2="30"/>
        <line x1="65" y1="25" x2="60" y2="30"/>
      </g>`),
    fact: "Jesus alimentou 5.000 homens (sem contar mulheres e crianças) com apenas 5 pães e 2 peixes. Sobraram 12 cestos (João 6)."
  },
  {
    id: "agua_vinho", name: "Água em Vinho",
    icon: svg(`
      <path d="M30 25 L70 25 L65 50 L55 55 L55 75 L45 75 L45 55 L35 50 Z"
            fill="#8a1a3a" stroke="#5a0a1a" stroke-width="1.5"/>
      <path d="M32 27 L68 27 L66 32 L34 32 Z" fill="#c9434a"/>
      <rect x="40" y="75" width="20" height="5" fill="#8a1a3a" stroke="#5a0a1a" stroke-width="1"/>
      <ellipse cx="50" cy="27" rx="18" ry="3" fill="#5a0a1a"/>
      <g stroke="#fff" stroke-width="0.8" opacity="0.5">
        <path d="M40 35 Q42 40 40 45" fill="none"/>
        <path d="M58 38 Q60 43 58 48" fill="none"/>
      </g>`),
    fact: "No casamento em Caná, Jesus transformou 6 talhas de água em vinho. Foi Seu primeiro milagre público (João 2:1-11)."
  },
  {
    id: "cego_cura", name: "Cura do Cego",
    icon: svg(`
      <ellipse cx="50" cy="50" rx="35" ry="22" fill="#fff" stroke="#333" stroke-width="1.5"/>
      <circle cx="50" cy="50" r="15" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1"/>
      <circle cx="50" cy="50" r="7" fill="#2a1a0a"/>
      <circle cx="47" cy="47" r="2" fill="#fff"/>
      <g stroke="#f1c96b" stroke-width="2" opacity="0.8">
        <line x1="50" y1="20" x2="50" y2="28"/>
        <line x1="30" y1="30" x2="35" y2="35"/>
        <line x1="70" y1="30" x2="65" y2="35"/>
        <line x1="20" y1="50" x2="26" y2="50"/>
        <line x1="80" y1="50" x2="74" y2="50"/>
      </g>`),
    fact: "Jesus fez lama com saliva e terra, passou nos olhos de um cego de nascença. Ele se lavou em Siloé e voltou vendo (João 9)."
  },
  {
    id: "andar_aguas", name: "Caminhar sobre Águas",
    icon: svg(`
      <rect x="5" y="55" width="90" height="35" fill="#4a7ab5"/>
      <path d="M5 55 Q20 50 35 55 Q50 60 65 55 Q80 50 95 55"
            stroke="#fff" stroke-width="1.5" fill="none" opacity="0.7"/>
      <path d="M5 70 Q20 65 35 70 Q50 75 65 70 Q80 65 95 70"
            stroke="#fff" stroke-width="1" fill="none" opacity="0.5"/>
      <rect x="45" y="30" width="10" height="28" fill="#c9873a"/>
      <circle cx="50" cy="25" r="6" fill="#f4d1a1"/>
      <circle cx="50" cy="20" r="10" fill="none" stroke="#f1c96b" stroke-width="1.5"/>
      <ellipse cx="47" cy="62" rx="4" ry="2" fill="#5a3a1a"/>
      <ellipse cx="53" cy="62" rx="4" ry="2" fill="#5a3a1a"/>
      <circle cx="47" cy="62" r="5" fill="none" stroke="#fff" stroke-width="1" opacity="0.6"/>
      <circle cx="53" cy="62" r="5" fill="none" stroke="#fff" stroke-width="1" opacity="0.6"/>`),
    fact: "Jesus andou sobre o Mar da Galileia durante uma tempestade. Pedro tentou imitá-Lo mas afundou ao duvidar (Mateus 14:29)."
  },
  {
    id: "mana", name: "Maná do Céu",
    icon: svg(`
      <g fill="#f5e6b8" stroke="#d4a84b" stroke-width="0.5">
        <circle cx="25" cy="20" r="3"/>
        <circle cx="50" cy="15" r="3"/>
        <circle cx="75" cy="22" r="3"/>
        <circle cx="15" cy="35" r="2.5"/>
        <circle cx="40" cy="30" r="3"/>
        <circle cx="60" cy="35" r="3"/>
        <circle cx="85" cy="38" r="2.5"/>
        <circle cx="30" cy="45" r="3"/>
        <circle cx="55" cy="50" r="3"/>
        <circle cx="80" cy="50" r="2.5"/>
        <circle cx="20" cy="60" r="3"/>
        <circle cx="45" cy="65" r="3"/>
        <circle cx="70" cy="62" r="3"/>
      </g>
      <path d="M10 80 Q30 75 50 80 Q70 85 90 80 L90 85 L10 85 Z" fill="#c9a676"/>`),
    fact: "O maná caía do céu todas as manhãs por 40 anos no deserto. Tinha gosto de bolo de mel. Não podia ser guardado (Êxodo 16:31)."
  },
  {
    id: "muralhas_jerico", name: "Queda de Jericó",
    icon: svg(`
      <path d="M20 85 L25 60 L30 75 L35 55 L40 70 L45 58 L50 72 L55 55 L60 68 L65 60 L70 80 L75 65 L80 85 Z"
            fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M25 30 L30 20 L35 30 L40 18 L45 28 L50 20 L55 32 L60 22 L65 30 L70 20 L75 30"
            stroke="#5a3a1a" stroke-width="0.8" fill="none" opacity="0.5"/>
      <circle cx="30" cy="50" r="3" fill="#8b5a2b"/>
      <circle cx="55" cy="48" r="3" fill="#8b5a2b"/>
      <circle cx="75" cy="52" r="3" fill="#8b5a2b"/>
      <g stroke="#d4a84b" stroke-width="1.5" opacity="0.8">
        <path d="M30 10 Q40 15 35 25" fill="none"/>
        <path d="M60 12 Q70 18 65 28" fill="none"/>
      </g>`),
    fact: "Os israelitas deram 1 volta por dia durante 6 dias em silêncio. No 7º dia, 7 voltas com trombetas e grito — as muralhas caíram (Josué 6)."
  },
  {
    id: "lazaro", name: "Lázaro Ressuscita",
    icon: svg(`
      <path d="M25 85 L25 40 Q25 25 50 25 Q75 25 75 40 L75 85 Z" fill="#5a3a1a" stroke="#2a1a0a" stroke-width="1.5"/>
      <path d="M35 30 L50 15 L65 30" fill="#8a7a5a"/>
      <rect x="40" y="45" width="20" height="35" fill="#f5e6b8" stroke="#c9a676" stroke-width="1"/>
      <line x1="42" y1="50" x2="58" y2="50" stroke="#c9a676" stroke-width="1"/>
      <line x1="42" y1="58" x2="58" y2="58" stroke="#c9a676" stroke-width="1"/>
      <line x1="42" y1="66" x2="58" y2="66" stroke="#c9a676" stroke-width="1"/>
      <line x1="42" y1="74" x2="58" y2="74" stroke="#c9a676" stroke-width="1"/>
      <g opacity="0.8">
        <line x1="50" y1="5" x2="50" y2="12" stroke="#f1c96b" stroke-width="2"/>
        <circle cx="50" cy="15" r="3" fill="#fff8dc"/>
      </g>`),
    fact: "Lázaro estava morto há 4 dias. Jesus chorou, depois ordenou: 'Lázaro, vem para fora!' E ele saiu vivo do túmulo (João 11:43)."
  },
  {
    id: "tempestade", name: "Tempestade Acalmada",
    icon: svg(`
      <path d="M10 55 L90 55 L85 85 L15 85 Z" fill="#4a7ab5" stroke="#2a4a7a" stroke-width="1"/>
      <path d="M15 55 Q25 45 35 55 Q45 45 55 55 Q65 45 75 55 Q85 48 90 55"
            stroke="#fff" stroke-width="1.5" fill="none" opacity="0.7"/>
      <path d="M30 60 L70 60 L65 78 L35 78 Z" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1"/>
      <line x1="50" y1="60" x2="50" y2="28" stroke="#4a2a0e" stroke-width="1.5"/>
      <path d="M50 28 L72 45 L50 48 Z" fill="#f5e6b8" stroke="#8b5a2b" stroke-width="1"/>
      <g fill="#8a8a8a" opacity="0.7">
        <ellipse cx="25" cy="20" rx="12" ry="5"/>
        <ellipse cx="55" cy="15" rx="15" ry="6"/>
        <ellipse cx="80" cy="22" rx="10" ry="4"/>
      </g>
      <path d="M30 25 L35 35 L30 35 L35 42" stroke="#f1c96b" stroke-width="1.5" fill="none"/>`),
    fact: "No meio da tempestade, Jesus dormia no barco. Ao ser acordado, disse 'Cala-te, aquieta-te!' e o mar ficou em bonança (Marcos 4:39)."
  },
  {
    id: "pesca", name: "Pesca Milagrosa",
    icon: svg(`
      <rect x="10" y="70" width="80" height="15" fill="#4a7ab5"/>
      <path d="M20 55 L80 55 L70 75 L30 75 Z" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="1"/>
      <path d="M25 55 Q35 40 50 42 Q65 40 75 55" fill="#c9a676" opacity="0.8" stroke="#5a3a1a" stroke-width="1"/>
      <g fill="#4a7ab5" stroke="#2a4a7a" stroke-width="0.8">
        <ellipse cx="35" cy="48" rx="4" ry="2"/>
        <ellipse cx="45" cy="46" rx="4" ry="2"/>
        <ellipse cx="55" cy="48" rx="4" ry="2"/>
        <ellipse cx="65" cy="47" rx="4" ry="2"/>
        <ellipse cx="40" cy="52" rx="4" ry="2"/>
        <ellipse cx="50" cy="50" rx="4" ry="2"/>
        <ellipse cx="60" cy="52" rx="4" ry="2"/>
      </g>
      <g stroke="#5a3a1a" stroke-width="0.5" fill="none">
        <line x1="25" y1="55" x2="30" y2="42"/>
        <line x1="40" y1="55" x2="42" y2="40"/>
        <line x1="55" y1="55" x2="57" y2="40"/>
        <line x1="70" y1="55" x2="68" y2="42"/>
      </g>`),
    fact: "Ao obedecer Jesus, Pedro pescou tantos peixes que a rede se rompia e os barcos quase afundavam. Foram 153 peixes grandes (João 21:11)."
  },
  {
    id: "sara_cobra", name: "Vara em Serpente",
    icon: svg(`
      <path d="M40 85 Q42 70 48 65 Q56 60 50 50 Q40 40 48 30 Q60 20 55 10"
            stroke="#4a9e62" stroke-width="6" fill="none" stroke-linecap="round"/>
      <circle cx="55" cy="10" r="4" fill="#4a9e62"/>
      <circle cx="56" cy="9" r="1" fill="#c9434a"/>
      <path d="M58 11 L62 8 L62 14 Z" fill="#c9434a"/>
      <g opacity="0.6">
        <circle cx="50" cy="45" r="1" fill="#2a5a32"/>
        <circle cx="52" cy="35" r="1" fill="#2a5a32"/>
        <circle cx="48" cy="60" r="1" fill="#2a5a32"/>
      </g>`),
    fact: "Diante do faraó, o cajado de Arão virou serpente e engoliu as cobras dos magos egípcios, provando o poder de Deus (Êxodo 7:12)."
  },
  {
    id: "elias_fogo", name: "Fogo do Céu (Elias)",
    icon: svg(`
      <path d="M20 85 L80 85 L80 75 L20 75 Z" fill="#8a7a5a" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M30 75 L35 65 L40 75 L50 60 L55 75 L60 62 L70 75" fill="#c9a676" stroke="#5a3a1a" stroke-width="1"/>
      <path d="M35 65 Q40 45 45 55 Q50 30 55 50 Q60 35 62 60"
            fill="#ff6a3a" stroke="#c9434a" stroke-width="1"/>
      <path d="M42 50 Q46 40 50 48 Q54 38 55 48"
            fill="#ffaa3a"/>
      <path d="M48 45 Q50 40 52 45" fill="#fff8a0"/>
      <g stroke="#f1c96b" stroke-width="1.5" opacity="0.8">
        <line x1="30" y1="20" x2="45" y2="35"/>
        <line x1="50" y1="15" x2="50" y2="30"/>
        <line x1="70" y1="20" x2="58" y2="35"/>
      </g>`),
    fact: "Elias desafiou 450 profetas de Baal. Oração curta, e fogo do céu consumiu até a água ao redor do altar (1 Reis 18:38)."
  },
  {
    id: "pilar_fogo", name: "Coluna de Fogo",
    icon: svg(`
      <rect x="40" y="30" width="20" height="60" fill="#ff6a3a" opacity="0.7"/>
      <path d="M40 30 Q50 10 60 30" fill="#ffaa3a"/>
      <path d="M43 40 Q50 20 57 40" fill="#fff8a0" opacity="0.9"/>
      <rect x="45" y="50" width="10" height="40" fill="#ff9a3a"/>
      <rect x="47" y="60" width="6" height="30" fill="#fff8a0"/>
      <g opacity="0.8">
        <circle cx="25" cy="75" r="3" fill="#2a1a0a"/>
        <rect x="23" y="75" width="2" height="10" fill="#2a1a0a"/>
        <circle cx="75" cy="78" r="3" fill="#2a1a0a"/>
        <rect x="73" y="78" width="2" height="8" fill="#2a1a0a"/>
      </g>
      <g fill="#f1c96b" opacity="0.6">
        <circle cx="45" cy="25" r="1"/>
        <circle cx="55" cy="20" r="1"/>
        <circle cx="50" cy="15" r="1"/>
      </g>`),
    fact: "Deus guiou Israel no deserto com coluna de nuvem de dia e coluna de fogo à noite, durante 40 anos (Êxodo 13:21)."
  },
  {
    id: "cura_leproso", name: "Cura do Leproso",
    icon: svg(`
      <circle cx="50" cy="30" r="13" fill="#f4d1a1"/>
      <g fill="#c9434a" opacity="0.6">
        <circle cx="43" cy="27" r="2"/>
        <circle cx="55" cy="25" r="1.5"/>
        <circle cx="48" cy="35" r="2"/>
        <circle cx="57" cy="33" r="1.5"/>
      </g>
      <path d="M35 80 Q35 50 50 45 Q65 50 65 80 Z" fill="#c9a676"/>
      <path d="M40 55 L35 65 L40 65 Z" fill="#f4d1a1"/>
      <path d="M60 55 L65 65 L60 65 Z" fill="#f4d1a1"/>
      <g stroke="#f1c96b" stroke-width="2" opacity="0.8">
        <line x1="20" y1="25" x2="30" y2="30"/>
        <line x1="15" y1="40" x2="25" y2="40"/>
        <line x1="18" y1="55" x2="28" y2="52"/>
      </g>
      <circle cx="46" cy="30" r="1" fill="#333"/>
      <circle cx="54" cy="30" r="1" fill="#333"/>
      <path d="M45 36 Q50 39 55 36" stroke="#333" stroke-width="1" fill="none"/>`),
    fact: "Jesus tocou um leproso — algo impensável — e disse: 'Quero, sê limpo'. Imediatamente a lepra desapareceu (Marcos 1:41)."
  },
  {
    id: "ascensao", name: "Ascensão",
    icon: svg(`
      <rect x="45" y="75" width="10" height="15" fill="#c9873a"/>
      <circle cx="50" cy="70" r="7" fill="#f4d1a1"/>
      <circle cx="50" cy="65" r="12" fill="none" stroke="#f1c96b" stroke-width="1.5"/>
      <g fill="#fff" opacity="0.85">
        <ellipse cx="30" cy="55" rx="12" ry="5"/>
        <ellipse cx="70" cy="55" rx="12" ry="5"/>
        <ellipse cx="50" cy="45" rx="18" ry="6"/>
      </g>
      <g stroke="#f1c96b" stroke-width="1.5" opacity="0.8">
        <line x1="20" y1="20" x2="28" y2="30"/>
        <line x1="50" y1="10" x2="50" y2="22"/>
        <line x1="80" y1="20" x2="72" y2="30"/>
        <line x1="15" y1="40" x2="25" y2="42"/>
        <line x1="85" y1="40" x2="75" y2="42"/>
      </g>`),
    fact: "Após 40 dias ressuscitado, Jesus subiu ao céu diante dos discípulos. Anjos disseram que voltaria da mesma forma (Atos 1:9-11)."
  },
  {
    id: "sol_parado", name: "Sol Parado",
    icon: svg(`
      <circle cx="50" cy="35" r="18" fill="#ff9a3a"/>
      <circle cx="50" cy="35" r="12" fill="#ffaa3a"/>
      <circle cx="50" cy="35" r="6" fill="#fff8a0"/>
      <g stroke="#ff9a3a" stroke-width="2">
        <line x1="50" y1="10" x2="50" y2="16"/>
        <line x1="30" y1="15" x2="34" y2="22"/>
        <line x1="70" y1="15" x2="66" y2="22"/>
        <line x1="15" y1="35" x2="22" y2="35"/>
        <line x1="85" y1="35" x2="78" y2="35"/>
      </g>
      <path d="M20 85 L50 70 L80 85 Z" fill="#8a7a5a" stroke="#5a3a1a" stroke-width="1"/>
      <rect x="45" y="75" width="10" height="10" fill="#c9a676"/>
      <path d="M65 40 Q75 38 78 42" stroke="#5a3a1a" stroke-width="1" fill="none"/>`),
    fact: "Josué pediu que o sol parasse sobre Gibeom, e ele parou por cerca de um dia inteiro — nunca houve dia igual (Josué 10:13)."
  },
  {
    id: "sara_engravida", name: "Sara Engravida",
    icon: svg(`
      <circle cx="50" cy="30" r="10" fill="#f4d1a1"/>
      <path d="M40 28 Q35 14 48 13 Q58 14 60 28" fill="#dcdcdc"/>
      <path d="M30 85 Q30 45 50 42 Q70 45 70 85 Z" fill="#a8875a"/>
      <ellipse cx="50" cy="65" rx="18" ry="15" fill="#b8995a"/>
      <g stroke="#f1c96b" stroke-width="1" opacity="0.8">
        <line x1="15" y1="20" x2="22" y2="25"/>
        <line x1="85" y1="20" x2="78" y2="25"/>
        <line x1="10" y1="40" x2="18" y2="40"/>
        <line x1="90" y1="40" x2="82" y2="40"/>
      </g>
      <circle cx="47" cy="30" r="1" fill="#333"/>
      <circle cx="53" cy="30" r="1" fill="#333"/>
      <path d="M45 35 Q50 38 55 35" stroke="#333" stroke-width="1" fill="none"/>`),
    fact: "Deus prometeu um filho a Abraão e Sara quando ela tinha 90 anos. Aos 91 anos, ela deu à luz Isaque (Gênesis 21:2)."
  },
  {
    id: "elias_subiu", name: "Carro de Fogo",
    icon: svg(`
      <g fill="#ff6a3a">
        <circle cx="30" cy="60" r="10"/>
        <circle cx="70" cy="60" r="10"/>
      </g>
      <path d="M25 65 Q20 50 30 45 Q45 35 55 45 Q70 40 75 55 Q80 65 75 60" fill="#ffaa3a"/>
      <rect x="35" y="45" width="30" height="20" fill="#d4a84b" stroke="#8b5a2b" stroke-width="1.5"/>
      <path d="M35 45 L40 35 L60 35 L65 45 Z" fill="#f1c96b" stroke="#8b5a2b" stroke-width="1"/>
      <g fill="#ff9a3a" opacity="0.9">
        <path d="M20 30 Q25 20 30 28 Q35 15 40 28" />
        <path d="M60 28 Q65 15 70 28 Q75 20 80 30"/>
        <path d="M40 20 Q45 10 50 20 Q55 10 60 20"/>
      </g>
      <circle cx="50" cy="42" r="3" fill="#f4d1a1"/>`),
    fact: "Elias não morreu — foi arrebatado ao céu num redemoinho, em um carro de fogo com cavalos de fogo (2 Reis 2:11)."
  },
  {
    id: "naama", name: "Cura de Naamã",
    icon: svg(`
      <rect x="10" y="55" width="80" height="35" fill="#4a7ab5"/>
      <path d="M10 55 Q25 50 40 55 Q55 60 70 55 Q85 50 90 55"
            stroke="#fff" stroke-width="1.5" fill="none" opacity="0.7"/>
      <circle cx="50" cy="40" r="10" fill="#f4d1a1"/>
      <circle cx="47" cy="40" r="1" fill="#333"/>
      <circle cx="53" cy="40" r="1" fill="#333"/>
      <path d="M44 44 Q50 48 56 44" stroke="#333" stroke-width="1" fill="none"/>
      <path d="M42 30 Q40 18 50 17 Q60 18 58 30" fill="#3a2010"/>
      <rect x="43" y="50" width="14" height="8" fill="#c9873a"/>
      <g fill="#fff" opacity="0.6">
        <circle cx="30" cy="65" r="2"/>
        <circle cx="70" cy="65" r="2"/>
        <circle cx="40" cy="75" r="2"/>
        <circle cx="60" cy="75" r="2"/>
      </g>`),
    fact: "Naamã, general sírio leproso, mergulhou 7 vezes no rio Jordão como Eliseu mandou — e saiu completamente curado (2 Reis 5:14)."
  },
  {
    id: "agua_amarga", name: "Águas de Mara",
    icon: svg(`
      <rect x="15" y="55" width="70" height="30" fill="#4a7ab5"/>
      <path d="M15 55 Q30 50 50 55 Q70 60 85 55"
            stroke="#fff" stroke-width="1.5" fill="none" opacity="0.7"/>
      <rect x="45" y="18" width="10" height="40" fill="#8b5a2b"/>
      <path d="M40 15 Q50 5 60 15 L55 20 L45 20 Z" fill="#5ab872"/>
      <circle cx="42" cy="12" r="3" fill="#7dd39b"/>
      <circle cx="58" cy="12" r="3" fill="#7dd39b"/>
      <circle cx="50" cy="8" r="3" fill="#7dd39b"/>
      <g opacity="0.7" stroke="#fff" stroke-width="0.8">
        <path d="M35 70 Q40 65 45 70 Q50 75 55 70 Q60 65 65 70" fill="none"/>
      </g>`),
    fact: "Em Mara, as águas eram amargas. Deus mandou Moisés lançar um pedaço de pau na água, e ela ficou doce (Êxodo 15:25)."
  },
  {
    id: "machado", name: "Machado Flutua",
    icon: svg(`
      <rect x="10" y="60" width="80" height="28" fill="#4a7ab5"/>
      <path d="M10 60 Q25 55 45 60 Q65 65 85 60"
            stroke="#fff" stroke-width="1.5" fill="none" opacity="0.7"/>
      <rect x="35" y="35" width="4" height="30" fill="#8b5a2b" stroke="#4a2a0e" stroke-width="0.5"/>
      <polygon points="39,40 58,32 62,44 48,50" fill="#888" stroke="#555" stroke-width="1"/>
      <polygon points="39,40 58,32 60,36 39,44" fill="#aaa"/>
      <g fill="#fff" opacity="0.5">
        <circle cx="40" cy="68" r="1.5"/>
        <circle cx="50" cy="70" r="1.5"/>
        <circle cx="60" cy="68" r="1.5"/>
      </g>
      <g opacity="0.8">
        <path d="M25 55 Q35 50 45 55 Q40 58 35 56" stroke="#fff" stroke-width="1" fill="none"/>
      </g>`),
    fact: "Um discípulo deixou cair um machado emprestado no rio. Eliseu lançou um pedaço de pau, e o ferro flutuou na água (2 Reis 6:6)."
  },
];

const GAME_DATA = {
  characters: CHARACTERS,
  objects:    OBJECTS,
  cities:     CITIES,
  miracles:   MIRACLES,
};
