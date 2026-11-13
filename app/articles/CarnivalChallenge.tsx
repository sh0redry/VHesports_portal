import { asset, telegramUrl } from "../data";
import type { NewsPost } from "../news";
import { ArticleShell } from "./ArticleShell";

export function CarnivalChallenge({ item }: { item: NewsPost }) {
  return <ArticleShell item={item} className="page article carnival-article">
    <p>Think you’ve got fast reactions and sharp aim? Come visit the <b>VH E-Sports booth at the Carnival</b>, and put your skills to the test!</p>
    <p>We’ll be running <b>two quick gaming challenges</b> throughout the event. Whether you’re a competitive gamer or just want to have some fun, everyone is welcome to give them a try.</p>
    <div className="carnival-location"><span>BOOTH LOCATION</span><b>Level 3 Student Commons</b></div>

    <section className="carnival-challenge">
      <div>
        <p className="section-kicker">REACTION TIME CHALLENGE</p>
        <h2>⚡ How fast can you react?</h2>
        <p>Take on the <b>Human Benchmark Reaction Time Test</b> and see how quickly you can respond when the screen changes.</p>
        <a className="text-link" href="https://humanbenchmark.com/" target="_blank" rel="noopener noreferrer">Try the Reaction Time Test -&gt;</a>
      </div>
      <img src={asset("reaction-time-challenge.png")} alt="Reaction Time Challenge" />
    </section>

    <section className="carnival-challenge carnival-challenge-reverse">
      <img src={asset("four-target-aim-challenge.jpg")} alt="Four-Target Aim Challenge" />
      <div>
        <p className="section-kicker">FOUR-TARGET AIM CHALLENGE</p>
        <h2>🎯 Accuracy and speed matter too.</h2>
        <p>You’ll need to quickly hit the targets appearing on screen before time runs out.</p>
      </div>
    </section>

    <section className="carnival-reward">
      <p className="section-kicker">COMPLETE A CHALLENGE, GET A REWARD</p>
      <h2>🍬 Play. Join. Collect.</h2>
      <p><b>Take part in one of our challenges</b> and <b>join the VH E-Sports Telegram community</b> to receive a small reward!</p>
      <a className="button dark" href={telegramUrl} target="_blank" rel="noopener noreferrer">Join Telegram -&gt;</a>
    </section>

    <section className="carnival-leaderboard">
      <p className="section-kicker">MAKE THE LEADERBOARD</p>
      <h2>🏆 Make the leaderboard.</h2>
      <p>We’ll record participants’ scores throughout the Carnival and publish the results on the <b>VH E-Sports official website</b>.</p>
      <p>There will be separate leaderboards for:</p>
      <div className="leaderboard-grid">
        <article><span>⚡</span><b>Fastest Reaction Time</b></article>
        <article><span>🎯</span><b>Highest Four-Target Aim Challenge Score</b></article>
      </div>
      <p>Think you can take the <b>#1 spot</b>?</p>
      <p>Challenge your friends, set your best score, and check the website afterwards to see where you rank.</p>
    </section>

    <section className="carnival-finale">
      <p className="section-kicker">FIND US AT THE CARNIVAL</p>
      <h2>🎮 Level 3 Student Commons</h2>
      <p>Come visit the <b>VH E-Sports booth</b>, take on the challenges, grab a reward, and learn more about our gaming community.</p>
      <p><b>See you at the Carnival!</b></p>
    </section>
  </ArticleShell>;
}
