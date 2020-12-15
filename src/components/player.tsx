import React, { FC } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export type IPlayer = {
    src: string;
};

export const Player: FC<IPlayer> = ({ src }) => {
    return (
        <AudioPlayer
            autoPlayAfterSrcChange={true}
            src={src}            
        />
    );
};