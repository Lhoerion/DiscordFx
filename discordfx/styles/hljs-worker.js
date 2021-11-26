importScripts('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js');
onmessage = (ev) => {
  postMessage({id: ev.data.id, innerText: self.hljs.highlightAuto(ev.data.innerText)?.value});
};
