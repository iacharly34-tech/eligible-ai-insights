const rows = [
  { etape: "Le coût de la recherche", aveugle: "3 à 5 h par semaine pour repérer et trier les créations à la main, soit 720 à 1 200 € de temps chargé par mois.", eligibly: "À partir de 10 € HT le lead : recherche et tri faits avant l’envoi, seuls les dossiers qui méritent un appel sont livrés." },
  { etape: "Le moment du contact", aveugle: "La société créée lundi est repérée des jours plus tard, souvent après les confrères.", eligibly: "Chaque matin, les immatriculations de la veille recoupées entre INPI, Sirene et BODACC, réservées à votre cabinet." },
  { etape: "La priorité", aveugle: "Tout se ressemble : rien ne distingue une holding, un client existant ou une société déjà chez un cabinet.", eligibly: "Un score sur 100 avec ses raisons ; holdings, dirigeants multi-sociétés et sociétés déjà accompagnées sont écartés." },
  { etape: "Le premier message", aveugle: "Page blanche : canal et message à réinventer dossier après dossier.", eligibly: "Canal recommandé (courrier, e-mail ou LinkedIn selon le profil) et premier message rédigé, à relire et envoyer." },
];

export function ProspectionAveugleTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[640px] text-left text-sm">
        <caption className="sr-only">Prospection à l’aveugle comparée à Eligibly</caption>
        <thead className="bg-muted/60">
          <tr>
            <th scope="col" className="p-3 font-semibold text-foreground">Étape</th>
            <th scope="col" className="p-3 font-semibold text-muted-foreground">Prospection à l’aveugle</th>
            <th scope="col" className="p-3 font-semibold text-primary">Avec Eligibly</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.etape} className="border-t border-border align-top">
              <th scope="row" className="p-3 font-semibold text-foreground">{r.etape}</th>
              <td className="p-3 text-muted-foreground">{r.aveugle}</td>
              <td className="p-3 text-foreground">{r.eligibly}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
