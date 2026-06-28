/* ===== 麻雀EYE / MahjongEYE — bilingual (JA / EN) ===== */
(function () {
  const I18N = {
    /* shared */
    "brand.name":   { ja: `麻雀<span class="brand-accent">EYE</span>`, en: `Mahjong<span class="brand-accent">EYE</span>` },

    /* nav */
    "nav.features": { ja: `機能`, en: `Features` },
    "nav.how":      { ja: `使い方`, en: `How it works` },
    "nav.screens":  { ja: `画面`, en: `Screens` },
    "nav.faq":      { ja: `FAQ`, en: `FAQ` },
    "nav.privacy":  { ja: `プライバシー`, en: `Privacy` },
    "nav.download": { ja: `ダウンロード`, en: `Download` },

    /* meta */
    "meta.title": {
      ja: `麻雀EYE｜カメラを向けるだけ。AIが麻雀牌を認識して点数計算`,
      en: `MahjongEYE | Point your camera. AI recognizes mahjong tiles and scores them`
    },
    "meta.desc": {
      ja: `麻雀EYEは麻雀牌をオンデバイスAIで認識し、翻・符・役満まで自動で点数計算。得点表・推移グラフ・供託精算まで対応した麻雀点数計算アプリです。`,
      en: `MahjongEYE recognizes mahjong tiles with on-device AI and auto-calculates han, fu and yakuman. A scoring app with scoreboards, trend graphs and bet settlement.`
    },

    /* hero */
    "hero.eyebrow": { ja: `📷 オンデバイスAI牌認識`, en: `📷 On-device AI tile recognition` },
    "hero.h1": {
      ja: `カメラを向けるだけ。<br>AIが麻雀牌を<span class="hl">瞬時に認識</span>。`,
      en: `Just point your camera.<br>AI recognizes mahjong tiles <span class="hl">instantly</span>.`
    },
    "hero.lead": {
      ja: `手牌14枚をAIが自動で読み取り、翻・符・ドラから<strong>役満・流し満貫</strong>まで自動計算。点数計算が苦手でも、麻雀がもっと気軽に楽しくなります。`,
      en: `AI reads all 14 tiles automatically and calculates everything from han, fu and dora to <strong>yakuman and nagashi mangan</strong>. Even if scoring isn't your strength, mahjong becomes more relaxed and fun.`
    },
    "hero.ghost":  { ja: `機能を見る`, en: `See features` },
    "hero.badge1": { ja: `✅ 端末内で認識・計算（高速 / 通信不要）`, en: `✅ Recognition & scoring on device (fast, no connection)` },
    "hero.badge2": { ja: `✅ 赤ドラ(0m/0p/0s)も識別`, en: `✅ Detects red fives (0m/0p/0s)` },
    "hero.badge3": { ja: `✅ 無料で試せる`, en: `✅ Free to try` },

    "appstore.small": { ja: `ダウンロード`, en: `Download on the` },

    /* features */
    "feat.head.h2": { ja: `麻雀の「めんどう」を、ぜんぶ任せる。`, en: `Leave all the mahjong hassle to us.` },
    "feat.head.p":  { ja: `撮る・補正する・計算する。実戦で本当に使える機能だけを詰め込みました。`, en: `Shoot, correct, calculate — packed with only the features you'll actually use at the table.` },

    "feat1.h3": { ja: `AIが手牌を自動認識`, en: `AI recognizes your hand automatically` },
    "feat1.p":  { ja: `カメラを向ける、または写真を選ぶだけで手牌14枚を自動判定。赤5（0m/0p/0s）も区別します。認識はオンデバイスで完結するので<strong>高速・通信不要</strong>。`, en: `Just point the camera or pick a photo to identify all 14 tiles, including red fives (0m/0p/0s). Recognition runs fully on device, so it's <strong>fast and needs no connection</strong>.` },

    "feat2.h3": { ja: `誤認識はワンタップ補正`, en: `One-tap correction for misreads` },
    "feat2.p":  { ja: `違う牌は空き枠をタップして手動入力。あがり牌を指定すれば<strong>待ち形に応じて符まで再計算</strong>。AIと手入力のいいとこ取りです。`, en: `Tap any slot to fix a wrong tile by hand. Set the winning tile and it <strong>recalculates fu based on the wait</strong> — the best of both AI and manual input.` },

    "feat3.h3": { ja: `本格的な点数計算`, en: `Full-fledged scoring` },
    "feat3.p":  { ja: `翻・符・ドラ・裏ドラ・赤ドラ、立直/一発/海底/嶺上をワンタップで反映。<strong>役満・流し満貫などの特殊役</strong>や親子・ツモ/ロン、本場・供託まで自動で精算します。`, en: `Han, fu, dora, ura-dora, red dora, riichi / ippatsu / haitei / rinshan — all applied with one tap. It auto-settles <strong>special hands like yakuman and nagashi mangan</strong>, dealer/non-dealer, tsumo/ron, honba and bets.` },

    "feat4.h3": { ja: `得点表で対局管理`, en: `Manage games with the scoreboard` },
    "feat4.p":  { ja: `4人の点棒を局ごとに記録。<strong>持ち点の推移グラフ</strong>、東場/南場のバッジ、立直棒（供託）の自動精算まで、半荘まるごと残せます。`, en: `Track all four players' points hand by hand. <strong>Score trend graphs</strong>, East/South round badges and automatic riichi-stick settlement — keep a full hanchan on record.` },

    "feat5.h3": { ja: `役の強さがひと目で`, en: `See hand strength at a glance` },
    "feat5.p":  { ja: `履歴の役名は強さに応じて色分け表示。<strong>役満は王冠付きで発光</strong>、満貫・跳満・倍満も色でわかるので、盛り上がった局がすぐ見返せます。`, en: `Hand names in history are color-coded by strength. <strong>Yakuman glow with a crown</strong>, and mangan/haneman/baiman are color-coded too, so big hands are easy to revisit.` },

    "feat6.h3": { ja: `AI改善に協力できる`, en: `Help improve the AI` },
    "feat6.p":  { ja: `認識しにくかった牌は「牌を報告」から送って精度向上に貢献（任意）。みんなで育てる麻雀AIです。送信した画像は<strong>解析後すみやかに削除</strong>します。`, en: `Send hard-to-read tiles via "Report a tile" to help boost accuracy (optional) — a mahjong AI we grow together. Submitted images are <strong>deleted promptly after analysis</strong>.` },

    /* how */
    "how.head.h2": { ja: `使い方は、たったの3ステップ`, en: `Just three steps to use` },
    "how.head.p":  { ja: `初めてでも迷いません。卓を囲みながらサッと使えます。`, en: `Easy even your first time — use it in a snap right at the table.` },

    "step1.h3": { ja: `牌を写す`, en: `Capture the tiles` },
    "step1.p":  { ja: `あがった手牌をカメラに向けるか、撮った写真を選ぶだけ。赤い目安線に牌列を合わせると認識しやすくなります。`, en: `Just point the camera at your winning hand or pick a photo. Line the tiles up with the red guide for easier recognition.` },

    "step2.h3": { ja: `AIが認識・補正`, en: `AI recognizes & corrects` },
    "step2.p":  { ja: `14枚を自動で読み取り。違う牌があればタップで直すだけ。あがり牌を選べば待ち形も反映されます。`, en: `It reads all 14 tiles automatically. Tap to fix any wrong tile, and choose the winning tile to reflect the wait.` },

    "step3.h3": { ja: `点数が自動計算`, en: `Points calculated automatically` },
    "step3.p":  { ja: `役・翻・符・点数を即表示。そのまま得点表に登録すれば、対局の記録と推移が残ります。`, en: `Yaku, han, fu and points show instantly. Save to the scoreboard to keep a record and trend of your games.` },

    /* screens */
    "screens.head.h2": { ja: `アプリの画面を見てみる`, en: `Take a look at the app` },
    "screens.head.p":  { ja: `牌の認識から点数計算、得点管理まで。実際の画面はこんな感じです。`, en: `From tile recognition to scoring and score tracking — here are the actual screens.` },

    "shot1": { ja: `麻雀EYE`, en: `MahjongEYE` },
    "shot2": { ja: `役・翻・符を自動計算`, en: `Auto-calculated yaku, han & fu` },
    "shot3": { ja: `役満・特殊役にも対応`, en: `Supports yakuman & special hands` },
    "shot4": { ja: `得点表と推移グラフ`, en: `Scoreboard & trend graph` },
    "shot5": { ja: `和了履歴をまるごと記録`, en: `Full win history recorded` },
    "shot6": { ja: `牌を報告してAIを育てる`, en: `Report tiles to grow the AI` },

    /* highlight */
    "hl.h2": { ja: `点数計算、もう暗算しなくていい。`, en: `No more mental scoring.` },
    "hl.p":  { ja: `「これ何点だっけ？」で止まる時間をゼロに。麻雀EYEなら役の判定から点棒のやり取りまで自動。初心者は安心して打てて、経験者は対局のテンポを落としません。`, en: `Cut out the "wait, how many points is this?" pauses. MahjongEYE automates everything from judging yaku to exchanging sticks — beginners can play with confidence, and veterans keep the game's tempo.` },

    "stat1.b": { ja: `34＋3`, en: `34+3` },
    "stat1.s": { ja: `赤ドラ含む全牌種を認識`, en: `Every tile type, red dora included` },
    "stat2.b": { ja: `14枚`, en: `14` },
    "stat2.s": { ja: `手牌をまとめて自動判定`, en: `Whole hand identified at once` },
    "stat3.b": { ja: `0通信`, en: `0` },
    "stat3.s": { ja: `認識・計算は端末内で完結`, en: `Recognition & scoring stay on device` },

    /* faq */
    "faq.head": { ja: `よくある質問`, en: `Frequently asked questions` },
    "faq1.q": { ja: `オフラインでも使えますか？`, en: `Does it work offline?` },
    "faq1.a": { ja: `牌の認識と点数計算は端末内（オンデバイスAI）で完結するため、通信なしで使えます。画像が外部に送られるのは、あなたが「牌を報告」を実行したときだけです。`, en: `Tile recognition and scoring run entirely on device (on-device AI), so it works without a connection. Images leave your device only when you choose to "Report a tile."` },
    "faq2.q": { ja: `撮った画像は保存・送信されますか？`, en: `Are my photos stored or sent?` },
    "faq2.a": { ja: `通常の認識では画像は端末内でのみ処理されます。「牌を報告」で明示的に送信した画像のみ、AI精度改善のために使用し、通信はHTTPS/TLSで暗号化。解析後はすみやかに削除します。広告や第三者提供には利用しません。`, en: `For normal recognition, images are processed only on your device. Only images you explicitly send via "Report a tile" are used to improve AI accuracy, over HTTPS/TLS-encrypted connections. They're deleted promptly after analysis and never used for ads or shared with third parties.` },
    "faq3.q": { ja: `無料で使えますか？`, en: `Is it free?` },
    "faq3.a": { ja: `無料枠で気軽にお試しいただけます。もっと使いたい方は買い切りのPROで無制限に。広告の視聴で無料回数を回復することもできます。`, en: `You can try it for free. For more, a one-time PRO purchase unlocks unlimited use, and you can also restore free uses by watching an ad.` },
    "faq4.q": { ja: `認識を間違えたときは？`, en: `What if it misreads a tile?` },
    "faq4.a": { ja: `空いている枠や違う牌をタップして手動で修正できます。AIが苦手な牌は「牌を報告」から送っていただくと、今後の認識精度の向上に役立ちます。`, en: `Tap an empty slot or the wrong tile to fix it by hand. Sending tiles the AI struggles with via "Report a tile" helps improve future recognition accuracy.` },
    "faq5.q": { ja: `対応端末は？`, en: `Which devices are supported?` },
    "faq5.a": { ja: `iPhone（iOS）に対応しています。詳細はApp Storeの製品ページをご確認ください。`, en: `It supports iPhone (iOS). See the App Store product page for details.` },

    /* download CTA */
    "dl.h2":   { ja: `麻雀EYEを始めよう`, en: `Get started with MahjongEYE` },
    "dl.p":    { ja: `カメラを向けるだけで、麻雀がもっと自由に。`, en: `Just point your camera and play mahjong more freely.` },
    "dl.note": { ja: `※ 公開準備中の場合は、リンクを実際のApp Store URLに差し替えてください。`, en: `* If not yet released, replace this link with the actual App Store URL.` },

    /* footer */
    "foot.privacy": { ja: `プライバシーポリシー`, en: `Privacy Policy` },
    "foot.contact": { ja: `お問い合わせ`, en: `Contact` },

    /* ===== privacy page ===== */
    "nav.home": { ja: `ホーム`, en: `Home` },
    "pv.title":   { ja: `プライバシーポリシー｜麻雀EYE`, en: `Privacy Policy | MahjongEYE` },
    "pv.desc":    { ja: `麻雀EYEのプライバシーポリシー。画像はユーザーが明示的に送信した場合のみAI解析に使用し、解析後すみやかに削除します。`, en: `MahjongEYE Privacy Policy. Images are used for AI analysis only when you explicitly submit them, and are deleted promptly after analysis.` },
    "pv.h1":      { ja: `プライバシーポリシー`, en: `Privacy Policy` },
    "pv.updated": { ja: `最終更新日：2026年6月26日`, en: `Last updated: June 26, 2026` },
    "pv.intro":   { ja: `麻雀EYE（以下「本アプリ」）は、ユーザーのプライバシーを最大限に尊重します。本ポリシーでは、本アプリが取得する情報とその取り扱いについて説明します。`, en: `MahjongEYE ("the App") respects your privacy to the fullest. This policy explains what information the App collects and how it is handled.` },
    "pv1.h2": { ja: `1. オンデバイス処理が基本です`, en: `1. On-device processing by default` },
    "pv1.p":  { ja: `麻雀牌の認識と点数計算は、端末内（オンデバイスAI）で完結します。通常のご利用において、撮影・選択した画像が外部サーバーへ送信されることはありません。`, en: `Tile recognition and scoring run entirely on your device (on-device AI). In normal use, photos you take or select are never sent to external servers.` },
    "pv2.h2": { ja: `2. 取得する情報`, en: `2. Information we collect` },
    "pv2.li1": { ja: `ユーザーが「牌を報告」機能で明示的に送信した麻雀牌の画像`, en: `Tile images you explicitly submit via the "Report a tile" feature` },
    "pv2.li2": { ja: `アプリの動作・不具合改善に必要な技術情報`, en: `Technical information needed to operate and improve the App` },
    "pv3.h2": { ja: `3. 画像の取り扱い`, en: `3. How images are handled` },
    "pv3.p":  { ja: `画像は、ユーザーが「牌を報告」等で明示的に送信を実行した場合に限り、AI認識精度の改善を目的として送信されます。通信はHTTPS/TLSで暗号化されます。送信された画像は解析完了後すみやかに削除し、広告配信や第三者への提供には利用しません。`, en: `Images are sent only when you explicitly submit them (e.g. via "Report a tile"), solely to improve AI recognition accuracy. Connections are encrypted with HTTPS/TLS. Submitted images are deleted promptly after analysis and are never used for advertising or shared with third parties.` },
    "pv4.h2": { ja: `4. 第三者サービス`, en: `4. Third-party services` },
    "pv4.p":  { ja: `本アプリは、課金管理や広告配信のために第三者サービスを利用する場合があります。これらのサービスは、それぞれのプライバシーポリシーに従って情報を取り扱います。`, en: `The App may use third-party services for purchase management and advertising. These services handle information in accordance with their own privacy policies.` },
    "pv5.h2": { ja: `5. お問い合わせ`, en: `5. Contact` },
    "pv5.p":  { ja: `本ポリシーに関するお問い合わせは、以下までご連絡ください。`, en: `For questions about this policy, please contact us at:` },
    "pv.back": { ja: `← ホームに戻る`, en: `← Back to home` }
  };

  function detectLang() {
    const saved = localStorage.getItem("lang");
    if (saved === "ja" || saved === "en") return saved;
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("ja") ? "ja" : "en";
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    // text nodes (incl. <title>, which updates document.title)
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const t = I18N[el.getAttribute("data-i18n")];
      if (t && t[lang] != null) el.innerHTML = t[lang];
    });
    // attribute values, e.g. <meta data-i18n-content="meta.desc">
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      const t = I18N[el.getAttribute("data-i18n-content")];
      if (t && t[lang] != null) el.setAttribute("content", t[lang]);
    });
    const btn = document.getElementById("langToggle");
    if (btn) btn.textContent = lang === "ja" ? "EN" : "日本語";
    localStorage.setItem("lang", lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    apply(detectLang());
    const btn = document.getElementById("langToggle");
    if (btn) {
      btn.addEventListener("click", function () {
        apply(document.documentElement.lang === "ja" ? "en" : "ja");
      });
    }
  });
})();
