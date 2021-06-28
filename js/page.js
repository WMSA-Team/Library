'use strict';
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

var speedForward = 90, //Typing Speed
    speedWait = 5000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 100; //Backspace Speed

const quotes = ['So many books, so little time.'
  ,'There is no friend as loyal as a book.'
  ,'There is no friend as loyal as a book.'
  ,'A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.'
  ,'Only the very weak-minded refuse to be influenced by literature and poetry.'
  ,'a mind needs books as a sword needs a whetstone, if it is to keep its edge.'
  ,'a book which people praise and dont read.'
  ,'Sleep is good, he said, and books are better.'
  ,'Many people, myself among them, feel better at the mere sight of a book.'
  ,'The library is inhabited by spirits that come out of the pages at night.'
  ,'If you don’t like to read, you haven’t found the right book.'
  ,'When I have a little money, I buy books; and if I have any left, I buy food and clothes.'
  ,'That’s the thing about books. They let you travel without moving your feet.'
  ,'A book is a version of the world. If you do not like it, ignore it; or offer your own version in return.'];

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("p"); //Subheader element
  
  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {
    
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
        
      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
      
    // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {
      
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
      
    }
    
  // If backspacing is enabled
  } else {
    
    // If either the header or the paragraph still has text, continue backspacing
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      
      // If paragraph still has text, continue erasing, otherwise switch to the header.
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    
    // If neither head or paragraph still has text, switch to next quote in array and start typing.
    } else { 
      
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function(){ typeWriter(id, ar); }, 50);
      
    }
  }
}

  let cardContainer = document.getElementById('fourBooks');

  function render (ar) {
    cardContainer.innerHTML = ''
    let randomArr = []
    for (let i=0; i<4; i++){
      let random = getRandomArbitrary(0,ar.length-1);
      do {
      random = getRandomArbitrary(0,ar.length)
      } while (randomArr.indexOf(random) >= 0)
      randomArr.push(random)
      // console.log(random)
      let card = document.createElement('div');
            card.className = 'card'
            // create side div element
            let side = document.createElement('div');
            side.className = 'side'
            // create img element
            let imag = document.createElement('img');
            imag.src = ar[random].imag;
            let section1 = document.createElement('section');
            let h1 = document.createElement('h1')
            h1.innerText = ar[random].name;
            let p = document.createElement('p')
            p.innerText = ar[random].description;
            let sideBack = document.createElement('div')
            sideBack.className = 'side back'
            let action = document.createElement('section')
            action.className = 'action'
            let buy = document.createElement('button')
            buy.innerText = 'More Info'
            let a = document.createElement('a')
            a.href = './book.html'
            a.appendChild(buy)
            buy.setAttribute('id',ar[random].name)
            side.appendChild(imag);
            card.appendChild(side);
            sideBack.appendChild(section1);
            section1.appendChild(h1);
            section1.appendChild(p);
            card.appendChild(sideBack);
            action.appendChild(a);
            sideBack.appendChild(action)
            cardContainer.appendChild(card)
            let star = document.createElement('div')
            star.className = 'star'
            let form = document.createElement('form')
            form.action = ''
    }
  }

  let events = document.getElementById('events')
  function eventHandler(e) {
    if(e.target.id === 'first' || e.target.id === 'sec'|| e.target.id === 'third'){
      // events.innerHTML = ''
      if (e.target.id === 'first') {
        let heading = document.getElementById('aj')
        heading.innerText= `1980 LTUC Founded.`;
        let text = document.getElementById('pra')
        text.innerText= 'Luminus Technical University College (LTUC) was established in 1980 under the name of Al Quds College and is part of Luminus Education Group. LTUC aims to offer unique programs based on identified market needs and employment requirements.';
        let img = document.getElementById('img')
        img.src= `https://tomad.com/wp-content/uploads/2019/10/20191009_090946-1080x675.jpg`;
      }
      else if (e.target.id === 'sec') {
        let heading1 = document.getElementById('aj')
        heading1.innerText= `23/May/2021 Start of The couress  .`;
        let text1 = document.getElementById('pra')
        text1.innerText= `Overview
        Thinking about a new career in software development? Start here! In this workshop, you'll get a taste of a day in the life of a software developer.
        Code 101 is about learning what it looks like to be a software developer through an immersive course for beginners that focuses on front-end web development technologies.
        Get a taste of the Code Fellows learning experience, find out how websites are built, and code a webpage yourself using professional coding practices.
        Outcomes
        At the end of this workshop, you will:
        Understand the basics of what it means to be a professional software developer.
        Understand how HTML and CSS work together to create the modern web.
        Create a complete website.
        Know how to deploy your website and be able to share your accomplishments with friends and family.
        Be able to identify whether a career in coding and the Code Fellows program is right for you.
        Topics
        The Modern Web
        How the pieces work together`
        
        let img1 = document.getElementById('img')
        img1.src= 'https://images.ctfassets.net/qjy3jg1udcmq/1h195fAfGwKOQOeeMcoQky/830de226f1395841801b6557cbee6eec/code-101.jpg';
       }
       else if (e.target.id === 'third'){
        let heading2 = document.getElementById('aj')
        heading2.innerText= `27/June/2021 Created This Wire-Frame .`;
        let text2 = document.getElementById('pra')
        text2.innerText= `Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada.
        Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
        Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.`;
        let img2 = document.getElementById('img')
        img2.src= `https://dgosxlrnzhofi.cloudfront.net/custom_page_images/430/page_images/code-201.png?1440114811`;
       }

      }};

    events.addEventListener('click', eventHandler);

 function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
