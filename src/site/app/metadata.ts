import type { SiteMetadata } from '../../types/app.types.js';

const metadata: SiteMetadata = {
    title: 'Emeka Ifeora',
    description: 'Senior software engineer specializing in full-stack development and cloud solutions.',
    keywords: ['software engineer', 'full-stack developer', 'cloud solutions', 'JavaScript', 'TypeScript', 'Node.js', 'React'],
    twitterHandle: '@ifeora_emeka',
    og: {
        type: 'website',
        url: 'https://chukwuemeka.idegin.com/',
        title: 'Emeka Ifeora',
        description: 'Senior software engineer specializing in full-stack development and cloud solutions.',
        image: 'https://chukwuemeka.idegin.com/images/og-preview-image.jpg',
    },
    twitter: {
        card: 'summary_large_image',
        url: 'https://chukwuemeka.idegin.com/',
        title: 'Emeka Ifeora',
        description: 'Senior software engineer specializing in full-stack development and cloud solutions.',
        image: 'https://chukwuemeka.idegin.com/images/twitter-preview-image.jpg',
    },
};

export default metadata;