// //////////////////////////////////////////
// Gestion de la configuration du serveur //
// //////////////////////////////////////////

export const MODE_DEVELOPPEMENT = process.env.NODE_ENV !== 'production'

if (!MODE_DEVELOPPEMENT && !process.env.SECRET_JWT)
  throw new Error(
    'En mode production, vous devez spécifier un secret via la variable d\'environnement SECRET_JWT.'
  )

// Réseau
export const PORT = process.env.PORT || (MODE_DEVELOPPEMENT ? 4000 : 80)

// Jeton de session JWT
export const SECRET_JWT = process.env.SECRET_JWT || 'modeDeveloppement'
export const DUREE_VALIDITE_JETON = '1d'
