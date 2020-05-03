import Donate from '../src/images/donate.png';
import Paw from '../src/images/dog.png';
import School from '../src/images/school.png';
import Maynooth from '../src/images/relax.png';
import Shark from '../src/images/shark_more.png';

import C_one from '../src/images/c1.png';
import C_two from '../src/images/c2.png';
import C_three from '../src/images/c3.png';
import C_four from '../src/images/c4.png';
import C_five from '../src/images/c5.png';
import C_six from '../src/images/c6.png';
import C_seven from '../src/images/c7.png';
import C_eight from '../src/images/c8.png';
import C_nine from '../src/images/c9.png';
import C_ten from '../src/images/c10.png';
import C_vid from '../src/images/C_DemoVideo.mov';

import Homeschool from '../src/images/homeschooling.png';
import GreenBeans from '../src/images/greenBeans.JPG';
import Mushrooms from '../src/images/mushrooms.JPG';
import Scary_movies from '../src/images/scary_movies.png';
import Beach from '../src/images/ocean_city.png';
import Computer from '../src/images/bricks4schoolz.png';
import Create from '../src/images/create.png';
import Cake from '../src/images/cake.png';

import D_one from '../src/images/dd_one.png';
import D_two from '../src/images/dd_two.png';
import D_mov from '../src/images/dd_movie.mp4'

import S_one from '../src/images/scp1.png';
import S_two from '../src/images/scp2.png';
import S_three from '../src/images/scp3.png';
import S_four from '../src/images/scp4.png';
import S_five from '../src/images/scp5.png';
import S_six from '../src/images/scp6.png';
import S_seven from '../src/images/scp7.png';
import S_eight from '../src/images/scp8.png';
import S_nine from '../src/images/scp9.png';
import S_ten from '../src/images/scp10.png';
import S_twelve from '../src/images/scp12.png';
import S_fifteen from '../src/images/scp15.png';

import BS_one from '../src/images/bs1.png';
import BS_two from '../src/images/bs2.png';
import BS_three from '../src/images/bs3.png';
import BS_four from '../src/images/bs4.png';
import BS_five from '../src/images/bs5.png';
import BS_six from '../src/images/bs6.png';
import BS_twelve from '../src/images/bs12.png';
import BS_eighteen from '../src/images/bs18.png';
import BS_nineteen from '../src/images/bs19.png';
import BS_twenty from '../src/images/bs20.png';
import BS_to from '../src/images/bs21.png';
import Space_ts from '../src/images/space37.png';
import Space_ft from '../src/images/space40.png';

import T_one from '../src/images/t1.png';
import T_two from '../src/images/t2.png';
import T_three from '../src/images/t3.png';
import T_four from '../src/images/t4.png';

