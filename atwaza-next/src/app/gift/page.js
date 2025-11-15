import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "ギフトのご案内 | @waza",
  description: "大切な方へ贈る時間も、手間ひまを楽しむひとときに。",
};

export default function Gift() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">トップ</Link> / ギフト
          </div>
          <h1>ギフトのご案内</h1>
          <p>
            大切な方へ贈る時間も、手間ひまを楽しむひとときに。
            <br />
            @wazaでは、贈る相手やシーンに応じたギフトセットや季節便をご用意しています。
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container detail-grid">
          <div className="card-image" aria-hidden="true">
            <Image
              src="/images/食料品/お茶/煎茶【皇】_1.jpg"
              alt="ギフトボックス"
              width={600}
              height={400}
              className="card-image-img"
            />
          </div>
          <div>
            <h2 className="page-subtitle">ギフトボックス</h2>
            <p>
              湯上がりの時間や食卓の団らんなど、シーン別に組み合わせたギフトボックスを準備中です。
              熨斗やメッセージカード、ラッピングのカスタマイズにも対応します。
            </p>
          </div>
          <div>
            <ul className="value-list">
              <li>
                <h3>シーン別提案</h3>
                <p>新築祝いや内祝い、季節の贈り物など、目的に合わせたセットをコーディネート。</p>
              </li>
              <li>
                <h3>ラッピングサービス</h3>
                <p>和紙や紐を使用した温かみあるラッピング。熨斗の種類や名入れにも対応予定です。</p>
              </li>
              <li>
                <h3>メッセージカード</h3>
                <p>作り手の背景とともに、贈り主の言葉を添えられるようオリジナルカードを準備しています。</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">季節の体験便（構想中）</h2>
            <p>
              季節ごとの手仕事を楽しむ「体験型サブスクリプション」を企画中です。
              味噌づくりや梅しごとなど、必要な道具や素材、レシピをセットにしてお届けします。
            </p>
          </div>
          <div>
            <ul className="story-points">
              <li>季節に合わせたテーマ（例：春の柑橘、夏の涼やか器）</li>
              <li>体験レシピ冊子と動画コンテンツを同梱</li>
              <li>作り手とお客様をつなぐライブ配信やイベントも検討</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container newsletter-wrapper">
          <div>
            <h2>先行案内を受け取る</h2>
            <p>ギフトラインのリリースや季節便募集をいち早くお知らせします。</p>
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

