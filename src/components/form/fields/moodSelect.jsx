import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../style/theme';

const THUNDERSTRUCK = 'thunderstruck';
const INVIGORATED = 'invigorated';
const DAZZLED = 'dazzled';
const ANTICIPATORY = 'anticipatory';
const CONTEMPLATIVE = 'contemplative';
const SOOTHING = 'soothing';
const SLEEPY = 'sleepy';
const SERENE = 'serene';
const RELAXED = 'relaxed';
const SATISFIED = 'satisfied';
const MERRY = 'merry';
const DELIGHTED = 'delighted';

const moods = [
    THUNDERSTRUCK,
    INVIGORATED,
    DAZZLED,
    ANTICIPATORY,
    CONTEMPLATIVE,
    SOOTHING,
    SLEEPY,
    SERENE,
    RELAXED,
    SATISFIED,
    MERRY,
    DELIGHTED
];

const Wrap = styled.div`
    font-family: ${p => p.theme.main.font};
    user-select: none;

    g {
        cursor: ${({ readonly }) => (readonly ? 'default' : 'pointer')};
    }

    path {
        transition: opacity 0.2s linear;
    }

    text {
        font-family: ${p => p.theme.main.font};
    }
`;

const Radio = styled.input`
    display: none;
`;

const handleClick = (className, setSelected, parentOnClick) => {
    const mood = moods.find(obj => className.includes(obj));
    parentOnClick(mood);
    setSelected(mood);
};

const MoodPath = ({
    d,
    className,
    fill,
    transform,
    opacity = 1,
    selected,
    adjacent = [],
    setSelected,
    parentOnClick
}) => {
    const pathProps = {
        onClick: () => handleClick(className, setSelected, parentOnClick),
        d,
        className,
        fill,
        transform,
        opacity
    };
    if (className.includes('selected')) {
        if (className.includes(selected)) {
            return <path {...pathProps} />;
        }
        return <path {...{ ...pathProps, ...{ opacity: 0 } }} />;
        // return null;
    }
    if (className.includes('adjacent')) {
        if (adjacent.includes(selected)) {
            return <path {...pathProps} />;
        }
        return <path {...{ ...pathProps, ...{ opacity: 0 } }} />;
        // return null;
    }
    return <path {...pathProps} />;
};

