$(function() {
  $('a:not([href^="http://'+location.hostname+'"],[href^="https://'+location.hostname+'"],[href^="/"],[href^="mailto:"],[class*="footer-link"])').each(function() {
    $(this).append('<span>&nbsp;<i class="fa fa-external-link"></i></span>');
  });
  $('a[href^="mailto:"]').each(function() {
    this.href = this.href.replace('arroba', '@').replace(/ponto/g, '.');
  });
});
