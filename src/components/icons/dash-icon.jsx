import React from 'react';

const dashIcon = () => (<svg className='icon dash-icon' width='22' height='20' viewBox='0 0 22 20'
xmlns='http://www.w3.org/2000/svg'>
    <path d='M18.751538,3.18960131 C23.0828207,7.7298675 23.0828207,15.0810057 18.751538,19.6212719 C18.3358886,20.0527795 17.6892526,20.1237614 17.1970246,19.7919123 L14.5581903,17.9926595 C14.2288501,17.7678987 14.0225796,17.3915102 14.003582,16.980648 C13.9845845,16.5697858 14.1551664,16.1743304 14.4622327,15.9173706 C14.8816835,15.5533925 15.4789078,15.517781 15.935182,15.829541 L17.662419,17.0064581 C20.5474042,13.1842644 20.016867,7.65787429 16.4629489,4.51206472 C13.240611,1.69423858 8.55180478,1.69423858 5.32946688,4.51206472 C1.77554875,7.65787429 1.24501158,13.1842644 4.12999672,17.0064581 L5.85963269,15.829541 C6.31953459,15.5119442 6.92416585,15.5476485 7.34697568,15.9173706 C7.64887137,16.1765458 7.81464158,16.570687 7.793319,16.9786125 C7.77199641,17.386538 7.56613312,17.7594232 7.23902337,17.9826218 L4.60018902,19.7818747 C4.10818455,20.114703 3.46091203,20.0436513 3.04567569,19.6112342 C-1.09516788,15.0412098 -1.00233924,7.85249359 3.25499839,3.40113431 C7.51233602,-1.05022497 14.3846086,-1.14403382 18.751538,3.18960131 Z M16.498933,12.559769 C16.4209603,13.0044245 16.7014817,13.431293 17.126286,13.51441 C17.5510903,13.597527 17.9601437,13.3055802 18.0410854,12.8615057 C18.1220272,12.4174311 17.8443647,11.9885221 17.4201261,11.9023014 C17.2144959,11.8605099 17.0014283,11.9064845 16.8283923,12.0299826 C16.6553562,12.1534807 16.5367267,12.3442427 16.498933,12.559769 Z M5.61973865,9.1193566 C5.75422123,8.78556935 5.66357655,8.39902944 5.39669713,8.16823133 C5.12981772,7.93743322 4.74984282,7.91697992 4.46172581,8.11790365 C4.17360879,8.31882739 4.04551338,8.69359295 4.14653251,9.0400568 C4.24755164,9.38652065 4.55378588,9.62271519 4.90005656,9.62124025 C5.21441519,9.61990124 5.49764989,9.42238227 5.61973865,9.1193566 Z M4.37468863,11.9248862 C3.97767131,12.0055534 3.70435583,12.3887378 3.74349161,12.8098153 C3.78262738,13.2308928 4.12138528,13.5518295 4.52582187,13.5509892 C4.57735195,13.5513567 4.62878717,13.5463125 4.67935405,13.5359327 C5.1037693,13.4475908 5.37963364,13.0164221 5.29588171,12.5723161 C5.25587139,12.3586374 5.13631501,12.1703535 4.96353773,12.0489227 C4.79076045,11.9274919 4.57892972,11.8828714 4.37468863,11.9248862 Z M6.85519292,5.07417441 C6.49732736,5.32672103 6.40177931,5.83426944 6.64138955,6.20989164 C6.88099978,6.58551383 7.36571242,6.68803477 7.72600825,6.43929793 C7.96070813,6.27726855 8.094543,5.99622163 8.07680016,5.70265145 C8.05905732,5.40908127 7.89245138,5.14790341 7.64011266,5.01808337 C7.38777394,4.88826334 7.0883097,4.90966331 6.85519292,5.07417441 Z M15.1579254,6.20592203 C15.3339928,5.92966512 15.3335627,5.56964562 15.1568358,5.29384987 C14.9801088,5.01805412 14.6619166,4.88083944 14.3507287,4.94623068 C14.0395408,5.01162191 13.79669,5.26673092 13.7354914,5.59252297 C13.6742928,5.91831502 13.8068082,6.25057888 14.0712054,6.43427909 C14.2439308,6.55589799 14.4559846,6.60019499 14.6601169,6.55729981 C14.8642492,6.51440464 15.0434988,6.38788138 15.1579254,6.20592203 Z M11.6170894,4.92360931 C11.7168716,4.67131218 11.6901535,4.38362419 11.5458127,4.15613553 C11.401472,3.92864686 11.1584168,3.79115795 10.8974074,3.78935227 C10.5030516,3.7866241 10.1680629,4.09057465 10.1149209,4.49933799 C10.0617789,4.90810132 10.3070056,5.29459152 10.6877359,5.40212471 C11.0684663,5.5096579 11.4663299,5.30480164 11.6170894,4.92360931 Z M17.1706363,9.44056213 L13.2243795,12.0829795 C13.0061382,13.1344129 12.165674,13.9193929 11.142324,14.0275859 C10.1189739,14.1357788 9.14535107,13.5425917 8.73039882,12.5581022 C8.31544657,11.5736128 8.55348582,10.4216008 9.32008597,9.70425923 C10.0866861,8.98691767 11.2075947,8.86730224 12.0968775,9.4079397 L16.6548641,8.17581534 C16.9687127,8.09506552 17.2925877,8.26224244 17.4222577,8.57192654 C17.5519276,8.88161065 17.4497818,9.24397798 17.180232,9.43052446 L17.1706363,9.44056213 Z M11.6698661,11.1971549 C11.4842928,10.7527648 10.9895331,10.549793 10.5646362,10.743742 C10.1397393,10.937691 9.94551369,11.4551578 10.130761,11.8996968 C10.3160082,12.3442358 10.8106189,12.5476046 11.2356579,12.3539967 C11.6619881,12.1610634 11.8584249,11.6434251 11.674664,11.1971549 L11.6698661,11.1971549 Z'
    id='Shape' />
</svg>);

export default dashIcon;