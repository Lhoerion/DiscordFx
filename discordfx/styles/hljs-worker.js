importScripts('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js');
onmessage = (event) => {
  postMessage({id: event.data.id, innerText: self.hljs.highlightAuto(event.data.innerText)?.value});
};
