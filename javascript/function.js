const handleUserAccess = () => {
  const age = parseInt(prompt("entrer votre age"));

  if (isNaN(age)) {
    return document.write("Vous n'avez pas entré un entier");
  }

  if (age < 18) {
    return document.write("vous n'êtes pas autorisés à accéder a ce site");
  }

  const nom = prompt("entrer votre nom");
  const prenom = prompt("entrer votre prenom");
  const choix = parseInt(
    prompt(
      " taper 1 pour afficher votre profil et taper 0 pour sortir ...Entrer votre choix"
    )
  );

  switch (choix) {
    case 0:
      document.write("Deconnexion faites avec succes . Merci et aurevoir!!!");
      break;
    case 1:
      document.write(
        `
        Votre nom est : ${nom} <br/> 
        votre prenom est : ${prenom} <br/> 
        et votre age est : ${age} <br/> 
        Votre age dans 10 ans sera : ${age + 10} <br/> 
        votre age au cube est : ${age ** 3} <br/> 
        et le reste de la division de votre age par 2 est : ${age % 2}x
        `
      );
      break;
    default:
      document.write("Le programme a craché !!!");
      break;
  }
};
