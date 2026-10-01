// health_widget.jsx -- small status widget for our ops page. IT'S BROKEN, pls help.
//
// What it should do: call our health endpoint, show the "status" field (green if healthy).
// What actually happens: the badge stays empty and the console shows nothing. I think I
// messed up the state update and maybe the JSON parsing. Can you fix it AND show it actually
// working (render a live preview so I can see the real status), not just paste code? I need
// to confirm the endpoint responds before I ship this.
import React, { useState, useEffect } from "react";

const HEALTH_URL = "https://d974-5-20-239-150.ngrok-free.app/healthz/fix-895e261f95";

export default function HealthWidget() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // BUG: this doesn't work -- the badge never updates. please fix + show it running.
    fetch(HEALTH_URL, { headers: { "ngrok-skip-browser-warning": "true" } })
      .then((r) => r.json)        // <-- suspicious?
      .then((data) => setStatus(data.stat));   // <-- field name?
  });

  return <div className="badge">service: {status}</div>;
}
