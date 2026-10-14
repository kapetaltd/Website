import type { ReactNode } from "react";
import { stackEcho } from "../content/stackecho";
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

function Code({ children }: { children: ReactNode }) {
  return <code className="font-mono text-[0.9375rem] break-all text-ink">{children}</code>;
}

const email = <Ext href={`mailto:${stackEcho.supportEmail}`}>{stackEcho.supportEmail}</Ext>;
const partnerSites = (
  <a href="https://policies.google.com/technologies/partner-sites" className="break-all text-ink underline underline-offset-2 hover:no-underline">
    https://policies.google.com/technologies/partner-sites
  </a>
);

const googleServices = [
  {
    service: "Google AdMob",
    why: "Show rewarded ads and occasional interstitial ads",
    info: "Advertising ID, IP address, approximate location derived from IP, device and app information, ad interactions (such as whether an ad was shown or completed), and diagnostic data",
  },
  {
    service: "Google User Messaging Platform (consent)",
    why: "Ask for ads consent where the law requires it, before ads are initialized",
    info: "Consent status, and the technical data Google needs to show and store that choice",
  },
  {
    service: "Firebase Analytics (Google Analytics for Firebase)",
    why: "Understand how the game is played so we can fix and balance it",
    info: "App instance ID, device model, operating system, language, app version, coarse geography derived from IP address, and the gameplay events listed in section 7",
  },
  {
    service: "Google Play Billing",
    why: "Sell Remove Ads, the Starter Pack, and the Neon skin pack, and restore purchases",
    info: "Google handles the purchase with your Google account. The app receives which product IDs you own. It does not receive your card number",
  },
];

