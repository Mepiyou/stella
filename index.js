"use strict";

const verses = {
  joy: [
    "Psaume 34:18 - L'Éternel est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l'esprit abattu.",
    "Jean 16:33 - Dans le monde, vous aurez des tribulations. Mais prenez courage, j'ai vaincu le monde.",
    "Psaume 147:3 - Il guérit ceux qui ont le cœur brisé et panse leurs blessures.",
    "Matthieu 5:4 - Heureux ceux qui pleurent, car ils seront consolés.",
    "2 Corinthiens 1:3-4 - Béni soit Dieu... qui nous console dans toutes nos afflictions.",
    "Psaume 30:5 - Le soir arrivent les pleurs, et le matin l’allégresse.",
    "Ésaïe 41:10 - Ne crains rien, car je suis avec toi.",
    "Psaume 23:4 - Même quand je marche dans la vallée de l’ombre de la mort, je ne crains aucun mal.",
    "Romains 8:18 - Les souffrances du temps présent ne sauraient être comparées à la gloire à venir.",
    "Psaume 42:11 - Pourquoi t’abats-tu, mon âme ? Espère en Dieu, car je le louerai encore.",
    "Apocalypse 21:4 - Il essuiera toute larme de leurs yeux, et la mort ne sera plus.",
    "Psaume 62:8 - Décharge-toi sur lui, peuple ! Épanche ton cœur en sa présence.",
    "Ésaïe 57:15 - Je demeure avec celui qui est contrit et humilié, pour ranimer l’esprit des humbles.",
    "Psaume 9:10 - L'Éternel est un refuge pour l'opprimé, un refuge au temps de détresse.",
    "Lamentations 3:22-23 - Les bontés de l’Éternel ne sont pas épuisées, ses compassions se renouvellent chaque matin.",
    "Proverbes 3:5 - Confie-toi en l’Éternel de tout ton cœur, et ne t’appuie pas sur ton intelligence.",
    "Philippiens 4:7 - Et la paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ.",
    "Deutéronome 31:8 - L’Éternel lui-même marche devant toi ; il sera avec toi.",
    "1 Pierre 5:10 - Le Dieu de toute grâce... vous affermira, vous fortifiera et vous rendra inébranlables.",
    "Romains 8:28 - Toutes choses concourent au bien de ceux qui aiment Dieu.",
    "Psaume 119:50 - Ta promesse me rend la vie, voilà ma consolation dans ma misère.",
    "Ésaïe 49:13 - Poussez des cris de joie, car l’Éternel console son peuple.",
    "Hébreux 13:5 - Je ne te délaisserai point, et je ne t’abandonnerai point.",
    "Psaume 126:5 - Ceux qui sèment avec larmes moissonneront avec chants d’allégresse.",
    "2 Corinthiens 4:8-9 - Nous sommes pressés de toute manière, mais non réduits à l’extrémité.",
    "Michée 7:8 - Quand je suis tombé, je me relèverai ; quand je suis assis dans les ténèbres, l’Éternel est ma lumière.",
    "Psaume 46:10 - Arrêtez, et sachez que je suis Dieu.",
    "Ésaïe 40:1 - Consolez, consolez mon peuple, dit votre Dieu.",
    "Jean 14:1 - Que votre cœur ne se trouble point. Croyez en Dieu.",
    "1 Thessaloniciens 4:13 - Ne soyez pas attristés comme ceux qui n’ont pas d’espérance.",
  ],
  neutral: [
    "Philippiens 4:4 - Réjouissez-vous toujours dans le Seigneur. Je le répète, réjouissez-vous !",
    "Psaume 16:11 - Tu me fais connaître le chemin de la vie ; il y a d’abondantes joies devant ta face.",
    "Néhémie 8:10 - La joie de l’Éternel sera votre force.",
    "Psaume 118:24 - C’est ici la journée que l’Éternel a faite : qu’elle soit pour nous un sujet d’allégresse et de joie !",
    "Romains 12:12 - Réjouissez-vous en espérance.",
    "Psaume 126:2-3 - Notre bouche était remplie de rires, et notre langue de cris de joie.",
    "Luc 1:47 - Mon esprit se réjouit en Dieu, mon Sauveur.",
    "Ésaïe 12:6 - Pousse des cris de joie, car le Saint d’Israël est grand au milieu de toi.",
    "Proverbes 17:22 - Un cœur joyeux est un bon remède.",
    "Psaume 100:1-2 - Poussez vers l’Éternel des cris de joie... servez l’Éternel avec joie.",
    "Romains 15:13 - Que le Dieu de l’espérance vous remplisse de toute joie et de toute paix dans la foi.",
    "Ésaïe 61:10 - Je me réjouirai en l’Éternel ; mon âme sera ravie d’allégresse.",
    "Psaume 144:15 - Heureux le peuple dont l’Éternel est le Dieu !",
    "Galates 5:22 - Le fruit de l’Esprit, c’est... la joie.",
    "Jean 15:11 - Je vous ai dit ces choses, afin que ma joie soit en vous, et que votre joie soit parfaite.",
    "Psaume 28:7 - L’Éternel est ma force et mon bouclier ; c’est en lui que mon cœur se confie.",
    "Sophonie 3:17 - Il se réjouira avec des cris de joie à ton sujet.",
    "Psaume 97:12 - Justes, réjouissez-vous en l’Éternel, et célébrez par vos louanges sa sainteté !",
    "1 Chroniques 16:27 - L’allégresse et la joie sont dans son lieu d’habitation.",
    "Psaume 21:6 - Tu le rends à jamais un sujet de bénédictions ; tu le combles de joie.",
    "Jérémie 31:13 - Je changerai leur deuil en allégresse et je les consolerai.",
    "Ésaïe 35:10 - La joie et l’allégresse s’empareront d’eux.",
    "Psaume 5:11 - Tous ceux qui se confient en toi se réjouiront, ils auront de l’allégresse à toujours.",
    "Luc 15:10 - Il y a de la joie devant les anges de Dieu pour un seul pécheur qui se repent.",
    "Psaume 32:11 - Justes, réjouissez-vous en l’Éternel et soyez dans l’allégresse.",
    "Proverbes 15:13 - Un cœur joyeux rend le visage serein.",
    "Ésaïe 9:3 - Tu rends le peuple nombreux, tu augmentes sa joie.",
    "Habacuc 3:18 - Moi, je veux me réjouir en l’Éternel.",
    "Jean 3:29 - Cette joie qui est la mienne est parfaite.",
    "Romains 14:17 - Car le royaume de Dieu, c’est la justice, la paix et la joie.",
  ],
  motivation: [
    "Philippiens 4:13 - Je puis tout par celui qui me fortifie.",
    "Ésaïe 40:31 - Ceux qui espèrent en l’Éternel renouvellent leur force.",
    "Josué 1:9 - Fortifie-toi et prends courage ; ne t’effraie pas, car l’Éternel est avec toi.",
    "2 Timothée 1:7 - Car ce n’est pas un esprit de timidité que Dieu nous a donné, mais un esprit de force.",
    "Hébreux 10:35 - N’abandonnez donc pas votre assurance, qui a une grande récompense.",
    "Psaume 27:1 - L’Éternel est ma lumière et mon salut : de qui aurais-je crainte ?",
    "Ésaïe 41:13 - Car moi, l’Éternel, je suis ton Dieu ; je te dis : Ne crains rien.",
    "1 Corinthiens 16:13 - Veillez, demeurez fermes dans la foi, soyez courageux.",
    "Romains 8:31 - Si Dieu est pour nous, qui sera contre nous ?",
    "Deutéronome 31:6 - Soyez forts et courageux ; ne craignez pas, car l’Éternel marche lui-même avec vous.",
    "Proverbes 24:10 - Si tu faiblis au jour de la détresse, ta force est bien peu de chose.",
    "Ésaïe 12:2 - Voici, Dieu est ma délivrance, je serai plein de confiance, et je ne craindrai rien.",
    "2 Chroniques 15:7 - Vous donc, fortifiez-vous, et ne laissez pas vos mains s’affaiblir, car il y aura un salaire pour vos œuvres.",
    "Jean 16:33 - Prenez courage, j’ai vaincu le monde.",
    "1 Corinthiens 9:24 - Courez de manière à remporter le prix.",
    "Psaume 31:24 - Fortifiez-vous et que votre cœur s’affermisse, vous tous qui espérez en l’Éternel !",
    "Galates 6:9 - Ne nous lassons pas de faire le bien ; car nous moissonnerons au temps convenable.",
    "Ésaïe 43:2 - Quand tu passeras dans les eaux, je serai avec toi.",
    "Romains 12:11 - Ayez du zèle, et non de la paresse. Soyez fervents d’esprit.",
    "Matthieu 11:28 - Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.",
    "Psaume 138:3 - Quand je t’ai invoqué, tu m’as exaucé, tu m’as fortifié, tu m’as rempli de courage.",
    "Exode 15:2 - L’Éternel est ma force et le sujet de mes louanges ; c’est lui qui m’a sauvé.",
    "Proverbes 3:26 - Car l’Éternel sera ton assurance.",
    "1 Thessaloniciens 5:11 - Encouragez-vous les uns les autres, et édifiez-vous mutuellement.",
    "Psaume 46:5 - Dieu est au milieu d’elle : elle n’est point ébranlée.",
    "Romains 15:5 - Que le Dieu de la persévérance et de la consolation vous donne d’avoir les mêmes sentiments.",
    "1 Jean 5:4 - Tout ce qui est né de Dieu triomphe du monde.",
    "Hébreux 12:1 - Courons avec persévérance dans la carrière qui nous est ouverte.",
    "Éphésiens 6:10 - Fortifiez-vous dans le Seigneur, et par sa force toute-puissante.",
    "Jean 14:27 - Que votre cœur ne se trouble point et ne s’alarme point.",
  ],
  reassurance: [
    "Philippiens 4:6-7 - Ne vous inquiétez de rien, mais, en toute chose, faites connaître vos besoins à Dieu.",
    "Psaume 56:3 - Quand je suis dans la crainte, je me confie en toi.",
    "Jean 14:27 - Je vous laisse la paix ; je vous donne ma paix.",
    "Ésaïe 41:10 - Ne crains rien, car je suis avec toi.",
    "1 Pierre 5:7 - Déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous.",
    "Matthieu 6:34 - Ne vous inquiétez pas du lendemain.",
    "Psaume 46:1 - Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais.",
    "Romains 8:15 - Vous n’avez point reçu un esprit de servitude pour être encore dans la crainte.",
    "Ésaïe 35:4 - Dites à ceux qui ont le cœur troublé : Prenez courage, ne craignez point !",
    "Proverbes 3:24 - Quand tu te coucheras, ton sommeil sera doux.",
    "Psaume 94:19 - Quand les pensées s’agitent en moi, tes consolations réjouissent mon âme.",
    "Matthieu 10:31 - Ne craignez donc point : vous valez plus que beaucoup de moineaux.",
    "Psaume 34:4 - J’ai cherché l’Éternel, et il m’a répondu ; il m’a délivré de toutes mes frayeurs.",
    "Ésaïe 43:1 - Ne crains rien, car je te rachète, je t’appelle par ton nom : tu es à moi !",
    "Psaume 23:4 - Même quand je marche dans la vallée de l’ombre de la mort, je ne crains aucun mal.",
    "Hébreux 13:6 - Le Seigneur est mon aide ; je ne craindrai rien.",
    "Josué 1:5 - Personne ne pourra te résister, tous les jours de ta vie.",
    "Psaume 91:5-6 - Tu ne craindras ni les terreurs de la nuit, ni la flèche qui vole de jour.",
    "2 Timothée 1:7 - Car ce n’est pas un esprit de peur que Dieu nous a donné.",
    "Ésaïe 54:10 - Les montagnes s’éloigneront, mais mon amour ne s’éloignera point de toi.",
    "Psaume 27:3 - Si une armée se campait contre moi, mon cœur n’aurait aucune crainte.",
    "Jean 16:33 - Prenez courage, j’ai vaincu le monde.",
    "Ésaïe 26:3 - À celui qui est ferme dans ses sentiments, tu assures la paix.",
    "Psaume 112:7 - Il ne craint point les mauvaises nouvelles ; son cœur est ferme, confiant en l’Éternel.",
    "Ésaïe 50:7 - Je n’ai pas honte, car je sais que je ne serai pas confondu.",
    "Matthieu 28:20 - Et voici, je suis avec vous tous les jours.",
    "Psaume 139:10 - Même là, ta main me conduira, et ta droite me saisira.",
    "Zacharie 2:5 - Je serai pour elle une muraille de feu tout autour.",
    "Psaume 125:2 - L’Éternel entoure son peuple, dès maintenant et à jamais.",
    "Deutéronome 33:27 - Le Dieu d’éternité est un refuge ; sous ses bras éternels est un abri.",
  ],
  doubts: [
    "Jacques 1:6 - Mais qu’il demande avec foi, sans douter, car celui qui doute est semblable à un flot de mer agité par le vent.",
    "Proverbes 3:5-6 - Fais confiance à l’Éternel de tout ton cœur, et ne t’appuie pas sur ton intelligence.",
    "Hébreux 11:1 - La foi est la certitude des choses qu’on espère, la conviction des réalités qu’on ne voit pas.",
    "Marc 9:24 - Je crois, viens au secours de mon incrédulité.",
    "Matthieu 17:20 - Si vous avez de la foi comme un grain de moutarde, vous direz à cette montagne : Transporte-toi d’ici là.",
    "Romains 14:23 - Mais celui qui doute, s’il mange, est condamné, parce qu’il ne mange pas dans la foi.",
    "Jean 20:27 - Ne sois pas incrédule, mais crois.",
    "2 Corinthiens 5:7 - Car nous marchons par la foi et non par la vue.",
    "Proverbes 2:6 - C’est l’Éternel qui donne la sagesse ; de sa bouche sortent la connaissance et l’intelligence.",
    "Hébreux 10:23 - Retenons fermement l’espérance que nous professons, car celui qui a fait la promesse est fidèle.",
    "Philippiens 1:6 - Je suis persuadé que celui qui a commencé en vous cette œuvre bonne la rendra parfaite.",
    "Luc 1:37 - Car rien n’est impossible à Dieu.",
    "Proverbes 16:3 - Recommande à l’Éternel tes œuvres, et tes projets réussiront.",
    "Ésaïe 55:8-9 - Car mes pensées ne sont pas vos pensées, et vos voies ne sont pas mes voies.",
    "Jacques 4:7 - Soumettez-vous donc à Dieu ; résistez au diable, et il fuira loin de vous.",
    "Romains 8:28 - Nous savons que toute chose contribue au bien de ceux qui aiment Dieu.",
    "Philippiens 4:6-7 - Ne vous inquiétez de rien, mais faites connaître vos besoins à Dieu.",
    "2 Timothée 4:7 - J’ai combattu le bon combat, j’ai achevé la course, j’ai gardé la foi.",
    "Psaume 34:4 - J’ai cherché l’Éternel, et il m’a répondu ; il m’a délivré de toutes mes frayeurs.",
    "2 Corinthiens 12:9 - Ma grâce te suffit, car ma puissance s’accomplit dans la faiblesse.",
    "Romains 12:2 - Ne vous conformez pas au siècle présent, mais soyez transformés.",
    "Hébreux 13:8 - Jésus-Christ est le même hier, aujourd’hui, et éternellement.",
    "Jean 14:1 - Que votre cœur ne se trouble point. Croyez en Dieu, croyez aussi en moi.",
    "Ésaïe 41:10 - Ne crains rien, car je suis avec toi.",
    "1 Pierre 5:7 - Déchargez-vous sur lui de tous vos soucis.",
    "Marc 11:24 - Tout ce que vous demandez en priant, croyez que vous l’avez reçu.",
    "Psaume 139:12 - Même les ténèbres ne sont pas obscures pour toi.",
    "1 Jean 5:14-15 - Si nous demandons quelque chose selon sa volonté, il nous écoute.",
    "Jean 7:38 - Celui qui croit en moi, des fleuves d’eau vive couleront de son sein.",
    "1 Corinthiens 10:13 - Aucune tentation ne vous est survenue qui n’ait été humaine.",
  ],
  praise: [
    "1 Thessaloniciens 5:18 - Rendez grâce en toutes choses.",
    "Psaume 100:4 - Entrez dans ses portes avec reconnaissance, dans ses parvis avec louange.",
    "Colossiens 3:15 - Et soyez reconnaissants.",
    "Psaume 107:1 - Louez l’Éternel, car il est bon.",
    "Éphésiens 5:20 - Rendez toujours grâce pour toutes choses à Dieu le Père.",
    "Psaume 136:1 - Louez l’Éternel, car sa miséricorde dure à toujours.",
    "Philippiens 4:6 - Faites connaître vos besoins à Dieu par des prières avec des actions de grâce.",
    "Colossiens 4:2 - Persévérez dans la prière avec des actions de grâce.",
    "Psaume 9:1 - Je te louerai, Éternel, de tout mon cœur.",
    "1 Chroniques 16:34 - Louez l’Éternel, car sa miséricorde dure à toujours.",
    "Hébreux 13:15 - Par lui, offrons à Dieu un sacrifice de louange.",
    "Psaume 50:23 - Celui qui offre des actions de grâce me glorifie.",
    "2 Corinthiens 9:15 - Grâces soient rendues à Dieu pour son don ineffable !",
    "Psaume 118:29 - Louez l’Éternel, car il est bon.",
    "Luc 17:15-16 - Un seul d’entre eux, glorifiant Dieu à haute voix.",
    "Ésaïe 12:4 - Faites connaître ses œuvres parmi les peuples.",
    "Psaume 150:6 - Que tout ce qui respire loue l’Éternel !",
    "1 Pierre 2:9 - Vous êtes un peuple choisi, un sacerdoce royal.",
    "Psaume 95:2 - Allons dans sa présence avec des actions de grâce.",
    "Éphésiens 1:16 - Je rends grâce à mon Dieu toutes les fois que je fais mention de vous.",
    "Jean 11:41 - Jésus leva les yeux, et dit : Père, je te rends grâce.",
    "Colossiens 3:17 - Faites tout au nom du Seigneur en rendant grâce.",
    "Psaume 29:2 - Adorez l’Éternel dans la splendeur de la sainteté.",
    "Matthieu 26:27 - Après avoir rendu grâce, il leur donna en disant : Buvez-en tous.",
    "Psaume 118:21 - Je te rends grâce, car tu m’as exaucé.",
    "Psaume 107:8 - Qu’ils rendent grâces à l’Éternel pour sa bonté.",
    "Jean 14:1 - Que votre cœur ne se trouble point.",
    "Psaume 34:1 - Je bénirai l’Éternel en tout temps.",
    "Philippiens 1:3 - Je rends grâce à mon Dieu toutes les fois que je fais mention de vous.",
    "Colossiens 3:15 - Et soyez reconnaissants.",
  ],
  peace: [
    "Jean 14:27 - Je vous laisse la paix ; je vous donne ma paix.",
    "Philippiens 4:7 - La paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées.",
    "Ésaïe 26:3 - À celui qui est ferme dans ses sentiments, tu assures la paix.",
    "Psaume 29:11 - L’Éternel donne la force à son peuple ; l’Éternel bénit son peuple par la paix.",
    "Matthieu 11:28-29 - Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos.",
    "Jean 16:33 - Dans le monde, vous aurez des tribulations. Mais prenez courage, j’ai vaincu le monde.",
    "Psaume 34:14 - Cherche la paix et poursuis-la.",
    "Romains 5:1 - Étant donc justifiés par la foi, nous avons la paix avec Dieu par notre Seigneur Jésus-Christ.",
    "Colossiens 3:15 - Que la paix de Christ règne dans vos cœurs, à laquelle vous avez été appelés.",
    "Hébreux 12:14 - Recherchez la paix avec tous et la sanctification, sans laquelle personne ne verra le Seigneur.",
    "Psaume 37:7 - Garde le silence devant l’Éternel, et attends-toi à lui.",
    "2 Thessaloniciens 3:16 - Que le Seigneur de la paix vous donne lui-même la paix en tout temps et de toute manière.",
    "Luc 2:14 - Gloire à Dieu dans les lieux très hauts, et paix sur la terre parmi les hommes qu’il aime.",
    "Jean 14:1 - Que votre cœur ne se trouble point. Croyez en Dieu, croyez aussi en moi.",
    "Psaume 46:10 - Arrêtez, et sachez que je suis Dieu.",
    "Proverbes 3:24 - Quand tu te coucheras, tu ne seras pas dans l’angoisse ; ton sommeil sera doux.",
    "Romains 8:6 - L’intelligence charnelle est une mort, mais l’esprit est vie et paix.",
    "Ésaïe 32:17 - Le fruit de la justice sera la paix.",
    "Luc 10:5-6 - Lorsque vous entrez dans une maison, dites d’abord : Paix à cette maison.",
    "Colossiens 1:20 - Il a fait la paix par le sang de sa croix.",
    "Jean 20:21 - Paix à vous !",
    "2 Corinthiens 13:11 - Soyez dans la joie, perfectionnez-vous, exhortez-vous les uns les autres.",
    "Matthieu 5:9 - Heureux les artisans de paix, car ils seront appelés fils de Dieu.",
    "Psaume 85:8 - J’écouterai ce que dit Dieu, l’Éternel.",
    "Ésaïe 55:12 - Vous sortirez dans la joie, et vous serez conduits dans la paix.",
    "Proverbes 16:7 - Quand l’Éternel approuve les voies d’un homme, il dispose favorablement ses ennemis.",
    "Romains 12:18 - Si possible, autant que cela dépend de vous, soyez en paix avec tous les hommes.",
    "Philippiens 4:9 - Ce que vous avez appris, reçu, entendu et vu en moi, faites-le.",
    "1 Pierre 3:11 - Qu’il détourne son cœur du mal et fasse le bien, qu’il cherche la paix et la poursuive.",
    "Psaume 16:11 - Tu me feras connaître le chemin de la vie.",
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const onClickRedirect = function () {
    const buttons = [
      { id: "btn1", category: "joy" },
      { id: "btn2", category: "neutral" },
      { id: "btn3", category: "motivation" },
      { id: "btn4", category: "reassurance" },
      { id: "btn5", category: "doubts" },
      { id: "btn6", category: "praise" },
      { id: "btn7", category: "peace" },
    ];

    buttons.forEach(({ id, category }) => {
      const button = document.getElementById(id);
      if (button) {
        button.addEventListener("click", () => {
          localStorage.setItem("selectedCategory", category);
          document.location.href = "versetResult.html";
        });
      }
    });
  };

  const displayVerse = function () {
    if (window.location.pathname.includes("versetResult.html")) {
      const category = localStorage.getItem("selectedCategory");

      document
        .getElementById("homeImage")
        .addEventListener("click", function () {
          this.classList.toggle("zoomed");
        });

      if (category && verses[category]) {
        const randomVerse =
          verses[category][Math.floor(Math.random() * verses[category].length)];

        document.getElementById("verse").textContent = randomVerse;
      }
    }
  };

  onClickRedirect();
  displayVerse();
});
