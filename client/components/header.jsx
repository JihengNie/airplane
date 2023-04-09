import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      audioSrc: '/audio/server_public_sounds_Intro.mp3'
    };
    this.handlePlayAudioClick = this.handlePlayAudioClick.bind(this);
  }

  handlePlayAudioClickStop() {
    this.setState({ playing: !this.state.playing });
  }

  handlePlayAudioClick() {
    const audio = new Audio(this.state.audioSrc);
    audio.play();
  }

  render() {
    return (
      <>
        <div className='header-container'>
          <div className='header-item'> LOGO</div>
          <div className='header-item'> Item 1</div>
          <div className='header-item'> Item 2</div>
          <div className='header-item'> Item 3</div>
        </div>
        <div className='test-area'>
          <button onClick={this.handlePlayAudioClick}> Press me </button>
          <button onClick={this.handlePlayAudioClickStop}> Stop </button>
        </div>
      </>
    );
  }
}
