import * as aplang from "areweaplangyet-wasm";

const REPO = "goldmensch/hope";
const START_TIME = 1674738628000.0;

function getPhrase(days) {
  switch (days) {
    case 0: return "The revolution is picking up speed.";
    case 3: return "Is Jack more important again? Little reminder: You're not fucking Rose!"; 
    case 7: return "Get on the revolution again! Marx would be absolutly disappointed in you!"; 
    case 14: return "It's been 14 days now.. seems like the revolution failed, but its time will come again!";
    default: return "Stop watching fucking netflix!";
  }
}

async function renderProgress() {
  const res = await aplang.fetch_latest_commit(REPO, START_TIME);

  const commit = `https://github.com/${REPO}/commit/${res.sha}`;
  const phrase = getPhrase(res.days);

  const fmt = `${res.daysTotal} days without APLang, ${res.days} days since the last \
    <a href="${commit}">commit</a>. ${phrase}!`;
  document.getElementById("aplang-info").innerHTML = fmt;
}

renderProgress();
