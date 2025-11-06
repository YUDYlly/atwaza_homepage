import Link from "next/link";

const navItems = [
  { href: "/about", label: "私たちについて" },
  { href: "/collections", label: "商品カテゴリ" },
  { href: "/journal", label: "読みもの" },
  { href: "/gift", label: "ギフト" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link className="brand" href="/">
          <span className="brand-logo">@waza</span>
          <span className="brand-tagline">手間ひまを愉しむ暮らしの道具店</span>
        </Link>
        <nav className="main-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
