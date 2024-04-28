const moives = [
  {
    name: "플립",
    minutes: "90분",
    image:
      "https://i.namu.wiki/i/TB-dAuhQ1PPePOzmA4nAeshfjH-KUmRpNfh9fpQG82OG7rhH3GHSNwZwU_UmRS68yKPXyvL1HX0tsOyrAKn_sAY3rFrAG8cCv1a0weTUcCLt_-KIEJQAwdPo2jxLg4Txc8gUkQ4nMX-H44mDotf1eA.webp",
    sources: "나무위키",
  },
  {
    name: "헬프",
    minutes: "146분",
    image:
      "https://i.namu.wiki/i/lbe29vDl7MKV5hFfGzqvWPQY31RqUSBQShkgHEgv_Yp_JSS7nCPIu63cxds03VAo2UC2ct5cF_XhlAXPhM7DMxiukoEgxKKfwm2SffsRi_yzXAvbO16Wx9QideDXpqXuInL0lgeW1VRMalZsWQ4r8A.webp",
    sources: "나무위키",
  },
  {
    name: "인셉션",
    minutes: "147분",
    image:
      "https://i.namu.wiki/i/Q38XLII5v5Bv65CVq2jqE93WBRRJZ8dVsvNngTd3EgYOgBYa4VBLatIAX2fgZgqbdXCEvLTgaywecho5DPrq8gYLvsjzFv_uJiMlqLuYAA7QKKCcea1AIPyJI2P0qczNyFTuUMqkPUE8u6r6AFMDSA.webp",
    sources: "나무위키",
  },
  {
    name: "인타임",
    minutes: "109분",
    image:
      "https://i.namu.wiki/i/cXefRlRKUla2HzP_x-zFfMMsiEwH-DpCQO8Oz9GlZTHVcmLhI-SOTe8iMj3WhbccFfif4-sYmJczUOtj03FLt5IyGsGCHrIg37Kl51bBgUIRXRDIiYSfEbytW64sbQMTJUKnE2kghrIoSXaV2Mb3Uw.webp",
    sources: "나무위키",
  },
  {
    name: "인턴",
    minutes: "121분",
    image:
      "https://i.namu.wiki/i/GL5D42NMOpbCxPLstzFT0wTfRGGAySpyyJ2NPf5QIOE5AYeAQmRBbSrLz0dxIabilBQ9dDx62yliGY0IV95TfhPGD7yb5MSQhsAJEuAkv98u0RPpFlKhb5wBQMb1c-XJr_jvocozVOlQpzLLMCxpoQ.webp",
    sources: "나무위키",
  },
  {
    name: "킹 오브 티브스",
    minutes: "108분",
    image:
      "https://image.tmdb.org/t/p/original/vWoV9y5eAw2gcM3hckuMZJkOXBQ.jpg",
    sources: "TMBD",
  },
  {
    name: "타이타닉(무삭제)",
    minutes: "195분",
    image:
      "https://i.namu.wiki/i/br-5VoQ-JyllNrsQXGD1xsls_fAbztbpkMY6kVGoy_pyr6WwTSs1G_RqSG4rG_b-f8FsdHaA5UEhRJ9hE4bszGdOafK2t3H3YY97wf2jxtzfkYx_LaLCao00tfOghMukas4qlXuU6djX6TeTE9GnOQ.webp",
    sources: "나무위키",
  },
  {
    name: "테넷",
    minutes: "150분",
    image:
      "https://i.namu.wiki/i/OgvdCuTINm_5dle8WeEA2q1-Pb1WSIkQT_UANvfE38rNJytJgbv_bHwqfWjivUt5XLkFFyNyNlH2MftDCS-I3oOM1Uq-4O1ulaQca-jYj_joFObsRVZ7kbo7ukZ-gfrLe2iw1gr36gg2_XF67seA_A.webp",
    sources: "나무위키",
  },
  {
    name: "플로리스",
    minutes: "108분",
    image:
      "https://image.tmdb.org/t/p/original/crOlmBAJ4TzQ54GMYPYcAaXsltT.jpg",
    sources: "TMBD",
  },
  {
    name: "원더휠",
    minutes: "101분",
    image:
      "https://image.tmdb.org/t/p/original/icohdWIwQjhEy2Qxz0Pe5niHWI6.jpg",
    sources: "TMBD",
  },
  {
    name: "웜바디스",
    minutes: "96분",
    image:
      "https://i.namu.wiki/i/G5o5gIqMQZDeH6MJK2Za8YfC1hYbrSlibk_u74X5w_2QLeKdLEp4pH_dexU_KR76W4FDOs2TPDNbrfNjIqu0kuKQpLWv5fVLwsRlYD0eLa26H4PfrWs7tyLJeY75rg6JVU9bOg8F6o9PZ3XaJ3eDiA.webp",
    sources: "나무위키",
  },
  {
    name: "위대한 개츠비",
    minutes: "142분",
    image:
      "https://i.namu.wiki/i/ZnuiC2p0Fre7Or9pml2HBsODeUJmN49T2EFnb6VAJDPHDxKU5V-fj8JokjOHJPJoag1NSBYfZ8YLOiM0TqMJdZNHvZoltI_BhSGhER75PMHg5jmYen4ubhx1jwEolCB_Hxv2c9n2kQTB2d2DafSrJA.webp",
    sources: "나무위키",
  },
  {
    name: "어톤먼트",
    minutes: "122분",
    image:
      "https://i.namu.wiki/i/JBcxsnMxpKUR2nNHyobJ-wFCucrpVmxMIz1LRWcOibpQQ7LqhI27OIHRUY1FzKlR9o1c5Ci7PVoXPE9QLdO02u0ojFriWw3pFqTLdQl6dk5sKoUhMyS55uaHctOUZ2jwmgTye-Vx4x6zKAcw0TlpaQ.webp",
    sources: "나무위키",
  },
  {
    name: "엣지 오브 투모로우",
    minutes: "113분",
    image:
      "https://i.namu.wiki/i/p01KTPIIf1gjt0zdDlHbBjv0vYdwvbqutSkcksIGrhkfqwxEVDtCqpWfHXTJ3ViC5GvLGJxpKOL4G2sNq2tHEmxwDRkUHdleUU7xCRdF3UXKKxg4B1OqiVdzNSkDj6tuvoOkdPDtcTVEhQ4z_tsJzg.webp",
    sources: "나무위키",
  },
  {
    name: "어바웃타임",
    minutes: "123분",
    image:
      "https://i.namu.wiki/i/gYQNU4WlqawifvWPPHpxlerqw2B1JoFsf0sQIMLxdpnv0gioqoyGwwL4V6071OH1poYeqzv0-yCFBLa9NgOTB8dn8dDLF0cXRsVOOAY2xf8xl5qeTuVGUtYeYQ7--jmWugBF-5wnkRdmKmb368ussA.webp",
    sources: "나무위키",
  },
  {
    name: "와일드 라이프",
    minutes: "105분",
    image:
      "https://i.namu.wiki/i/RshD70lhZy3QOoPGAxfvubky-IRIxdCtzQAF4HSuyDVnbSKj7gK01Khp0aQqLzM-SLx5TFCWaK0BgY1uM4fMuFNxdYmI_qpZhZ1MHHog4TsXON-8B8Dv_p1SRDk5ieWMVA3gM2WoKpeTSUbinqwOjg.webp",
    sources: "나무위키",
  },
  {
    name: "이미테이션 게임",
    minutes: "114분",
    image:
      "https://i.namu.wiki/i/H4by_kFexiJT7OySGqYaLMAxP5p4G5HlBdJb1yciYK_93jMgSwFXIfy1z9JZpPctCBrg7i_AT_Bo-eqwEiDQCRO4pRsWFQn5Zyw5G4ubDGoR-ahZUBeip708IE7sXYVXDVK0wZp4ousp9lzZeif96Q.webp",
    sources: "나무위키",
  },
  {
    name: "콘스탄틴",
    minutes: "120분",
    image:
      "https://i.namu.wiki/i/UniOX8FBEwIEcFe6044aZfQUyGk5JIqBrZtrtlZ_fUca5EPNv1S3D3A1AzALhRnBbDUSerTrn-eo8tY746EtOjRuWJ99ivwsNpkx2OttmuVUhPxXnmx-c1hmNGqbkjhDpnzCwN0bgI8i1oWisMJeoQ.webp",
    sources: "나무위키",
  },
  {
    name: "프로포즈 데이",
    minutes: "100분",
    image:
      "https://image.tmdb.org/t/p/original/xBmq1F0JVqB8jkX7ciPyY0kAAt4.jpg",
    sources: "TMBD",
  },
  {
    name: "실버라이닝 플레이북",
    minutes: "122분",
    image:
      "https://i.namu.wiki/i/QXEU22YEBRrQSjfj4qXh0NzW6Mnwd-qaZ78rBb-SS4LqxU9bp2OpPc1Sn2Kb18KI0aZe9AYZpdCRWXA1rW24HVFkGoo-dWJI1afYw0ppwC0YSKeIqynBbiVR3Avd9GiYYSfSjwviFCW108CediHxsQ.webp",
    sources: "나무위키",
  },
  {
    name: "아델라인 - 멈춰진 시간",
    minutes: "112분",
    image:
      "https://i.namu.wiki/i/8mPlmTaGGx1uUICmnoqSVc8KG9dpBBiCg7rXCidj-qGHmgFB-Ym91QKOkZs2TeHNGVN6_2OPbkvbec8TB_UmKF17tplxtxDDPzhabTDQVW7A2EIhue_FD7m7YOvRZxf4rkLrkPVJQ0jhGsDO8S0T_w.webp",
    sources: "나무위키",
  },
  {
    name: "아바타 - 확장판",
    minutes: "178분",
    image:
      "https://i.namu.wiki/i/WL-zR1l0oOzh0SUpLxVOWV-7x0aDLtC9H1CF8c2PY-tAiSbcxkJq1qS3q8SQey8W2ZAoMSdMn1ZKxdOQ85Mwfo6V43NXX_0_6qJcJRm3142LxTygUvitSI9wF9LWD7Bhz0y-g9As0E1Z_XUjW0q7oA.webp",
    sources: "나무위키",
  },
  {
    name: "아임 낫 데어",
    minutes: "135분",
    image:
      "https://image.tmdb.org/t/p/original/qGTNlHtG1hY4xYH3PpKmNAd4E74.jpg",
    sources: "TMBD",
  },
  {
    name: "비커밍 제인",
    minutes: "120분",
    image:
      "https://image.tmdb.org/t/p/original/eeZ65Lc4SBcVOLcd4ICy5Q6Wpdz.jpg",
    sources: "TMBD",
  },
  {
    name: "사랑에 대한 모든 것",
    minutes: "123분",
    image:
      "https://image.tmdb.org/t/p/original/cgjWXNW6hJbmyIo5tsn5MqSduk9.jpg",
    sources: "TMBD",
  },
  {
    name: "샬롯의 거미줄",
    minutes: "97분",
    image:
      "https://image.tmdb.org/t/p/original/u7RbjqdzygTGmN30xTvAm0nGZw2.jpg",
    sources: "TMBD",
  },
  {
    name: "쉬즈 더 맨",
    minutes: "104분",
    image:
      "https://image.tmdb.org/t/p/original/bzJhzqDsRmoxdYLueZO50MUDEGk.jpg",
    sources: "TMBD",
  },
  {
    name: "시간여행자의 아내",
    minutes: "107분",
    image:
      "https://image.tmdb.org/t/p/original/8zXKSnVlzTYDcyKMlZi8usY1rjt.jpg",
    sources: "TMBD",
  },
  {
    name: "오션스 8",
    minutes: "110분",
    image:
      "https://image.tmdb.org/t/p/original/mbE7RoCiFLljulqOhYSlkrnt5b0.jpg",
    sources: "TMBD",
  },
  {
    name: "페넬로피",
    minutes: "104분",
    image:
      "https://image.tmdb.org/t/p/original/fQhl2016tTRdUG9Zg5XQ8QpeisM.jpg",
    sources: "TMBD",
  },
  {
    name: "명탐정 피카츄",
    minutes: "104분",
    image:
      "https://image.tmdb.org/t/p/original/8Vb7PJ2aUzel5iQ6R2Jxe4MTWac.jpg",
    sources: "TMBD",
  },
  {
    name: "몬스터콜",
    minutes: "108분",
    image:
      "https://image.tmdb.org/t/p/original/ieUc1qssu5xH59jbVPbMqSFTJOI.jpg",
    sources: "TMBD",
  },
  {
    name: "미스 페레그린과 이상한 아이들의 집",
    minutes: "127분",
    image:
      "https://image.tmdb.org/t/p/original/4aIZZr9IcG1UQGSgeCvRG5utxr6.jpg",
    sources: "TMBD",
  },
  {
    name: "벤자민버튼의 시간은 거꾸로 간다",
    minutes: "166분",
    image:
      "https://image.tmdb.org/t/p/original/9QxP0nzAyPQfqJIB0xcvglND5UL.jpg",
    sources: "TMBD",
  },
  {
    name: "매드맥스",
    minutes: "120분",
    image:
      "https://image.tmdb.org/t/p/original/cadVm6gKYYukmPysHGCwrawUHHa.jpg",
    sources: "TMBD",
  },
  {
    name: "블랙 씨",
    minutes: "115분",
    image:
      "https://image.tmdb.org/t/p/original/xjRUf7bu4VP6tnBHa6HCXXHWCPE.jpg",
    sources: "TMBD",
  },
  {
    name: "스파이",
    minutes: "120분",
    image:
      "https://i.namu.wiki/i/4c8uSrSb9qhVxi-mtbDpziEj-zPvQYe8hXc5DyUUoOwzi0CtxQMUpzVXks-ni2oqH7UYoDepfuS4R_1kdGZE5graE--afFbu-mppq-skhqc6M6Xyt-GhlLGoTEeejlMUSwJBTTShxeCZKLHs-j0ulw.webp",
    sources: "나무위키",
  },
  {
    name: "오만과 편견",
    minutes: "128분",
    image:
      "https://image.tmdb.org/t/p/original/tQ303fQUo5Mv5Txgpl2DPS2Jq0e.jpg",
    sources: "TMBD",
  },
  {
    name: "의뢰인",
    minutes: "119분",
    image:
      "https://image.tmdb.org/t/p/original/fxoXdNqOLd2SHOwtQV5pZV4KwPG.jpg",
    sources: "TMBD",
  },
  {
    name: "파운더",
    minutes: "115분",
    image:
      "https://image.tmdb.org/t/p/original/pce8xCZXCxcqYUbLXLBZ5EwNoEv.jpg",
    sources: "TMBD",
  },
  {
    name: "더 웨이 백",
    minutes: "108분",
    image:
      "https://image.tmdb.org/t/p/original/1W9080LUrIFQef7r7vyH0kGq7D0.jpg",
    sources: "TMBD",
  },
  {
    name: "도그빌",
    minutes: "178분",
    image:
      "https://image.tmdb.org/t/p/original/gwX5Vm9zGzxcZcr3BbthdsPUVdW.jpg",
    sources: "TMBD",
  },
  {
    name: "로맨틱홀리데이",
    minutes: "135분",
    image:
      "https://image.tmdb.org/t/p/original/eN7rAl9kJ390iu9Rfz8shYgToZ1.jpg",
    sources: "TMBD",
  },
  {
    name: "리포맨",
    minutes: "120분",
    image:
      "https://image.tmdb.org/t/p/original/rGQhqc0KVPBmjhTo4yom22c2lz7.jpg",
    sources: "TMBD",
  },
  {
    name: "마이 리틀자이언트",
    minutes: "117분",
    image:
      "https://image.tmdb.org/t/p/original/eEN9EkuatmWkHQAb5uwwCSW5DEy.jpg",
    sources: "TMBD",
  },
  {
    name: "다크나이트",
    minutes: "152분",
    image:
      "https://image.tmdb.org/t/p/original/f6dNinWX8rBM79JXKcShkfSh2oA.jpg",
    sources: "TMBD",
  },
  {
    name: "매그니피센트7",
    minutes: "133분",
    image:
      "https://image.tmdb.org/t/p/original/ie7skA97V0vTC6BR7srDcnWsL2d.jpg",
    sources: "TMBD",
  },
  {
    name: "보헤미안 랩소디",
    minutes: "134분",
    image:
      "https://image.tmdb.org/t/p/original/xrlVhwi6OKMyQuDebpgaqU2LGju.jpg",
    sources: "TMBD",
  },
  {
    name: "스턱 인 러브",
    minutes: "97분",
    image:
      "https://image.tmdb.org/t/p/original/bJzALRv5Kt2EP7dtLRViiILL0Pn.jpg",
    sources: "TMBD",
  },
  {
    name: "아쿠아맨",
    minutes: "124분",
    image:
      "https://image.tmdb.org/t/p/original/zoIFp0S7EdGuQ2iR9eBJb6UxGkv.jpg",
    sources: "TMBD",
  },
  {
    name: "예감은 틀리지 않는다",
    minutes: "108분",
    image:
      "https://image.tmdb.org/t/p/original/kbyLRsH1JvUePWzQZYrMCJUJTRQ.jpg",
    sources: "TMBD",
  },
  {
    name: "유스",
    minutes: "124분",
    image:
      "https://image.tmdb.org/t/p/original/lJS46YrSRx8BGMsumoky5C4qC3U.jpg",
    sources: "TMBD",
  },
  {
    name: "작은아씨들",
    minutes: "115분",
    image:
      "https://image.tmdb.org/t/p/original/2kfDJEwZ7Rxo3yz5v6rJlwqtY0W.jpg",
    sources: "TMBD",
  },
  {
    name: "투모로우",
    minutes: "123분",
    image:
      "https://image.tmdb.org/t/p/original/96W0h7WdHacyarELRPkLXBnQckk.jpg",
    sources: "TMBD",
  },
  {
    name: "난 그녀와 키스했다",
    minutes: "92분",
    image:
      "https://image.tmdb.org/t/p/original/rLll0JkNxIb3SWavKdAaogcxNXl.jpg",
    sources: "TMBD",
  },
  {
    name: "내가 널 사랑할 수 없는 10가지 이유",
    minutes: "97분",
    image:
      "https://image.tmdb.org/t/p/original/s2AAPy98DjdbSj4DGYPJYtj6809.jpg",
    sources: "TMBD",
  },
  {
    name: "네버랜드를 찾아서",
    minutes: "101분",
    image:
      "https://image.tmdb.org/t/p/original/smiaeB0cfwcGExjBuld58dx4lti.jpg",
    sources: "TMBD",
  },
  {
    name: "노트북",
    minutes: "123분",
    image:
      "https://image.tmdb.org/t/p/original/kjXmmmecC4V6TpU9WKEk3ev4Joh.jpg",
    sources: "TMBD",
  },
  {
    name: "겟 아웃",
    minutes: "104분",
    image:
      "https://image.tmdb.org/t/p/original/ajHgWxJENrSoysd2ZD7cJliKSoF.jpg",
    sources: "TMBD",
  },
  {
    name: "고잉인스타일",
    minutes: "96분",
    image:
      "https://image.tmdb.org/t/p/original/e9xlrtc09cZ6bF0UZiBrxn0KmQA.jpg",
    sources: "TMBD",
  },
  {
    name: "나니아 연대기 - 1. 사자,마녀 그리고 옷장 [The Lion, the Witch and the Wardrobe 2005]",
    minutes: "139분",
    image:
      "https://image.tmdb.org/t/p/original/xo86KtpjsGZRuI3vF17aHxHNX3E.jpg",
    sources: "TMBD",
  },
  {
    name: "나니아 연대기 - 2. 캐스피언 왕자 [Prince Caspian, 2008]",
    minutes: "145분",
    image:
      "https://image.tmdb.org/t/p/original/o89tirJIiukLxHH20jxZ2ycSneH.jpg",
    sources: "TMBD",
  },
  {
    name: "나니아 연대기 - 3. 새벽 출정호의 항해 [The Voyage of the Dawn Treader, 2010]",
    minutes: "112분",
    image:
      "https://image.tmdb.org/t/p/original/dp6YkejkXV7xAQwCv61LwXFNIeA.jpg",
    sources: "TMBD",
  },
  {
    name: "내니 맥피 1 -우리 유모는 마법",
    minutes: "109분",
    image:
      "https://image.tmdb.org/t/p/original/j9zWPwaHDWE3K1Mb5RNahzwd3KY.jpg",
    sources: "TMBD",
  },
  {
    name: "Men in Black 1, 1997",
    minutes: "98분",
    image:
      "https://image.tmdb.org/t/p/original/a3JDixP8OxLNyXs2lShtbTl4Omt.jpg",
    sources: "TMBD",
  },
  {
    name: "Men in black 2, 2002",
    minutes: "88분",
    image:
      "https://image.tmdb.org/t/p/original/eVudwx5nYeMNWmdmnkpF2PWawYp.jpg",
    sources: "TMBD",
  },
  {
    name: "Men in Black 3, 2012",
    minutes: "106분",
    image:
      "https://image.tmdb.org/t/p/original/eAHyWZwzTJjGdWoR4nZZZ2mGySf.jpg",
    sources: "TMBD",
  },
  {
    name: "신비한 동물사전 (Fantastic Beasts and Where to find them, 2016)",
    minutes: "133분",
    image:
      "https://image.tmdb.org/t/p/original/1HHH1YR2UL5JLkrsbO6gfcg0gna.jpg",
    sources: "TMBD",
  },
  {
    name: "그린델왈드의 범죄 (The Crimes of Grindelwald, 2018)",
    minutes: "134분",
    image:
      "https://image.tmdb.org/t/p/original/6Ik5hJ6gOYvc5F1DdKQaAwamsKd.jpg",
    sources: "TMBD",
  },
  {
    name: "덤블도어의 비밀 (The Secrets of Dumbledore, 2022) - 쿠플에있음",
    minutes: "142분",
    image:
      "https://image.tmdb.org/t/p/original/n9or2j6dPL856VKIPudh46rsI0M.jpg",
    sources: "TMBD",
  },
  {
    name: "캐리비안의 해적 - 1. 블랙펄의 저주 [The Curse of the Black Pearl, 2003]",
    minutes: "143분",
    image:
      "https://image.tmdb.org/t/p/original/mlmPFjeQZ3F4yjqTPNoBR0AwYYW.jpg",
    sources: "TMBD",
  },
  {
    name: "캐리비안의 해적 - 2. 망자의 함 [Dead Man's Chest, 2006]",
    minutes: "143분",
    image:
      "https://image.tmdb.org/t/p/original/lAhcKRt0ggTFkeFL95jrGQYaRXs.jpg",
    sources: "TMBD",
  },
  {
    name: "캐리비안의 해적 - 3. 세상의 끝에서 [At World's End, 2007]",
    minutes: "168분",
    image:
      "https://image.tmdb.org/t/p/original/bTotG6tZERQqfKr2TDjwdjW8It4.jpg",
    sources: "TMBD",
  },
  {
    name: "캐리비안의 해적 - 4. 낯선 조류 [On Stranger Tides, 2011]",
    minutes: "137분",
    image:
      "https://image.tmdb.org/t/p/original/osJVVjkHmoO5WoJfbBsImYrKWIb.jpg",
    sources: "TMBD",
  },
  {
    name: "캐리비안의 해적 - 5. 죽은 자는 말이 없다 [Pirates of the Caribbean Dead Men Tell No Tales, 2017]",
    minutes: "129분",
    image:
      "https://image.tmdb.org/t/p/original/arcIFL50IPQT7JDG2SD6tzcOlRL.jpg",
    sources: "TMBD",
  },
  {
    name: "마법사의 돌 [The Philosopher's stone, 2001]",
    minutes: "152분",
    image:
      "https://image.tmdb.org/t/p/original/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    sources: "TMBD",
  },
  {
    name: "비밀의 방 [The Chamber of Secrests, 2002]",
    minutes: "161분",
    image:
      "https://image.tmdb.org/t/p/original/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    sources: "TMBD",
  },
  {
    name: "아즈카반의 죄수 [The Prisoner of Azkaban, 2004]",
    minutes: "141분",
    image:
      "https://image.tmdb.org/t/p/original/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    sources: "TMBD",
  },
  {
    name: "불의 잔 [The Goblet of Fire, 2005]",
    minutes: "157분",
    image:
      "https://image.tmdb.org/t/p/original/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
    sources: "TMBD",
  },
  {
    name: "불사조 기사단 [The order of The Phoenix, 2007]",
    minutes: "138분",
    image:
      "https://image.tmdb.org/t/p/original/tRoHysNFsXC2r0JiBL6iNHELut7.jpg",
    sources: "TMBD",
  },
  {
    name: "혼혈왕자 [The half-Blood Prince, 2009]",
    minutes: "153분",
    image:
      "https://image.tmdb.org/t/p/original/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    sources: "TMBD",
  },
  {
    name: "죽음의 성물 -1 [The Deathly Hallows_Part 1, 2010]",
    minutes: "146분",
    image:
      "https://image.tmdb.org/t/p/original/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
    sources: "TMBD",
  },
  {
    name: "죽음의 성물 -2 [The Deathly Hallows_Part 2, 2011]",
    minutes: "131분",
    image:
      "https://image.tmdb.org/t/p/original/ghevK7pehru9LEJO7mAvyW8fqMI.jpg",
    sources: "TMBD",
  },
  {
    name: "가디언즈 오브 갤럭시 Vol 1",
    minutes: "122분",
    image:
      "https://image.tmdb.org/t/p/original/w1NRMKrB4jytLgBgfA1CEuMBgBf.jpg",
    sources: "TMBD",
  },
  {
    name: "가디언즈 오브 갤럭시 Vol 2",
    minutes: "136분",
    image:
      "https://image.tmdb.org/t/p/original/uDuwGhQgffd5GQ695oUfy5oZGqP.jpg",
    sources: "TMBD",
  },
  {
    name: "닥터 스트레인지 1",
    minutes: "115분",
    image:
      "https://image.tmdb.org/t/p/original/9K7irV8HJBGlRZIWT9EmGSY0Ua0.jpg",
    sources: "TMBD",
  },
  {
    name: "베놈 1",
    minutes: "107분",
    image:
      "https://image.tmdb.org/t/p/original/x4ojC59pYfPlAP4mmy2LSkCCuK2.jpg",
    sources: "TMBD",
  },
  {
    name: "스파이더맨 1",
    minutes: "121분",
    image:
      "https://image.tmdb.org/t/p/original/eXbCqcUsUDUq2qqGmU5i20S0tjo.jpg",
    sources: "TMBD",
  },
  {
    name: "스파이더맨 2",
    minutes: "126분",
    image:
      "https://image.tmdb.org/t/p/original/s2GLrMhe1aEQXXqRklJ0PEYUGF2.jpg",
  },
  {
    name: "스파이더맨 3",
    minutes: "139분",
    image:
      "https://image.tmdb.org/t/p/original/qS1WjsryNTO1LiHj3h8QPrHvv7m.jpg",
  },

  {
    name: "어메이징 스파이더맨 1",
    minutes: "136분",
    image:
      "https://image.tmdb.org/t/p/original/egsgKNPmMahQgNhmmYxiMVbLPrC.jpg",
    sources: "TMBD",
  },
  {
    name: "어메이징 스파이더맨 2",
    minutes: "142분",
    image:
      "https://image.tmdb.org/t/p/original/qcK4RLIQc2UxdYaaj7jFJwmxBkP.jpg",
    sources: "TMBD",
  },
  {
    name: "스파이더맨 1 - 홈커밍",
    minutes: "133분",
    image:
      "https://image.tmdb.org/t/p/original/hjki9weYYVABvkpZbX5jBOmKXXv.jpg",
    sources: "TMBD",
  },
  {
    name: "스파이더맨 2 - 파 프롬 홈",
    minutes: "129분",
    image:
      "https://image.tmdb.org/t/p/original/742vR63T1AcXzYwHypQpzZd89vh.jpg",
    sources: "TMBD",
  },
  {
    name: "스파이더맨 3 - 노 웨이 홈 (쿠플에있음)",
    minutes: "148분",
    image:
      "https://image.tmdb.org/t/p/original/voddFVdjUoAtfoZZp2RUmuZILDI.jpg",
    sources: "TMBD",
  },
  {
    name: "어벤져스",
    minutes: "143분",
    image:
      "https://image.tmdb.org/t/p/original/1uHRkB2Q00Y4i7I7KNd0jGi4OmY.jpg",
    sources: "TMBD",
  },
  {
    name: "에이지 오브 울트론",
    minutes: "141분",
    image:
      "https://image.tmdb.org/t/p/original/sTUiA9zY6O4qFlmRC69nG6dngTh.jpg",
    sources: "TMBD",
  },
  {
    name: "인피니티 워",
    minutes: "149분",
    image:
      "https://image.tmdb.org/t/p/original/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg",
    sources: "TMBD",
  },
  {
    name: "엔드게임",
    minutes: "181분",
    image:
      "https://image.tmdb.org/t/p/original/z7ilT5rNN9kDo8JZmgyhM6ej2xv.jpg",
    sources: "TMBD",
  },
  {
    name: "앤트맨 1",
    minutes: "117분",
    image:
      "https://image.tmdb.org/t/p/original/3EFdR4QG1bJ7sxH7E1EhZF1LNZ0.jpg",
    sources: "TMBD",
  },
  {
    name: "엔트맨과 와스프 2",
    minutes: "118분",
    image:
      "https://image.tmdb.org/t/p/original/9CxERE6O8hh9QL0UDIJpcq4BVaj.jpg",
    sources: "TMBD",
  },
  {
    name: "캡틴마블",
    minutes: "123분",
    image:
      "https://image.tmdb.org/t/p/original/nAdrLDJmYsGs9FWDa5wRs9MYSq3.jpg",
    sources: "TMBD",
  },
  {
    name: "토르1 - 천둥의신",
    minutes: "115분",
    image:
      "https://image.tmdb.org/t/p/original/9muV2hpfmPYPqVBDwr906tAQKG1.jpg",
    sources: "TMBD",
  },
  {
    name: "토르2 - 다크월드",
    minutes: "112분",
    image:
      "https://image.tmdb.org/t/p/original/3yeRaapSOrupYvzQfITl20ME9T0.jpg",
    sources: "TMBD",
  },
  {
    name: "토르3 - 라그나로크",
    minutes: "130분",
    image:
      "https://image.tmdb.org/t/p/original/uuaulIwA2AncJ8NfgBim6RzxXJT.jpg",
    sources: "TMBD",
  },
  {
    name: "인크레더블1, 2004",
    minutes: "121분",
    image: "https://image.tmdb.org/t/p/original/11Byg6rHkKIvSehlW3R4pcUj8J.jpg",
    sources: "TMBD",
  },
  {
    name: "인크레더블2, 2018",
    minutes: "125분",
    image:
      "https://image.tmdb.org/t/p/original/eLayVsrnIScNuZRjEiMeJo5Z0Ly.jpg",
    sources: "TMBD",
  },
  {
    name: "라따뚜이",
    minutes: "115분",
    image:
      "https://image.tmdb.org/t/p/original/sDwCBLWHFebxgkqlfm0SwdD9vIn.jpg",
    sources: "TMBD",
  },
  {
    name: "라푼젤",
    minutes: "100분",
    image:
      "https://image.tmdb.org/t/p/original/sT1vLH38iaezVgoFqmaiihbnTUy.jpg",
    sources: "TMBD",
  },
  {
    name: "모아나",
    minutes: "113분",
    image:
      "https://image.tmdb.org/t/p/original/5mNqevqqxODTAGxg00MmxN35xtn.jpg",
    sources: "TMBD",
  },
  {
    name: "뮬란",
    minutes: "88분",
    image:
      "https://image.tmdb.org/t/p/original/k22FdyuZGP084qflNJB8brkQh1H.jpg",
    sources: "TMBD",
  },
  {
    name: "업(Up)",
    minutes: "101분",
    image:
      "https://image.tmdb.org/t/p/original/lL2WzkjLZP0RkPgUhybBjb9x9SL.jpg",
    sources: "TMBD",
  },
  {
    name: "보스베이비",
    minutes: "97분",
    image:
      "https://image.tmdb.org/t/p/original/oh9s6RxoeX1Tr4wL1gQFbeH5X1r.jpg",
    sources: "TMBD",
  },
  {
    name: "나, 다니엘 블레이크",
    minutes: "100분",
    image:
      "https://image.tmdb.org/t/p/original/bC0CmUZ9s5zdvW2CEWK6sPXXp8V.jpg",
    sources: "TMBD",
  },
  {
    name: "트루스",
    minutes: "125분",
    image: "https://image.tmdb.org/t/p/original/6h80rZZdTc13sVFyCigZLN6zOo.jpg",
    sources: "TMBD",
  },
  {
    name: "말레피센트1, 2014",
    minutes: "97분",
    image:
      "https://image.tmdb.org/t/p/original/e1XEV04HrfSSrE82dUZDy1c3Aq5.jpg",
    sources: "TMBD",
  },
  {
    name: "말레피센트2, 2019",
    minutes: "119분",
    image:
      "https://image.tmdb.org/t/p/original/7GwTLq3VfYndJnThmtZLmZr5JHC.jpg",
    sources: "TMBD",
  },
];

const btn = document.querySelector("#btn");
const movieName = document.getElementById("moiveName");
const movieMin = document.getElementById("mioveMinuets");
const moiveList = document.querySelector("#moiveList");
const imgHidden = document.querySelector(".img_hidden");
const imgbox = document.querySelector(".img_box");
const IMG = document.querySelector(".img_box img");
const source = document.querySelector(".source");

const OFF = "off";

function moviesClick() {
  const randomMovie = moives[Math.floor(Math.random() * moives.length)];

  const movieObj = {
    name: randomMovie.name,
    minutes: randomMovie.minutes,
    image: randomMovie.image,
    sources: randomMovie.sources,
    id: Date.now(),
  };

  movieName.innerText = randomMovie.name;
  movieMin.innerText = randomMovie.minutes;
  source.innerText = `이미지출처: ${randomMovie.sources}`;
  IMG.src = `${randomMovie.image}`;

  imgHidden.classList.remove(OFF);
  console.log(movieObj);
  // paintList(movieObj);
}

btn.addEventListener("click", moviesClick);
