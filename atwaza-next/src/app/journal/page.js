import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "読みもの | @waza",
  description: "季節の手仕事や道具との付き合い方、作り手の声などを記事にまとめています。",
};

export default function Journal() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">トップ</Link> / 読みもの
          </div>
          <h1>読みもの</h1>
          <p>
            季節の手仕事や道具との付き合い方、作り手の声などを記事にまとめています。
            商品ページだけでは伝えきれない背景を深掘りし、価値観に共鳴するコンテンツをお届けします。
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h2 className="page-subtitle">最新記事</h2>
          <div className="journal-grid">
            <article className="journal-card">
              <div className="journal-image">
                <Image
                  src="/images/食料品/お茶/ほうじ茶_1.jpg"
                  alt="季節の手仕事"
                  width={400}
                  height={250}
                  className="journal-image-img"
                />
              </div>
              <span className="journal-tag">季節の手仕事</span>
              <h3>春の湯上がりを整える、柑橘の香りのバスソルト</h3>
              <p>旬の柑橘を使った浸出方法と香りのブレンド、作り手へのインタビューを掲載予定。</p>
              <Link href="#" className="card-link">
                公開準備中
              </Link>
            </article>
            <article className="journal-card">
              <div className="journal-image">
                <Image
                  src="/images/タオル/専髪タオル/専髪タオル2.jpg"
                  alt="ケアの知恵"
                  width={400}
                  height={250}
                  className="journal-image-img"
                />
              </div>
              <span className="journal-tag">ケアの知恵</span>
              <h3>タオルを長く使うための洗い方・干し方</h3>
              <p>繊維の特徴ごとに最適な洗濯方法を解説。柔らかさを保つコツを紹介します。</p>
              <Link href="#" className="card-link">
                公開準備中
              </Link>
            </article>
            <article className="journal-card">
              <div className="journal-image">
                <Image
                  src="/images/食料品/お茶/レモングラス紅茶_1.jpg"
                  alt="作り手の声"
                  width={400}
                  height={250}
                  className="journal-image-img"
                />
              </div>
              <span className="journal-tag">作り手の声</span>
              <h3>瀬戸内の窯元に聞く、器づくりへのまなざし</h3>
              <p>土の選定から焼成まで、窯元の視点で語る日常と挑戦についてお届けします。</p>
              <Link href="#" className="card-link">
                公開準備中
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">コンテンツのテーマ</h2>
            <p>
              読みものはSEO対策としてだけでなく、価値観に共感してくださる方と出会うための場です。
              ターゲットが抱える悩みや関心事を手がかりに、日々の暮らしに役立つストーリーをお届けします。
            </p>
          </div>
          <div>
            <ul className="value-list">
              <li>
                <h3>丁寧な暮らしのヒント</h3>
                <p>季節の手仕事、道具のケア、暮らしの整え方など実践的なコラム。</p>
              </li>
              <li>
                <h3>作り手紹介</h3>
                <p>産地訪問記やインタビュー、職人の理念や技術へのこだわりを深掘り。</p>
              </li>
              <li>
                <h3>ギフト・シーン提案</h3>
                <p>贈り物のアイデアや熨斗文化、贈る相手別のおすすめラインナップを紹介。</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container newsletter-wrapper">
          <div>
            <h2>ニュースレターに登録</h2>
            <p>公開前の記事予告やイベント情報をメールでお届けします。</p>
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

