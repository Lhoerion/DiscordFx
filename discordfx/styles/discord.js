// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.

$(function() {
  $('a:not([data-tab])').off("click").on("click", delegateAnchors);
  $(".blackout").on("click", toggleMenu);
  $(".navbar-toggler").on("click", toggleMenu);
});

window.refresh = function (article) {}

function toggleMenu() {
  const el = !this.classList.contains("blackout") ? $(this) : null;
  const x = $(".main-panel");
  const b = $(".blackout");
  el?.toggleClass("active");
  x.toggleClass("expand");
  b.toggleClass("active");
}

var HISTORY_SUPPORT = !!(history && history.pushState);

function scrollIfAnchor(link, pushToHistory) {
  if (!/^#[^ ]+$/.test(link)) return false;
  const match = document.getElementById(link.slice(1));
  if (!match) return false;
  $(".content-column").scrollTop(match.offsetTop);
  if (HISTORY_SUPPORT && pushToHistory) history.pushState({}, document.title, location.pathname + link);
  return true;
}

function delegateAnchors(e) {
  if (!scrollIfAnchor(elem.getAttribute('href'), true)) return;
  e.preventDefault();
}
