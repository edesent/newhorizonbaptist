import { sendToSlack } from "@/lib/slack-form";

// "Plan a Visit" → the church's Slack channel, so someone can be watching for
// them at the door on Sunday.
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill this; real visitors never see it. Pretend success.
  if (body.website) return Response.json({ success: true });

  const read = (key: string, max = 300) =>
    String(body[key] ?? "")
      .trim()
      .slice(0, max);

  const name = read("name", 120);
  const email = read("email", 200);
  const phone = read("phone", 60);
  const service = read("service", 120);
  const partySize = read("partySize", 60);
  const children = read("children", 200);
  const message = read("message", 2000);

  if (!name || (!email && !phone)) {
    return Response.json(
      { error: "Please tell us your name and either an email or a phone number." },
      { status: 400 }
    );
  }

  const result = await sendToSlack({
    subject: "🙌 Someone is planning a visit",
    name,
    contact: [email, phone].filter(Boolean).join(" · "),
    fields: [
      ["Coming to", service],
      ["How many", partySize],
      ["Children", children],
    ],
    message,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