import M_one from '../src/images/m1.png';
import M_two from '../src/images/m2.png';
import M_three from '../src/images/m3.png';
import M_four from '../src/images/m4.png';
import M_five from '../src/images/m5.png';
import M_six from '../src/images/m6.png';
import M_seven from '../src/images/m7.png';
import M_eight from '../src/images/m8.png';




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
            title: 'Bricks4Schoolz',
            about: 'An interactive computer game designed in order to help children overcome math anxiety. ',
            links: {  design: 'private' },
            images: [Computer],
            icons: [icons.js_i, icons.css_i, icons.html_i, icons.postgres_i, icons.express_i],
            problems: 'One of the challenges of this project was to create a style to the screens that children would be able to recognize and be comfortable with. Through research of popular current cartoons, I was able to gather an understanding of what kind of style a child today might find familiar and engaging. Through A/B testing with children, I was gathered an understanding of game layout and what kids might be expecting from a game',
            methodology: ['A/B Testing', 'UX Interviews'],
            tools: ['Adobe XD', 'ProCreate', 'InVision' ],
            moreInfo: 'Bricks4Schoolz is a program that helps children understand math concepts in a less intimidating environment. Traditionally, the children create a lego build and follow along with the instruction of the teacher. While in build mode, the teacher would ask various math problems that the children answer using the lego blocks they are building with. Through this project, children can learn and build at their own pace without too much involvement from the teacher. The flow of the game is fairly simple. The child is first taken to a screen to choose their planet (or theme). Then they are introduced to their guide (or aide). Afterwards, they are taken through build screens and math questions. Intermittently, there are instructions for help if needed and encouragement through congratulations and achievement screens.',
            main_images: [{source: BS_one},{source: BS_two}, {source: BS_three}, {source: BS_four}, {source: BS_five}, {source: BS_six}, {source: Space_ts}, {source: Space_ft}, {source: BS_twelve}, {source: BS_eighteen}, {source: BS_nineteen}, {source: BS_twenty}, {source: BS_to}]
        },
        {
            title: 'Sponsored Children App',
            about: 'Application created in order to optimize the organization of a non-profit that aids kids with school supplies.',
            links: {  github: 'https://github.com/LizAitken/nonprofit-organization-app' },
            images: [School],
            icons: [icons.js_i, icons.css_i, icons.html_i, icons.postgres_i, icons.express_i],
            problems: 'The biggest complication here was that there were so many moving parts and variables to take into account. As it is based upon a real problem to be solved, the database table was a bit tricky to handle as new situations and questions kept getting thrown in as we went, which would change the restructuring of our tables.',
            methodology: [''],
            tools: ['JavaScript', 'CSS', 'PostgreSQL', 'ExpressJS'],
            moreInfo: '',
            main_images: [{source: S_one}, {source: S_two}, {source: S_three}, {source: S_four}, {source: S_five}, {source: S_six}, {source: S_one}, {source: S_seven}, {source: S_eight}, {source: S_nine}, {source: S_ten}, {source: S_twelve}, {source: S_fifteen}]
        },
        {
            title: 'Cornucopia',
            about: 'Cornucopia is an application created in order to facilitate item donations to non-profit organizations.',
            links: {  github: 'https://github.com/LizAitken/cornucopia'},
            images: [Donate],
            icons: [icons.js_i, icons.css_i, icons.postgres_i, icons.express_i],
            problems: 'All the problems solved here.',
            moreProblems: 'More problems here',
            methodology: [''],
            tools: ['JavaScript', 'CSS', 'PostgreSQL', 'ExpressJS', 'ReactJS'],
            main_images: [{source: C_one}, {source: C_two}, {source: C_three}, {source: C_four}, {source: C_five}, {source: C_six}, {source: C_seven}, {source: C_eight}, {source: C_nine}, {source: C_ten}],
            movie: [C_vid]
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
            main_images: [{source: T_one}, {source: T_two}, {source: T_three}, {source: T_four}]
        },
        {
            title: 'Dangerous Diving',
            about: 'A 2D side-scrolling game immersing the player in an underwater adventure.',
            links: {  github: 'https://github.com/LizAitken/DangerousDiving'},
            images: [Shark],
            icons: [icons.python_i],
            problems: 'All the problems solved here.',
            methodology: [''],
            tools: ['Python'],
            main_images: [{source: D_one}, {source: D_two}],
            movie: [D_mov]
        },
        {
            title: 'Maynooth Furniture',
            about: 'A website design for a furniture store located in the UK. ',
            links: {  design: 'https://www.figma.com/file/LDf9fuTiVG1vBBSgmzFguZ/maynooth?node-id=76%3A3'},
            images: [Maynooth],
            icons: [],
            problems: 'All the problems solved here.',
            methodology: [''],
            tools: ['Figma', 'Photoshop', 'Adobe Illustrator'],
            main_images: [{source: M_one}, {source: M_two}, {source: M_three}, {source: M_four}, {source: M_five}, {source: M_six}, {source: M_seven}, {source: M_eight}]
        },
        {
            title: 'Illustrations',
            about: 'Various digital illustrations created with different technologies. ',
            links: {  design: 'https://www.figma.com/file/LDf9fuTiVG1vBBSgmzFguZ/maynooth?node-id=76%3A3'},
            images: [Create],
            icons: [],
            problems: 'All the problems solved here.',
            methodology: [''],
            tools: ['Figma', 'Photoshop', 'Adobe Illustrator'],
            main_images: [Homeschool, GreenBeans, Mushrooms, Scary_movies, Beach, Cake]
        }
    ]
