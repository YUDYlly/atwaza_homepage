import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero hero--main">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Seasonal Collection 2024</p>
            <h1 className="hero-title">
              手間ひまが紡ぐ、<br />
              豊かな暮らしを<br />
              あなたに
            </h1>
            <p className="hero-description">
              @wazaは、長く大切に使いたい日用品を日本各地から集めるセレクトショップ。
              バスルームを整えるタオルや、食卓を彩る器を中心に、暮らしに寄り添う道具をお届けします。
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/collections">
                今季のラインを見る
              </Link>
              <Link className="btn ghost" href="/about">
                ブランドの想い
              </Link>
            </div>
          </div>
          <div className="hero-image" aria-hidden="true">
            <div className="hero-image-placeholder">
              <span>Seasonal Hero Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="concept-section">
        <div className="container">
          <h2 className="section-title">
            手間ひまかけて作ったものを、<br />
            大事に、長く使っていく
          </h2>
          <div className="concept-content">
            <p>
              大量生産・大量消費の対極にある世界観を目指す。
              「手間ひまかけて作ったものを、大事に、長く使っていく」という価値観を広め、その良さを分かち合いたい。
            </p>
            <p>
              @wazaは、作り手とお客様をつなぐストーリーテラーとして存在します。
              取扱う商品はすべて、生産背景を取材し、価格の根拠を明らかにした上で掲載します。
              工房の空気、素材の香り、丁寧な工程を余すところなくお届けします。
            </p>
            <Link href="/about" className="btn-link">
              私たちについて →
            </Link>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="usp-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">@wazaが大切にしていること</h2>
          </div>
          <div className="usp-grid">
            <article className="usp-card">
              <h3>顔の見えるセレクト</h3>
              <p>作り手を訪ね、背景まで丹念に取材したストーリーとともに道具を紹介します。納得した作品だけをオンラインに並べます。</p>
            </article>
            <article className="usp-card">
              <h3>適正価格の透明性</h3>
              <p>素材、工程、手間を丁寧に伝え、価格以上の価値を実感できる情報設計を徹底します。「適正価格」の意味が伝わるよう心がけます。</p>
            </article>
            <article className="usp-card">
              <h3>長く使うためのケア</h3>
              <p>お手入れガイド、修理相談、サブスク構想まで。道具と暮らしが続く仕組みを用意します。買った後も安心できる環境を整えます。</p>
            </article>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="category-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">商品カテゴリ</h2>
            <p className="section-subtitle">日本各地から厳選した道具たち</p>
          </div>
          <div className="category-list">
            <Link href="/collections#bath" className="category-item">
              <span className="category-name">風呂用品・タオル</span>
              <span className="category-desc">湯上がりの時間を整える</span>
            </Link>
            <Link href="/collections#tableware" className="category-item">
              <span className="category-name">器</span>
              <span className="category-desc">食卓を彩る日々の器</span>
            </Link>
            <Link href="/collections#upcoming" className="category-item">
              <span className="category-name">台所道具</span>
              <span className="category-desc">これから加わる道具</span>
            </Link>
            <Link href="/gift" className="category-item">
              <span className="category-name">ギフトボックス</span>
              <span className="category-desc">贈り物にも最適</span>
            </Link>
            <Link href="/journal" className="category-item">
              <span className="category-name">読みもの</span>
              <span className="category-desc">暮らしを豊かにする記事</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">季節のあたらしい道具</h2>
            <Link href="/collections" className="card-link">
              すべて見る →
            </Link>
          </div>

          <div className="products-scroll">
            <div className="products-scroll-grid">
              <article className="product-card">
                <div className="product-image">
                  <div className="product-image-placeholder">
                    <span>Bath Salt</span>
                  </div>
                </div>
                <div className="product-content">
                  <p className="product-category">風呂用品</p>
                  <h3 className="product-name">紀州みかんのバスソルト</h3>
                  <p className="product-price">¥3,200（税込）</p>
                  <Link href="/collections" className="btn-link">
                    詳細を見る →
                  </Link>
                </div>
              </article>

              <article className="product-card">
                <div className="product-image">
                  <div className="product-image-placeholder">
                    <span>Body Soap</span>
                  </div>
                </div>
                <div className="product-content">
                  <p className="product-category">風呂用品</p>
                  <h3 className="product-name">ヒノキと柚子のボディソープ</h3>
                  <p className="product-price">¥2,800（税込）</p>
                  <Link href="/collections" className="btn-link">
                    詳細を見る →
                  </Link>
                </div>
              </article>

              <article className="product-card">
                <div className="product-image">
                  <div className="product-image-placeholder">
                    <span>Towel</span>
                  </div>
                </div>
                <div className="product-content">
                  <p className="product-category">タオル</p>
                  <h3 className="product-name">草木染めフェイスタオル</h3>
                  <p className="product-price">¥2,400（税込）</p>
                  <Link href="/collections" className="btn-link">
                    詳細を見る →
                  </Link>
                </div>
              </article>

              <article className="product-card">
                <div className="product-image">
                  <div className="product-image-placeholder">
                    <span>Tableware</span>
                  </div>
                </div>
                <div className="product-content">
                  <p className="product-category">器</p>
                  <h3 className="product-name">瀬戸内の朝食プレート</h3>
                  <p className="product-price">¥4,800（税込）</p>
                  <Link href="/collections" className="btn-link">
                    詳細を見る →
                  </Link>
                </div>
              </article>

              <article className="product-card">
                <div className="product-image">
                  <div className="product-image-placeholder">
                    <span>Gift</span>
                  </div>
                </div>
                <div className="product-content">
                  <p className="product-category">ギフト</p>
                  <h3 className="product-name">季節の手仕事ギフトセット</h3>
                  <p className="product-price">¥6,900（税込）</p>
                  <Link href="/gift" className="btn-link">
                    詳細を見る →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">作り手の手間と時間を伝えるストーリー</h2>
              <p>
                私たちは「モノ」そのもの以上に、作り手の物語や価値観を届けることを使命にしています。
                商品ページではインタビュー、工房の情景写真、価格の根拠、お手入れのコツまで幅広く掲載し、
                手に取る前から道具との関係性を築けるよう設計しています。
              </p>
              <ul className="story-points">
                <li>作り手インタビューと制作背景のドキュメント</li>
                <li>素材・工程が伝わる写真や動画のアーカイブ</li>
                <li>長く使い続けるためのケアガイドを常設</li>
              </ul>
              <Link href="/about" className="btn-link">
                私たちについて →
              </Link>
            </div>
            <div className="story-image" aria-hidden="true">
              <div className="story-image-placeholder">
                <span>Workshop Visit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="journal-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">暮らしを豊かにする読みもの</h2>
            <Link href="/journal" className="card-link">
              すべての記事 →
            </Link>
          </div>
          <div className="journal-grid">
            <article className="journal-card">
              <span className="journal-tag">季節の手仕事</span>
              <h3>春の湯上がりを整える、柑橘の香りのバスソルト</h3>
              <p>旬の柑橘を使った浸出方法と香りのブレンド、作り手へのインタビューを掲載予定。</p>
              <Link href="/journal" className="btn-link">
                記事へ →
              </Link>
            </article>
            <article className="journal-card">
              <span className="journal-tag">ケアの知恵</span>
              <h3>タオルを長く使うための洗い方ガイド</h3>
              <p>繊維の特徴ごとに最適な洗濯方法を解説。柔らかさを保つコツを紹介します。</p>
              <Link href="/journal" className="btn-link">
                記事へ →
              </Link>
            </article>
            <article className="journal-card">
              <span className="journal-tag">作り手の声</span>
              <h3>瀬戸内の窯元に聞く、器づくりへのまなざし</h3>
              <p>土の選定から焼成まで、窯元の視点で語る日常と挑戦についてお届けします。</p>
              <Link href="/journal" className="btn-link">
                記事へ →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container newsletter-wrapper">
          <div>
            <h2 className="section-title">季節の入荷をお知らせします</h2>
            <p>新作やイベント情報をメールでお届け。静かな暮らしのヒントも定期的に配信します。</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="メールアドレス" />
            <button type="submit">登録する</button>
          </form>
        </div>
      </section>
    </>
  );
}
