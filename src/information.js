import Help from '../src/images/help_two.png';
import Heart from '../src/images/heart.png';
import Paw from '../src/images/paw.png';
import Diver from '../src/images/diver.png';
import Ctitle from '../src/images/c_title.png';
import Maynooth from '../src/images/Logo-Maynooth-Option2.png';

    export const icons = {
        js_i : 'devicon-javascript-plain',
        html_i : 'devicon-html5-plain',
        css_i : 'devicon-css3-plain',
        postgres_i : 'devicon-postgresql-plain',
        express_i: 'devicon-express-original',
        mocha_i : 'devicon-mocha-plain',
        python_i : 'devicon-python-plain',
        node_i : 'devicon-nodejs-plain',
        linux_i : 'devicon-linux-plain',
        bootstrap_i : 'devicon-bootstrap-plain',
        git_i : 'devicon-git-plain',
        aws_i : 'devicon-amazonwebservices-original'
    }

    export const project_info = [
        {
            title: 'Sponsored Children App',
            about: 'Application created in order to optimize the organization of a non-profit that aids kids with school supplies.',
            links: {  github: 'https://github.com/LizAitken/nonprofit-organization-app' },
            images: [Help],
            icons: [icons.js_i, icons.css_i, icons.html_i, icons.postgres_i, icons.express_i],
            problems: 'All the problems solved here.',
            methodology: ['My methodology here.'],
            tools: ['JavaScript', 'CSS', 'PostgreSQL', 'ExpressJS'],
            moreInfo: 'More info here',
            main_images: []
        },
        {
            title: 'Cornucopia',
            about: 'Cornucopia is an application created in order to facilitate item donations to non-profit organizations.',
            links: {  github: 'https://github.com/LizAitken/cornucopia'},
            images: [Heart],
            icons: [icons.js_i, icons.css_i, icons.postgres_i, icons.express_i],
            problems: 'All the problems solved here.',
            moreProblems: 'More problems here',
            methodology: [],
            tools: ['JavaScript', 'CSS', 'PostgreSQL', 'ExpressJS', 'ReactJS'],
            main_images: [Ctitle]
        },
        {
            title: 'Traveling Tails',
            about: "Optimizes traveling with one's dogs by giving the user the ability to pinpoint pet friendly locations.",
            links: {  github: 'https://github.com/LizAitken/RefactorTT',
                        liveSite: 'http://ec2-52-14-218-146.us-east-2.compute.amazonaws.com/travelingTails.html'},
            images: [Paw],
            icons: [icons.js_i, icons.css_i, icons.html_i],
            problems: 'All the problems solved here.',
            methodology: ['My methodology here.'],
            tools: ['JavaScript', 'CSS', 'HTML'],
            main_images: []
        },
        {
            title: 'Dangerous Diving',
            about: 'A 2D side-scrolling game immersing the player in an underwater adventure.',
            links: {  github: 'https://github.com/LizAitken/DangerousDiving'},
            images: [Diver],
            icons: [icons.python_i],
            problems: 'All the problems solved here.',
            methodology: [],
            tools: ['Python'],
            main_images: []
        },
        {
            title: 'Maynooth Furniture',
            about: 'A website design for a furniture store located in the UK. ',
            links: {  design: 'https://www.figma.com/file/LDf9fuTiVG1vBBSgmzFguZ/maynooth?node-id=76%3A3'},
            images: [Maynooth],
            icons: [],
            problems: 'All the problems solved here.',
            methodology: [],
            tools: ['Figma', 'Photoshop', 'Adobe Illustrator'],
            main_images: []
        }
    ]
