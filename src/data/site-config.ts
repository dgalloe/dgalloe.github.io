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
        text: `I'm **Daniel Gallo**, a certified Data Analyst from TripleTen Bootcamp with C1-level English proficiency. Specialized in Machine Learning, Python (Pandas, Scikit-learn, NumPy), SQL, and visualization tools. My experience in management control and financial analysis has provided me with a solid understanding of business metrics, budgets, KPIs, and strategic decision-making. I combine technical skills in data science with expertise in financial interpretation, enabling me to develop predictive models that directly impact profitability and operational efficiency. I am seeking an opportunity as a Financial Specialist where I can leverage my financial experience along with the skills acquired in data science.`,
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
