import type { ReactNode } from "react";
import { shedlock } from "../content/shedlock";
import { linkHandler } from "../lib/router";
import { useTitle } from "./useTitle";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold tracking-[-0.02em]">{title}</h2>
      <div className="mt-4 space-y-4 text-[1.0625rem] leading-relaxed text-graphite">{children}</div>
    </section>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2 pl-6 marker:text-mist">{children}</ul>;
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-ink underline underline-offset-2 hover:no-underline">
      {children}
    </a>
  );
}

const email = <Ext href={`mailto:${shedlock.supportEmail}`}>{shedlock.supportEmail}</Ext>;

export function ShedlockPrivacy() {
  useTitle(`${shedlock.name} Privacy Policy — Kapeta Labs`);

  return (
    <article aria-labelledby="privacy-title" className="py-20 sm:py-28">
      <div className="container-k max-w-3xl">
        <a href="/shedlock" onClick={linkHandler("/shedlock")} className="group inline-flex items-center gap-2 text-sm text-graphite hover:text-ink">
          <span aria-hidden="true">←</span> {shedlock.name}
        </a>
        <p className="eyebrow mt-12">Legal</p>
        <h1 id="privacy-title" className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
          {shedlock.name} Privacy Policy
        </h1>
        <p className="mt-6 text-sm text-mist">Last updated: {shedlock.privacyUpdated}</p>

        <div className="mt-10 space-y-4 text-[1.0625rem] leading-relaxed text-graphite">
          <p>
            This policy explains what information the {shedlock.name} mobile game (“the app”) collects, why, and
            the choices you have. The app is published by Kapeta (“Kapeta”, “we”, “us”), which operates Kapeta
            Labs. Questions: {email}.
          </p>
          <p>
            In short: {shedlock.name} has no accounts and we never ask for your name, email address or contacts.
            Your scores and settings stay on your device. The app uses Google services to show ads, to understand
            how the game is played, and to process optional purchases, and those services collect some device
            and usage information as described below.
          </p>
        </div>

        <Section title="1. Information stored on your device">
          <p>
            The app saves your game progress on your device only: best scores, daily challenge results and streaks,
            settings (sound, haptics, screen shake), the cosmetics you have chosen and bought, and simple counters
            used to space out ads. We do not receive this information. It is deleted when you uninstall the app or
            clear its data.
          </p>
        </Section>

        <Section title="2. Advertising (Google AdMob)">
          <p>
            The app shows ads through Google AdMob: optional rewarded ads that you choose to watch (for example to
            rewind), and occasional ads between games. To show ads, measure them and prevent fraud, Google may
            collect your device’s advertising ID, IP address, device and app information, and how you interact with
            ads.
          </p>
          <p>
            If you are in the UK, the European Economic Area or Switzerland, the app asks for your consent before
            ads are personalised, using Google’s consent tool. You can change your choice at any time in the app
            under Settings → Privacy options. You can also reset or delete your advertising ID, or opt out of
            personalised ads, in your device settings.
          </p>
          <p>
            Learn more: <Ext href="https://policies.google.com/technologies/partner-sites">How Google uses information from apps that use its services</Ext>{" "}
            and the <Ext href="https://policies.google.com/privacy">Google Privacy Policy</Ext>.
          </p>
        </Section>

        <Section title="3. Analytics (Google Analytics for Firebase)">
          <p>
            We use Google Analytics for Firebase to understand how the game is played so we can improve it. It
            records gameplay events, such as when a session or game starts and ends, the game mode, score, game
            length, sheds, locks and rewinds used, daily streak length, when a result is shared, when an ad is
            shown or a reward earned, and which item is bought. It also collects an app-instance identifier, device
            model, operating system, app version and approximate location (country or region, derived from your IP
            address).
          </p>
          <p>
            We use this information only in aggregate. It does not include your name or contact details and we do
            not use it to identify you. Google retains analytics data for a limited period (at most 14 months).
            Learn more in{" "}
            <Ext href="https://firebase.google.com/support/privacy">Privacy and Security in Firebase</Ext>.
          </p>
        </Section>

        <Section title="4. In-app purchases (Google Play)">
          <p>
            Purchases such as Remove Ads and cosmetic packs are processed entirely by Google Play. We never see
            your card or payment details. Google tells the app which items you own so they can be unlocked and
            restored. Google’s handling of payments is covered by the{" "}
            <Ext href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=privacynotice">Google Payments Privacy Notice</Ext>.
          </p>
        </Section>

        <Section title="5. Sharing your daily result">
          <p>
            If you tap Share, the app opens your device’s share sheet with a short text summary of your result.
            Nothing is sent unless you choose where to share it.
          </p>
        </Section>

        <Section title="6. Why we use this information">
          <List>
            <li>To run the game and keep your progress (on your device).</li>
            <li>To show ads that keep the game free, and personalised ads only where you have consented (UK/EEA/Switzerland).</li>
            <li>To understand and improve the game through aggregate analytics, which is in our legitimate interest.</li>
            <li>To deliver and restore purchases you make.</li>
          </List>
          <p>We do not sell your personal information.</p>
        </Section>

        <Section title="7. Who receives information">
          <p>
            Google (AdMob, Firebase and Google Play) receives the information described above as our service
            provider and, for some purposes, as an independent controller under its own policies. Google may
            process data on servers outside your country, including in the United States, with safeguards required
            by law. We do not share information with anyone else, except if required by law.
          </p>
        </Section>

        <Section title="8. Your choices and rights">
          <List>
            <li>Change ad consent in the app: Settings → Privacy options (UK/EEA/Switzerland).</li>
            <li>Reset your advertising ID or opt out of personalised ads in your device settings.</li>
            <li>Delete the data stored on your device by uninstalling the app or clearing its data.</li>
          </List>
          <p>
            Depending on where you live, you may have the right to access, correct, delete or object to the
            processing of your personal information. Because the app has no accounts, we usually cannot link
            analytics or advertising data to you, but we will help with any request: contact {email}. You may also
            complain to your local data protection authority (in the UK, the Information Commissioner’s Office).
          </p>
        </Section>

        <Section title="9. Children">
          <p>
            {shedlock.name} is not directed at children under 13, and we do not knowingly collect personal
            information from them. If you believe a child has used the app and information was collected, contact
            us and we will help remove it.
          </p>
        </Section>

        <Section title="10. Security">
          <p>
            Data sent to Google services is encrypted in transit. No method of transmission or storage is
            completely secure, but we limit what is collected to what the game needs.
          </p>
        </Section>

        <Section title="11. Changes to this policy">
          <p>
            We may update this policy, for example when the app changes. The date at the top shows the latest
            version. Significant changes will also be noted in the app’s update notes.
          </p>
        </Section>

        <Section title="12. Contact">
          <p>
            Kapeta (Kapeta Labs) · {email} ·{" "}
            <a href="/" onClick={linkHandler("/#")} className="text-ink underline underline-offset-2 hover:no-underline">
              kapetalabs.com
            </a>
          </p>
        </Section>
      </div>
    </article>
  );
}
