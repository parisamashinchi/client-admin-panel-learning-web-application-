import styled from 'styled-components';
import { palette } from 'theme/injectGlobal';
import media from 'theme/MediaQuery';

const Style = styled.div`
  .ant-modal-centered:before {
    height:auto
    }
    iframe {
        ${media.bigPhone`
                width:100%
          `}
        ${media.tablet`
            width:100%
        `}
     }
    .video-player-modal {
        position: relative;
        display: flex;
        background: ${palette.lightGreyFiftySixth};
        padding: 200px 280px;
        ${media.desktop`
            padding: 150px 200px;
        `};
        ${media.tablet`
            padding: 150px 0;
            width: 100%;
            justify-content: center;
        `}
        .modal-icon {
            i {
                font-size: 8.5rem;
                svg {
                    fill: ${palette.grey};
                }
            }
        }
        .modal-text {
            margin-right: 20px;
            .modal-text-title {
                color: ${palette.white};
                font-size: 2.5rem;
                margin-bottom: 15px;
            }
            .modal-text-content {
                color: ${palette.white};
                font-size: 1.8rem;
                text-align: right;
            }
            ${media.bigPhone`
                text-align: right;
            `}
        }
        .youtube-icon {
            cursor: pointer;
            position: absolute;
            bottom: 13px;
            left: 6px;
            i {
                font-size: 5.4rem;
                svg {
                    fill: ${palette.grey};
                }
            }
        }
    }
    ${media.tablet`
        div:not([class]) {
            width: auto !important;
            height: auto !important;
            line-height: 0;
        }
    `}
    .vjs-quality-selector {
   .vjs-menu-button {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
   }
   .vjs-icon-placeholder {
      // From video.js font: https://github.com/videojs/font
      font-family: 'VideoJS';
      font-weight: normal;
      font-style: normal;
      &:before {
         content: '\\f110';
      }
   }
}

.vjs-quality-changing {
   .vjs-big-play-button {
      display: none;
   }
   .vjs-control-bar {
      display: flex;
      visibility: visible;
      opacity: 1;
   }
}
    
    .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-modal-dialog, .vjs-modal-dialog .vjs-modal-dialog-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; }

.video-js .vjs-big-play-button .vjs-icon-placeholder:before, .vjs-button > .vjs-icon-placeholder:before {
  text-align: center; }

@font-face {
  font-family: VideoJS;
  src: url(data:application/font-woff;charset=utf-8;base64,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) format("woff");
  font-weight: normal;
  font-style: normal; }

.vjs-icon-play, .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-play:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder:before {
    content: "\\F101"; }

.vjs-icon-play-circle {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-play-circle:before {
    content: "\\F102"; }

.vjs-icon-pause, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-pause:before, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before {
    content: "\\F103"; }

.vjs-icon-volume-mute, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-volume-mute:before, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before {
    content: "\\F104"; }

.vjs-icon-volume-low, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-volume-low:before, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before {
    content: "\\F105"; }

.vjs-icon-volume-mid, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-volume-mid:before, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before {
    content: "\\F106"; }

.vjs-icon-volume-high, .video-js .vjs-mute-control .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-volume-high:before, .video-js .vjs-mute-control .vjs-icon-placeholder:before {
    content: "\\F107"; }

.vjs-icon-fullscreen-enter, .video-js .vjs-fullscreen-control .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-fullscreen-enter:before, .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {
    content: "\\F108"; }

.vjs-icon-fullscreen-exit, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-fullscreen-exit:before, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before {
    content: "\\F109"; }

.vjs-icon-square {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-square:before {
    content: "\\F10A"; }

.vjs-icon-spinner {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-spinner:before {
    content: "\\F10B"; }

.vjs-icon-subtitles, .video-js .vjs-subtitles-button .vjs-icon-placeholder, .video-js .vjs-subs-caps-button .vjs-icon-placeholder,
.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,
.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,
.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,
.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-subtitles:before, .video-js .vjs-subtitles-button .vjs-icon-placeholder:before, .video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,
  .video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,
  .video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,
  .video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,
  .video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before {
    content: "\\F10C"; }

.vjs-icon-captions, .video-js .vjs-captions-button .vjs-icon-placeholder, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,
.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-captions:before, .video-js .vjs-captions-button .vjs-icon-placeholder:before, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,
  .video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before {
    content: "\\F10D"; }

.vjs-icon-chapters, .video-js .vjs-chapters-button .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-chapters:before, .video-js .vjs-chapters-button .vjs-icon-placeholder:before {
    content: "\\F10E"; }

.vjs-icon-share {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-share:before {
    content: "\\F10F"; }

.vjs-icon-cog {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-cog:before {
    content: "\\F110"; }

.vjs-icon-circle, .video-js .vjs-play-progress, .video-js .vjs-volume-level, .vjs-seek-to-live-control .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-circle:before, .video-js .vjs-play-progress:before, .video-js .vjs-volume-level:before, .vjs-seek-to-live-control .vjs-icon-placeholder:before {
    content: "\\F111"; }

.vjs-icon-circle-outline {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-circle-outline:before {
    content: "\\F112"; }

.vjs-icon-circle-inner-circle {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-circle-inner-circle:before {
    content: "\\F113"; }

.vjs-icon-hd {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-hd:before {
    content: "\\F114"; }

.vjs-icon-cancel, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-cancel:before, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before {
    content: "\\F115"; }

.vjs-icon-replay, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-replay:before, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before {
    content: "\\F116"; }

.vjs-icon-facebook {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-facebook:before {
    content: "\\F117"; }

.vjs-icon-gplus {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-gplus:before {
    content: "\\F118"; }

.vjs-icon-linkedin {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-linkedin:before {
    content: "\\F119"; }

.vjs-icon-twitter {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-twitter:before {
    content: "\\F11A"; }

.vjs-icon-tumblr {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-tumblr:before {
    content: "\\F11B"; }

.vjs-icon-pinterest {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-pinterest:before {
    content: "\\F11C"; }

.vjs-icon-audio-description, .video-js .vjs-descriptions-button .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-audio-description:before, .video-js .vjs-descriptions-button .vjs-icon-placeholder:before {
    content: "\\F11D"; }

.vjs-icon-audio, .video-js .vjs-audio-button .vjs-icon-placeholder {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-audio:before, .video-js .vjs-audio-button .vjs-icon-placeholder:before {
    content: "\\F11E"; }

.vjs-icon-next-item {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-next-item:before {
    content: "\\F11F"; }

.vjs-icon-previous-item {
  font-family: VideoJS;
  font-weight: normal;
  font-style: normal; }
  .vjs-icon-previous-item:before {
    content: "\\F120"; }

.video-js {
  display: block;
  vertical-align: top;
  box-sizing: border-box;
  color: #fff;
  background-color: #000;
  position: relative;
  padding: 0;
  font-size: 10px;
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
  word-break: initial;
  height: 651px!important;
    ${media.tablet`
       height: 425px!important;
     `} 
    ${media.phone`
       height: 226px!important;
     `} 
     
  }
  .video-js:-moz-full-screen {
    position: absolute; }
  .video-js:-webkit-full-screen {
    width: 100% !important;
    height: 100% !important; }

.video-js[tabindex="-1"] {
  outline: none; }

.video-js *,
.video-js *:before,
.video-js *:after {
  box-sizing: inherit; }

.video-js ul {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  list-style-position: outside;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0; }

.video-js.vjs-fluid,
.video-js.vjs-16-9,
.video-js.vjs-4-3 {
  width: 100%;
  max-width: 100%;
  height: 680px;
  ${media.phone`
      height: 235px;
  `} 
  }

.video-js.vjs-16-9 {
  padding-top: 56.25%; }

.video-js.vjs-4-3 {
  padding-top: 75%; }

.video-js.vjs-fill {
  width: 100%;
  height: 100%; }

.video-js .vjs-tech {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100%; 
  }

body.vjs-full-window {
  padding: 0;
  margin: 0;
  height: 100%; }

.vjs-full-window .video-js.vjs-fullscreen {
  position: fixed;
  overflow: hidden;
  z-index: 1000;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0; }

.video-js.vjs-fullscreen {
  width: 100% !important;
  height: 100% !important;
  padding-top: 0 !important; }

.video-js.vjs-fullscreen.vjs-user-inactive {
  cursor: none; }

.vjs-hidden {
  display: none !important; }

.vjs-disabled {
  opacity: 0.5;
  cursor: default; }

.video-js .vjs-offscreen {
  height: 1px;
  left: -9999px;
  position: absolute;
  top: 0;
  width: 1px; }

.vjs-lock-showing {
  display: block !important;
  opacity: 1;
  visibility: visible; }

.vjs-no-js {
  padding: 20px;
  color: #fff;
  background-color: #000;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  width: 300px;
  height: 150px;
  margin: 0px auto; }

.vjs-no-js a,
.vjs-no-js a:visited {
  color: #66A8CC; }

.video-js .vjs-big-play-button {
  font-size: 3em;
  line-height: 1.5em;
  height: 1.5em;
  display: block;
  padding: 0;
  cursor: pointer;
  opacity: 1;
  border: 0.06666em solid #fff;
  background-color: #2B333F;
  background-color: rgba(43, 51, 63, 0.7);
  border-radius: 0.3em;
  transition: all 0.4s;
    margin: 0 auto;
    position: relative;
    top: 40%;
    left: 0;
    width: 2.5em!important;
    border: none!important;
    background-color: #68d9a0!important;
   ${media.phone`
    margin: 0 auto;
    position: relative;
    top: 40%!important;
    left: 0!important;
   `}
   }

.vjs-big-play-centered .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-top: -0.75em;
  margin-left: -1.5em; 
  }

.video-js:hover .vjs-big-play-button,
.video-js .vjs-big-play-button:focus {
  border-color: #fff;
  background-color: #73859f;
  background-color: rgba(115, 133, 159, 0.5);
  transition: all 0s; }

.vjs-controls-disabled .vjs-big-play-button,
.vjs-has-started .vjs-big-play-button,
.vjs-using-native-controls .vjs-big-play-button,
.vjs-error .vjs-big-play-button {
  display: none; }

.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button {
  display: block; }

.video-js button {
  background: none;
  border: none;
  color: inherit;
  display: inline-block;
  font-size: inherit;
  line-height: inherit;
  text-transform: none;
  text-decoration: none;
  transition: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; }

.vjs-control .vjs-button {
  width: 100%;
  height: 100%; }

.video-js .vjs-control.vjs-close-button {
  cursor: pointer;
  height: 3em;
  position: absolute;
  right: 0;
  top: 0.5em;
  z-index: 2; }

.video-js .vjs-modal-dialog {
  background: rgba(0, 0, 0, 0.8);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));
  overflow: auto; }

.video-js .vjs-modal-dialog > * {
  box-sizing: border-box; }

.vjs-modal-dialog .vjs-modal-dialog-content {
  font-size: 1.2em;
  line-height: 1.5;
  padding: 20px 24px;
  z-index: 1; }

.vjs-menu-button {
  cursor: pointer; }

.vjs-menu-button.vjs-disabled {
  cursor: default; }

.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu {
  display: none; }

.vjs-menu .vjs-menu-content {
  display: block;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  overflow: auto; }

.vjs-menu .vjs-menu-content > * {
  box-sizing: border-box; }

.vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu {
  display: none; }

.vjs-menu li {
  list-style: none;
  margin: 0;
  padding: 0.2em 0;
  line-height: 1.4em;
  font-size: 1.2em;
  text-align: center;
  text-transform: lowercase; }

.vjs-menu li.vjs-menu-item:focus,
.vjs-menu li.vjs-menu-item:hover,
.js-focus-visible .vjs-menu li.vjs-menu-item:hover {
  background-color: #73859f;
  background-color: rgba(115, 133, 159, 0.5); }

.vjs-menu li.vjs-selected,
.vjs-menu li.vjs-selected:focus,
.vjs-menu li.vjs-selected:hover,
.js-focus-visible .vjs-menu li.vjs-selected:hover {
  background-color: #fff;
  color: #2B333F; }

.vjs-menu li.vjs-menu-title {
  text-align: center;
  text-transform: uppercase;
  font-size: 1em;
  line-height: 2em;
  padding: 0;
  margin: 0 0 0.3em 0;
  font-weight: bold;
  cursor: default; }

.vjs-menu-button-popup .vjs-menu {
  display: none;
  position: absolute;
  bottom: 0;
  width: 10em;
  left: -3em;
  height: 0em;
  margin-bottom: 1.5em;
  border-top-color: rgba(43, 51, 63, 0.7); }

.vjs-menu-button-popup .vjs-menu .vjs-menu-content {
  background-color: #2B333F;
  background-color: rgba(43, 51, 63, 0.7);
  position: absolute;
  width: 100%;
  bottom: 1.5em;
  max-height: 15em; }

.vjs-workinghover .vjs-menu-button-popup:hover .vjs-menu,
.vjs-menu-button-popup .vjs-menu.vjs-lock-showing {
  display: block; }

.video-js .vjs-menu-button-inline {
  transition: all 0.4s;
  overflow: hidden; }

.video-js .vjs-menu-button-inline:before {
  width: 2.222222222em; }

.video-js .vjs-menu-button-inline:hover,
.video-js .vjs-menu-button-inline:focus,
.video-js .vjs-menu-button-inline.vjs-slider-active,
.video-js.vjs-no-flex .vjs-menu-button-inline {
  width: 12em; }

.vjs-menu-button-inline .vjs-menu {
  opacity: 0;
  height: 100%;
  width: auto;
  position: absolute;
  left: 4em;
  top: 0;
  padding: 0;
  margin: 0;
  transition: all 0.4s; }

.vjs-menu-button-inline:hover .vjs-menu,
.vjs-menu-button-inline:focus .vjs-menu,
.vjs-menu-button-inline.vjs-slider-active .vjs-menu {
  display: block;
  opacity: 1; }

.vjs-no-flex .vjs-menu-button-inline .vjs-menu {
  display: block;
  opacity: 1;
  position: relative;
  width: auto; }

.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu,
.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,
.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu {
  width: auto; }

.vjs-menu-button-inline .vjs-menu-content {
  width: auto;
  height: 100%;
  margin: 0;
  overflow: hidden; }

.video-js .vjs-control-bar {
  display: none;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3.0em;
  background-color: #2B333F;
  background-color: rgba(43, 51, 63, 0.7); }

.vjs-has-started .vjs-control-bar {
  display: flex;
  visibility: visible;
  opacity: 1;
  transition: visibility 0.1s, opacity 0.1s; }

.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
  visibility: visible;
  opacity: 0;
  transition: visibility 1s, opacity 1s; }

.vjs-controls-disabled .vjs-control-bar,
.vjs-using-native-controls .vjs-control-bar,
.vjs-error .vjs-control-bar {
  display: none !important; }

.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
  opacity: 1;
  visibility: visible; }

.vjs-has-started.vjs-no-flex .vjs-control-bar {
  display: table; }

.video-js .vjs-control {
  position: relative;
  text-align: center;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 4em;
  flex: none; }

.vjs-button > .vjs-icon-placeholder:before {
  font-size: 1.8em;
  line-height: 1.67; }

.video-js .vjs-control:focus:before,
.video-js .vjs-control:hover:before,
.video-js .vjs-control:focus {
  text-shadow: 0em 0em 1em white; }

.video-js .vjs-control-text {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px; }

.vjs-no-flex .vjs-control {
  display: table-cell;
  vertical-align: middle; }

.video-js .vjs-custom-control-spacer {
  display: none; }

.video-js .vjs-progress-control {
  cursor: pointer;
  flex: auto;
  display: flex;
  align-items: center;
  min-width: 4em;
  touch-action: none; }

.video-js .vjs-progress-control.disabled {
  cursor: default; }

.vjs-live .vjs-progress-control {
  display: none; }

.vjs-liveui .vjs-progress-control {
  display: flex;
  align-items: center; }

.vjs-no-flex .vjs-progress-control {
  width: auto; }

.video-js .vjs-progress-holder {
  flex: auto;
  transition: all 0.2s;
  height: 0.3em; }

.video-js .vjs-progress-control .vjs-progress-holder {
  margin: 0 10px; }

.video-js .vjs-progress-control:hover .vjs-progress-holder {
  font-size: 1.666666666666666666em; }

.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled {
  font-size: 1em; }

.video-js .vjs-progress-holder .vjs-play-progress,
.video-js .vjs-progress-holder .vjs-load-progress,
.video-js .vjs-progress-holder .vjs-load-progress div {
  position: absolute;
  display: block;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 0; }

.video-js .vjs-play-progress {
  background-color: #fff; }
  .video-js .vjs-play-progress:before {
    font-size: 0.9em;
    position: absolute;
    right: -0.5em;
    top: -0.333333333333333em;
    z-index: 1; }

.video-js .vjs-load-progress {
  background: rgba(115, 133, 159, 0.5); }

.video-js .vjs-load-progress div {
  background: rgba(115, 133, 159, 0.75); }

.video-js .vjs-time-tooltip {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.3em;
  color: #000;
  float: right;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  padding: 6px 8px 8px 8px;
  pointer-events: none;
  position: absolute;
  top: -3.4em;
  visibility: hidden;
  z-index: 1; }

.video-js .vjs-progress-holder:focus .vjs-time-tooltip {
  display: none; }

.video-js .vjs-progress-control:hover .vjs-time-tooltip,
.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip {
  display: block;
  font-size: 0.6em;
  visibility: visible; }

.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip {
  font-size: 1em; }

.video-js .vjs-progress-control .vjs-mouse-display {
  display: none;
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: #000;
  z-index: 1; }

.vjs-no-flex .vjs-progress-control .vjs-mouse-display {
  z-index: 0; }

.video-js .vjs-progress-control:hover .vjs-mouse-display {
  display: block; }

.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display {
  visibility: hidden;
  opacity: 0;
  transition: visibility 1s, opacity 1s; }

.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display {
  display: none; }

.vjs-mouse-display .vjs-time-tooltip {
  color: #fff;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.8); }

.video-js .vjs-slider {
  position: relative;
  cursor: pointer;
  padding: 0;
  margin: 0 0.45em 0 0.45em;
  /* iOS Safari */
  -webkit-touch-callout: none;
  /* Safari */
  -webkit-user-select: none;
  /* Konqueror HTML */
  /* Firefox */
  -moz-user-select: none;
  /* Internet Explorer/Edge */
  -ms-user-select: none;
  /* Non-prefixed version, currently supported by Chrome and Opera */
  user-select: none;
  background-color: #73859f;
  background-color: rgba(115, 133, 159, 0.5); }

.video-js .vjs-slider.disabled {
  cursor: default; }

.video-js .vjs-slider:focus {
  text-shadow: 0em 0em 1em white;
  box-shadow: 0 0 1em #fff; }

.video-js .vjs-mute-control {
  cursor: pointer;
  flex: none; }

.video-js .vjs-volume-control {
  cursor: pointer;
  margin-right: 1em;
  display: flex; }

.video-js .vjs-volume-control.vjs-volume-horizontal {
  width: 5em; }

.video-js .vjs-volume-panel .vjs-volume-control {
  visibility: visible;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin-left: -1px; }

.video-js .vjs-volume-panel {
  transition: width 1s; }
  .video-js .vjs-volume-panel:hover .vjs-volume-control,
  .video-js .vjs-volume-panel:active .vjs-volume-control,
  .video-js .vjs-volume-panel:focus .vjs-volume-control,
  .video-js .vjs-volume-panel .vjs-volume-control:hover,
  .video-js .vjs-volume-panel .vjs-volume-control:active,
  .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control,
  .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active {
    visibility: visible;
    opacity: 1;
    position: relative;
    transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s; }
    .video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-horizontal,
    .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,
    .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal,
    .video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-horizontal,
    .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal,
    .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-horizontal,
    .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal {
      width: 5em;
      height: 3em; }
    .video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-vertical,
    .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical,
    .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical,
    .video-js .vjs-volume-panel .vjs-volume-control:hover.vjs-volume-vertical,
    .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical,
    .video-js .vjs-volume-panel .vjs-mute-control:hover ~ .vjs-volume-control.vjs-volume-vertical,
    .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical {
      left: -3.5em; }
  .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active {
    width: 9em;
    transition: width 0.1s; }
  .video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only {
    width: 4em; }

.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {
  height: 8em;
  width: 3em;
  left: -3000em;
  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s; }

.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {
  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s; }

.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {
  width: 5em;
  height: 3em;
  visibility: visible;
  opacity: 1;
  position: relative;
  transition: none; }

.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,
.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {
  position: absolute;
  bottom: 3em;
  left: 0.5em; }

.video-js .vjs-volume-panel {
  display: flex; }

.video-js .vjs-volume-bar {
  margin: 1.35em 0.45em; }

.vjs-volume-bar.vjs-slider-horizontal {
  width: 5em;
  height: 0.3em; }

.vjs-volume-bar.vjs-slider-vertical {
  width: 0.3em;
  height: 5em;
  margin: 1.35em auto; }

.video-js .vjs-volume-level {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff; }
  .video-js .vjs-volume-level:before {
    position: absolute;
    font-size: 0.9em; }

.vjs-slider-vertical .vjs-volume-level {
  width: 0.3em; }
  .vjs-slider-vertical .vjs-volume-level:before {
    top: -0.5em;
    left: -0.3em; }

.vjs-slider-horizontal .vjs-volume-level {
  height: 0.3em; }
  .vjs-slider-horizontal .vjs-volume-level:before {
    top: -0.3em;
    right: -0.5em; }

.video-js .vjs-volume-panel.vjs-volume-panel-vertical {
  width: 4em; }

.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {
  height: 100%; }

.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {
  width: 100%; }

.video-js .vjs-volume-vertical {
  width: 3em;
  height: 8em;
  bottom: 8em;
  background-color: #2B333F;
  background-color: rgba(43, 51, 63, 0.7); }

.video-js .vjs-volume-horizontal .vjs-menu {
  left: -2em; }

.vjs-poster {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  background-color: #000000;
  cursor: pointer;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%; }

.vjs-has-started .vjs-poster {
  display: none; }

.vjs-audio.vjs-has-started .vjs-poster {
  display: block; }

.vjs-using-native-controls .vjs-poster {
  display: none; }

.video-js .vjs-live-control {
  display: flex;
  align-items: flex-start;
  flex: auto;
  font-size: 1em;
  line-height: 3em; }

.vjs-no-flex .vjs-live-control {
  display: table-cell;
  width: auto;
  text-align: left; }

.video-js:not(.vjs-live) .vjs-live-control,
.video-js.vjs-liveui .vjs-live-control {
  display: none; }

.video-js .vjs-seek-to-live-control {
  cursor: pointer;
  flex: none;
  display: inline-flex;
  height: 100%;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-size: 1em;
  line-height: 3em;
  width: auto;
  min-width: 4em; }

.vjs-no-flex .vjs-seek-to-live-control {
  display: table-cell;
  width: auto;
  text-align: left; }

.video-js.vjs-live:not(.vjs-liveui) .vjs-seek-to-live-control,
.video-js:not(.vjs-live) .vjs-seek-to-live-control {
  display: none; }

.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge {
  cursor: auto; }

.vjs-seek-to-live-control .vjs-icon-placeholder {
  margin-right: 0.5em;
  color: #888; }

.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder {
  color: red; }

.video-js .vjs-time-control {
  flex: none;
  font-size: 1em;
  line-height: 3em;
  min-width: 2em;
  width: auto;
  padding-left: 1em;
  padding-right: 1em; }

.vjs-live .vjs-time-control {
  display: none; }

.video-js .vjs-current-time,
.vjs-no-flex .vjs-current-time {
  display: none; }

.video-js .vjs-duration,
.vjs-no-flex .vjs-duration {
  display: none; }

.vjs-time-divider {
  display: none;
  line-height: 3em; }

.vjs-live .vjs-time-divider {
  display: none; }

.video-js .vjs-play-control {
  cursor: pointer; }

.video-js .vjs-play-control .vjs-icon-placeholder {
  flex: none; }

.vjs-text-track-display {
  position: absolute;
  bottom: 3em;
  left: 0;
  right: 0;
  top: 0;
  pointer-events: none; }

.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {
  bottom: 1em; }

.video-js .vjs-text-track {
  font-size: 1.4em;
  text-align: center;
  margin-bottom: 0.1em; }

.vjs-subtitles {
  color: #fff; }

.vjs-captions {
  color: #fc6; }

.vjs-tt-cue {
  display: block; }

video::-webkit-media-text-track-display {
  -webkit-transform: translateY(-3em);
  transform: translateY(-3em); }

.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {
  -webkit-transform: translateY(-1.5em);
  transform: translateY(-1.5em); }

.video-js .vjs-fullscreen-control {
  cursor: pointer;
  flex: none; }

.vjs-playback-rate > .vjs-menu-button,
.vjs-playback-rate .vjs-playback-rate-value {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; }

.vjs-playback-rate .vjs-playback-rate-value {
  pointer-events: none;
  font-size: 1.5em;
  line-height: 2;
  text-align: center; }

.vjs-playback-rate .vjs-menu {
  width: 4em;
  left: 0em; }

.vjs-error .vjs-error-display .vjs-modal-dialog-content {
  font-size: 1.4em;
  text-align: center; }

.vjs-error .vjs-error-display:before {
  color: #fff;
  content: 'X';
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4em;
  left: 0;
  line-height: 1;
  margin-top: -0.5em;
  position: absolute;
  text-shadow: 0.05em 0.05em 0.1em #000;
  text-align: center;
  top: 50%;
  vertical-align: middle;
  width: 100%; }

.vjs-loading-spinner {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  opacity: 0.85;
  text-align: left;
  border: 6px solid rgba(43, 51, 63, 0.7);
  box-sizing: border-box;
  background-clip: padding-box;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  visibility: hidden; }

.vjs-seeking .vjs-loading-spinner,
.vjs-waiting .vjs-loading-spinner {
  display: block;
  -webkit-animation: 0s linear 0.3s forwards vjs-spinner-show;
          animation: 0s linear 0.3s forwards vjs-spinner-show; }

.vjs-loading-spinner:before,
.vjs-loading-spinner:after {
  content: "";
  position: absolute;
  margin: -6px;
  box-sizing: inherit;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  opacity: 1;
  border: inherit;
  border-color: transparent;
  border-top-color: white; }

.vjs-seeking .vjs-loading-spinner:before,
.vjs-seeking .vjs-loading-spinner:after,
.vjs-waiting .vjs-loading-spinner:before,
.vjs-waiting .vjs-loading-spinner:after {
  -webkit-animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;
  animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite; }

.vjs-seeking .vjs-loading-spinner:before,
.vjs-waiting .vjs-loading-spinner:before {
  border-top-color: white; }

.vjs-seeking .vjs-loading-spinner:after,
.vjs-waiting .vjs-loading-spinner:after {
  border-top-color: white;
  -webkit-animation-delay: 0.44s;
  animation-delay: 0.44s; }

@keyframes vjs-spinner-show {
  to {
    visibility: visible; } }

@-webkit-keyframes vjs-spinner-show {
  to {
    visibility: visible; } }

@keyframes vjs-spinner-spin {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@-webkit-keyframes vjs-spinner-spin {
  100% {
    -webkit-transform: rotate(360deg); } }

@keyframes vjs-spinner-fade {
  0% {
    border-top-color: #73859f; }
  20% {
    border-top-color: #73859f; }
  35% {
    border-top-color: white; }
  60% {
    border-top-color: #73859f; }
  100% {
    border-top-color: #73859f; } }

@-webkit-keyframes vjs-spinner-fade {
  0% {
    border-top-color: #73859f; }
  20% {
    border-top-color: #73859f; }
  35% {
    border-top-color: white; }
  60% {
    border-top-color: #73859f; }
  100% {
    border-top-color: #73859f; } }

.vjs-chapters-button .vjs-menu ul {
  width: 24em; }

.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder {
  vertical-align: middle;
  display: inline-block;
  margin-bottom: -0.1em; }

.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {
  font-family: VideoJS;
  content: "\\F10D";
  font-size: 1.5em;
  line-height: inherit; }

.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder {
  vertical-align: middle;
  display: inline-block;
  margin-bottom: -0.1em; }

.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {
  font-family: VideoJS;
  content: " \\F11D";
  font-size: 1.5em;
  line-height: inherit; }

.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-custom-control-spacer {
  flex: auto;
  display: block; }

.video-js.vjs-layout-tiny:not(.vjs-fullscreen).vjs-no-flex .vjs-custom-control-spacer {
  width: auto; }

.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-remaining-time,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-playback-rate, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-progress-control,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-control, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-panel,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-descriptions-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-subtitles-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-subs-caps-button, .video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-audio-button {
  display: none; }

.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-remaining-time,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-playback-rate,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-control, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-panel,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-descriptions-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-subtitles-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-subs-caps-button, .video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-audio-button {
  display: none; }

.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-current-time, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-time-divider, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-duration, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-remaining-time,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-playback-rate,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-mute-control, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-volume-control, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-volume-panel,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-chapters-button, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-descriptions-button, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-captions-button,
.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-subtitles-button, .video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-audio-button {
  display: none; }

.vjs-modal-dialog.vjs-text-track-settings {
  background-color: #2B333F;
  background-color: rgba(43, 51, 63, 0.75);
  color: #fff;
  height: 70%; }

.vjs-text-track-settings .vjs-modal-dialog-content {
  display: table; }

.vjs-text-track-settings .vjs-track-settings-colors,
.vjs-text-track-settings .vjs-track-settings-font,
.vjs-text-track-settings .vjs-track-settings-controls {
  display: table-cell; }

.vjs-text-track-settings .vjs-track-settings-controls {
  text-align: right;
  vertical-align: bottom; }

@supports (display: grid) {
  .vjs-text-track-settings .vjs-modal-dialog-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 20px 24px 0px 24px; }
  .vjs-track-settings-controls .vjs-default-button {
    margin-bottom: 20px; }
  .vjs-text-track-settings .vjs-track-settings-controls {
    grid-column: 1 / -1; }
  .vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,
  .vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content,
  .vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content {
    grid-template-columns: 1fr; } }

.vjs-track-setting > select {
  margin-right: 1em;
  margin-bottom: 0.5em; }

.vjs-text-track-settings fieldset {
  margin: 5px;
  padding: 3px;
  border: none; }

.vjs-text-track-settings fieldset span {
  display: inline-block; }

.vjs-text-track-settings fieldset span > select {
  max-width: 7.3em; }

.vjs-text-track-settings legend {
  color: #fff;
  margin: 0 0 5px 0; }

.vjs-text-track-settings .vjs-label {
  position: absolute;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  display: block;
  margin: 0 0 5px 0;
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden; }

.vjs-track-settings-controls button:focus,
.vjs-track-settings-controls button:active {
  outline-style: solid;
  outline-width: medium;
  background-image: linear-gradient(0deg, #fff 88%, #73859f 100%); }

.vjs-track-settings-controls button:hover {
  color: rgba(43, 51, 63, 0.75); }

.vjs-track-settings-controls button {
  background-color: #fff;
  background-image: linear-gradient(-180deg, #fff 88%, #73859f 100%);
  color: #2B333F;
  cursor: pointer;
  border-radius: 2px; }

.vjs-track-settings-controls .vjs-default-button {
  margin-right: 1em; }

@media print {
  .video-js > *:not(.vjs-tech):not(.vjs-poster) {
    visibility: hidden; } }

.vjs-resize-manager {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  z-index: -1000; }

.js-focus-visible .video-js *:focus:not(.focus-visible) {
  outline: none;
  background: none; }

.video-js *:focus:not(:focus-visible),
.video-js .vjs-menu *:focus:not(:focus-visible) {
  outline: none;
  background: none; }
`;
export default Style;
