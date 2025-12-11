import Daniel_avatar_portfolio from '../assets/images/Daniel_avatar_portfolio.jpg';
import daniel_main from '../assets/images/daniel_main.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://dgalloe.github.io',
    avatar: {
        src: Daniel_avatar_portfolio,
        alt: 'Daniel Gallo'
    },
    title: 'Daniel Gallo',
    subtitle: 'My professional portfolio',
    description: 'My professional portfolio',
    image: {
        src: daniel_main,
        alt: 'Daniel Gallo'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/danielgalloecheverri-financial'
        }
    ],
    hero: {
        title: 'Welcome to My Professional Portfolio!',
        text: `I'm **Daniel Gallo**, a certified Data Analyst from TripleTen Bootcamp with C1-level English proficiency. I specialize in Machine Learning and Python (Pandas, Scikit-learn, NumPy), and work regularly with SQL. I enjoy turning data into actionable insights and building reproducible analysis pipelines.`,
        image: {
            src: daniel_main,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
