import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="container announcement-content">
        <span>10,000円以上で全国送料無料 / ギフトラッピング承ります。</span>
        <Link href="/gift">詳しく見る</Link>
      </div>
    </div>
  );
}
