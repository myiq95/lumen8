Lumen PWA Upload Package
- index.html: 메인 앱 (원본 디자인 그대로, 새 파일 열기 수정, 아이콘/앱이름 끊김 수정, PDF/EPUB 수정 포함)
- manifest.json: PWA 매니페스트 (name Lumen, short_name Lumen, display standalone)
- icon-180.png / icon-192.png / icon-512.png / icon-512-maskable.png: 홈화면 아이콘
- sw.js: 서비스 워커 (install/activate/fetch)

업로드 방법:
1. 이 파일들을 같은 폴더에 업로드 (예: / 또는 /lumen/)
2. HTTPS에서 제공되어야 PWA 설치 가능
3. iOS Safari에서는 공유 > 홈 화면에 추가 시 아이콘 180 사용, 이름 Lumen으로 표시
4. Android Chrome에서는 설치 배너 시 아이콘 192/512 사용

원본 유지: 아일랜드 220x40 bottom 16, 본문 max 620, 대사 금색 라인, 전체스크롤, 정확한 목차, 서재 삭제/이어읽기
