/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이동혁",
    father: "이정표",
    mother: "이명오",
    fatherDeceased: true,
    motherDeceased: false
  },

  bride: {
    name: "김채영",
    father: "김진표",
    mother: "사은정",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-18",
    time: "15:00",
    venue: "더메리든",
    hall: "단독홀 8층",
    address: "경기 성남시 분당구 서현로180번길 19",
    tel: "0507-1465-3045",
    mapLinks: {
      kakao: "https://kko.to/HmnMuG1JnI",
      naver: "https://naver.me/GzE979EN"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "2014년 여름날 시작된 인연이\n어느덧 12년의 시간을 지나\n부부로서 새로운 시작을 맞이하게 되었습니다.\n\n오래도록 함께해 주신 여러분을\n소중한 자리에 초대합니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "함께한 시간만큼\n서로를 향한 마음도 깊어졌습니다.\n\n가을이 무르익어가는 어느 날,\n부부의 연을 맺고 평생의 동반자가 되고자 합니다.\n\n소중한 날 함께해 주세요."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "이동혁", bank: "국민은행", number: "933502-00-65846" },
      { role: "어머니", name: "이명오", bank: "국민은행", number: "27221-0054-374" }
    ],
    bride: [
      { role: "신부", name: "김채영", bank: "우리은행", number: "1002-459-431072" },
      { role: "아버지", name: "김진표", bank: "카카오뱅크", number: "3333-20-9132821" },
      ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2026년 10월 18일, 소중한 분들을 초대합니다."
  }
};