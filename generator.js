{\rtf1\ansi\ansicpg949\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // localStorage\uc0\u50640 \u49436  \u45936 \u51060 \u53552  \u44032 \u51256 \u50724 \u44592 \
const data = JSON.parse(localStorage.getItem('proposalData')) || \{\};\
\
// \uc0\u49707 \u51088  \u54252 \u47607 \u54021 \
function formatNumber(num) \{\
    return num.toString().replace(/\\B(?=(\\d\{3\})+(?!\\d))/g, ',');\
\}\
\
// \uc0\u45936 \u51060 \u53552  \u49341 \u51077 \
document.addEventListener('DOMContentLoaded', function() \{\
    // \uc0\u54364 \u51648 \
    document.getElementById('cover-partner').textContent = `[$\{data.partner_name || ''\}]`;\
    document.getElementById('cover-program').textContent = data.program_name || '';\
    \
    // \uc0\u47785 \u52264  \u48143  \u48376 \u47928 \
    document.getElementById('program-name').textContent = data.program_name || '';\
    document.getElementById('program-objectives').textContent = data.objectives || '';\
    document.getElementById('program-type').textContent = data.program_type === 'online' ? '\uc0\u50728 \u46972 \u51064 ' : \
                                                           data.program_type === 'offline' ? '\uc0\u50724 \u54532 \u46972 \u51064 ' : '\u50728 \'b7\u50724 \u54532 \u46972 \u51064  \u48337 \u54665 ';\
    document.getElementById('program-schedule').textContent = data.schedule || '';\
    document.getElementById('program-duration').textContent = data.duration || '';\
    document.getElementById('partner-name-2').textContent = data.partner_name || '';\
    document.getElementById('program-participants').textContent = data.participants || '';\
    document.getElementById('mentor-name-1').textContent = data.mentor_name || '';\
    document.getElementById('program-price').textContent = data.price ? `$\{formatNumber(data.price)\}\uc0\u50896 ` : '';\
    \
    // \uc0\u52964 \u47532 \u53336 \u47100 \
    document.getElementById('curriculum-content').textContent = data.curriculum || '';\
    \
    // \uc0\u47704 \u53664  \u54532 \u47196 \u54596 \
    document.getElementById('mentor-name-2').textContent = data.mentor_name || '';\
    document.getElementById('mentor-position').textContent = data.mentor_position || '';\
    document.getElementById('mentor-career').textContent = data.mentor_career || '';\
\});\
\
// PDF \uc0\u45796 \u50868 \u47196 \u46300  \u48260 \u53948  (\u49440 \u53469 \u49324 \u54637 )\
function downloadPDF() \{\
    window.print();\
\}}