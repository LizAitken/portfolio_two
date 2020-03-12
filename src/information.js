
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
            // images: ['/static/media/help_two.66f298d7.png'],
            images: ["/images/help_two.png"],
            icons: [icons.js_i, icons.css_i, icons.html_i, icons.postgres_i, icons.express_i],
            problems: 'All the problems solved here.',
            methodology: ['My methodology here.'],
            tools: ['JavaScript', 'CSS', 'PostgreSQL', 'ExpressJS'],
            moreInfo: 'More info here'
        },
        {
            title: 'Cornucopia',
            about: 'Cornucopia is an application created in order to facilitate item donations to non-profit organizations.',
            links: {  github: 'https://github.com/LizAitken/cornucopia'},
            images: ['data:image/png;base64,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'],
            icons: [icons.js_i, icons.css_i, icons.postgres_i, icons.express_i],
            problems: 'All the problems solved here.',
            moreProblems: 'More problems here',
            methodology: [],
            tools: ['JavaScript', 'CSS', 'PostgreSQL', 'ExpressJS', 'ReactJS']
        },
        {
            title: 'Traveling Tails',
            about: "Optimizes traveling with one's dogs by giving the user the ability to pinpoint pet friendly locations.",
            links: {  github: 'https://github.com/LizAitken/RefactorTT',
                        liveSite: 'http://ec2-52-14-218-146.us-east-2.compute.amazonaws.com/travelingTails.html'},
            images: ['/static/media/paw.36bf141c.png'],
            icons: [icons.js_i, icons.css_i, icons.html_i],
            problems: 'All the problems solved here.',
            methodology: ['My methodology here.'],
            tools: ['JavaScript', 'CSS', 'HTML']
        },
        {
            title: 'Dangerous Diving',
            about: 'A 2D side-scrolling game immersing the player in an underwater adventure.',
            links: {  github: 'https://github.com/LizAitken/DangerousDiving'},
            images: ['/static/media/diver.048b259e.png'],
            icons: [icons.python_i],
            problems: 'All the problems solved here.',
            methodology: [],
            tools: ['Python']
        }
    ]
