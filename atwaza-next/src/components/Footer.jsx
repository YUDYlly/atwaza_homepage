import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <span className="brand-logo">@waza</span>
          <p className="footer-copy">
            手間ひまを愉しむ暮らしの道具を、日本各地からお届けします。
          </p>
        </div>
        <div>
          <h3>ご利用案内</h3>
          <ul className="footer-links">
            <li>
              <Link href="/collections">ご注文方法について</Link>
              <span className="footer-link-desc">ご注文方法、複数配送についてのご案内</span>
            </li>
            <li>
              <Link href="/contact">お届けについて</Link>
              <span className="footer-link-desc">配送、送料などについてのご案内</span>
            </li>
            <li>
              <Link href="/contact">お支払い方法</Link>
              <span className="footer-link-desc">各種クレジットカードがご利用いただけます。</span>
            </li>
            <li>
              <Link href="/gift">ギフトのお荷物について</Link>
              <span className="footer-link-desc">金額がわかる明細などは一切同梱しておりませんので、ご安心ください。</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>店舗案内</h3>
          <ul className="footer-links">
            <li>
              <span className="footer-info-label">住所</span>
              <span className="footer-info-value">985-0061 宮城県塩釜市清水沢2-26-13</span>
            </li>
            <li>
              <span className="footer-info-label">お電話でのお問い合わせ</span>
              <span className="footer-info-value">050-5329-5517</span>
              <span className="footer-info-desc">受付時間：平日9時〜17時</span>
            </li>
            <li>
              <Link href="/contact">お問い合わせ</Link>
              <span className="footer-link-desc">お問い合わせフォームへ</span>
            </li>
            <li>
              <Link href="/about">姉妹店</Link>
              <span className="footer-link-desc">白醤油魚漬の仙臺魚市</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>ナビゲーション</h3>
          <ul className="footer-links">
            <li>
              <Link href="/collections">商品一覧</Link>
            </li>
            <li>
              <Link href="/about">私たちについて</Link>
            </li>
            <li>
              <Link href="/about">美味しさの理由</Link>
            </li>
            <li>
              <Link href="/journal">おさかなレシピ</Link>
            </li>
            <li>
              <Link href="/journal">お知らせ・ブログ</Link>
            </li>
            <li>
              <Link href="/contact#faq">よくあるご質問</Link>
            </li>
            <li>
              <Link href="/contact">特定商取引法に基づく記載</Link>
            </li>
            <li>
              <Link href="/contact">お問い合わせ</Link>
            </li>
            <li>
              <Link href="/contact">利用規約</Link>
            </li>
            <li>
              <Link href="/contact">プライバシーポリシー</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© @waza 2024</p>
      </div>
    </footer>
  );
}
