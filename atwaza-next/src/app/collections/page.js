import Link from "next/link";

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
            @wazaが初期ラインナップとして厳選するのは、風呂時間と食卓を整える道具たち。
            ゆくゆくは暮らし全体を巡るラインへと拡張していきます。
          </p>
        </div>
      </section>

      <section id="bath" className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">風呂用品・タオル</h2>
            <p>
              湯上がりの肌をいたわるボディソープやバスソルト、触れるたび心がほどけるタオル。
              作り手のブレンドレシピや織り工程を紹介しながら、毎日のセルフケアを豊かにするラインを展開します。
            </p>
            <ul className="story-points">
              <li>国産天然塩や和草の香りを活かしたバスソルト</li>
              <li>低刺激処方のボディソープ、植物由来の香料</li>
              <li>今治産など産地証明付きのタオルシリーズ</li>
            </ul>
          </div>
          <div className="card-image placeholder" aria-hidden="true">
            <span>Bath &amp; Towels Visual</span>
          </div>
        </div>
      </section>

      <section id="tableware" className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">器</h2>
            <p>
              瀬戸内や益子、波佐見など日本各地の窯元と協業し、食卓で毎日使える器を中心に取り扱います。
              釉薬の表情や器の厚みなど、使用感のレポートも合わせて紹介予定です。
            </p>
            <ul className="story-points">
              <li>朝食や晩酌など用途別に提案する器セット</li>
              <li>窯元インタビューと制作の風景写真</li>
              <li>長く使うための手入れ・保管アドバイス</li>
            </ul>
          </div>
          <div className="card-image placeholder" aria-hidden="true">
            <span>Tableware Visual</span>
          </div>
        </div>
      </section>

      <section id="upcoming" className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">これから加わる道具</h2>
            <p>
              @wazaでは、暮らし全体を整えるためのラインを順次準備しています。
              いずれも「長く使えること」「作り手が見えること」を基準にセレクトします。
            </p>
          </div>
          <div>
            <ul className="value-list">
              <li>
                <h3>台所・食品</h3>
                <p>木製のまな板、鉄の調理器具、発酵食品など台所の中心となる道具と食のライン。</p>
              </li>
              <li>
                <h3>香り・スキンケア</h3>
                <p>国産精油を用いたルームスプレーや、低刺激のスキンケアプロダクトを展開予定。</p>
              </li>
              <li>
                <h3>文具・衣類・家具</h3>
                <p>布の肌触りや木の質感にこだわった日用品をセレクトし、暮らしの風景を形づくります。</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