function Book(name, description, imag, type) {
      this.name = name;
      this.description = description;
      this.rating = 0;
      this.imag = imag;
      this.type = type;
      this.year = getRandomArbitrary(1980,2020);
      Book.arr.push(this);
  }

  Book.arr = [];
  let Hyper = new Book('HYPER SPACE','is a book by Michio Kaku, a theoretical physicist from the City College of New York. It focuses on Kakus studies of higher dimensions referred to as hyperspace. The recurring theme of the book is that all four forces of the universe (the strong force, the weak force, electromagnetism and gravity) become more coherent and their description simpler in higher dimensions','./img/SCIENCEIMG/HYPER SPACE.jpg','science');
  let WHAT = new Book('WHAT IF', ' a compilation of well-researched, science-based answers to some of the craziest hypothetical questions you can imagine.', './img/SCIENCEIMG/WHAT IF.jpg','science');
  let DARK = new Book('DARK MATTER  AND THE DINOSAURS', 'a 2015 non-fiction book by Harvard astrophysicist Lisa Randall. Randall conjectures that dark matter may have indirectly led to the extinction of dinosaurs. Other scientists generally regard this as a credible hypothesis but note a lack of supporting evidence.', './img/SCIENCEIMG/MATTER.jpg','science');
  let ABRIEF = new Book('ABRIEF HISTORY OF TIME', ' Stephen Hawkings way of explaining the most complex concepts and ideas of physics, such as space, time, black holes, planets, stars and gravity to the average Joe, so that even you and I can better understand how our planet was created', './img/SCIENCEIMG/ABRIEF HISTORY OF TIME.jpg','science');
  let BROTHERS = new Book('THE WRIGHT BROTHERS', ' is a 2015 non-fiction book written by the popular historian David McCullough and published by Simon & Schuster. It is a history of the American inventors and aviation pioneers Orville and Wilbur Wright. The book was on The New York Times Non-Fiction Best Sellers list for seven weeks in 2015.', './img/SCIENCEIMG/THE WRIGHT BROTHERS.jpg','science');
  let MAKING = new Book('MAKING CONTACT', 'We cannot separate the earth from its greater cosmic environment. What is needed is a new story and Alan Steinfelds Making Contact is part of that story.Deepak Chopra, Author, Total Meditation', './img/SCIENCEIMG/CONTACT.jpg','science');
  let THE = new Book('THE DEMON-HAUNTED WORLD', ' is a 1995 book by the astrophysicist Carl Sagan and co-authored by Ann Druyan,[1] in which the author aims to explain the scientific method to laypeople and to encourage people to learn critical and skeptical thinking. He explains methods to help distinguish between ideas that are considered valid science and those that can be considered pseudoscience. Sagan states that when new ideas are offered for consideration, they should be tested by means of skeptical thinking and should stand up to rigorous questioning.', './img/SCIENCEIMG/THE DEMON-HAUNTED WORLD.jpg','science');
  let IN = new Book('IN LINITE POWERS', 'Rising Powers and State Transformation advances the concept of ‘state transformation’ as a useful lens through which to examine rising power states’ foreign policymaking and implementation, with chapters dedicated to China, Russia, India, Brazil, Indonesia and Saudi Arabia.', './img/SCIENCEIMG/IN LINITE POWERS.jpg','science');
  let PHILOSOPHY = new Book('PHILOSOPHY OF SCIENCE', 'cience is often held to give us the best insight into the nature of reality, with a prestige unmatched in other disciplines. But what is the scientific method and how does it operate? Does it give us objective knowledge or does it just work? And if an electron is an "unobservable entity", why should we believe that they exist? Professor Stathis Psillos gives a detailed look at the philosophy of science', './img/SCIENCEIMG/PHILOSOPHY OF SCIENCE.jpg','science')
  let SHORT = new Book('A SHORT HISTORY', 'n A Walk in the Woods, Bill Bryson trekked the Appalachian Trail—well, most of it. In A Sunburned Country, he confronted some of the most lethal wildlife Australia has to offer. Now, in his biggest book, he confronts his greatest challenge: to understand—and, if possible, answer—the oldest, biggest questions we have posed about the universe and ourselves.', './img/SCIENCEIMG/SHORT.jpg','science');
  let THINGS = new Book('100 THINGS CODING', 'Did you know theres a single spot on your brain that recognizes numbers? Or that the first computer bugs were actual insects and that most of the internet is under water? This fascinating book is filled with 100 fascinating facts, bright, infographic illustrations, a glossary and index, and links to specially selected websites to find out more.', './img/SCIENCEIMG/100THINGS IN CODING.jpg','science');
  let CRACK = new Book('A CRACK IN CREATION', 's discovery of how a highly adaptable region of bacterial DNA called the clustered regularly interspaced short palindromic repeats (CRISPR) can be programed to edit DNA itself. Potentially, CRISPR gene editing will cure many human diseases and end much suffering.', './img/SCIENCEIMG/A CRACK IN CREATION.jpg','science');
  let ALAB = new Book('ALAB OF ONES OWN', ' Womans Personal Journey Through Sexism in Science. A riveting memoir-manifesto from the first female director of the National Science Foundation about the entrenched sexism in science, the elaborate detours women have taken to bypass the problem, and how to fix the system', './img/SCIENCEIMG/ALAB OF ONES OWN.jpg','science');
  let  COSMOS = new Book('CARL SAGAN COSMOS', 'Cosmos is a 1980 popular science book by astronomer and Pulitzer Prize-winning author Carl Sagan. Its 13 illustrated chapters, corresponding to the 13 episodes of the Cosmos TV series, which the book was co-developed with and intended to complement, explore the mutual development of science and civilization. One of Sagans main purposes for the book and television series was to explain complex scientific ideas to anyone interested in learning.', './img/SCIENCEIMG/CARL SAGAN COSMOS.jpg','science');
  let STROPHYSICS = new Book('A STROPHYSICS', 'Designed for teaching astrophysics to physics students at advanced undergraduate or beginning graduate level, this textbook also provides an overview of astrophysics for astrophysics graduate students, before they delve into more specialized volumes.', './img/SCIENCEIMG/ASTROPHYSICS.jpg','science');
  let DREAMT = new Book('THE DREAMT LAND', 'Mark Arax is from a family of Central Valley farmers, a writer with deep ties to the land who has watched the battles over water intensify even as California lurches from drought to flood and back again.', './img/SCIENCEIMG/THE DREAMT LAND.jpg','science');
  let SCIENCE = new Book('THE MAD SCIENCE BOOK', ' compelling and entertaining ramble across the wilder fringes of science. 100 chronologically arranged accounts of bizarre scientific experiments.', './img/SCIENCEIMG/THE MAD SCIENCE BOOK.jpg','science');
  let WHY = new Book('THE BOOK OF WHY', 'The New Science of Cause and Effect is a 2019 nonfiction book by computer scientist Judea Pearl and writer Dana Mackenzie. The book explores the subject of causality and causal inference from statistical and philosophical points of view for a general audience.', './img/SCIENCEIMG/THE BOOK OF WHY.jpg','science');
  let GENE = new Book('THE SELFISH GENE', ' Dawkins uses the term "selfish gene" as a way of expressing the gene-centred view of evolution (as opposed to the views focused on the organism and the group), popularising ideas developed during the 1960s by W. D. Hamilton and others. From the gene-centred view, it follows that the more two individuals are genetically related, the more sense (at the level of the genes) it makes for them to behave cooperatively with each other.', './img/SCIENCEIMG/THE SELFISH GENE.jpg','science');
  let DATA = new Book('DATA SCIENCE', 'in the Data Science from Scratch book, the concepts are presented to the unfamiliar learners in Data Science. You don’t even have to know something about Python to start. I will strongly recommend that you get started with this book. ','./img/SCIENCEIMG/DATA SCIENCE.jpg','science');
  let WORLD = new Book('WORLD HISTORY', ' World History is an essential guide for anyone who loves history or wants to broaden their knowledge. This accessible book covers over 350 of the world’s most important turning points, from our earliest human ancestors of prehistory to political events of the modern world','./img/HISTORYIMG/WORLD HISTORY.jpg','history');
  let ANCIENT = new Book('ANCIENT WORLD', 'This is the first volume in a bold new series that tells the stories of all peoples, connecting historical events from Europe to the Middle East to the far coast of China, while still giving weight to the characteristics of each country. Susan Wise Bauer provides both sweeping scope and vivid attention to the individual lives that give flesh to abstract assertions about human history.', './img/HISTORYIMG/ANCIENT WORLD.jpg','history');
  let BRITAIN = new Book('THE BOOK IN BRITAIN', 'A Historical Introduction explores the impact of books, manuscripts, and other kinds of material texts on the cultures and societies of the British Isles. The text clearly explains the technicalities of printing and publishing and discusses the formal elements of books and manuscripts, which are necessary to facilitate an understanding of that impact. This collaboratively authored narrative history combines the knowledge and expertise of five scholars who seek to answer questions such as: How does the material form of a text affect its meaning? How do books shape political and religious movements? How have the economics of the book trade and copyright shaped the literary canon? Who has been included in and excluded from the world of books, and why?', './img/HISTORYIMG/THE BOOK IN BRITAIN.jpg','history');
  let KING = new Book('THE SHADOW KING', 'With the threat of Mussolini’s army looming, recently orphaned Hirut struggles to adapt to her new life as a maid in Kidane and his wife Aster’s household. Kidane, an officer in Emperor Haile Selassie’s army, rushes to mobilize his strongest men before the Italians invade. His initial kindness to Hirut shifts into a flinty cruelty when she resists his advances, and Hirut finds herself tumbling into a new world of thefts and violations, of betrayals and overwhelming rage. Meanwhile, Mussolini’s technologically advanced army prepares for an easy victory. Hundreds of thousands of Italians―Jewish photographer Ettore among them―march on Ethiopia seeking adventure.', './img/HISTORYIMG/THE SHADOW KING.jpg','history');
  let GIANTS = new Book('FALL OF GIANTS', ' thirteen-year-old Welsh boy enters a man’s world in the mining pits. . . . An American law student rejected in love finds a surprising new career in Woodrow Wilson’s White House. . . . A housekeeper for the aristocratic Fitzherberts takes a fateful step above her station, while Lady Maud Fitzherbert herself crosses deep into forbidden territory when she falls in love with a German spy. . . . And two orphaned Russian brothers embark on radically different paths when their plan to emigrate to America falls afoul of war, conscription, and revolution.', './img/HISTORYIMG/FALL OF GIANTS.jpg','history');
  let GUNES = new Book('GUNES GERMS AND STEEL', ' In 1998, Guns, Germs, and Steel won the Pulitzer Prize for general nonfiction and the Aventis Prize for Best Science Book. A documentary based on the book, and produced by the National Geographic Society, was broadcast on PBS in July 2005.The book attempts to explain why Eurasian and North African civilizations have survived and conquered others, while arguing against the idea that Eurasian hegemony is due to any form of Eurasian intellectual, moral, or inherent genetic superiority. Diamond argues that the gaps in power and technology between human societies originate primarily in environmental differences, which are amplified by various positive feedback loops.', './img/HISTORYIMG/GUNES GERMS AND STEEL.jpg','history');
  let ORPHANS = new Book('AN ORPHANS WAR', 'LIVERPOOL, 1940When her childhood sweetheart Johnny is killed in action, Maxine Grey loses more than her husband – she loses her best friend. Desperate to make a difference in this awful war, Maxine takes a nursing job at London’s St Thomas’s hospital.', './img/HISTORYIMG/AN ORPHANS WAR.jpg','history');
  let AUGUSTUS = new Book('THE AGE AUGUSTUS', 'ncorporates literary, archaeological, and legal sources to provide a vivid narrative of Augustus’ brutal rise to power the world’s leading experts on the Roman empireTraces the history of the Roman revolution and Rome’s transformation from a republic to an empire Includes a new chapter on legislation, further information on the monuments of the Augustan period, more maps and illustrations, and a stemma of Augustus’ family Thorough, straightforward, and organized chronologically, this is an ideal resource for anyone approaching the subject for the first time', './img/HISTORYIMG/THE AGE AUGUSTUS.png','history');
  let HAMILTION = new Book('HAMILTION', 'In the first full-length biography of Alexander Hamilton in decades, Ron Chernow tells the riveting story of a man who overcame all odds to shape, inspire, and scandalize the newborn America. According to historian Joseph Ellis, Alexander Hamilton is “a robust full-length portrait, in my view the best ever written, of the most brilliant, charismatic and dangerous founder of them all', './img/HISTORYIMG/HAMILTION.jpg','history');
  let FOUNTAINS = new Book('THE FOUNTAINS OF SILENCE', 'A portrait of love, silence, and secrets under a Spanish dictatorship. Madrid, 1957. Under the fascist dictatorship of General Francisco Franco, Spain is hiding a dark secret. Meanwhile, tourists and foreign businessmen flood into Spain under the welcoming promise of sunshine and wine.', './img/HISTORYIMG/THE FOUNTAINS OF SILENCE.jpg','history');
  let BLOOD = new Book('BLOOD SUGAR', 'Blood & Sugar is the thrilling debut historical crimefrom Laura Shepherd-Robinson.June, 1781. An unidentified body hangs upon a hook at Deptford Dock - horribly tortured and branded with a slavers mark.Some days later, Captain Harry Corsham - a war hero embarking upon a promising parliamentary career - is visited by the sister of an old friend. Her brother, passionate abolitionist Tad Archer, had been about to expose a secret that he believed could cause irreparable damage to the British slaving industry. ', './img/HISTORYIMG/BLOOD SUGAR.jpg','history');
  let ADOLF = new Book('ADOLF HITLER', 'My Struggle or My Fight) is a 1925 autobiographical manifesto by Nazi Party leader Adolf Hitler. The work describes the process by which Hitler became antisemitic and outlines his political ideology and future plans for Germany. Volume 1 of Mein Kampf was published in 1925 and Volume 2 in 1926. The book was edited first by Emil Maurice, then by Hitlers deputy Rudolf Hess.', './img/HISTORYIMG/ADOLF HITLER.jpg','history');
  let ISLAMIC = new Book('LOST ISLAMIC HISTORY', 'Islam has been one of the most powerful religious, social and political forces in history. Over the last 1400 years, from origins in Arabia, a succession of Muslim polities and later empires expanded to control territories and peoples that ultimately stretched from southern France to EastAfrica and South East Asia.', './img/HISTORYIMG/LOST ISLAMIC HISTORY.jpg','history');
  let BABEL = new Book('THE POWER OF BABEL', 'Full of humor and imaginative insight, The Power of Babel draws its illustrative examples from languages around the world, including pidgins, Creoles, and nonstandard dialects.', './img/HISTORYIMG/THE POWER OF BABEL.jpg','history');
  let TOWER = new Book('THE TOWER OF BABEL', ' narrative in Genesis 11:1–9 is an origin myth meant to explain why the worlds peoples speak different languages.[1][2][3][4]According to the story, a united human race in the generations following the Great Flood, speaking a single language and migrating eastward, comes to the land of Shinar (שִׁנְעָר‎). There they agree to build a city and a tower tall enough to reach heaven. God, observing their city and tower, confounds their speech so that they can no longer understand each other, and scatters them around the world.', './img/HISTORYIMG/THE TOWER OF BABEL.jpg','history');
  let MOSQUES = new Book('MOSQUES', ' is a place of worship for Muslims. Any act of worship that follows the Islamic rules of prayer can be said to create a mosque, whether or not it takes place in a special building.[2] Informal and open-air places of worship are called musalla, while mosques used for communal prayer on Friday are known as jumaʿ.[1] Mosque buildings typically contain an ornamental niche (mihrab) set into the wall that indicates the direction of Mecca (qiblah),[1] ablution facilities and minarets from which calls to prayer are issued. The pulpit (minbar), from which the Friday (jumuah) sermon (khutba) is delivered, was in earlier times characteristic of the central city mosque, but has since become common in smaller mosques.[3][1] Mosques typically have segregated spaces for men and women.[1] This basic pattern of organization has assumed different forms depending on the region, period and denomination.', './img/HISTORYIMG/MOSQUES.jpg','history');
  let HOMAGE = new Book('HOMAGE TO AL-ANDALUS', 'The Iberian Peninsula was conquered by Islamic forces in 711 AD and this presence continued in this part of Europe for 900 years.This new book tells the intriguing story of al-Andalus: its splendour, tolerance and conflicts. Centuries of Islamic presence in Spain and Portugal left an indelible stamp, like the wonders of the Alhambra and the Great Mosque of Cordoba. The legacy also extends to the rich seam of learning, in science, medicine, literature and philosophy that was later transmitted to the rest of Europe. How did all this come about? In this fascinating new book Michael Barry tells the story of al-Andalus, its rise to splendour and sophistication and its decline. Richly illustrated with outstanding photographs, it shows the achievements of this extraordinary time. It is a book which is essential for those interested in history, for those who want to know this absorbing story and for those who wish to travel and discover the hidden Spain.', './img/HISTORYIMG/HOMAGE TO AL-ANDALUS.jpg','history');
  let ANCIENTI = new Book('ANCIENT EGYPT', 'Ancient Egypts history from its origins as a group of settlements along the banks of the Nile, its rise to one of the worlds greatest civilisations to its decline at the hands of the Roman Empire. Illustrated with stunning photographs, artwork, diagrams and cutaways. Includes a comprehensive factfinder featuring a time chart, a list of whos who and details of recent archaeological finds. With internet links to recommended websites with further information, video clips and virtual tours.', './img/HISTORYIMG/ANCIENT EGYPT.jpg','history');
  let PHARAOHS = new Book('THE BOOK OF THE PHARAOHS', 'The Book of the Pharaohs is an encyclopedia made up of short essays on the pharaohs themselves, as well as on places, dynasties, personages, subjects, and themes relating to the kings and their rule. Entries range from "Adoratrices" (priestesses of Hathor, the Egyptian Aphrodite, whose role was to arouse the erotic impulse in the creator gods) and "Amarna" (the capital created by the heretic pharaoh Akhenaten) to "Scorpion" (who ruled before the unification of Upper and Lower Egypt) and "Zero Dynasty" (the designation for pre-pharaonic Egypt). In addition, Vernus and Yoyotte include a substantial essay on the sources for Egyptian history, a bibliography of books for general readers, and a chronological table that organizes the major periods of Egyptian history and notes the most illustrious royal names from each.', './img/HISTORYIMG/THE BOOK OF THE PHARAOHS.jpg','history');
  let GOLDEN = new Book('THE GOLDEN AGE', 'Thirteen-year-old Frank Gold’s family has escaped from Hungary and the perils of World War II to the safety of Australia, but not long after their arrival Frank is diagnosed with polio. He is sent to a sprawling children’s hospital called The Golden Age, where he meets Elsa, the most beautiful girl he has ever seen, a girl who radiates pure light. Frank and Elsa fall in love, fueling one another’s rehabilitation, facing the perils of polio and adolescence hand in hand, and scandalizing the prudish staff of The Golden Age.', './img/HISTORYIMG/THE GOLDEN AGE.jpg','history');
  let TITLE = new Book('THE BOOK TITLE', 'This story talks about a family who lived in ancient time and they had a girl who had supernatural powers that enabled her to talk to animals. These animals help her in her journey in life and face many difficulties.', './img/NOVELSIMG/THE BOOK TITLE.jpg','novel');
  let HERE = new Book('NO PLACE LIKE HERE', 'Ashlyn Zanotti has big plans for the summer. She’s just spent a year at boarding school and can’t wait to get home. But when Ashlyn’s father is arrested for tax evasion and her mother enters a rehab facility for “exhaustion,” a.k.a. depression, her life is turned upside down.', './img/NOVELSIMG/NO PLACE LIKE HERE.jpg','novel');
  let RINGS = new Book('THE LORD OF THE RINGS', 'is an epic[1] high fantasy novel[a] by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time in the past, the story began as a sequel to Tolkiens 1937 childrens book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written.', './img/NOVELSIMG/THE LORD OF THE RINGS.jpg','novel');
  let HARRY = new Book('HARRY POTTER', ' is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harrys struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).', './img/NOVELSIMG/HARRY POTTER.jpg','novel');
  let WHISPERER = new Book('WORLD WHISPERER', 'Seven years ago, Isika’s mother walked out of the desert with three children in tow, leading the priest of the Worker village to marry her and take in her children. In all those years, fourteen-year-old Isika has never been able to fit in as a Worker or live up to her role as the priests daughter, and worse, she has been helpless against the tragedies that have fallen on her family.', './img/NOVELSIMG/WORLD WHISPERER.jpg','novel');
  let DANIELLE = new Book('DANIELLE STEEL', 'The book talks about a girl who lives in the mountains with her father and has a beautiful horse that she loves. One day, a gang comes and destroys their house and kills her father, and the girl has to escape in order to save herself.', './img/NOVELSIMG/DANIELLE STEEL.jpg','novel');
  let MEMORY = new Book('MEMORY', 'is the story of a family haunted by the secret of their past: an illicit love affair, a lost child, and a devastating betrayal dating back to the Second World War.The day after my fifteenth birthday, I finally learned what I had always known....Growing up in postwar Paris as the sickly only child of glamorous athletic parents, the narrator invents for himself a make-believe older brother, stronger and more brilliant than he can ever be. It is only when the boy begins talking to an old family friend that he comes to realize that his imaginary sibling had a real predecessor: a half brother whose death in the concentration camps is part of a buried family secret that he was intended never to uncover.', './img/NOVELSIMG/MEMORY.jpg','novel');
  let MOON = new Book('MOON DANCE', 'is the horrifying tale of the illegitimate son of the Count von Bachl-Wolfling, leader of a pack of Viennese werewolves, and of the boys all-too-human governess, Speranza. The pack has decided to emigrate to America, in search of wild lands and unsuspicious human prey. But unbeknownst to them, the Dakota territory is already home to the Shungmanitu--a clan of the Lakota Sioux who become wolves by the light of the full moon.', './img/NOVELSIMG/MOON DANCE.jpg','novel');
  let RISING = new Book('THE PAST IS RISING', 'The Past Is Rising is a compelling fantasy epic that revolves around the uprising of dark forces bent on wresting a kingdom from its rightful rulers. Several warriors will discover that their true destinies are to salvage their kingdom and defeat the rising evil.', './img/NOVELSIMG/THE PAST IS RISING.jpg','novel');
  let IT = new Book('IT', 'It is a 1986 horror novel by American author Stephen King. It was his 22nd book and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey. "It" primarily appears in the form of Pennywise the Dancing Clown to attract its preferred prey of young children.', './img/NOVELSIMG/IT.jpg','novel');
  let WITCHING = new Book('THE YEAR OF THE WITCHING', 'A young woman living in a rigid, puritanical society discovers dark powers within herself in this stunning, feminist fantasy debut.In the lands of Bethel, where the Prophet’s word is law, Immanuelle Moore’s very existence is blasphemy. Her mother’s union with an outsider of a different race cast her once-proud family into disgrace, so Immanuelle does her best to worship the Father, follow Holy Protocol, and lead a life of submission, devotion, and absolute conformity, like all the other women in the settlement.', './img/NOVELSIMG/THE YEAR OF THE WITCHING.jpg','novel');
  let WATER = new Book('WATER & FLAME', 'Water witch Abigail Henderson is focused on one thing: finding the fire witches responsible for murdering her mother. Her coven has finally allowed her to go undercover at the estate of the prime suspect, Margaret Huntsman. The job is to get magical evidence to prove the woman was the mastermind behind the killing and that she actually cast the fatal spell. It’s a dangerous mission, but worth it if Abbie can bring the killer to justice.But she never counted on meeting Margaret’s handsome, estranged son, Ben.Now, Abbie must choose between completing her mission or pursuing a relationship with the son of her enemy. It’s not only the success of the mission that’s at stake, either. If Ben is in on Margaret’s schemes, Abbie could follow her mother to the grave.', './img/NOVELSIMG/WATER & FLAME.jpg','novel');
  let HOPE = new Book('THE SUMMER HOPE', 'so far, Lillah’s time with the guys has been all about their hot threesomes. When she goes out on a date with Carson, she can’t deny she’s developing feelings. Not just for him, but for his boyfriend too! She can’t help but wonder if their scorching sexual chemistry could somehow lead to something more.', './img/NOVELSIMG/THE SUMMER HOPE.jpg','novel');
  let WHITBY = new Book('WHITBY ROCK', 'As dawn breaks, a church bell calls for attention in a rural English village. An unidentified body hangs upside down in its belfry. Beneath the swinging corpse are small, individually wrapped candies marked Whitby Rock.It is not long before the case doubles its mystery. Detective Inspector Mary Hunter, a rising star in the police force, sets out to investigate the reason behind the murder and unravel the strands that connect it all together. In the middle of it all, Jack Headland, struggling to break free and put his working-class upbringing behind him, becomes entangled with an enigmatic criminal mastermind who tells a mysterious story of contraband, drugs, money laundering, disappearance, and robbery. A link that connects unplanned events in 1940s wartime Sweden to the 1990s and a strange hotel on the English coast, and the manufacture of LSD.', './img/NOVELSIMG/WHITBY ROCK.jpg','novel');
  let ROAD = new Book('THE ROAD', ' a 2006 post-apocalyptic novel by American writer Cormac McCarthy. The book details the grueling journey of a father and his young son over a period of several months across a landscape blasted by an unspecified cataclysm that has destroyed industrial civilization and almost all life. The novel was awarded the 2007 Pulitzer Prize for Fiction and the James Tait Black Memorial Prize for Fiction in 2006.', './img/NOVELSIMG/THE ROAD.jpg','novel');
  let BRAVE = new Book('AMARA THE BRAVE', ' its about an ambitious young girl who never lets lifes obstacles stand in her way. Her motivational stories will empower, and motivate all readers. There are three stories in this book: "Self-Love,"" Mommy and Me," and Never Give Up.', './img/NOVELSIMG/AMARA THE BRAVE.jpg','novel');
  let SWALLOWS = new Book('THE SWALLOWS', 'What do you love? What do you hate? What do you want?It starts with this simple writing prompt from Alex Witt, Stonebridge Academys new creative writing teacher. When the students answers raise disturbing questions of their own, Ms. Witt knows theres more going on the school than the faculty wants to see. She soon learns about The Ten--the students at the top of the schools social hierarchy--as well as their connection to something called The Darkroom.', './img/NOVELSIMG/THE SWALLOWS.jpg','novel');
  let DRAGONS = new Book('A DARKNESS OF DRAGONS', 'After playing a forbidden spell-song to save a village from rats, 12-year-old piper Patch Brightwater is thrown in jail. But there he meets Wren – a noble girl under a rat-shaped curse – and together they befriend Barver, a fearsome dracogriff, and set off on a grand adventure filled with sorcerers, dragons, bandits…and one very deadly enemy.', './img/NOVELSIMG/A DARKNESS OF DRAGONS.jpg','novel');
  let HEART = new Book('THE BEASTS HEART', 'I am neither monster nor man—yet I am both.I am the Beast.The day I was cursed to this wretched existence was the day I was saved—although it did not feel so at the time.My redemption sprung from contemptible roots; I am not proud of what I did the day her father happened upon my crumbling, isolated chateau. But if loneliness breeds desperation then I was desperate indeed, and I did what I felt I must. My shameful behaviour was unjustly rewarded.My Isabeau. She opened my eyes, my mind and my heart; she taught me how to be human again.', './img/NOVELSIMG/THE BEASTS HEART.jpg','novel');
  let TWI = new Book('TWILIGHT', ' is a series of four vampire-themed fantasy romance novels, two companion novels, and one novella, written by American author Stephenie Meyer. Released annually from 2005 through 2008, the four books chart the later teen years of Isabella "Bella" Swan, a girl who moves to Forks, Washington, from Arizona and falls in love with a 104-year-old vampire named Edward Cullen.', './img/NOVELSIMG/TWILIGHT.jpg','novel');
  let PILLOW  = new Book('PILLOW THOUGHTS', 'Pillow Thoughts is a collection of poetry and prose about heartbreak, love, and raw emotions. It is divided into sections to read when you feel you need them most.', './img/POEMSIMG/PILLOW THOUGHTS.jpg','poems');
  let SHAKESPEARS = new Book('SHAKESPEARS SONNETS', 'A bestselling, beautifully designed edition of William Shakespeare’s sonnets and poems, complete with valuable tools for educators.The authoritative edition of Shakespeare’s Sonnets and Poems from The Folger Shakespeare Library, the trusted and widely used Shakespeare series for students and general readers.', './img/POEMSIMG/SHAKESPEARS SONNETS.jpg','poems');
  let ARABIC = new Book('ARABIC POEMS', 'The Arabic poetic legacy is as vast as it is deep, spanning a period of fifteen centuries in regions from Morocco to Iraq. Themes of love, nature, religion, and politics recur in works drawn from the pre-Islamic oral tradition through poems anticipating the recent Arab Spring.', './img/POEMSIMG/ARABIC POEMS.jpg','poems');
  let ARAB = new Book('ARAB WOMEN', 'Arab women poets work within one of the oldest literary traditions in the world, yet they are virtually unknown in the West. Uniting Arab women poets from the all over the Arab World anti abroad, Nathalie Handal has put together an outstanding collection that introduces poets who write in Arabic, French, English, and Swedish, among them some of the twentieth centurys most accomplished poets and todays most exciting new voices.Translated by distinguished translators and poets from around the world, The Poetry of Arab Women showcases the work of 82 poets, among them: Etel Adnan, Andre Chedid, Salma Khadra Jayyusi, Naomi Shihab Nye, and Fadwa Tuqan.', './img/POEMSIMG/ARAB WOMEN.jpg','poems');
  let NABATI = new Book('THE NABATI POETRY', 'Nabati poetry is the traditional poetry of the Arab tribes of Arabia and neighboring areas. Though composed in an artistic variant of ordinary Bedouin speech, historically this poetry is the descendant of the pre-Islamic Classical Arabic poetry of antiquity, and its modern exponents still compose in the traditional genres of boasting, praise, satire, elegy, advice, love, and lyric poetry. Presently, there is also a thriving tradition of poetic comment on contemporary social and political issues.', './img/POEMSIMG/THE NABATI POETRY.jpg','poems');
  let PROSE = new Book('THE ARABIC PROSE POEM', 'Huda J. Fakhreddine explores the ‘new genre’ of the Arabic prose poem as a poetic practice and a critical lens. This poetic form gave rise to a profound, contentious and continuing debate about Arabic poetry: its definition, its limits and its relation to its readers. Fakhreddine examines the history of the prose poem, its claims of autonomy and distance from its socio-political context, and the anxiety and scandal it generated.', './img/POEMSIMG/THE ARABIC PROSE POEM.jpg','poems');
  let SELECTED = new Book('SELECTED POEMS', 'Steven Monte presents more than eighty poems in translation and in the original French, taken from the earliest poetic publications of the 1820s, through collections published during exile, to works published in the years following Hugos death in 1883. The introduction provides helpful background information about Hugos life and work, the selection, and what is involved in translating a poet whose effortless rhymes are central to the poetrys power. Detailed notes at the back of the volume offer information about the poems and their publishing and historical contexts. This is an ideal introduction to a poet whose work, for all its renown, remains for Anglophone readers undiscovered.', './img/POEMSIMG/SELECTED POEMS.jpg','poems');
  let ANDALUSIA = new Book('POEMS OF ARAB ANDALUSIA', 'These poems, from the astonishing 10th- through 13th-century civilization in Andalusia, are based on the codex of Ibn Said, who wanted poems "whose idea is more subtle than the West Wind, and whose language is more beautiful than a fair face." Spanish readers have long been enchanted by their enduring appeal through the versions by Emilio García Gómez. This poetry of Arab Andalusia made a profound impact on Spains Generation of ‘27. Rafael Alberti says that it "was a revelation for me and had a great influence on my work, but above all influenced the work of Federico García Lorca."', './img/POEMSIMG/POEMS OF ARAB ANDALUSIA.jpg','poems');
  let ALILB = new Book('AL-ILBIRI', 'Abu Isḥāq al-Ilbīrī al-Tujībī (d. 459 AH / 1067 CE) is said to have written this poem in response to a young man who had insulted him. Instead of replying in kind, which was the custom of poets, he decided to respond by providing the young man advice that would benefit him in this life and the next.This poem is so filled with gems of wisdom and invaluable advice for the reader, that scholars of Islam have instructed their students to memorize it for centuries. This translation of al-Ilbīrī’s work is presented along with the original Arabic for the benefit of Arabic learners and enthusiasts who would like to enjoy the beauty of the elegant Arabic composition and style. A true gem when it comes to Islamic poetry.', './img/POEMSIMG/AL-ILBIRI.jpg','poems');
  let MYSTICAL = new Book('MYSTICAL POEMS', 'Rumi, who wrote and preached in Persia during the thirteenth century, was inspired by a wandering mystic, or dervish, named Shams al-Din. Rumis vast body of poetry includes a lengthy poem of religious mysticism, the Mathnavi, and more than three thousand lyrics and odes. A.J. Arberry, who selected four hundred of the lyrics for translation, calls Rumi one of the worlds greatest poets. In profundity of thought, inventiveness of image, and triumphant mastery of language, he stands out as the supreme genius of Islamic mysticism.', './img/POEMSIMG/MYSTICAL POEMS.jpg','poems');
  let PROPHET = new Book('THE PROPHET', 'The Prophet is a collection of poetic essays that are philosophical, spiritual, and, above all, inspirational. Gibran’s musings are divided into twenty-eight chapters covering such sprawling topics as love, marriage, children, giving, eating and drinking, work, joy and sorrow, housing, clothes, buying and selling, crime and punishment, laws, freedom, reason and passion, pain, self-knowledge, teaching, friendship, talking, time, good and evil, prayer, pleasure, beauty, religion, and death.', './img/POEMSIMG/THE PROPHET.jpg','poems');
  let ENTERIN = new Book('ON ENTERING THE SEA', 'n a political age, in which the struggle against external and internal oppression has become central in Arabic poetry, Nizar Qabbani has succeeded in re-establishing the vitality and perennial force of the erotic in human life. Picking up a tradition of Arabic love poetry sixteen centuries old, he has enriched it with the experience of a modern man deeply aware of the changing status of women in contemporary times, and given the most eloquent poetic expression to the imperative of womans freedom and her right to assume control over her body and emotions.', './img/POEMSIMG/ON ENTERING THE SEA.jpg','poems');
  let LIFE = new Book('WOMEN IN MY POETRY & MY LIFE', 'A monument to the literary genius of women throughout the ages, A Book of Women Poets from Antiquity to Now is an invaluable collection. Here in one volume are the works of three hundred poets from six different continents and four millennia. This revised edition includes a newly expanded section of American poets from the colonial era to the present.', './img/POEMSIMG/WOMEN IN MY POETRY & MY LIFE.jpg','poems');
  let LOVE = new Book('ARABIAN LOVE POEM', 'Nizar Kabbani s poetry has been described as more powerful than all the Arab regimes put together (Lebanese Daily Star). Reflecting on his death in 1998, Sulhi Al-Wadi wrote (in Tishreen), Qabbani is like water, bread, and the sun in every Arab heart and house. In his poetry the harmony of the heart, and in his blood the melody of love. Arabian Love Poems is the first English-language collection of his work.Kabbani was a poet of great simplicity direct, spontaneous, musical, using the language of everyday life. He was a ceaseless campaigner for women s rights, and his verses praise the beauty of the female body, and of love. He was an Arab nationalist, yet he criticized Arab dictators and the lack of freedom in the Arab world. He was the poet of Damascus: I am the Damascene. If you dissect my body, grapes and apples will come out of it. If you open my veins with your knife, you will hear in my blood the voices of those who have departed.', './img/POEMSIMG/ARABIAN LOVE POEM.jpg','poems');
  let MUALLAQAT = new Book('THE MUALLAQAT', 'THE SEVEN GOLDEN ODES OF ARABIA The Mu’allaqat Translations, Introduction Paul Smith The Mu’allaqat is the title of a group of seven long Arabic odes or qasidas that have come down from the time before Islam. Each is considered the best work of these pre-Islamic poets. The name means ‘The Suspended Qasidas’ or ‘The Hanging Poems’, the traditional explanation being that these poems were hung on or in the Kaaba at Mecca. These famous ancient Arabic qasidas are formed of three parts: they start, with a nostalgic opening in which the poet reflects on what has passed, known as nasib. A common concept is the pursuit of the poet of the caravan of his love; by the time he reaches their campsite they have already moved on. The second section is rahil (travel section) in which the poet contemplates the harshness of nature and life away from the tribe. Finally there is the message of the poem, which can take several forms: praise of the tribe, fakhr; satire about other tribes, hija; or some moral maxims, hikam. Included with each qasida of each poet is a brief biography plus a list of further reading. The correct rhyme-structure has been kept as well as the beauty and meaning of these powerfull poems.', './img/POEMSIMG/THE MUALLAQAT.jpg','poems');
  let ANTHOLOGY = new Book('ANTHOLOGY OF CLASSICAL ARABIC POETRY', 'NTHOLOGY OF CLASSICAL ARABIC POETRY(From Pre-Islamic Times to Al-Shushtari)Translations, Introduction and Notes by Paul SmithCONTENTS: Classical Arabic Poetry… page 7, The Qasida… 10, The Qit’a… 11, The Ghazal… 12, The Ruba’i… 16, Selected Bibliography… 17: THE POETS (In Order of Appearance) Imra’ ul-Qays 17, Zuhair 29, Harith 39, Antara 46, Tarafa 58, Amru 71, Al-A’sha 80, Suhaym 82, Labid 84, Ka’b 96, Khansa 100, Hazrat Ali 102, Ali Ibn Husain 111, Omar Ibn Abi Rabi’a 106, Majnun (Qays ibn al-Mulawwah) 109, Rab’ia of Basra 116, Bashshar 123, Abu Nuwas 126, Abu Tammam 151, Dhu’l-Nun 155, Bayazid Bistami 163, Al-Nuri 163, Junaid 169, Sumnun 171, Mansur al-Hallaj 173, Ibn ‘Ata 181, Shibli 183, Al-Mutanabbi 185, Al-Ma’arri 211, Ibn Sina 233, Al-Ghazali 236, Gilani 239, Abu Madyan 243, Suhrawardi 248, Ibn al-Farid 250, Ibn ‘Arabi 265, Al-Busiri 278, Al-Shushtari 284. Pages 287.COMMENTS ON PAUL SMITH’S TRANSLATION OF HAFIZ’S ‘DIVAN’.“It is not a joke... the English version of ALL the ghazals of Hafiz is a great feat and of paramount importance. I am astonished. ', './img/POEMSIMG/ANTHOLOGY OF CLASSICAL ARABIC POETRY.jpg','poems');
  let MAJNUN = new Book('MAJNUN LEYLA', 'In the northern Arabian Peninsula during the second half of the 7th century, Qays, later known as Majnun, is in love with his cousin Leyla and decides to praise her in his love poems. Annoyed by all the noise around her, Leylas parents consider that he has compromised her honor and force her to marry another man. Qays becomes desperate and wanders alone in the desert. His father takes him to Mecca and begs him to seek Gods help to free him from his passion, but in vain. The story of Majnun and Leyla has been told in legends, songs, poems, plays and epics from the Caucasus to Africa and from the Atlantic to the Indian Ocean. It is a story of tragic and endless love, much like the later story of "Tristan and Isolde" and "Romeo and Julia" in Europe. This volume consists of a translation into English of several of Majnüns poems to Leyla together with comments and an introduction. An incurable romanticism, the deepest longing of the heart to its beloved, nostalgia, memories of a lost paradise, idealism, anticipation, joy after a reunion, bitterness after a separation, lovesickness and a consuming passion emerge from the versions that have inspired countless of people more that 1200 years ago and throughout the centuries.', './img/POEMSIMG/MAJNUN LEYLA.jpg','poems');
  let MILK = new Book('MILK & HONEY', 'Rupi Kaur is the Writer of the Decade.” – The New Republic #1 New York Times bestseller milk and honey is a collection of poetry and prose about survival. About the experience of violence, abuse, love, loss, and femininity.The book is divided into four chapters, and each chapter serves a different purpose. Deals with a different pain. Heals a different heartache. milk and honey takes readers through a journey of the most bitter moments in life and finds sweetness in them because there is sweetness everywhere if you are just willing to look.', './img/POEMSIMG/MILK & HONEY.jpg','poems');
  let HAIKU = new Book('HAIKU POEMS', 'My First Book of Haiku Poems introduces children to this ancient poetry form thats still a favorite among teachers, parents and children. These concise poems are easy for readers of all ages to understand and appreciate.Each of these 20 classic poems by Issa, Shiki, Basho, and other great haiku masters is paired with a stunning original painting by award-winning illustrator Tracy Gallup—which children will want to dive into and adults will want to frame.', './img/POEMSIMG/HAIKU POEMS.jpg','poems');
