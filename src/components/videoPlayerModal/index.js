import React, { PureComponent } from 'react';
import Style from './style';
import { Icon } from 'antd';
import IntlMessages from 'utils/intlMessages';
import 'video-react/dist/video-react.css';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
 // import VideoPlayer from 'react-video-js-player';
import videojs from 'video.js';
import QualitySelector from '@silvermine/videojs-quality-selector';

export default class VideoPlayerModal extends PureComponent {
    componentDidMount() {
       const noContext = document.getElementById('noContextMenu');
        noContext.addEventListener('contextmenu', e => {
            e.preventDefault();
        });

        // join QualitySelector plugin to videojs
        require('@silvermine/videojs-quality-selector')(videojs);
        videojs.registerPlugin('QualitySelector', QualitySelector);
        // videojs option
        const options = {
            controls: true,
            responsive: true,
            fluid: true,
            autoplay: true,
            playbackRates: true,
            techCanOverridePoster: true,
            textTrackSettings: false,
            preload: "auto",
            allowfullscreen: true
        }

        // define videojs player
        this.player = videojs(this.videoNode, options);
        this.player.src([
            {
                src: !isEmpty(get(this.props.player_url, [0])) && get(get(this.props.player_url, [0]), 'link'),
                type: 'video/mp4',
                label: get(get(this.props.player_url, [0]), 'label'),
                selected: get(get(this.props.player_url, [0]), 'selected'),
            },
            {
                src: !isEmpty(get(this.props.player_url, [1])) && get(get(this.props.player_url, [1]), 'link'),
                type: 'video/mp4',
                label: get(get(this.props.player_url, [1]), 'label'),
                selected: get(get(this.props.player_url, [1]), 'selected'),
            },
            {
                src: !isEmpty(get(this.props.player_url, [2])) && get(get(this.props.player_url, [2]), 'link'),
                type: 'video/mp4',
                label: get(get(this.props.player_url, [2]), 'label'),
                selected: get(get(this.props.player_url, [2]), 'selected'),
            },
            {
                src: !isEmpty(get(this.props.player_url, [3])) && get(get(this.props.player_url, [3]), 'link'),
                type: 'video/mp4',
                label: get(get(this.props.player_url, [3]), 'label'),
                selected: get(get(this.props.player_url, [3]), 'selected'),
            },
        ]);

        // only one selector
        if (isEmpty(this.player.getChild('controlBar').getChild('QualitySelector'))) {
            this.player.getChild('controlBar').addChild('QualitySelector', {});
        }

    }
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose()
        }
    }
    render() {
        const {player_url} = this.props;
        const renderFarm = () => {
            if (player_url) {
                return <div data-vjs-player>
                 <video ref={node => this.videoNode = node} id="node" className="video-js"/>
             </div>

                // <iframe id="video1" width="1160" height="700"
                //
                //                   src={player_url}
                //                  frameBorder="0"
                //                   allowFullScreen
                //               allowTransparency="true"
                //
                // ></iframe>

            } else {
                return (
                    <div className="video-player-modal">
                        <div className="modal-icon">
                            <Icon type="exclamation-circle"/>
                        </div>
                        <div className="modal-text">
                            <h1 className="modal-text-title">
                                <IntlMessages id="videoPlayerModal.title"/>
                            </h1>
                            <h3 className="modal-text-content">
                                <IntlMessages id="videoPlayerModal.content"/>
                            </h3>
                        </div>
                        <div className="youtube-icon">
                            <Icon type="youtube"/>
                        </div>
                    </div>
                );
            }
        };
        return <Style  id="noContextMenu">
            {renderFarm()}
        </Style>;
    }
}
