function addYouTube() {
   
    var src = document.getElementById('video-link').value;
    src = src.replace(/(.*?)(v=|youtu.be\/)/, '');
    var iframe = document.createElement('iframe');
    iframe.width = 480;
    iframe.height = 271;
    iframe.src = 'https://www.youtube.com/embed/' + src;
    iframe.frameborder = 0;
    document.getElementById('video-container').appendChild(iframe);
}