render(Book.arr);
typeWriter("output", quotes);

// console.log(Book.arr)


function pickaBook (e) {
  // const checkName = (array) => array.name === e.target.id;
  if (e.target.innerText === 'More Info') {
    let index = Book.arr.map(function(x) {return x.name; }).indexOf(e.target.id);
    localStorage.setItem('pickedBook', JSON.stringify(Book.arr[index]))
    // window.location.href = '../book.html'
    //window.location.href = '../Library/book.html'
    // console.log(e.target)
   }
}

cardContainer.addEventListener('click', pickaBook)

let fourCat = document.getElementById('fourCat');

function chooseCat(e) {
  let thisType = [];
  if (e.target.id === 'novel' || e.target.id === 'science' || e.target.id === 'history' || e.target.id === 'poems') {
    for (let i = 0; i<Book.arr.length; i++) {
      if (Book.arr[i].type === e.target.id) {
        thisType.push(Book.arr[i]);
      }
    }
    localStorage.setItem('pickedCat', JSON.stringify(thisType))
    // window.location.href = '../books.html'
    //window.location.href = '../Library/books.html'

  }
}
localStorage.setItem('Book.arr', JSON.stringify(Book.arr));
// console.log(JSON.stringify(Book.arr[0]))
fourCat.addEventListener('click', chooseCat)

