import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "私たちについて | @waza",
  description: "手間ひまを愉しむ暮らしの道具を、日本各地からお届けします。",
};

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">トップ</Link> / 私たちについて
          </div>
          <h1>世界観とミッション</h1>
          <p>
            「手間ひまかけて作ったものを、大事に、長く使っていく」価値観を暮らしへ届けるために。
            @wazaは、作り手とお客様をつなぐストーリーテラーとして存在します。
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">ブランドミッション</h2>
            <p>
              日本各地の工房やメーカーが、丁寧な手仕事で仕上げた日用品。
              その一品に込められた時間と想いをまるごとお届けし、使い手の暮らしを豊かにする循環をつくります。
              量ではなく質、流行ではなく息の長い価値に目を向ける——そうした選択肢をひとつでも増やすことが@wazaの役目です。
            </p>
          </div>
          <div>
            <h2 className="page-subtitle">大切にしていること</h2>
            <ul className="value-list">
              <li>
                <h3>顔の見えるセレクト</h3>
                <p>作り手を訪ね、背景を確かめたうえで取り扱いを決定。納得した作品だけをオンラインに並べます。</p>
              </li>
              <li>
                <h3>価格以上の価値を</h3>
                <p>素材・製造工程・ケア方法を丁寧に説明し、「適正価格」の意味が伝わる情報設計を心がけます。</p>
              </li>
              <li>
                <h3>プロとしての安心感</h3>
                <p>決済から配送、アフターサポートまで誠実さを徹底。趣味ではなく事業として信頼を積み重ねます。</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">物語を届ける理由</h2>
            <p>
              私たちは「モノ」そのもの以上に、作り手の物語や価値観を届けることを使命にしています。
              商品ページではインタビュー、工房の情景写真、価格の根拠、お手入れのコツまで幅広く掲載し、
              手に取る前から道具との関係性を築けるよう設計しています。
            </p>
          </div>
          <div>
            <ul className="story-points">
              <li>作り手インタビューと制作背景のドキュメント</li>
              <li>素材・工程が伝わる写真や動画のアーカイブ</li>
              <li>長く使い続けるためのケアガイドを常設</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="owner">
        <div className="container owner-wrapper">
          <div className="owner-photo" aria-hidden="true">
            <Image
              src="/images/食料品/お茶/煎茶【禅】_1.jpg"
              alt="オーナー"
              width={600}
              height={600}
              className="owner-photo-img"
            />
          </div>
          <div className="owner-message">
            <h2>オーナーメッセージ</h2>
            <p>
              @waza オーナー&nbsp;/&nbsp;山田 悠里（仮）<br />
              工房を巡る旅で出会った職人さんたちは、皆さん道具に対する誇りと責任を持っていました。
              その眼差しと温度を、暮らしの中で感じてほしい。@wazaはその媒介役として、作り手と使い手の信頼を育てていきます。
            </p>
            <p className="owner-sign">―― 山田 悠里</p>
          </div>
        </div>
      </section>
    </>
  );
}