const MoodSelector = ({ readonly = false, defaultValue = null, onMoodClick = () => {} }) => {
    const [selected, setSelected] = useState(defaultValue);
    const passToAll = {
        setSelected,
        selected,
        parentOnClick: onMoodClick
    };
    if (readonly === true) {
        passToAll.parentOnClick = () => {};
        passToAll.setSelected = () => {};
    }
    return (
        <Wrap readonly={readonly}>
            <svg width="342px" height="241px" viewBox="0 0 342 241" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>mood-selector</title>
                <g className="mood-selector" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <MoodPath
                        {...passToAll}
                        d="M143.868238,16.0795885 C162.206084,16.0795885 179.391072,21.0155573 194.167073,29.6313653 L179.077662,55.5659719 C168.734407,49.53482 156.704829,46.0795885 143.868238,46.0795885 L143.868238,16.0795885 L143.868238,16.0795885 Z"
                        className="thunderstruck-adjacent"
                        fill="#E83948"
                        transform="translate(169.017656, 35.822780) rotate(330.000000) translate(-169.017656, -35.822780) "
                        adjacent={[INVIGORATED, DAZZLED]}
                    />

                    <MoodPath
                        {...passToAll}
                        d="M142.449798,10.7858995 C161.704354,10.7858995 179.748433,15.9685687 195.263136,25.0150088 L177.659223,55.2722829 C167.315968,49.2411309 155.286389,45.7858995 142.449798,45.7858995 L142.449798,10.7858995 L142.449798,10.7858995 Z"
                        className="thunderstruck-selected"
                        fill="#E83948"
                        transform="translate(168.856467, 33.029091) rotate(330.000000) translate(-168.856467, -33.029091) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M143.868238,16.0795885 C162.206084,16.0795885 179.391072,21.0155573 194.167073,29.6313653 L179.077662,55.5659719 C168.734407,49.53482 156.704829,46.0795885 143.868238,46.0795885 L143.868238,16.0795885 L143.868238,16.0795885 Z"
                        className="thunderstruck-inactive"
                        fill="#E83948"
                        opacity="0.302818"
                        transform="translate(169.017656, 35.822780) rotate(330.000000) translate(-169.017656, -35.822780) "
                    />
                    <MoodPath
                        {...passToAll}
                        adjacent={[THUNDERSTRUCK, ANTICIPATORY]}
                        d="M103.82278,36.9823443 C122.160626,36.9823443 139.345614,41.918313 154.121615,50.5341211 L139.032204,76.4687277 C128.688949,70.4375758 116.659371,66.9823443 103.82278,66.9823443 L103.82278,36.9823443 L103.82278,36.9823443 Z"
                        className="dazzled-adjacent"
                        fill="#C5037E"
                        transform="translate(128.972198, 56.725536) rotate(300.000000) translate(-128.972198, -56.725536) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M101.029091,32.1435329 C120.283647,32.1435329 138.327726,37.3262022 153.842428,46.3726422 L136.238515,76.6299163 C125.89526,70.5987644 113.865682,67.1435329 101.029091,67.1435329 L101.029091,32.1435329 L101.029091,32.1435329 Z"
                        className="dazzled-selected"
                        fill="#C5037E"
                        transform="translate(127.435760, 54.386725) rotate(300.000000) translate(-127.435760, -54.386725) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M103.82278,36.9823443 C122.160626,36.9823443 139.345614,41.918313 154.121615,50.5341211 L139.032204,76.4687277 C128.688949,70.4375758 116.659371,66.9823443 103.82278,66.9823443 L103.82278,36.9823443 L103.82278,36.9823443 Z"
                        className="dazzled-inactive"
                        fill="#C5037E"
                        opacity="0.302818"
                        transform="translate(128.972198, 56.725536) rotate(300.000000) translate(-128.972198, -56.725536) "
                    />
                    <MoodPath
                        {...passToAll}
                        adjacent={[CONTEMPLATIVE, DAZZLED]}
                        d="M79.5937742,75.1073908 C97.9316196,75.1073908 115.116608,80.0433595 129.892609,88.6591676 L114.803198,114.593774 C104.459943,108.562622 92.4303651,105.107391 79.5937742,105.107391 L79.5937742,75.1073908 L79.5937742,75.1073908 Z"
                        className="anticipatory-adjacent"
                        fill="#6D398B"
                        transform="translate(104.743192, 94.850583) rotate(270.000000) translate(-104.743192, -94.850583) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M75.8365231,71.3501397 C95.091079,71.3501397 113.135158,76.532809 128.64986,85.579249 L111.045947,115.836523 C100.702692,109.805371 88.673114,106.35014 75.8365231,106.35014 L75.8365231,71.3501397 L75.8365231,71.3501397 Z"
                        className="anticipatory-selected"
                        fill="#6D398B"
                        transform="translate(102.243192, 93.593331) rotate(270.000000) translate(-102.243192, -93.593331) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M79.5937742,75.1073908 C97.9316196,75.1073908 115.116608,80.0433595 129.892609,88.6591676 L114.803198,114.593774 C104.459943,108.562622 92.4303651,105.107391 79.5937742,105.107391 L79.5937742,75.1073908 L79.5937742,75.1073908 Z"
                        className="anticipatory-inactive"
                        fill="#6D398B"
                        opacity="0.302818"
                        transform="translate(104.743192, 94.850583) rotate(270.000000) translate(-104.743192, -94.850583) "
                    />
                    <MoodPath
                        {...passToAll}
                        adjacent={[ANTICIPATORY, SOOTHING]}
                        d="M77.6733627,120.239153 C96.0112082,120.239153 113.196196,125.175121 127.972198,133.790929 L112.882787,159.725536 C102.539532,153.694384 90.5099536,150.239153 77.6733627,150.239153 L77.6733627,120.239153 L77.6733627,120.239153 Z"
                        className="contemplative-adjacent"
                        fill="#454E98"
                        transform="translate(102.822780, 139.982344) rotate(240.000000) translate(-102.822780, -139.982344) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M73.6231751,117.900776 C92.8773159,117.900776 110.921032,123.083222 126.435509,132.1293 L108.832599,162.387159 C98.4893444,156.356007 86.459766,152.900776 73.6231751,152.900776 L73.6231751,117.900776 L73.6231751,117.900776 Z"
                        className="contemplative-selected"
                        fill="#454E98"
                        transform="translate(100.029342, 140.143967) rotate(240.000000) translate(-100.029342, -140.143967) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M77.6733627,120.239153 C96.0112082,120.239153 113.196196,125.175121 127.972198,133.790929 L112.882787,159.725536 C102.539532,153.694384 90.5099536,150.239153 77.6733627,150.239153 L77.6733627,120.239153 L77.6733627,120.239153 Z"
                        className="contemplative-inactive"
                        fill="#454E98"
                        opacity="0.302818"
                        transform="translate(102.822780, 139.982344) rotate(240.000000) translate(-102.822780, -139.982344) "
                    />
                    <MoodPath
                        {...passToAll}
                        adjacent={[CONTEMPLATIVE, SLEEPY]}
                        d="M98.5761185,160.284611 C116.913964,160.284611 134.098952,165.220579 148.874954,173.836387 L133.785543,199.770994 C123.442288,193.739842 111.412709,190.284611 98.5761185,190.284611 L98.5761185,160.284611 L98.5761185,160.284611 Z"
                        className="soothing-adjacent"
                        fill="#2B70B1"
                        transform="translate(123.725536, 180.027802) rotate(210.000000) translate(-123.725536, -180.027802) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M94.980056,159.321049 C114.234612,159.321049 132.27869,164.503718 147.793393,173.550158 L130.18948,203.807432 C119.846225,197.77628 107.816647,194.321049 94.980056,194.321049 L94.980056,159.321049 L94.980056,159.321049 Z"
                        className="soothing-selected"
                        fill="#2B70B1"
                        transform="translate(121.386725, 181.564240) rotate(210.000000) translate(-121.386725, -181.564240) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M98.5761185,160.284611 C116.913964,160.284611 134.098952,165.220579 148.874954,173.836387 L133.785543,199.770994 C123.442288,193.739842 111.412709,190.284611 98.5761185,190.284611 L98.5761185,160.284611 L98.5761185,160.284611 Z"
                        className="soothing-inactive"
                        fill="#2B70B1"
                        opacity="0.302818"
                        transform="translate(123.725536, 180.027802) rotate(210.000000) translate(-123.725536, -180.027802) "
                    />
                    <MoodPath
                        {...passToAll}
                        adjacent={[SERENE, SOOTHING]}
                        d="M136.701165,184.513617 C155.03901,184.513617 172.223999,189.449585 187,198.065393 L171.910589,224 C161.567334,217.968848 149.537756,214.513617 136.701165,214.513617 L136.701165,184.513617 L136.701165,184.513617 Z"
                        className="sleepy-adjacent"
                        fill="#30A4C5"
                        transform="translate(161.850583, 204.256808) rotate(180.000000) translate(-161.850583, -204.256808) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M134.187666,184.514201 C153.441807,184.514201 171.485523,189.696647 187,198.742725 L169.396088,229 C159.053058,222.969209 147.023842,219.514201 134.187666,219.514201 L134.187666,184.514201 L134.187666,184.514201 Z"
                        className="sleepy-selected"
                        fill="#30A4C5"
                        transform="translate(160.593833, 206.757101) rotate(180.000000) translate(-160.593833, -206.757101) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M136.701165,184.513617 C155.03901,184.513617 172.223999,189.449585 187,198.065393 L171.910589,224 C161.567334,217.968848 149.537756,214.513617 136.701165,214.513617 L136.701165,184.513617 L136.701165,184.513617 Z"
                        className="sleepy-inactive"
                        fill="#30A4C5"
                        opacity="0.302818"
                        transform="translate(161.850583, 204.256808) rotate(180.000000) translate(-161.850583, -204.256808) "
                    />
                    <MoodPath
                        {...passToAll}
                        adjacent={[RELAXED, SLEEPY]}
                        d="M181.832927,186.434028 C200.170772,186.434028 217.35576,191.369997 232.131762,199.985805 L217.042351,225.920411 C206.699096,219.88926 194.669518,216.434028 181.832927,216.434028 L181.832927,186.434028 L181.832927,186.434028 Z"
                        className="serene-adjacent"
                        fill="#2C8D5A"
                        transform="translate(206.982344, 206.177220) rotate(150.000000) translate(-206.982344, -206.177220) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M180.736864,186.727717 C199.99142,186.727717 218.035499,191.910386 233.550202,200.956826 L215.946288,231.214101 C205.603034,225.182949 193.573455,221.727717 180.736864,221.727717 L180.736864,186.727717 L180.736864,186.727717 Z"
                        className="serene-selected"
                        fill="#2C8D5A"
                        transform="translate(207.143533, 208.970909) rotate(150.000000) translate(-207.143533, -208.970909) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M181.832927,186.434028 C200.170772,186.434028 217.35576,191.369997 232.131762,199.985805 L217.042351,225.920411 C206.699096,219.88926 194.669518,216.434028 181.832927,216.434028 L181.832927,186.434028 L181.832927,186.434028 Z"
                        className="serene-inactive"
                        fill="#2C8D5A"
                        opacity="0.302818"
                        transform="translate(206.982344, 206.177220) rotate(150.000000) translate(-206.982344, -206.177220) "
                    />
                    <MoodPath
                        {...passToAll}
                        adjacent={[SERENE, SATISFIED]}
                        d="M221.878385,165.531272 C240.21623,165.531272 257.401218,170.467241 272.17722,179.083049 L257.087809,205.017656 C246.744554,198.986504 234.714976,195.531272 221.878385,195.531272 L221.878385,165.531272 L221.878385,165.531272 Z"
                        className="relaxed-adjacent"
                        fill="#7CC530"
                        transform="translate(247.027802, 185.274464) rotate(120.000000) translate(-247.027802, -185.274464) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M222.157572,165.370084 C241.412127,165.370084 259.456206,170.552753 274.970909,179.599193 L257.366996,209.856467 C247.023741,203.825315 234.994163,200.370084 222.157572,200.370084 L222.157572,165.370084 L222.157572,165.370084 Z"
                        className="relaxed-selected"
                        fill="#7CC530"
                        transform="translate(248.564240, 187.613275) rotate(120.000000) translate(-248.564240, -187.613275) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M221.878385,165.531272 C240.21623,165.531272 257.401218,170.467241 272.17722,179.083049 L257.087809,205.017656 C246.744554,198.986504 234.714976,195.531272 221.878385,195.531272 L221.878385,165.531272 L221.878385,165.531272 Z"
                        className="relaxed-inactive"
                        fill="#7CC530"
                        opacity="0.302818"
                        transform="translate(247.027802, 185.274464) rotate(120.000000) translate(-247.027802, -185.274464) "
                    />
                    <MoodPath
                        {...passToAll}
                        adjacent={[RELAXED, MERRY]}
                        d="M246.107391,127.406226 C264.445236,127.406226 281.630224,132.342195 296.406226,140.958003 L281.316815,166.892609 C270.97356,160.861457 258.943982,157.406226 246.107391,157.406226 L246.107391,127.406226 L246.107391,127.406226 Z"
                        className="satisfied-adjacent"
                        fill="#FFCE01"
                        transform="translate(271.256808, 147.149417) rotate(90.000000) translate(-271.256808, -147.149417) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M247.35014,126.163477 C266.604696,126.163477 284.648774,131.346146 300.163477,140.392586 L282.559564,170.64986 C272.216309,164.618708 260.186731,161.163477 247.35014,161.163477 L247.35014,126.163477 L247.35014,126.163477 Z"
                        className="satisfied-selected"
                        fill="#FFCE01"
                        transform="translate(273.756808, 148.406669) rotate(90.000000) translate(-273.756808, -148.406669) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M246.107391,127.406226 C264.445236,127.406226 281.630224,132.342195 296.406226,140.958003 L281.316815,166.892609 C270.97356,160.861457 258.943982,157.406226 246.107391,157.406226 L246.107391,127.406226 L246.107391,127.406226 Z"
                        className="satisfied-inactive"
                        fill="#FFCE01"
                        opacity="0.302818"
                        transform="translate(271.256808, 147.149417) rotate(90.000000) translate(-271.256808, -147.149417) "
                    />
                    <MoodPath
                        {...passToAll}
                        adjacent={[DELIGHTED, SATISFIED]}
                        d="M248.027802,82.274464 C266.365648,82.274464 283.550636,87.2104327 298.326637,95.8262407 L283.237226,121.760847 C272.893972,115.729695 260.864393,112.274464 248.027802,112.274464 L248.027802,82.274464 L248.027802,82.274464 Z"
                        className="merry-adjacent"
                        fill="#F9BD45"
                        transform="translate(273.177220, 102.017656) rotate(60.000000) translate(-273.177220, -102.017656) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M249.564744,79.6129871 C268.818885,79.6129871 286.862601,84.7954329 302.377078,93.8415113 L284.773166,124.098786 C274.430136,118.067995 262.40092,114.612987 249.564744,114.612987 L249.564744,79.6129871 L249.564744,79.6129871 Z"
                        className="merry-selected"
                        fill="#F9BD45"
                        transform="translate(275.970911, 101.855886) rotate(60.000000) translate(-275.970911, -101.855886) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M248.027802,82.274464 C266.365648,82.274464 283.550636,87.2104327 298.326637,95.8262407 L283.237226,121.760847 C272.893972,115.729695 260.864393,112.274464 248.027802,112.274464 L248.027802,82.274464 L248.027802,82.274464 Z"
                        className="merry-inactive"
                        fill="#F9BD45"
                        opacity="0.302818"
                        transform="translate(273.177220, 102.017656) rotate(60.000000) translate(-273.177220, -102.017656) "
                    />
                    <MoodPath
                        {...passToAll}
                        adjacent={[MERRY, INVIGORATED]}
                        d="M227.125046,42.229006 C245.462892,42.229006 262.64788,47.1649747 277.423881,55.7807828 L262.334471,81.7153894 C251.991216,75.6842375 239.961637,72.229006 227.125046,72.229006 L227.125046,42.229006 L227.125046,42.229006 Z"
                        className="delighted-adjacent"
                        fill="#F7823B"
                        transform="translate(252.274464, 61.972198) rotate(30.000000) translate(-252.274464, -61.972198) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M228.206607,38.1925681 C247.461163,38.1925681 265.505241,43.3752373 281.019944,52.4216774 L263.416031,82.6789515 C253.072776,76.6477995 241.043198,73.1925681 228.206607,73.1925681 L228.206607,38.1925681 L228.206607,38.1925681 Z"
                        className="delighted-selected"
                        fill="#F7823B"
                        transform="translate(254.613275, 60.435760) rotate(30.000000) translate(-254.613275, -60.435760) "
                    />
                    <MoodPath
                        {...passToAll}
                        d="M227.125046,42.229006 C245.462892,42.229006 262.64788,47.1649747 277.423881,55.7807828 L262.334471,81.7153894 C251.991216,75.6842375 239.961637,72.229006 227.125046,72.229006 L227.125046,42.229006 L227.125046,42.229006 Z"
                        className="delighted-inactive"
                        fill="#F7823B"
                        opacity="0.302818"
                        transform="translate(252.274464, 61.972198) rotate(30.000000) translate(-252.274464, -61.972198) "
                    />
                    <MoodPath
                        {...passToAll}
                        adjacent={[DELIGHTED, THUNDERSTRUCK]}
                        d="M189,18 C207.337845,18 224.522834,22.9359687 239.298835,31.5517767 L224.209424,57.4863834 C213.866169,51.4552315 201.836591,48 189,48 L189,18 L189,18 Z"
                        className="invigorated-adjacent"
                        fill="#EC611D"
                    />
                    <MoodPath
                        {...passToAll}
                        d="M189,13 C208.254556,13 226.298634,18.1826693 241.813337,27.2291093 L224.209424,57.4863834 C213.866169,51.4552315 201.836591,48 189,48 L189,13 L189,13 Z"
                        className="invigorated-selected"
                        fill="#EC611D"
                    />
                    <MoodPath
                        {...passToAll}
                        d="M189,18 C207.337845,18 224.522834,22.9359687 239.298835,31.5517767 L224.209424,57.4863834 C213.866169,51.4552315 201.836591,48 189,48 L189,18 L189,18 Z"
                        className="invigorated-inactive"
                        fill="#EC611D"
                        opacity="0.302818"
                    />
                    <g className="labels" fontFamily="MuseoSans-500, Museo Sans" fontSize="12" fontWeight="normal">
                        <text className="thunderstruck-label" fill="#E83948">
                            <tspan x="88.64" y="11">
                                Thunderstruck
                            </tspan>
                        </text>
                        <text className="dazzled-label" fill="#C5037E">
                            <tspan x="57.324" y="42">
                                Dazzled
                            </tspan>
                        </text>
                        <text className="anticipatory-label" fill="#6D398B">
                            <tspan x="14.404" y="91">
                                Anticipatory
                            </tspan>
                        </text>
                        <text className="contemplative-label" fill="#454E98">
                            <tspan x="0.04" y="148">
                                Contemplative
                            </tspan>
                        </text>
                        <text className="soothing-label" fill="#2B70B1">
                            <tspan x="51.6" y="200">
                                Soothing
                            </tspan>
                        </text>
                        <text className="sleepy-label" fill="#30A4C5">
                            <tspan x="133.628" y="238">
                                Sleepy
                            </tspan>
                        </text>
                        <text className="serene-label" fill="#2C8D5A">
                            <tspan x="214" y="238">
                                Serene
                            </tspan>
                        </text>
                        <text className="relaxed-label" fill="#7CC530">
                            <tspan x="270" y="200">
                                Relaxed
                            </tspan>
                        </text>
                        <text className="satisfied-label" fill="#FFCE01">
                            <tspan x="295" y="148">
                                Satisfied
                            </tspan>
                        </text>
                        <text className="merry-label" fill="#F9BD45">
                            <tspan x="296" y="91">
                                Merry
                            </tspan>
                        </text>
                        <text className="delighted-label" fill="#F7823B">
                            <tspan x="270" y="42">
                                Delighted
                            </tspan>
                        </text>
                        <text className="invigorated-label" fill="#EC611D">
                            <tspan x="215" y="11">
                                Invigorated
                            </tspan>
                        </text>
                    </g>
                </g>
            </svg>
            {moods.map(obj => (
                <Radio checked={selected === obj} type="radio" id="html" name="mood" value={obj} />
            ))}
        </Wrap>
    );
};

export default MoodSelector;
