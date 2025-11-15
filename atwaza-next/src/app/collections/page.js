import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "商品カテゴリ | @waza",
  description: "@wazaが厳選する商品カテゴリをご紹介します。",
};

export default function Collections() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">トップ</Link> / 商品カテゴリ
          </div>
          <h1>カテゴリ一覧</h1>
          <p>
            @wazaが厳選するのは、日々の手仕事や生活に寄り添う道具たち。
            暮らし全体を整えるラインを順次展開していきます。
          </p>
        </div>
      </section>

      <section id="kurashi" className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">暮らしの道具</h2>
            <p className="category-description">タオル・食器・台所まわり</p>
            <p>
              日々の手仕事や生活に寄り添う道具というニュアンス。
              湯上がりの肌をいたわるタオル、食卓を彩る器、台所で活躍する道具まで、
              毎日の暮らしを豊かにするラインを展開します。
            </p>
            <ul className="story-points">
              <li>今治産など産地証明付きのタオルシリーズ</li>
              <li>瀬戸内や益子など日本各地の窯元の器</li>
              <li>木製のまな板、鉄の調理器具など台所道具</li>
            </ul>
          </div>
          <div className="card-image" aria-hidden="true">
            <Image
              src="/images/タオル/おぼろタオル/amazonおぼろ1.jpg"
              alt="暮らしの道具"
              width={600}
              height={400}
              className="card-image-img"
            />
          </div>
        </div>
      </section>

      <section id="miwototonoe" className="page-section">
        <div className="container detail-grid">
          <div className="card-image" aria-hidden="true">
            <Image
              src="/images/香り/IMG_2887.jpg"
              alt="身をととのえる"
              width={600}
              height={400}
              className="card-image-img"
            />
          </div>
          <div>
            <h2 className="page-subtitle">身をととのえる</h2>
            <p className="category-description">化粧品・香り</p>
            <p>
              「美容」「香り」を含みながら、和の語感で落ち着いた印象。
              国産精油を用いたルームスプレーや、低刺激のスキンケアプロダクトなど、
              心と体を整えるラインを展開します。
            </p>
            <ul className="story-points">
              <li>国産天然塩や和草の香りを活かしたバスソルト</li>
              <li>低刺激処方のボディソープ、植物由来の香料</li>
              <li>国産精油を用いたルームスプレー</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="meguminomi" className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">恵みの味</h2>
            <p className="category-description">食品・飲料</p>
            <p>
              「自然の恵み」「食の楽しみ」を連想させる穏やかな語。
              日本各地から厳選したお茶や食品など、日々の食卓を豊かにするラインを展開します。
            </p>
            <ul className="story-points">
              <li>煎茶、紅茶、ほうじ茶など厳選されたお茶</li>
              <li>発酵食品や調味料など台所の中心となる食のライン</li>
              <li>作り手の想いが伝わる食品選び</li>
            </ul>
          </div>
          <div className="card-image" aria-hidden="true">
            <Image
              src="/images/食料品/お茶/煎茶【禅】_1.jpg"
              alt="恵みの味"
              width={600}
              height={400}
              className="card-image-img"
            />
          </div>
        </div>
      </section>

      <section id="sumai" className="page-section">
        <div className="container detail-grid">
          <div className="card-image" aria-hidden="true">
            <Image
              src="/images/器/皿/IMG_3530.jpeg"
              alt="住まいのしつらえ"
              width={600}
              height={400}
              className="card-image-img"
            />
          </div>
          <div>
            <h2 className="page-subtitle">住まいのしつらえ</h2>
            <p className="category-description">家具・インテリア</p>
            <p>
              「しつらえ」は空間を美しく整えるという和語。
              布の肌触りや木の質感にこだわった日用品をセレクトし、
              暮らしの風景を形づくります。
            </p>
            <ul className="story-points">
              <li>木の質感にこだわった家具</li>
              <li>空間を美しく整えるインテリア小物</li>
              <li>長く使えるデザインの日用品</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="matou" className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">纏うもの</h2>
            <p className="category-description">衣類・布小物</p>
            <p>
              「身にまとう」から取った古風で上品な表現。
              布の肌触りにこだわった衣類や布小物など、
              身に纏うものの質感と美しさを大切にしたラインを展開します。
            </p>
            <ul className="story-points">
              <li>自然素材にこだわった衣類</li>
              <li>手仕事の温かみが感じられる布小物</li>
              <li>長く愛用できる上質な素材選び</li>
            </ul>
          </div>
          <div className="card-image" aria-hidden="true">
            <Image
              src="/images/衣類/IMG_9948.jpg"
              alt="纏うもの"
              width={600}
              height={400}
              className="card-image-img"
            />
          </div>
        </div>
      </section>

      <section id="gift" className="page-section">
        <div className="container detail-grid">
          <div className="card-image" aria-hidden="true">
            <Image
              src="/images/食料品/お茶/煎茶【皇】_1.jpg"
              alt="贈りもの"
              width={600}
              height={400}
              className="card-image-img"
            />
          </div>
          <div>
            <h2 className="page-subtitle">贈りもの</h2>
            <p className="category-description">ギフト</p>
            <p>
              大切な方へ贈る時間も、手間ひまを楽しむひとときに。
              湯上がりの時間や食卓の団らんなど、シーン別に組み合わせたギフトボックスを準備しています。
            </p>
            <ul className="story-points">
              <li>シーン別に提案するギフトボックス</li>
              <li>和紙や紐を使用した温かみあるラッピング</li>
              <li>作り手の背景とともに、贈り主の言葉を添えられるメッセージカード</li>
            </ul>
            <Link href="/gift" className="btn-link">
              ギフトの詳細を見る →
            </Link>
          </div>
        </div>
      </section>

      <section id="seasonal" className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">季のうつろい</h2>
            <p className="category-description">季節限定</p>
            <p>
              季節ごとの手仕事を楽しむ「体験型サブスクリプション」を企画中です。
              味噌づくりや梅しごとなど、必要な道具や素材、レシピをセットにしてお届けします。
            </p>
            <ul className="story-points">
              <li>季節に合わせたテーマ（例：春の柑橘、夏の涼やか器）</li>
              <li>体験レシピ冊子と動画コンテンツを同梱</li>
              <li>作り手とお客様をつなぐライブ配信やイベントも検討</li>
            </ul>
          </div>
          <div className="card-image" aria-hidden="true">
            <Image
              src="/images/食料品/お茶/ほうじ茶_1.jpg"
              alt="季のうつろい"
              width={600}
              height={400}
              className="card-image-img"
            />
          </div>
        </div>
      </section>
    </>
  );
}
