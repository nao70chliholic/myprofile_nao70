import React from 'react'
import {
  HeartHandshake,
  Instagram,
  Link,
  MessageCircle,
  Package,
  Twitter,
  Users,
  Zap,
} from 'lucide-react'
import './App.css'

const marqueeItems = [
  'NAOnao OFFICIAL',
  'TURNING "IMPOSSIBLE" INTO "POSSIBLE"',
  'HAPPY VIRUS CREATOR',
  '20+ YEARS EXPERIENCE',
]

const ServiceItem = ({ number, title, body }) => (
  <div className="service-line">
    <span className="service-number english">{number}</span>
    <h3 className="service-title">{title}</h3>
    <p className="service-body">{body}</p>
  </div>
)

export default function App() {
  return (
    <div className="page selection">
      <div className="noise" aria-hidden />

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`${item}-${idx}`}>
              <span className="marquee-text english">{item}</span>
              <span className="marquee-dot">●</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg english">
          HAPPY
          <br />
          VIRUS
        </div>

        <div className="hero-inner fade-in">
          <div className="intro">
            <div className="intro-line" />
            <p className="intro-text">双子育児×ヒット商品開発×ハッピーを伝播</p>
          </div>

          <h1 className="hero-title">
            できないを
            <br />
            <span className="marker">「できる」</span>に
            <br />
            変える。
          </h1>

          <div className="profile">
            <div className="avatar-wrap">
              <div className="avatar-glow" />
              <img
                src={`${import.meta.env.BASE_URL}naonao-avatar.jpeg`}
                alt="Naonao PFP"
                className="avatar"
              />
            </div>
            <div className="profile-text">
              <p className="profile-name">なおなお</p>
              <p className="profile-role english">CREATIVE / MANAGER</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats">
        <div className="stats-grid">
          <div>
            <p className="stat-label">CAREER</p>
            <p className="stat-value english">
              20<span className="stat-plus">+</span>
            </p>
            <p className="stat-sub">商品開発歴 20年以上</p>
          </div>
          <div>
            <p className="stat-label">PRODUCTS</p>
            <p className="stat-value english">
              150<span className="stat-plus">+</span>
            </p>
            <p className="stat-sub">開発した商品 150品以上</p>
          </div>
          <div>
            <p className="stat-label">TALENT EMPOWERMENT</p>
            <p className="stat-value english">
              100<span className="stat-plus">+</span>
            </p>
            <p className="stat-sub">才能開花・育成（管理職経験を活かした伴走）</p>
          </div>
        </div>
        <div className="chips">
          <span className="chip">#ヒットメーカー</span>
          <span className="chip">#双子ママ</span>
          <span className="chip">#コミュニティ運営</span>
        </div>
      </section>

      {/* Mission */}
      <section className="mission">
        <div className="mission-noise" aria-hidden />
        <div className="mission-inner">
          <Zap className="mission-icon" />
          <p className="mission-tag english">MISSION</p>
          <h2 className="mission-heading">
            自分を犠牲にせず、
            <br />
            <span className="accent">本能のままに</span>
            <br />
            活躍する社会へ。
          </h2>
          <p className="mission-copy">
            「私なんて」はもう終わり。
            <br />
            あなたの中にある才能の種を、圧倒的な熱量で開花させる。
            <br />
            それが私のクリエイティブです。
          </p>
        </div>
      </section>

      {/* My Way */}
      <section className="myway">
        <div className="myway-blob" aria-hidden />
        <div className="myway-inner">
          <p className="myway-tag english">MY WAY</p>
          <div className="myway-heading">
            本能のままに
            <br />
            挑戦し、
            <br />
            <span className="myway-highlight">生きた証を残す</span>
            <br />
            <span className="myway-creator">クリエーター</span>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="vision group">
        <div className="vision-bg group-hover:grayscale-0 group-hover:scale-105" />

        <div className="vision-card">
          <div className="vision-glass">
            <p className="vision-kicker english">My Vision</p>
            <p className="vision-text">
              海の見えるログハウス。
              <br />
              ソファでPCを叩きながら…
            </p>
            <div className="vision-shout reveal">
              <p className="vision-quote stroke">自由だぁ〜！</p>
              <p className="vision-detail">
                — と叫べる、
                <br />
                時間と場所に縛られない生活。
              </p>
            </div>
          </div>
          <p className="vision-hint">Tap to Colorize the Future</p>
        </div>
      </section>

      {/* Services */}
      <section className="section services">
        <div className="services-head">
          <p className="services-kicker english">WHAT I DO</p>
          <h2 className="services-title">3つの活動軸</h2>
          <p className="services-lead">
            長年の「企業実績」と、
            <br />
            しなやかに進化する「AI × 共創スタイル」。
            <br />
            この2つを掛け合わせ、価値を提供します。
          </p>
        </div>

        <div className="service-stack">
          <div className="service-block tone-main">
            <div className="service-index english">01</div>
            <div className="service-headline">
              <div className="service-icon main">
                <Package className="icon" />
              </div>
              <h3>Total Produce</h3>
            </div>
            <p className="service-label">商品開発・プロデュース</p>
            <p className="service-text">
              大手食品メーカー20年、150以上の商品を世に送り出した「生みの親」。開発・マーケ・製造・チーム育成まで全工程を一気通貫でリードします。
              <br />
              <span className="service-highlight">
                「モノづくり」だけでなく「人づくり（才能開花）」も私のプロデュース領域。
              </span>
              自分を犠牲にしない働き方を体現します。
            </p>
          </div>

          <div className="service-block tone-accent">
            <div className="service-index english">02</div>
            <div className="service-headline">
              <div className="service-icon accent">
                <HeartHandshake className="icon" />
              </div>
              <h3>Community Design</h3>
            </div>
            <p className="service-label">コミュニティ運営・設計</p>
            <div className="service-text">
              <p>
                育休コミュニティ「MIRAIS」、挑戦コミュニティ「Challengers」を運営。大切にしているのは
                <span className="accent">「ひらく・気づく・すすむ」</span>
                の循環です。
              </p>
              <p className="service-note accent-border">
                IP育成コミュニティ(NinjaDAO)で学んだ
                <span className="bold">
                  「ジャズのように即興で重ね合う」
                </span>
                働き方を取り入れ、個人の"好き"が連鎖し、自然と未来へ向かえる「やわらかい強さ」のある場をつくります。
              </p>
            </div>
          </div>

          <div className="service-block tone-purple">
            <div className="service-index english">03</div>
            <div className="service-headline">
              <div className="service-icon purple">
                <MessageCircle className="icon" />
              </div>
              <h3>Consulting</h3>
            </div>
            <p className="service-label">対話型コンサルティング</p>
            <p className="service-text">
              企業・スタートアップ・個人に向けた「企画壁打ち」や「チーム育成」。
              <br />
              正解を教えるのではなく、<span className="service-highlight dark">「相手の可能性を引き出す」</span>
              対話型スタイルです。
              <br />
              <span className="service-note muted">
                ※AI動画やNFTなど、クリエイティブな最新知見を活かした「未来の空気をつくる」提案も可能です。
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="cta-inner">
          <div className="cta-line" />
          <p className="cta-title english">To You.</p>
          <p className="cta-copy">
            迷ったら、遊びにおいで。
            <br />
            一緒に「できる」を探そう。
          </p>
          <div className="cta-actions">
            <a
              className="cta-btn outline"
              href="https://www.instagram.com/nao70happyvirus/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="icon" />
            </a>
            <a
              className="cta-btn solid"
              href="https://x.com/nao70chiliholic"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="icon" />
            </a>
          </div>
          <p className="cta-note english">© NAOnao / HAPPY VIRUS. All Rights Reserved.</p>
        </div>
      </section>
    </div>
  )
}
