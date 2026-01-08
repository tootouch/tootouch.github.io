# Jaehyuk Heo - Personal Website

AI 연구자를 위한 개인 홈페이지입니다.

## 🌐 Live Demo

[https://tootouch.github.io](https://tootouch.github.io)

## 📁 Structure

```
├── index.html      # 메인 HTML 파일
├── styles.css      # 스타일시트
├── script.js       # JavaScript 기능
├── assets/         # 이미지 및 문서
│   ├── profile.jpg    # 프로필 사진
│   ├── cv.pdf         # 이력서
│   ├── pub1.png       # 논문 썸네일
│   └── project1.png   # 프로젝트 이미지
└── README.md
```

## 🚀 Getting Started

### 로컬에서 실행

1. 저장소 클론:
```bash
git clone https://github.com/tootouch/tootouch.github.io.git
cd tootouch.github.io
```

2. 브라우저에서 `index.html` 열기 또는 로컬 서버 실행:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

3. `http://localhost:8000` 접속

### GitHub Pages 배포

1. GitHub에 `username.github.io` 저장소가 있어야 합니다
2. 파일을 push하면 자동으로 배포됩니다
3. Settings > Pages에서 배포 상태 확인

## ✏️ 커스터마이징

### 1. 개인 정보 수정

`index.html`에서 다음 내용을 수정하세요:

- 이름 및 직함
- 소속 기관
- 자기소개 (bio)
- 소셜 미디어 링크
- 연락처 정보

### 2. 프로필 사진 추가

`assets/` 폴더에 `profile.jpg` 파일을 추가하세요.
권장 크기: 400x400px 이상의 정사각형 이미지

### 3. CV 추가

`assets/` 폴더에 `cv.pdf` 파일을 추가하세요.

### 4. 연구 관심사 수정

`index.html`의 Research Interests 섹션에서 아이콘과 설명을 수정하세요.
아이콘은 [Font Awesome](https://fontawesome.com/icons)에서 선택할 수 있습니다.

### 5. 논문 추가

Publications 섹션에 새 논문을 추가하세요:

```html
<div class="publication-item">
    <div class="publication-image">
        <img src="assets/your-paper.png" alt="Paper thumbnail">
    </div>
    <div class="publication-content">
        <h3 class="publication-title">논문 제목</h3>
        <p class="publication-authors">
            <strong>Your Name</strong>, Co-authors
        </p>
        <p class="publication-venue">
            <em>Conference/Journal Name (Year)</em>
        </p>
        <div class="publication-links">
            <a href="#" class="pub-link"><i class="fas fa-file-pdf"></i> Paper</a>
            <a href="#" class="pub-link"><i class="fab fa-github"></i> Code</a>
        </div>
    </div>
</div>
```

### 6. 색상 변경

`styles.css`의 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다:

```css
:root {
    --primary-color: #2563eb;     /* 메인 색상 */
    --primary-dark: #1d4ed8;      /* 메인 색상 (다크) */
    --text-color: #1e293b;        /* 텍스트 색상 */
    --bg-color: #ffffff;          /* 배경 색상 */
}
```

## 📱 Features

- ✅ 반응형 디자인 (모바일 지원)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 스크롤 시 요소 페이드인 효과
- ✅ 모바일 네비게이션 메뉴
- ✅ Google Fonts (Inter, Roboto Mono)
- ✅ Font Awesome 아이콘
- ✅ SEO 최적화

## 🎨 Sections

1. **Hero/About** - 프로필 사진, 이름, 소개, 소셜 링크
2. **Research Interests** - 연구 관심 분야
3. **News** - 최신 소식 및 공지
4. **Publications** - 논문 목록
5. **Projects** - 프로젝트 포트폴리오
6. **Education & Experience** - 학력 및 경력
7. **Contact** - 연락처 정보

## 📄 License

MIT License - 자유롭게 수정하여 사용하세요!

## 🙏 Acknowledgments

Inspired by academic personal websites from AI researchers.
