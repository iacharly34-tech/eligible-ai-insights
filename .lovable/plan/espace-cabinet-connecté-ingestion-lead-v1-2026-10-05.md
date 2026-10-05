# Espace cabinet connecté — ingestion « lead v1 »

## Décisions retenues
- Attribution : tour de rôle entre cabinets couvrant la même zone.
- Zone : département du siège × verticale.
- Comptes cabinets créés par l'admin (pas d'inscription libre).
- Leads avec `opposition_commerciale_rne = true` : stockés, masqués aux cabinets.

## Ce qui est construit
1. **Point d'entrée pipeline** `POST /api/public/pipeline/leads`
   - Clé secrète partagée (Bearer), comparée en temps constant.
   - Validation stricte du contrat lead v1 (lots de 500 max).
   - Upsert par SIREN : une mise à jour ne change jamais le cabinet attributaire.
   - Traitement immédiat des `suppressions` (tous cabinets).
   - Réponse `{recus, inseres, mis_a_jour, supprimes}`.
2. **Attribution automatique** à l'insertion : cabinets actifs couvrant (département, verticale), tour de rôle sur le dernier attribué. Sans cabinet : lead en file « non attribué ».
3. **Purge à J+90** : suppression automatique quotidienne à `a_supprimer_le`.
4. **Espace cabinet** `/espace` (connexion requise)
   - Liste des leads du cabinet : niveau, score, récence, verticale, canal recommandé, filtres.
   - Fiche lead : société, siège, dirigeant et profil, raisons/points d'attention, angle, date du premier bilan, contacts avec fiabilité, conformité et date de suppression.
   - Statuts : nouveau, contacté, RDV, signé, écarté + note.
5. **Console admin** `/admin`
   - Création des cabinets et de leurs utilisateurs (invitation email).
   - Gestion des zones (département × verticale) par cabinet.
   - Leads non attribués, réattribution manuelle.
6. **Journal d'accès** : consultation de fiche et tout export journalisés ; pas d'export en masse côté cabinet.

## Sécurité / données
- Cloisonnement strict par cabinet (RLS) ; rôles dans une table dédiée (admin).
- Aucun lead réel sur les pages publiques ; la démo reste fictive.
- Hébergement : vérifier la région UE du backend et vous le confirmer.

## Détails techniques
- Tables : `cabinets`, `cabinet_members`, `cabinet_zones`, `leads` (colonnes clés + `payload jsonb`), `lead_status`, `lead_access_log`, `pipeline_runs`.
- Secret `PIPELINE_INGEST_KEY` à générer ; je vous fournis l'URL + la clé pour le `.env` du pipeline.
- Purge via tâche planifiée appelant une route protégée.
- Routes protégées sous `_authenticated/`, server functions avec authentification.

## Hors périmètre (à valider plus tard)
- Découpage par code postal pour 75/69/13, rayon km.
- Activation définitive du filtre opposition RNE selon l'avis juridique.
