export function forceDownload(href) {
    const anchor = document.createElement('a');
    anchor.href = href;
    anchor.download = href;
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
}
