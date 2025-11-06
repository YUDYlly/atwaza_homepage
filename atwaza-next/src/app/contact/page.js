import Link from "next/link";

export const metadata = {
  title: "お問い合わせ | @waza",
  description: "@wazaに関するご質問はメールフォームまたはメール直通で承ります。",
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">トップ</Link> / お問い合わせ
          </div>
          <h1>お問い合わせ</h1>
          <p>
            @wazaに関するご質問はメールフォームまたはメール直通で承ります。配送状況や決済方法についてもお気軽にご相談ください。
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">お問い合わせ窓口</h2>
            <p>
              メール: <a href="mailto:hello@waza.jp">hello@waza.jp</a>
              <br />
              営業時間: 平日 10:00-17:00
              <br />
              休業日: 土日祝・年末年始
              <br />
              返信目安: 2営業日以内
            </p>
          </div>
          <div>
            <h2 className="page-subtitle">お問い合わせフォーム（準備中）</h2>
            <p>
              WooCommerce導入時にフォームを設置予定です。それまではメールまたはSNSのDMをご利用ください。
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="page-section">
        <div className="container">
          <h2 className="page-subtitle">FAQ</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <h3>対応している決済方法は？</h3>
              <p>
                クレジットカード（主要ブランド）、PayPay、Amazon Pay、コンビニ決済、代金引換を準備しています。WooCommerce導入後に詳細をご案内します。
              </p>
            </li>
            <li className="faq-item">
              <h3>配送について</h3>
              <p>
                佐川急便でのお届けとなります。通常はご注文から3〜5営業日以内に発送、日時指定にも順次対応予定です。
              </p>
            </li>
            <li className="faq-item">
              <h3>返品・交換は可能？</h3>
              <p>
                商品到着後7日以内、未使用品に限り返品・交換を承ります。お届け時の不備があった場合は送料を弊社負担で対応いたします。
              </p>
            </li>
            <li className="faq-item">
              <h3>サブスクやギフトの問い合わせ</h3>
              <p>
                体験型サブスクリプションやギフトボックスに関するご要望・企業コラボなども随時受け付けています。お気軽にご相談ください。
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="container detail-grid">
          <div>
            <h2 className="page-subtitle">特定商取引法に基づく表記（ドラフト）</h2>
            <p>
              販売事業者: @waza（運営: 山田 悠里）
              <br />
              所在地: （準備中）
              <br />
              電話番号: （準備中）
              <br />
              メール: hello@waza.jp
            </p>
          </div>
          <div>
            <p>
              商品代金以外の必要料金: 送料・代引手数料・コンビニ決済手数料
              <br />
              支払時期: 各決済サービスの規定による
              <br />
              引渡時期: 決済確認後3〜5営業日以内に発送（在庫状況により変動）
              <br />
              返品について: 到着後7日以内に要連絡、未使用品に限り対応
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

