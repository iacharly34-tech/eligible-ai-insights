import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HeaderEC } from "@/components/eligibly/HeaderEC";
import { FooterEC } from "@/components/eligibly/FooterEC";
import { FadeIn } from "@/components/eligibly/FadeIn";
import { useToast } from "@/hooks/use-toast";

const demoSchema = z.object({
  firstName: z.string().trim().min(2, "Prénom trop court").max(60),
  lastName: z.string().trim().min(2, "Nom trop court").max(60),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(/^[0-9+\s().-]{6,20}$/, "Téléphone invalide")
    .optional()
    .or(z.literal("")),
  firmName: z.string().trim().min(2, "Nom du cabinet requis").max(120),
  role: z.enum(["associe", "manager", "developpement", "collaborateur", "autre"], {
    errorMap: () => ({ message: "Sélectionnez un rôle" }),
  }),
  headcount: z.enum(["1-4", "5-10", "11-30", "31-100", "100+"], {
    errorMap: () => ({ message: "Sélectionnez une taille" }),
  }),
  region: z.string().trim().min(2, "Région requise").max(80),
  icp: z.string().trim().max(600).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité" }),
  }),
});

type DemoFormValues = z.infer<typeof demoSchema>;

const fieldBase =
  "w-full rounded-lg bg-bg-card border border-border-warm/70 px-4 py-3 text-ink text-[0.95rem] " +
  "placeholder:text-ink-muted/70 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition";

const labelBase = "block text-sm font-medium text-ink mb-2";
const errorBase = "mt-1.5 text-xs text-terracotta-deep";

