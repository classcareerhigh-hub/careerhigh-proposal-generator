# 📄 CareerHigh 제안서 자동 생성기

> 변수만 입력하면 전문적인 제안서가 자동으로 생성됩니다.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## 🎯 주요 기능

- ✅ **간편한 변수 입력**: 폼에 정보만 입력하면 자동 생성
- ✅ **전문적인 디자인**: CareerHigh 공식 디자인 시스템 적용
- ✅ **PDF 다운로드**: 브라우저 인쇄 기능으로 즉시 PDF 저장
- ✅ **로컬 저장**: 제안서를 브라우저에 저장하고 불러오기
- ✅ **파일 내보내기/가져오기**: JSON 파일로 백업 및 공유
- ✅ **반응형 디자인**: 모든 디바이스에서 작동

---

## 🚀 시작하기

### 온라인 사용
```
https://classcareerhigh-hub.github.io/careerhigh-proposal/
```

### 로컬 실행
```bash
# 1. 레포지토리 클론
git clone https://github.com/classcareerhigh-hub/careerhigh-proposal.git

# 2. 디렉토리 이동
cd careerhigh-proposal

# 3. 로컬 서버 실행
python -m http.server 8000

# 4. 브라우저 접속
http://localhost:8000
```

---

## 💡 사용 방법

### 1. 제안서 생성

1. `index.html` 접속
2. 폼에 변수 입력
   - 파트너사명 (예: 서울대학교)
   - 프로그램명 (예: 2025 겨울방학 금융권 프로그램)
   - 일정, 인원, 금액 등
3. "제안서 생성하기" 클릭
4. 자동으로 `proposal.html` 페이지로 이동

### 2. PDF 저장

- 제안서 페이지에서 "📥 PDF 저장" 버튼 클릭
- 또는 `Ctrl + P` (Windows) / `Cmd + P` (Mac)

### 3. 제안서 저장 및 관리

- **저장**: 폼 제출 시 자동으로 브라우저에 저장
- **불러오기**: "💾 저장된 제안서 보기" → 원하는 제안서 선택
- **내보내기**: JSON 파일로 다운로드 (백업/공유용)
- **가져오기**: "📁 파일에서 불러오기" → JSON 파일 선택

---

## 📁 프로젝트 구조
```
careerhigh-proposal/
├── index.html              # 변수 입력 폼
├── proposal.html           # 제안서 템플릿
├── generator.js            # 변수 치환 로직
├── storage.js              # 저장/불러오기 기능
├── styles.css              # 디자인 시스템
├── assets/                 # 리소스 파일
│   ├── logo-white.png
│   ├── logo-color.png
│   └── mentor-default.jpg
└── README.md               # 프로젝트 문서
```

---

## 🎨 디자인 시스템

### 색상 팔레트
```css
Primary:   #0066FF  /* 메인 파란색 */
Secondary: #A8D5FF  /* 연한 파란색 */
Text:      #000000  /* 검정 */
Gray:      #F5F5F5  /* 연한 회색 */
```

### 타이포그래피

- 폰트: Noto Sans KR
- 제목: 36px ~ 64px (Bold/Black)
- 본문: 16px ~ 20px (Regular/Medium)

---

## ⚙️ 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: LocalStorage, SessionStorage
- **Export**: Blob API, FileReader API
- **Print**: Browser Print API

---

## 📝 변수 목록

| 변수명 | 설명 | 예시 |
|--------|------|------|
| `partner_name` | 파트너사명 | 서울대학교 |
| `program_name` | 프로그램명 | 2025 겨울방학 프로그램 |
| `date` | 날짜 | 26년 1월 |
| `program_type` | 프로그램 유형 | 온라인/오프라인 |
| `schedule` | 일정 | 2026.1.14~1.21 |
| `participants` | 참여 인원 | 100 |
| `duration` | 강의 시간 | 13:00-16:00 (3H) |
| `objectives` | 프로그램 목표 | • 목표1<br>• 목표2 |
| `curriculum` | 커리큘럼 | 1주차: 내용 |
| `price` | 강의료 | 2000000 |
| `mentor_name` | 멘토명 | 박철오 |
| `mentor_position` | 멘토 직책 | 커리어하이 대표 |
| `mentor_career` | 멘토 경력 | 현) 크래커박스 대표 |

---

## 🔧 커스터마이징

### 로고 변경
```bash
# 1. assets 폴더에 로고 이미지 추가
assets/
├── logo-white.png      # 표지용 (흰색 배경용)
└── logo-color.png      # 본문용 (컬러)

# 2. proposal.html에서 경로 수정
<img src="assets/your-logo.png" alt="Logo">
```

### 색상 변경
```css
/* styles.css */
:root {
    --primary: #0066FF;      /* 원하는 색상으로 변경 */
    --secondary: #A8D5FF;    /* 원하는 색상으로 변경 */
}
```

### 슬라이드 추가
```html
<!-- proposal.html에 새 슬라이드 추가 -->
<div class="slide">
    <h2 class="section-title">새 섹션</h2>
    <p id="new-content"></p>
</div>
```
```javascript
// generator.js에 변수 매핑 추가
document.getElementById('new-content').textContent = data.new_field || '';
```

---

## 🐛 문제 해결

### Q. PDF 저장 시 레이아웃이 깨집니다.

**A.** 브라우저 인쇄 설정을 확인하세요.
- 용지 크기: A4
- 여백: 없음
- 배경 그래픽: 켜기

### Q. 저장된 제안서가 사라졌습니다.

**A.** 브라우저 데이터를 삭제하면 LocalStorage도 함께 삭제됩니다.
- JSON 파일로 정기적으로 백업하세요.

### Q. 한글이 깨집니다.

**A.** HTML 파일 인코딩을 확인하세요.
```html
<meta charset="UTF-8">
```

---

## 🚀 배포

### GitHub Pages
```bash
# 1. GitHub 레포지토리 생성
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo.git
git push -u origin main

# 2. Settings → Pages → Source: main branch → Save

# 3. 접속
https://username.github.io/repo/
```

### Vercel
```bash
# 1. Vercel 설치
npm i -g vercel

# 2. 배포
vercel

# 3. 프로덕션 배포
vercel --prod
```

---

## 📄 라이선스

MIT License

---

## 👥 기여

버그 리포트, 기능 제안, PR 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 문의

- 이메일: eunyi@careerhigh.co.kr
- 웹사이트: https://careerhigh.co.kr

---

**Made with ❤️ by CareerHigh**
