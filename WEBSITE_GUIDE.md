# HAI Lab 홈페이지 가이드

## 프로젝트 구조

```
HAI-lab/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/           # 페이지 레이아웃
│   │   └── BaseLayout.astro
│   ├── pages/             # 웹사이트 페이지
│   │   ├── index.astro    # 홈페이지
│   │   ├── people.astro   # 멤버 소개
│   │   ├── publications.astro
│   │   ├── dataset.astro
│   │   └── join.astro
│   └── content/           # 실제 콘텐츠 추가/수정 영역
│       ├── config.ts
│       ├── news/
│       ├── people/
│       └── datasets/
├── public/                # 정적 파일 (이미지 등)
└── README.md
```

## 페이지별 구성

### Home (`src/pages/index.astro`)
- **Hero Section**: 랩 이름과 배경 이미지
- **Research Areas**: 4가지 연구 분야 카드
- **Recent Projects**: 최근 프로젝트 3개
- **News & Updates**: 최신 소식

### People (`src/pages/people.astro`)
- **Principal Investigator**: 교수님 정보
- **Graduate Students**: 석사생 카드 그리드
- **Undergraduate Students**: 학부생 카드 그리드
- **Alumni**: 졸업생 (현재 비어있음, 추후 수정 필요)

### Publications (`src/pages/publications.astro`)
- 년도별로 그룹화된 논문 목록
- 논문 제목, 저자, 학회/저널, 링크(PDF, DOI, Dataset)

### Dataset (`src/pages/dataset.astro`)
- ESWA 2023 프로젝트 상세 소개
- 블로그 포스트 스타일
- 데이터셋 통계, 구조, 다운로드 링크

### Join Us (`src/pages/join.astro`)
- 모집 포지션 (석사, 학부인턴)
- 연구실이 제공하는 것
- 위치 정보와 지도
- 연락처 및 지원 절차

## 컨텐츠 수정 방법

### 1. 뉴스 업데이트 (`src/content/news/`)
- 파일명은 `YYYY-MM-DD-간단한제목.md` 형태로 생성합니다.
- Frontmatter(맨 위 `---` 영역)에 제목과 날짜를 적고, 필요하면 `featured: true`로 지정하면 메인 공지에 노출됩니다.
- 본문은 일반 마크다운 텍스트를 활용하면 됩니다.

### 2. 멤버 정보 관리 (`src/content/people/`)
- 한 사람당 하나의 마크다운 파일을 작성합니다. 파일명은 `이름` 기반으로 작성하면 가독성이 좋습니다.
- 사용 가능한 필드
  - `name`, `group` (`pi`, `master`, `undergrad-prospective`, `research-intern`, `alumni`)
  - `position`, `email`, `profileImage` (예: `/profile/prof.png`)
  - `researchAreas`, `education`, `note`, `links` (GitHub, Scholar, Homepage 등)

### 3. 데이터셋 페이지 (`src/content/datasets/`)
- 데이터셋마다 하나의 마크다운 파일을 생성합니다. 파일명은 상세 페이지 주소(`/dataset/{slug}`)와 동일합니다.
- Frontmatter에는 기본 정보(제목, 설명, 썸네일, 다운로드 링크 등)를 넣고, 본문에는 상세 설명을 마크다운으로 작성합니다.

### 5. 기존 레이아웃 수정
- Hero 섹션 문구, 연구 분야 카드 등의 레이아웃을 변경하려면 각 페이지의 `.astro` 파일을 직접 수정합니다.
- 스타일은 동일하게 `<style>` 블록에서 조정합니다.

### 6. 이미지 추가
- 이미지는 `public/` 아래에 저장하고, 경로는 `/` 로 시작하는 절대 경로로 사용합니다.
- 예: `public/profile/sample.png` → 마크다운/페이지에서 `/profile/sample.png`

## 개발 서버 실행

```bash
npm install # 패키지 설치가 안된 경우
npm run dev
```
개발 서버는 `http://localhost:4321`에서 실행됩니다.