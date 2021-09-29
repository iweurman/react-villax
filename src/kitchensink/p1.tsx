import React from 'react';
import { Parallax } from '../index';
import image4 from '../assets/4.jpg';
import image5 from '../assets/3.jpg';

const video1 =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4';

const style = {
    backgroundColor: '#000',
    color: 'white',
    textAlign: 'center' as const,
};

const wrapperStyle = {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    minHeight: '100vh',
};

const contentStyle = {
    maxWidth: 500,
    fontSize: 20,
};

const PageOne = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return (
        <div style={style}>
            <Parallax bgImage={image4} strength={200} bgImageStyle={{ opacity: 0.6 }}>
                <div style={wrapperStyle}>
                    <div style={contentStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo debitis
                        sapiente ullam recusandae, maxime consequuntur accusamus error suscipit amet
                        minima non iure obcaecati necessitatibus saepe quos voluptas, veniam quae
                        adipisci.
                    </div>
                </div>
            </Parallax>
            <Parallax bgVideo={video1} strength={200} bgVideoStyle={{ opacity: 0.6 }}>
                <div style={wrapperStyle}>
                    <div style={contentStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo debitis
                        sapiente ullam recusandae, maxime consequuntur accusamus error suscipit amet
                        minima non iure obcaecati necessitatibus saepe quos voluptas, veniam quae
                        adipisci.
                    </div>
                </div>
            </Parallax>
            <Parallax bgImage={image5} strength={200} bgImageStyle={{ opacity: 0.6 }}>
                <div style={wrapperStyle}>
                    <div style={contentStyle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum amet
                        dolor natus blanditiis quis facere eum dolore repellat. Obcaecati corporis
                        illo ullam. Ex autem amet itaque, asperiores temporibus fugit!
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default PageOne;