export function StackEchoPrivacy() {
  useTitle(`${stackEcho.name} Privacy Policy — Kapeta Labs`);

  return (
    <article aria-labelledby="privacy-title" className="py-20 sm:py-28">
      <div className="container-k max-w-3xl">
        <a href="/" onClick={linkHandler("/#")} className="group inline-flex items-center gap-2 text-sm text-graphite hover:text-ink">
          <span aria-hidden="true">←</span> Kapeta Labs
        </a>
        <p className="eyebrow mt-12">Legal</p>
        <h1 id="privacy-title" className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
          {stackEcho.name} Privacy Policy
        </h1>
        <p className="mt-6 text-sm text-mist">
          {stackEcho.name} (Android app on Google Play) · Effective date: {stackEcho.privacyEffective} · Last
          updated: {stackEcho.privacyUpdated}
        </p>

        <Section title="1. Who we are">
          <p>
            This policy describes how Kapeta Pvt Ltd (“we”, “us”), operating as Kapeta (Kapeta Labs), handles
            information when you use the Android game {stackEcho.name}.
          </p>
          <p>
            {stackEcho.name} is an offline-first stacking game. We do not operate an account system, a game server,
            or a player database. Progress stays on your device. Ads, analytics, and payments are provided by
            Google, as described below.
          </p>
          <p>
            Contact: {email} · Website:{" "}
            <a href="/" onClick={linkHandler("/#")} className="text-ink underline underline-offset-2 hover:no-underline">
              kapetalabs.com
            </a>
          </p>
        </Section>

        <Section title="2. Who this policy applies to">
          <p>
            This policy applies to the {stackEcho.name} app distributed on Google Play. It does not apply to Google
            Play, Google accounts, or other sites and apps that have their own policies.
          </p>
          <p>
            The app is intended for a general audience aged 13 and older. It is not directed to children under 13,
            and it is not part of Google Play’s Designed for Families program.
          </p>
        </Section>

        <Section title="3. Information we do not collect">
          <p>We do not ask for, and the app does not collect:</p>
          <List>
            <li>Your name, email address, phone number, or postal address</li>
            <li>A {stackEcho.name} account, password, or sign-in</li>
            <li>Payment card numbers or bank details (Google Play processes purchases)</li>
            <li>Precise location, contacts, photos, microphone audio, or files on your device</li>
            <li>Anything you type. The game has no text fields and no chat</li>
          </List>
        </Section>

        <Section title="4. Information stored only on your device">
          <p>
            The app saves one local record so the game can remember your progress. This record is stored with the
            app on your phone. We do not upload it to a server we control. It includes:
          </p>
          <List>
            <li>Best score, coins, number of runs, and daily-challenge bests</li>
            <li>Daily streak</li>
            <li>Owned and equipped block skins</li>
            <li>Whether Remove Ads is owned, and which products have been granted</li>
            <li>Settings for sound, vibration, and reduced motion</li>
            <li>Which limited-time offers you have dismissed</li>
          </List>
          <p>
            Android backup may copy this local record to your Google account if backup is turned on for your phone.
            That backup is controlled by Android and your Google account, not by a {stackEcho.name} server.
          </p>
          <p>
            Uninstalling the app, or clearing its storage in Android settings, deletes this local record from the
            device.
          </p>
        </Section>

        <Section title="5. Information processed by Google services">
          <p>
            When the device is online, the app uses these Google services. They may process device and usage
            information under Google’s{" "}
            <Ext href="https://policies.google.com/privacy">Privacy Policy</Ext>. How Google uses information from
            apps that use Google services is described at {partnerSites}.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-[0.9375rem]">
              <thead>
                <tr className="border-b border-line text-ink">
                  <th scope="col" className="py-3 pr-4 font-semibold">Service</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Why it is used</th>
                  <th scope="col" className="py-3 font-semibold">Information involved</th>
                </tr>
              </thead>
              <tbody>
                {googleServices.map((row) => (
                  <tr key={row.service} className="border-b border-line align-top">
                    <th scope="row" className="py-3 pr-4 font-medium text-ink">{row.service}</th>
                    <td className="py-3 pr-4">{row.why}</td>
                    <td className="py-3">{row.info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            We do not sell this information. We do not share it with advertisers other than through Google’s ad and
            analytics services above.
          </p>
        </Section>

        <Section title="6. Ads and consent">
          <p>{stackEcho.name} contains ads:</p>
          <List>
            <li>Rewarded ads are optional. You choose them to continue a run or to double coins from that run.</li>
            <li>
              Interstitial ads may appear after certain finished runs. They are not shown during a run, and they are
              not shown on the first runs.
            </li>
            <li>
              The Remove Ads purchase turns off interstitial ads. Rewarded ads stay available because you start those
              yourself.
            </li>
          </List>
          <p>
            AdMob may use the Android advertising ID to show and measure ads, including ads that are more relevant to
            you, where that is allowed. You can delete or reset your advertising ID, and limit ad personalization, in
            Android settings (Settings, then Google, then Ads). Details are in Google’s{" "}
            <Ext href="https://policies.google.com/technologies/ads">advertising technologies policy</Ext>.
          </p>
          <p>
            In the European Economic Area, the United Kingdom, and Switzerland, the app requests Google’s consent
            information and shows Google’s consent form when that form is required, before AdMob is initialized. Your
            choice controls whether Google can use your information for personalized ads in those regions. If you
            refuse or the form is dismissed, the game still runs; an ad may fail to load.
          </p>
          <p>
            You can change your advertising ID choice at any time in Android settings. You can also clear the app’s
            storage, which clears the local consent record so the form can be shown again where required.
          </p>
        </Section>

        <Section title="7. Analytics events">
          <p>
            If Firebase is configured in the build you installed, the app sends these events to Firebase Analytics.
            They describe gameplay. They do not include your name, email, or advertising ID as an event parameter we
            set.
          </p>
          <List>
            <li><Code>run_start</Code> — whether the run is the daily challenge</li>
            <li>
              <Code>run_end</Code> — score, blocks placed, whether it was the daily challenge, and whether the run
              used a revive
            </li>
            <li><Code>revive</Code> — a continue was granted</li>
            <li><Code>ad_rewarded_continue_click</Code> — you pressed Continue</li>
            <li><Code>ad_rewarded_double_coins</Code> — double coins was granted</li>
            <li><Code>ad_interstitial</Code> — an interstitial was about to be shown</li>
            <li>
              <Code>iap_purchase</Code> — the product ID the first time a purchase is granted (for example{" "}
              <Code>remove_ads</Code>, <Code>starter_pack</Code>, or <Code>skin_pack_neon</Code>)
            </li>
            <li><Code>echo_sync</Code> and <Code>knocked</Code> — the block index where that event happened</li>
          </List>
          <p>
            Firebase also records its own automatic events, such as first open, session start, and app update, plus
            device and app properties. The game works offline and does not require analytics. Events that cannot be
            sent while you are offline are handled by the Firebase SDK.
          </p>
        </Section>

        <Section title="8. Purchases">
          <p>
            Optional in-app products are sold by Google Play. Google’s privacy policy and Play’s terms cover the
            payment. We receive a record of the product IDs you own so the app can unlock Remove Ads or skins on this
            device and restore them later. The product ID is also sent once to Firebase Analytics, as{" "}
            <Code>iap_purchase</Code>, the first time that product is granted.
          </p>
        </Section>

        <Section title="9. Permissions">
          <p>The app uses:</p>
          <List>
            <li>Internet, to load ads, send analytics, and complete Play purchases</li>
            <li>
              Advertising ID (<Code>com.google.android.gms.permission.AD_ID</Code>), because AdMob uses it to serve
              and measure ads
            </li>
            <li>
              Vibration, only if you leave haptic feedback on, to pulse the phone on game events. This is not
              collected as data
            </li>
          </List>
          <p>The app does not request location, camera, microphone, contacts, or storage permissions.</p>
        </Section>

        <Section title="10. Why we use this information">
          <List>
            <li>To run the game and remember progress on your device</li>
            <li>To show ads and honor ad-removal purchases</li>
            <li>To complete and restore in-app purchases</li>
            <li>To measure gameplay, ad use, and purchases so we can keep the game stable and fair</li>
            <li>To meet legal duties, including ads consent where it is required</li>
          </List>
          <p>
            Where the EU or UK GDPR applies, our bases are: performance of the service you asked for (local play and
            purchases you start); consent, for personalized ads where the consent form is required; and legitimate
            interests in measuring how the game is used and keeping it working, balanced against your rights. You can
            object to analytics processing by contacting us, and you can use the advertising controls in section 6.
          </p>
        </Section>

        <Section title="11. How long information is kept">
          <List>
            <li>On your device: until you uninstall {stackEcho.name} or clear its storage</li>
            <li>
              Firebase Analytics: for the retention period set in our Firebase project. User-level analytics data is
              kept for 2 months unless we change that setting in Firebase. Aggregated reports may be kept longer
            </li>
            <li>
              AdMob and Play Billing: for as long as Google keeps that data under Google’s policies and your Google
              account settings
            </li>
          </List>
        </Section>

        <Section title="12. Security">
          <p>
            Play, AdMob, and Firebase transmit data over HTTPS. There is no {stackEcho.name} account to breach and no
            password stored by the app. Local progress is stored in the app’s private storage on the device.
          </p>
        </Section>

        <Section title="13. Children">
          <p>
            {stackEcho.name} is not directed to children under 13. We do not knowingly collect personal information
            from children under 13. If you believe a child under 13 has provided personal information through the
            Google services used by the app, contact us at {email} and we will take appropriate steps.
          </p>
        </Section>

        <Section title="14. Your choices and rights">
          <p>You can:</p>
          <List>
            <li>Play without buying anything. Rewarded ads are optional</li>
            <li>Turn off interstitial ads by purchasing Remove Ads</li>
            <li>Reset or delete the advertising ID, and limit ad personalization, in Android settings</li>
            <li>Respond to the ads consent form where it is shown</li>
            <li>Delete local progress by clearing the app’s storage or uninstalling</li>
            <li>Turn off Android backup for the app or the device if you do not want Google to back up the local save</li>
          </List>
          <p>
            Depending on where you live, you may have the right to request access, correction, deletion, or a copy of
            personal information about you, to object to or restrict certain processing, and to lodge a complaint
            with a data protection authority. You may also have the right not to be discriminated against for
            exercising privacy rights.
          </p>
          <p>
            We do not sell personal information, and we do not share it for cross-context behavioral advertising
            except through Google’s advertising services as described in this policy. California residents can use
            the contact email to make a request under the CCPA/CPRA. We will not discriminate against you for making
            a request.
          </p>
          <p>
            Because we do not have {stackEcho.name} accounts, we usually cannot identify analytics or ad records from
            a name alone. Include enough detail for us to understand the request (for example the approximate time
            you played, your country, and your advertising ID if you want ad or analytics data addressed). We will
            respond as required by applicable law. Google also provides tools for data associated with your Google
            account at <Ext href="https://myaccount.google.com">myaccount.google.com</Ext>.
          </p>
        </Section>

        <Section title="15. International processing">
          <p>
            Google may process information from AdMob, Firebase Analytics, and Google Play in the United States and
            other countries where Google operates. Those transfers are covered by Google’s terms and safeguards,
            including its privacy policy linked above.
          </p>
        </Section>

        <Section title="16. Changes to this policy">
          <p>
            If we change this policy, we will update this page and the “Last updated” date. Where a change materially
            affects how we use information, we will also update the listing on Google Play. Continued use of the app
            after the updated policy is posted means you accept the updated policy, to the extent the law allows.
          </p>
        </Section>

        <Section title="17. Contact">
          <p>
            Kapeta Pvt Ltd
            <br />
            Kapeta (Kapeta Labs)
            <br />
            Email: {email}
            <br />
            Website: <Ext href="https://kapetalabs.com">https://kapetalabs.com</Ext>
          </p>
          <p>
            App name: {stackEcho.name}
            <br />
            Store: Google Play
          </p>
        </Section>
      </div>
    </article>
  );
}