const Demo = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      firmName: "",
      region: "",
      icp: "",
    },
  });

  const onSubmit = async (values: DemoFormValues) => {
    // Simulate async submission. Replace with Cloud insert later.
    await new Promise((r) => setTimeout(r, 700));
    // eslint-disable-next-line no-console
    console.log("[demo] submission", values);
    toast({
      title: "Demande envoyée",
      description: "Nous revenons vers vous sous 24h ouvrées pour caler la session.",
    });
    setSubmitted(true);
    reset();
  };

  return (
    <div className="min-h-screen bg-page text-ink antialiased">
      <HeaderEC />

      <main id="main-content" role="main" className="pt-28 md:pt-36 pb-20">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            {/* Left — pitch */}
            <FadeIn>
              <span className="inline-block text-xs uppercase tracking-[0.2em] text-terracotta font-medium mb-4">
                Pilote 14 jours
              </span>
              <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] text-ink mb-5">
                Voyez Eligibly à <em className="text-terracotta">l'œuvre sur votre ICP.</em>
              </h1>
              <p className="text-lg text-ink-secondary leading-relaxed mb-8">
                30 minutes en visio pour cadrer votre ICP, puis vos premiers leads scorés
                sous 48h. Pas de CB demandée, pas d'engagement.
              </p>

              <ul className="space-y-3.5 mb-8">
                {[
                  "Session de cadrage ICP (secteurs, zones, taille, profil dirigeant)",
                  "Workspace dédié créé sous 24h",
                  "Premiers leads scorés et expliqués sous 48h",
                  "Bilan de pilote à J+14, sans engagement",
                ].map((p) => (
                  <li key={p} className="flex gap-3 text-[0.95rem] text-ink-secondary">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-sapin-soft border border-sapin/20 rounded-xl p-5 text-sm text-ink-secondary leading-relaxed">
                <strong className="text-sapin block mb-1.5">Vos données restent les vôtres.</strong>
                Données issues de sources publiques (INPI, Sirene, BODACC) et partenaires
                contractuels. RGPD article 6.1.f. Désabonnement à tout moment.
              </div>
            </FadeIn>

            {/* Right — form */}
            <FadeIn delay={0.1}>
              <div className="bg-bg-card border border-border-warm rounded-2xl p-7 md:p-9 shadow-luxury">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-sapin-soft text-sapin flex items-center justify-center mx-auto mb-5 text-2xl">
                      ✓
                    </div>
                    <h2 className="font-display text-2xl text-ink mb-3">Merci, c'est noté.</h2>
                    <p className="text-ink-secondary mb-6">
                      Un email de confirmation vient de partir. Nous revenons vers vous
                      sous 24h ouvrées pour caler la session de cadrage.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-medium text-terracotta hover:text-terracotta-deep transition-colors"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <h2 className="font-display text-2xl text-ink mb-1">Demander une démo</h2>
                    <p className="text-sm text-ink-muted mb-6">Tous les champs marqués * sont requis.</p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="firstName" className={labelBase}>Prénom *</label>
                        <input id="firstName" autoComplete="given-name" className={fieldBase} {...register("firstName")} />
                        {errors.firstName && <p className={errorBase}>{errors.firstName.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="lastName" className={labelBase}>Nom *</label>
                        <input id="lastName" autoComplete="family-name" className={fieldBase} {...register("lastName")} />
                        {errors.lastName && <p className={errorBase}>{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="email" className={labelBase}>Email professionnel *</label>
                        <input id="email" type="email" autoComplete="email" className={fieldBase} {...register("email")} />
                        {errors.email && <p className={errorBase}>{errors.email.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelBase}>Téléphone</label>
                        <input id="phone" type="tel" autoComplete="tel" className={fieldBase} {...register("phone")} />
                        {errors.phone && <p className={errorBase}>{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="firmName" className={labelBase}>Nom du cabinet *</label>
                      <input id="firmName" autoComplete="organization" className={fieldBase} {...register("firmName")} />
                      {errors.firmName && <p className={errorBase}>{errors.firmName.message}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="role" className={labelBase}>Votre rôle *</label>
                        <select id="role" className={fieldBase} {...register("role")} defaultValue="">
                          <option value="" disabled>Choisir…</option>
                          <option value="associe">Associé / Dirigeant</option>
                          <option value="manager">Manager / Chef de mission</option>
                          <option value="developpement">Responsable développement</option>
                          <option value="collaborateur">Collaborateur</option>
                          <option value="autre">Autre</option>
                        </select>
                        {errors.role && <p className={errorBase}>{errors.role.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="headcount" className={labelBase}>Taille du cabinet *</label>
                        <select id="headcount" className={fieldBase} {...register("headcount")} defaultValue="">
                          <option value="" disabled>Choisir…</option>
                          <option value="1-4">1 à 4 collaborateurs</option>
                          <option value="5-10">5 à 10</option>
                          <option value="11-30">11 à 30</option>
                          <option value="31-100">31 à 100</option>
                          <option value="100+">100+</option>
                        </select>
                        {errors.headcount && <p className={errorBase}>{errors.headcount.message}</p>}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="region" className={labelBase}>Zone géographique cible *</label>
                      <input
                        id="region"
                        placeholder="Ex. Île-de-France, Auvergne-Rhône-Alpes…"
                        className={fieldBase}
                        {...register("region")}
                      />
                      {errors.region && <p className={errorBase}>{errors.region.message}</p>}
                    </div>

                    <div className="mb-5">
                      <label htmlFor="icp" className={labelBase}>
                        Votre ICP en quelques mots <span className="text-ink-muted font-normal">(facultatif)</span>
                      </label>
                      <textarea
                        id="icp"
                        rows={3}
                        placeholder="Secteurs ciblés, typologies de dirigeants, signaux à privilégier…"
                        className={fieldBase}
                        {...register("icp")}
                      />
                      {errors.icp && <p className={errorBase}>{errors.icp.message}</p>}
                    </div>

                    <label className="flex gap-3 items-start text-sm text-ink-secondary mb-6 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-1 w-4 h-4 rounded border-border-warm text-terracotta focus:ring-terracotta/30"
                        {...register("consent")}
                      />
                      <span>
                        J'accepte que mes informations soient utilisées pour me recontacter
                        dans le cadre de cette demande de démo, conformément à la{" "}
                        <a href="/confidentialite" className="text-terracotta hover:underline">
                          politique de confidentialité
                        </a>.
                      </span>
                    </label>
                    {errors.consent && <p className={errorBase + " -mt-4 mb-4"}>{errors.consent.message}</p>}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3.5 rounded-lg bg-terracotta text-cream font-medium hover:bg-terracotta-deep transition-colors shadow-card disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Envoi…" : "Programmer ma démo"}
                    </button>

                    <p className="text-xs text-ink-muted text-center mt-4">
                      Réponse sous 24h ouvrées · Pas de CB demandée · Aucune obligation
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </main>

      <FooterEC />
    </div>
  );
};

export default Demo;
