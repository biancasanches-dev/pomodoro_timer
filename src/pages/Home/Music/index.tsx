import { Volume2, VolumeX } from 'lucide-react'
import { useState } from 'react'
import YouTube from 'react-youtube'

import { MusicButton } from './styles'

export default function Music() {
    const [ playMusic, setPlayMusic ] = useState(false)

    const youtubeUrl = 'https://www.youtube.com/watch?v=hj83cwfOF3Y'

    const toglleMusic = () => {
        setPlayMusic(!playMusic)
    }

    const opts = {
        height: '0',
        width: '0',
        playerVars: {
            autoplay: 1,
        },
    }

    return(
        <>
            {playMusic ? (
                <>
                    <YouTube videoId={youtubeUrl.split('v=')[1]} opts={opts} style={{ display: 'none' }}/>
                    <MusicButton onClick={toglleMusic}>
                        <VolumeX size={28} />
                    </MusicButton>
                </>
            ) : (
                <MusicButton onClick={toglleMusic}>
                    <Volume2 size={28} />
                </MusicButton>
            )}
        </>
    )
}