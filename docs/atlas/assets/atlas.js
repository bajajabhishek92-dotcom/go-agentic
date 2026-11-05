/* Shared Atlas reader shell: nav chrome, mobile drawer, article renderer. */
(function () {
  const C = window.ATLAS_CONTENT || null;
  const page = document.body.dataset.page || "start";

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $all(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function asOf() {
    return (C && C.as_of) || "2026-11-05";
  }

  function buildChrome() {
    const asofEls = $all("[data-asof]");
    asofEls.forEach((el) => {
      el.textContent = "AS OF " + asOf();
    });
    $all('.primary-nav a[data-nav]').forEach((a) => {
      if (a.dataset.nav === page) a.setAttribute("aria-current", "page");
    });
    $all('.sidebar a[data-nav]').forEach((a) => {
      if (a.dataset.nav === page) a.setAttribute("aria-current", "page");
    });

    const btn = $("#menu-btn");
    const side = $("#sidebar");
    const backdrop = $("#sidebar-backdrop");
    function close() {
      side && side.classList.remove("is-open");
      backdrop && backdrop.classList.remove("is-open");
      btn && btn.setAttribute("aria-expanded", "false");
    }
    function open() {
      side && side.classList.add("is-open");
      backdrop && backdrop.classList.add("is-open");
      btn && btn.setAttribute("aria-expanded", "true");
    }
    if (btn && side) {
      btn.addEventListener("click", () => {
        side.classList.contains("is-open") ? close() : open();
      });
      backdrop && backdrop.addEventListener("click", close);
      side.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    }
  }

  function articleById(id) {
    return C && C.articles && C.articles[id];
  }

  function renderSources(art, host) {
    if (!host) return;
    const sources = art.sources || [];
    if (!sources.length && !art.sources_html) {
      host.hidden = true;
      return;
    }
    host.hidden = false;
    const ul = host.querySelector(".src-list");
    if (ul && sources.length) {
      ul.innerHTML = sources
        .map(
          (s) =>
            `<li><a href="${s.url}" target="_blank" rel="noopener">${escapeHtml(
              s.title || s.url
            )}</a></li>`
        )
        .join("");
    } else if (art.sources_html) {
      host.querySelector(".src-body").innerHTML = art.sources_html;
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function showArticle(id, opts) {
    opts = opts || {};
    const art = articleById(id);
    const empty = $("#article-empty");
    const wrap = $("#article-view");
    if (!art || !wrap) return;
    if (empty) empty.hidden = true;
    wrap.hidden = false;
    $("#article-title").textContent = art.title;
    $("#article-body").innerHTML = art.html || "";
    const meta = $("#article-meta");
    if (meta) {
      meta.innerHTML = `<span class="asof">AS OF ${asOf()}</span><span>${escapeHtml(
        art.path || ""
      )}</span>`;
    }
    renderSources(art, $("#sources-panel"));
    if (opts.scroll !== false) {
      wrap.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // sidebar active
    $all(".sidebar a[data-article]").forEach((a) => {
      a.classList.toggle("is-active", a.dataset.article === id);
    });
    if (opts.hash !== false) {
      const hash = opts.hashId || id;
      if (location.hash.replace(/^#/, "") !== hash) {
        history.replaceState(null, "", "#" + hash);
      }
    }
  }

  function fillLaneSidebar(laneKey) {
    const lane = C && C.lanes && C.lanes[laneKey];
    const host = $("#lane-toc");
    if (!lane || !host) return;
    host.innerHTML = lane.articles
      .map(
        (a) =>
          `<a href="#${a.id}" data-article="${a.id}">${escapeHtml(a.title)}</a>`
      )
      .join("");
    host.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        showArticle(a.dataset.article);
      });
    });
  }

  function initTimeline() {
    const host = $("#chrono");
    if (!host || !C) return;
    host.innerHTML = C.timeline_eras
      .map((era) => {
        const here = era.you_are_here
          ? `<span class="you-are-here">YOU ARE HERE</span>`
          : "";
        return `<a class="era-node${era.you_are_here ? " now" : ""}" id="${
          era.id
        }" href="#${era.article}" data-article="${era.article}" data-era="${
          era.id
        }">
          <span class="era-when">${escapeHtml(era.when)}${here}</span>
          <h2>${escapeHtml(era.title)}</h2>
          <p>${escapeHtml(era.blurb)}</p>
        </a>`;
      })
      .join("");
    host.querySelectorAll(".era-node").forEach((node) => {
      node.addEventListener("click", (e) => {
        e.preventDefault();
        $all(".era-node").forEach((n) => n.classList.remove("is-active"));
        node.classList.add("is-active");
        showArticle(node.dataset.article, { hashId: node.dataset.era });
      });
    });
    fillLaneSidebar("timeline");
    // also list deeper teachables under chrono
    const more = $("#timeline-more");
    if (more && C.lanes.timeline) {
      more.innerHTML = C.lanes.timeline.articles
        .map(
          (a) =>
            `<a class="role-row" href="#${a.id}" data-article="${a.id}">
              <span class="role-title">${escapeHtml(a.title)}</span>
              <p class="role-job">${escapeHtml(a.summary)}</p>
            </a>`
        )
        .join("");
      more.querySelectorAll("[data-article]").forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          showArticle(a.dataset.article);
        });
      });
    }
    routeHash();
  }

  function initPlayers() {
    const host = $("#role-grid");
    if (!host || !C) return;
    host.innerHTML = C.player_roles
      .map(
        (r) => `<a class="role-row" id="${r.id}" href="#${r.article}" data-article="${
          r.article
        }" data-role="${r.id}">
          <span class="role-title">${escapeHtml(r.title)}</span>
          <p class="role-job">${escapeHtml(r.role)}</p>
          <div class="role-constraint">Constraint · ${escapeHtml(
            r.constraint
          )}</div>
        </a>`
      )
      .join("");
    host.querySelectorAll("[data-article]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        showArticle(a.dataset.article, { hashId: a.dataset.role || a.dataset.article });
      });
    });
    fillLaneSidebar("players");
    routeHash();
  }

  function initPolicy() {
    const host = $("#role-grid");
    if (!host || !C) return;
    host.innerHTML = C.policy_regimes
      .map(
        (r) => `<a class="role-row" id="${r.id}" href="#${r.article}" data-article="${
          r.article
        }" data-regime="${r.id}">
          <span class="role-title">${escapeHtml(r.title)}</span>
          <p class="role-job">${escapeHtml(r.blurb)}</p>
        </a>`
      )
      .join("");
    host.querySelectorAll("[data-article]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        showArticle(a.dataset.article, {
          hashId: a.dataset.regime || a.dataset.article,
        });
      });
    });
    fillLaneSidebar("policy");
    routeHash();
  }

  function initBenchmarks() {
    const body = $("#ledger-body");
    if (!body || !C) return;
    body.innerHTML = C.benchmark_rows
      .map(
        (r) => `<tr id="${r.id}" tabindex="0" data-article="${r.article}" data-row="${
          r.id
        }">
          <td><a class="bm-name" href="#${r.article}">${escapeHtml(
          r.benchmark
        )}</a></td>
          <td>${escapeHtml(r.claims)}</td>
          <td class="mono">${escapeHtml(r.failure)}</td>
          <td class="mono">AS OF ${asOf()}</td>
        </tr>`
      )
      .join("");
    body.querySelectorAll("tr").forEach((tr) => {
      const go = () =>
        showArticle(tr.dataset.article, { hashId: tr.dataset.row });
      tr.addEventListener("click", go);
      tr.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          go();
        }
      });
    });
    fillLaneSidebar("benchmarks");
    routeHash();
  }

  function routeHash() {
    const raw = (location.hash || "").replace(/^#/, "");
    if (!raw) return;
    // era / role / regime / row ids map to articles
    const maps = [
      ...(C.timeline_eras || []).map((e) => [e.id, e.article]),
      ...(C.player_roles || []).map((e) => [e.id, e.article]),
      ...(C.policy_regimes || []).map((e) => [e.id, e.article]),
      ...(C.benchmark_rows || []).map((e) => [e.id, e.article]),
    ];
    const mapped = Object.fromEntries(maps);
    const articleId = mapped[raw] || (C.articles[raw] ? raw : null);
    if (articleId) showArticle(articleId, { hash: false, scroll: true });
    const el = document.getElementById(raw);
    if (el && el.classList.contains("era-node")) {
      $all(".era-node").forEach((n) => n.classList.remove("is-active"));
      el.classList.add("is-active");
    }
  }

  function initTopics() {
    const T = window.ATLAS_TOPICS;
    const orientation = C
      ? Object.values(C.articles).map((a) => ({
          title: a.title,
          summary: a.summary,
          corpus:
            a.lane === "timeline"
              ? "AI Timeline"
              : a.lane === "players"
              ? "Market Players"
              : a.lane === "policy"
              ? "Global Policy"
              : a.lane === "benchmarks"
              ? "Agent Benchmarks"
              : "Orientation",
          cluster: "Landscape & Orientation",
          lane: a.lane,
          id: a.id,
          kind: "orientation",
          keywords: [a.lane, "timeline", "players", "policy", "benchmarks", "orientation"],
        }))
      : [];
    const rest = T
      ? T.articles.map((a) => ({
          ...a,
          kind: "corpus",
          keywords: a.keywords || [],
        }))
      : [];
    // Prefer orientation hits; dedupe by title
    const seen = new Set();
    const all = [];
    for (const a of orientation.concat(rest)) {
      const key = a.title.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      all.push(a);
    }

    const input = $("#topic-q");
    const out = $("#topic-hits");
    const meta = $("#topic-meta");
    const laneHints = $("#lane-hints");

    function laneForQuery(q) {
      const qq = q.toLowerCase();
      if (!qq) return null;
      if (/timeline|era|history|chronolog/.test(qq)) return "timeline";
      if (/player|lab|hyperscaler|open.?weight|chip|market/.test(qq))
        return "players";
      if (/policy|govern|nist|eu ai|china|uk |privacy|adm/.test(qq))
        return "policy";
      if (/benchmark|eval|leaderboard|swe-bench|mirrorcode/.test(qq))
        return "benchmarks";
      return null;
    }

    function render(q) {
      const qq = (q || "").trim().toLowerCase();
      const lane = laneForQuery(qq);
      if (laneHints) {
        if (lane) {
          const labels = {
            timeline: "Timeline",
            players: "Players",
            policy: "Policy",
            benchmarks: "Benchmarks",
          };
          laneHints.innerHTML = `Orientation match: open the <a href="./${lane}.html"><strong>${labels[lane]}</strong></a> lane for the visual reader—not only keyword hits below.`;
          laneHints.hidden = false;
        } else {
          laneHints.hidden = true;
        }
      }
      let hits = all;
      if (qq) {
        hits = all.filter((a) => {
          const hay = [
            a.title,
            a.summary,
            a.corpus,
            a.cluster,
            (a.keywords || []).join(" "),
            a.lane || "",
          ]
            .join(" ")
            .toLowerCase();
          return hay.includes(qq);
        });
      }
      meta.textContent = qq
        ? `${hits.length} of ${all.length} shown`
        : `${all.length} articles · orientation lanes included`;
      out.innerHTML = hits
        .slice(0, 80)
        .map((a) => {
          let href;
          if (a.kind === "orientation") {
            href = `./${a.lane}.html#${a.id}`;
          } else if (a.html_id) {
            href = `../ai-knowledge-articles/articles.html#${a.html_id}`;
          } else {
            href = `../ai-knowledge-articles/articles.html`;
          }
          return `<a class="hit" href="${href}">
            <div class="hit-title">${escapeHtml(a.title)}</div>
            <div class="hit-meta">${escapeHtml(a.corpus || "")} · ${escapeHtml(
            a.cluster || ""
          )}</div>
            <p class="hit-sum">${escapeHtml(a.summary || "")}</p>
          </a>`;
        })
        .join("");
    }

    if (input) {
      input.addEventListener("input", () => render(input.value));
      const params = new URLSearchParams(location.search);
      if (params.get("q")) {
        input.value = params.get("q");
      }
      render(input.value);
    }
  }

  buildChrome();
  if (page === "timeline") initTimeline();
  if (page === "players") initPlayers();
  if (page === "policy") initPolicy();
  if (page === "benchmarks") initBenchmarks();
  if (page === "topics") initTopics();
  window.addEventListener("hashchange", routeHash);
})();
