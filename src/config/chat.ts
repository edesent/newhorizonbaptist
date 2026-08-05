// Live chat + form delivery (WBC Chat).
//
// One connection powers two things: the chat bubble in the corner of every page,
// and the "Plan a Visit" form. Both land in the church's Slack channel
// (#newhorizonbaptistchurch) and @-mention the pastor, so a message reaches his
// phone in seconds instead of an inbox.
//
// The key identifies this site to the chat backend. It only permits posting into
// this church's own channel — it can't read anything — so it lives in the repo
// rather than in an env var, which keeps previews and local dev working.

export const CHAT = {
  origin: "https://slackwebsitechat.vercel.app",
  apiKey: "wbc_00e83460eb7df8d049241f3d63737d1af807a7f40ff1a32a",
  accentColor: "#f5811d",
  /** Pastor Fincham's headshot, so visitors see they're writing to a person. */
  agentIcon: "/pastor-headshot.jpg",
  greeting:
    "Hi there — I'm Pastor Fincham. Ask me anything about New Horizon Baptist, or let me know you're planning a visit.",
} as const;
