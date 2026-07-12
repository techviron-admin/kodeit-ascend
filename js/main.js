/* ============================================================
   Kodeit Ascend — shared interactions (display-only demo site)
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Marketing header: mobile nav toggle ---------- */
  var navToggle = document.querySelector("[data-nav-toggle]");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var header = document.querySelector(".site-header");
      var open = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- App shell: sidebar toggle (mobile) ---------- */
  var sideToggle = document.querySelector("[data-sidebar-toggle]");
  if (sideToggle) {
    sideToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      document.body.classList.toggle("sidebar-open");
    });
    document.addEventListener("click", function (e) {
      if (
        document.body.classList.contains("sidebar-open") &&
        !e.target.closest(".sidebar") &&
        !e.target.closest("[data-sidebar-toggle]")
      ) {
        document.body.classList.remove("sidebar-open");
      }
    });
  }

  /* ---------- Accordions (Help / FAQ) ---------- */
  document.querySelectorAll(".acc-head").forEach(function (head) {
    head.addEventListener("click", function () {
      var acc = head.closest(".acc");
      var open = acc.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  /* ---------- Tabs (Competency frameworks etc.) ---------- */
  document.querySelectorAll("[data-tabs]").forEach(function (group) {
    var tabs = group.querySelectorAll(".tab");
    var scope = group.closest(".panel") || document;
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          t.classList.remove("is-active");
        });
        tab.classList.add("is-active");
        scope.querySelectorAll("[data-panel]").forEach(function (p) {
          p.classList.toggle(
            "is-active",
            p.getAttribute("data-panel") === tab.getAttribute("data-tab"),
          );
        });
      });
    });
  });

  /* ---------- Filter chips (Question bank) ---------- */
  document.querySelectorAll("[data-chip-filter]").forEach(function (row) {
    var chips = row.querySelectorAll(".chip");
    var listSel = row.getAttribute("data-chip-filter");
    var list = document.querySelector(listSel);
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) {
          c.classList.remove("is-active");
        });
        chip.classList.add("is-active");
        var type = chip.getAttribute("data-filter");
        if (!list) {
          return;
        }
        list.querySelectorAll("[data-type]").forEach(function (card) {
          card.style.display =
            type === "all" || card.getAttribute("data-type") === type
              ? ""
              : "none";
        });
      });
    });
  });

  /* ---------- Visual-only chips (no filtering target) ---------- */
  document
    .querySelectorAll("[data-chip-visual] .chip")
    .forEach(function (chip) {
      chip.addEventListener("click", function () {
        chip
          .closest("[data-chip-visual]")
          .querySelectorAll(".chip")
          .forEach(function (c) {
            c.classList.remove("is-active");
          });
        chip.classList.add("is-active");
      });
    });

  /* ---------- Toggle switches (Profile) ---------- */
  document.querySelectorAll(".switch").forEach(function (sw) {
    sw.addEventListener("click", function () {
      sw.classList.toggle("on");
      sw.setAttribute(
        "aria-checked",
        sw.classList.contains("on") ? "true" : "false",
      );
    });
  });

  /* ---------- Fake action buttons (display-only) ---------- */
  document.querySelectorAll("[data-fake]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var done = btn.getAttribute("data-done") || "Done";
      btn.textContent = "\u2713 " + done;
      btn.disabled = true;
    });
  });

  /* ---------- Fake form submits (newsletter, demo forms) ---------- */
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg =
        form.getAttribute("data-success") || "Thanks! We will be in touch.";
      form.innerHTML =
        '<p class="form-success">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M4 12.5l5 5L20 6.5"/></svg>' +
        "<span></span></p>";
      form.querySelector("span").textContent = msg;
    });
  });
});
