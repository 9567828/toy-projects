const movies = [
  {
    name: "플립",
    image:
      "https://image.tmdb.org/t/p/original/cTrDvMeKGagEk07x9lwewGNofgh.jpg",
    minutes: "90분",
    source: "TMDB",
  },
  {
    name: "헬프",
    image:
      "https://image.tmdb.org/t/p/original/qMVZtwZIU9oussRb8al2Gb0YPQL.jpg",
    minutes: "146분",
    source: "TMDB",
  },
  {
    name: "인셉션",
    image:
      "https://image.tmdb.org/t/p/original/zTgjeblxSLSvomt6F6UYtpiD4n7.jpg",
    minutes: "147분",
    source: "TMDB",
  },
  {
    name: "인타임",
    image:
      "https://image.tmdb.org/t/p/original/1bE6wSfmSNs0xj6rYsFcE1Vzqw8.jpg",
    minutes: "109분",
    source: "TMDB",
  },
  {
    name: "인턴",
    image:
      "https://image.tmdb.org/t/p/original/gCmXCNfK1WU1CFjZjvfo3gBhiEa.jpg",
    minutes: "121분",
    source: "TMDB",
  },
  {
    name: "킹 오브 티브스",
    image:
      "https://image.tmdb.org/t/p/original/vWoV9y5eAw2gcM3hckuMZJkOXBQ.jpg",
    minutes: "108분",
    source: "TMDB",
  },
  {
    name: "타이타닉(무삭제)",
    image:
      "https://image.tmdb.org/t/p/original/t0EqhsC3UYeTYhYnrxwvhBo1uOV.jpg",
    minutes: "195분",
    source: "TMDB",
  },
  {
    name: "테넷",
    image:
      "https://image.tmdb.org/t/p/original/ylQRi3edixhzUiubw7LQP1YhI6W.jpg",
    minutes: "150분",
    source: "TMDB",
  },
  {
    name: "플로리스",
    image:
      "https://image.tmdb.org/t/p/original/crOlmBAJ4TzQ54GMYPYcAaXsltT.jpg",
    minutes: "108분",
    source: "TMDB",
  },
  {
    name: "원더휠",
    image:
      "https://image.tmdb.org/t/p/original/icohdWIwQjhEy2Qxz0Pe5niHWI6.jpg",
    minutes: "101분",
    source: "TMDB",
  },
  {
    name: "웜바디스",
    image:
      "https://image.tmdb.org/t/p/original/dH8cm5K1fYMCXEEp7CHYsDla99D.jpg",
    minutes: "96분",
    source: "TMDB",
  },
  {
    name: "위대한 개츠비",
    image:
      "https://image.tmdb.org/t/p/original/1TQjpuZOp8l5mspPgK85ZmD3gjp.jpg",
    minutes: "142분",
    source: "TMDB",
  },
  {
    name: "어톤먼트",
    image:
      "https://image.tmdb.org/t/p/original/xOwDTYsUUNriE7e9LauxB7k581J.jpg",
    minutes: "122분",
    source: "TMDB",
  },
  {
    name: "엣지 오브 투모로우",
    image:
      "https://image.tmdb.org/t/p/original/uZy5RUNb052OSyhZgTBA9ZxFVzc.jpg",
    minutes: "113분",
    source: "TMDB",
  },
  {
    name: "어바웃타임",
    image:
      "https://image.tmdb.org/t/p/original/f9CQblm419ysGBS697WUfGN0FoI.jpg",
    minutes: "123분",
    source: "TMDB",
  },
  {
    name: "와일드 라이프",
    image:
      "https://image.tmdb.org/t/p/original/6eyyrgsSOh8swxJh7Ss8IDJvnSG.jpg",
    minutes: "105분",
    source: "TMDB",
  },
  {
    name: "이미테이션 게임",
    image:
      "https://image.tmdb.org/t/p/original/wT4cHJMqWqWxY4GXDXgD10lMQWy.jpg",
    minutes: "114분",
    source: "TMDB",
  },
  {
    name: "콘스탄틴",
    image:
      "https://image.tmdb.org/t/p/original/zHqg19nxvHKu8OS7RZWMBLGWxrz.jpg",
    minutes: "120분",
    source: "TMDB",
  },
  {
    name: "프로포즈 데이",
    image:
      "https://image.tmdb.org/t/p/original/xBmq1F0JVqB8jkX7ciPyY0kAAt4.jpg",
    minutes: "100분",
    source: "TMDB",
  },
  {
    name: "실버라이닝 플레이북",
    image:
      "https://image.tmdb.org/t/p/original/5LJbCTGuS2Elo5L50yYhCLlWNIE.jpg",
    minutes: "122분",
    source: "TMDB",
  },
  {
    name: "아델라인 - 멈춰진 시간",
    image:
      "https://image.tmdb.org/t/p/original/f1x1bcxtX0Ppz1zUyagsxOPWkMb.jpg",
    minutes: "112분",
    source: "TMDB",
  },
  {
    name: "아바타 - 확장판",
    image:
      "https://image.tmdb.org/t/p/original/zygmx5abXeDpr3fWYX4jlXFZ1wh.jpg",
    minutes: "178분",
    source: "TMDB",
  },
  {
    name: "아임 낫 데어",
    image:
      "https://image.tmdb.org/t/p/original/qGTNlHtG1hY4xYH3PpKmNAd4E74.jpg",
    minutes: "135분",
    source: "TMDB",
  },
  {
    name: "비커밍 제인",
    image:
      "https://image.tmdb.org/t/p/original/eeZ65Lc4SBcVOLcd4ICy5Q6Wpdz.jpg",
    minutes: "120분",
    source: "TMDB",
  },
  {
    name: "사랑에 대한 모든 것",
    image:
      "https://image.tmdb.org/t/p/original/cgjWXNW6hJbmyIo5tsn5MqSduk9.jpg",
    minutes: "123분",
    source: "TMDB",
  },
  {
    name: "샬롯의 거미줄",
    image:
      "https://image.tmdb.org/t/p/original/u7RbjqdzygTGmN30xTvAm0nGZw2.jpg",
    minutes: "97분",
    source: "TMDB",
  },
  {
    name: "쉬즈 더 맨",
    image:
      "https://image.tmdb.org/t/p/original/bzJhzqDsRmoxdYLueZO50MUDEGk.jpg",
    minutes: "104분",
    source: "TMDB",
  },
  {
    name: "시간여행자의 아내",
    image:
      "https://image.tmdb.org/t/p/original/8zXKSnVlzTYDcyKMlZi8usY1rjt.jpg",
    minutes: "107분",
    source: "TMDB",
  },
  {
    name: "오션스 8",
    image:
      "https://image.tmdb.org/t/p/original/mbE7RoCiFLljulqOhYSlkrnt5b0.jpg",
    minutes: "110분",
    source: "TMDB",
  },
  {
    name: "페넬로피",
    image:
      "https://image.tmdb.org/t/p/original/fQhl2016tTRdUG9Zg5XQ8QpeisM.jpg",
    minutes: "104분",
    source: "TMDB",
  },
  {
    name: "명탐정 피카츄",
    image:
      "https://image.tmdb.org/t/p/original/8Vb7PJ2aUzel5iQ6R2Jxe4MTWac.jpg",
    minutes: "104분",
    source: "TMDB",
  },
  {
    name: "몬스터콜",
    image:
      "https://image.tmdb.org/t/p/original/ieUc1qssu5xH59jbVPbMqSFTJOI.jpg",
    minutes: "108분",
    source: "TMDB",
  },
  {
    name: "미스 페레그린과 이상한 아이들의 집",
    image:
      "https://image.tmdb.org/t/p/original/4aIZZr9IcG1UQGSgeCvRG5utxr6.jpg",
    minutes: "127분",
    source: "TMDB",
  },
  {
    name: "벤자민버튼의 시간은 거꾸로 간다",
    image:
      "https://image.tmdb.org/t/p/original/9QxP0nzAyPQfqJIB0xcvglND5UL.jpg",
    minutes: "166분",
    source: "TMDB",
  },
  {
    name: "매드맥스",
    image:
      "https://image.tmdb.org/t/p/original/cadVm6gKYYukmPysHGCwrawUHHa.jpg",
    minutes: "120분",
    source: "TMDB",
  },
  {
    name: "블랙 씨",
    image:
      "https://image.tmdb.org/t/p/original/xjRUf7bu4VP6tnBHa6HCXXHWCPE.jpg",
    minutes: "115분",
    source: "TMDB",
  },
  {
    name: "스파이",
    image:
      "https://image.tmdb.org/t/p/original/sgEl7IpKy3StkCnroGtDOLOHm40.jpg",
    minutes: "120분",
    source: "TMDB",
  },
  {
    name: "오만과 편견",
    image:
      "https://image.tmdb.org/t/p/original/tQ303fQUo5Mv5Txgpl2DPS2Jq0e.jpg",
    minutes: "128분",
    source: "TMDB",
  },
  {
    name: "의뢰인",
    image:
      "https://image.tmdb.org/t/p/original/fxoXdNqOLd2SHOwtQV5pZV4KwPG.jpg",
    minutes: "119분",
    source: "TMDB",
  },
  {
    name: "파운더",
    image:
      "https://image.tmdb.org/t/p/original/pce8xCZXCxcqYUbLXLBZ5EwNoEv.jpg",
    minutes: "115분",
    source: "TMDB",
  },
  {
    name: "더 웨이 백",
    image:
      "https://image.tmdb.org/t/p/original/1W9080LUrIFQef7r7vyH0kGq7D0.jpg",
    minutes: "108분",
    source: "TMDB",
  },
  {
    name: "도그빌",
    image:
      "https://image.tmdb.org/t/p/original/gwX5Vm9zGzxcZcr3BbthdsPUVdW.jpg",
    minutes: "178분",
    source: "TMDB",
  },
  {
    name: "로맨틱홀리데이",
    image:
      "https://image.tmdb.org/t/p/original/eN7rAl9kJ390iu9Rfz8shYgToZ1.jpg",
    minutes: "135분",
    source: "TMDB",
  },
  {
    name: "리포맨",
    image:
      "https://image.tmdb.org/t/p/original/rGQhqc0KVPBmjhTo4yom22c2lz7.jpg",
    minutes: "120분",
    source: "TMDB",
  },
  {
    name: "마이 리틀자이언트",
    image:
      "https://image.tmdb.org/t/p/original/eEN9EkuatmWkHQAb5uwwCSW5DEy.jpg",
    minutes: "117분",
    source: "TMDB",
  },
  {
    name: "다크나이트",
    image:
      "https://image.tmdb.org/t/p/original/f6dNinWX8rBM79JXKcShkfSh2oA.jpg",
    minutes: "152분",
    source: "TMDB",
  },
  {
    name: "매그니피센트7",
    image:
      "https://image.tmdb.org/t/p/original/ie7skA97V0vTC6BR7srDcnWsL2d.jpg",
    minutes: "133분",
    source: "TMDB",
  },
  {
    name: "보헤미안 랩소디",
    image:
      "https://image.tmdb.org/t/p/original/xrlVhwi6OKMyQuDebpgaqU2LGju.jpg",
    minutes: "134분",
    source: "TMDB",
  },
  {
    name: "스턱 인 러브",
    image:
      "https://image.tmdb.org/t/p/original/bJzALRv5Kt2EP7dtLRViiILL0Pn.jpg",
    minutes: "97분",
    source: "TMDB",
  },
  {
    name: "아쿠아맨",
    image:
      "https://image.tmdb.org/t/p/original/zoIFp0S7EdGuQ2iR9eBJb6UxGkv.jpg",
    minutes: "124분",
    source: "TMDB",
  },
  {
    name: "예감은 틀리지 않는다",
    image:
      "https://image.tmdb.org/t/p/original/kbyLRsH1JvUePWzQZYrMCJUJTRQ.jpg",
    minutes: "108분",
    source: "TMDB",
  },
  {
    name: "유스",
    image:
      "https://image.tmdb.org/t/p/original/lJS46YrSRx8BGMsumoky5C4qC3U.jpg",
    minutes: "124분",
    source: "TMDB",
  },
  {
    name: "작은아씨들",
    image:
      "https://image.tmdb.org/t/p/original/2kfDJEwZ7Rxo3yz5v6rJlwqtY0W.jpg",
    minutes: "115분",
    source: "TMDB",
  },
  {
    name: "투모로우",
    image:
      "https://image.tmdb.org/t/p/original/96W0h7WdHacyarELRPkLXBnQckk.jpg",
    minutes: "123분",
    source: "TMDB",
  },
  {
    name: "난 그녀와 키스했다",
    image:
      "https://image.tmdb.org/t/p/original/rLll0JkNxIb3SWavKdAaogcxNXl.jpg",
    minutes: "92분",
    source: "TMDB",
  },
  {
    name: "내가 널 사랑할 수 없는 10가지 이유",
    image:
      "https://image.tmdb.org/t/p/original/s2AAPy98DjdbSj4DGYPJYtj6809.jpg",
    minutes: "97분",
    source: "TMDB",
  },
  {
    name: "네버랜드를 찾아서",
    image:
      "https://image.tmdb.org/t/p/original/smiaeB0cfwcGExjBuld58dx4lti.jpg",
    minutes: "101분",
    source: "TMDB",
  },
  {
    name: "노트북",
    image:
      "https://image.tmdb.org/t/p/original/kjXmmmecC4V6TpU9WKEk3ev4Joh.jpg",
    minutes: "123분",
    source: "TMDB",
  },
  {
    name: "겟 아웃",
    image:
      "https://image.tmdb.org/t/p/original/ajHgWxJENrSoysd2ZD7cJliKSoF.jpg",
    minutes: "104분",
    source: "TMDB",
  },
  {
    name: "고잉인스타일",
    image:
      "https://image.tmdb.org/t/p/original/e9xlrtc09cZ6bF0UZiBrxn0KmQA.jpg",
    minutes: "96분",
    source: "TMDB",
  },
  {
    name: "나니아 연대기 - 1. 사자,마녀 그리고 옷장 [The Lion, the Witch and the Wardrobe 2005]",
    image:
      "https://image.tmdb.org/t/p/original/xo86KtpjsGZRuI3vF17aHxHNX3E.jpg",
    minutes: "139분",
    source: "TMDB",
  },
  {
    name: "나니아 연대기 - 2. 캐스피언 왕자 [Prince Caspian, 2008]",
    image:
      "https://image.tmdb.org/t/p/original/o89tirJIiukLxHH20jxZ2ycSneH.jpg",
    minutes: "145분",
    source: "TMDB",
  },
  {
    name: "나니아 연대기 - 3. 새벽 출정호의 항해 [The Voyage of the Dawn Treader, 2010]",
    image:
      "https://image.tmdb.org/t/p/original/dp6YkejkXV7xAQwCv61LwXFNIeA.jpg",
    minutes: "112분",
    source: "TMDB",
  },
  {
    name: "내니 맥피 1 -우리 유모는 마법",
    image:
      "https://image.tmdb.org/t/p/original/j9zWPwaHDWE3K1Mb5RNahzwd3KY.jpg",
    minutes: "109분",
    source: "TMDB",
  },
  {
    name: "Men in Black 1, 1997",
    image:
      "https://image.tmdb.org/t/p/original/a3JDixP8OxLNyXs2lShtbTl4Omt.jpg",
    minutes: "98분",
    source: "TMDB",
  },
  {
    name: "Men in black 2, 2002",
    image:
      "https://image.tmdb.org/t/p/original/eVudwx5nYeMNWmdmnkpF2PWawYp.jpg",
    minutes: "88분",
    source: "TMDB",
  },
  {
    name: "Men in Black 3, 2012",
    image:
      "https://image.tmdb.org/t/p/original/eAHyWZwzTJjGdWoR4nZZZ2mGySf.jpg",
    minutes: "106분",
    source: "TMDB",
  },
  {
    name: "신비한 동물사전 (Fantastic Beasts and Where to find them, 2016)",
    image:
      "https://image.tmdb.org/t/p/original/1HHH1YR2UL5JLkrsbO6gfcg0gna.jpg",
    minutes: "133분",
    source: "TMDB",
  },
  {
    name: "그린델왈드의 범죄 (The Crimes of Grindelwald, 2018)",
    image:
      "https://image.tmdb.org/t/p/original/6Ik5hJ6gOYvc5F1DdKQaAwamsKd.jpg",
    minutes: "134분",
    source: "TMDB",
  },
  {
    name: "덤블도어의 비밀 (The Secrets of Dumbledore, 2022) - 쿠플에있음",
    image:
      "https://image.tmdb.org/t/p/original/n9or2j6dPL856VKIPudh46rsI0M.jpg",
    minutes: "142분",
    source: "TMDB",
  },
  {
    name: "캐리비안의 해적 - 1. 블랙펄의 저주 [The Curse of the Black Pearl, 2003]",
    image:
      "https://image.tmdb.org/t/p/original/mlmPFjeQZ3F4yjqTPNoBR0AwYYW.jpg",
    minutes: "143분",
    source: "TMDB",
  },
  {
    name: "캐리비안의 해적 - 2. 망자의 함 [Dead Man's Chest, 2006]",
    image:
      "https://image.tmdb.org/t/p/original/lAhcKRt0ggTFkeFL95jrGQYaRXs.jpg",
    minutes: "143분",
    source: "TMDB",
  },
  {
    name: "캐리비안의 해적 - 3. 세상의 끝에서 [At World's End, 2007]",
    image:
      "https://image.tmdb.org/t/p/original/bTotG6tZERQqfKr2TDjwdjW8It4.jpg",
    minutes: "168분",
    source: "TMDB",
  },
  {
    name: "캐리비안의 해적 - 4. 낯선 조류 [On Stranger Tides, 2011]",
    image:
      "https://image.tmdb.org/t/p/original/osJVVjkHmoO5WoJfbBsImYrKWIb.jpg",
    minutes: "137분",
    source: "TMDB",
  },
  {
    name: "캐리비안의 해적 - 5. 죽은 자는 말이 없다 [Pirates of the Caribbean Dead Men Tell No Tales, 2017]",
    image:
      "https://image.tmdb.org/t/p/original/arcIFL50IPQT7JDG2SD6tzcOlRL.jpg",
    minutes: "129분",
    source: "TMDB",
  },
  {
    name: "마법사의 돌 [The Philosopher's stone, 2001]",
    image:
      "https://image.tmdb.org/t/p/original/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    minutes: "152분",
    source: "TMDB",
  },
  {
    name: "비밀의 방 [The Chamber of Secrests, 2002]",
    image:
      "https://image.tmdb.org/t/p/original/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    minutes: "161분",
    source: "TMDB",
  },
  {
    name: "아즈카반의 죄수 [The Prisoner of Azkaban, 2004]",
    image:
      "https://image.tmdb.org/t/p/original/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    minutes: "141분",
    source: "TMDB",
  },
  {
    name: "불의 잔 [The Goblet of Fire, 2005]",
    image:
      "https://image.tmdb.org/t/p/original/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
    minutes: "157분",
    source: "TMDB",
  },
  {
    name: "불사조 기사단 [The order of The Phoenix, 2007]",
    image:
      "https://image.tmdb.org/t/p/original/tRoHysNFsXC2r0JiBL6iNHELut7.jpg",
    minutes: "138분",
    source: "TMDB",
  },
  {
    name: "혼혈왕자 [The half-Blood Prince, 2009]",
    image:
      "https://image.tmdb.org/t/p/original/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    minutes: "153분",
    source: "TMDB",
  },
  {
    name: "죽음의 성물 -1 [The Deathly Hallows_Part 1, 2010]",
    image:
      "https://image.tmdb.org/t/p/original/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
    minutes: "146분",
    source: "TMDB",
  },
  {
    name: "죽음의 성물 -2 [The Deathly Hallows_Part 2, 2011]",
    image:
      "https://image.tmdb.org/t/p/original/ghevK7pehru9LEJO7mAvyW8fqMI.jpg",
    minutes: "131분",
    source: "TMDB",
  },
  {
    name: "가디언즈 오브 갤럭시 Vol 1",
    image:
      "https://image.tmdb.org/t/p/original/w1NRMKrB4jytLgBgfA1CEuMBgBf.jpg",
    minutes: "122분",
    source: "TMDB",
  },
  {
    name: "가디언즈 오브 갤럭시 Vol 2",
    image:
      "https://image.tmdb.org/t/p/original/uDuwGhQgffd5GQ695oUfy5oZGqP.jpg",
    minutes: "136분",
    source: "TMDB",
  },
  {
    name: "닥터 스트레인지 1",
    image:
      "https://image.tmdb.org/t/p/original/9K7irV8HJBGlRZIWT9EmGSY0Ua0.jpg",
    minutes: "115분",
    source: "TMDB",
  },
  {
    name: "베놈 1",
    image:
      "https://image.tmdb.org/t/p/original/x4ojC59pYfPlAP4mmy2LSkCCuK2.jpg",
    minutes: "107분",
    source: "TMDB",
  },
  {
    name: "스파이더맨 1",
    image:
      "https://image.tmdb.org/t/p/original/eXbCqcUsUDUq2qqGmU5i20S0tjo.jpg",
    minutes: "121분",
    source: "TMDB",
  },
  {
    name: "스파이더맨 2",
    image:
      "https://image.tmdb.org/t/p/original/s2GLrMhe1aEQXXqRklJ0PEYUGF2.jpg",
    minutes: "126분",
    source: "TMDB",
  },
  {
    name: "스파이더맨 3",
    image:
      "https://image.tmdb.org/t/p/original/qS1WjsryNTO1LiHj3h8QPrHvv7m.jpg",
    minutes: "139분",
    source: "TMDB",
  },
  {
    name: "어메이징 스파이더맨 1",
    image:
      "https://image.tmdb.org/t/p/original/egsgKNPmMahQgNhmmYxiMVbLPrC.jpg",
    minutes: "136분",
    source: "TMDB",
  },
  {
    name: "어메이징 스파이더맨 2",
    image:
      "https://image.tmdb.org/t/p/original/qcK4RLIQc2UxdYaaj7jFJwmxBkP.jpg",
    minutes: "142분",
    source: "TMDB",
  },
  {
    name: "스파이더맨 1 - 홈커밍",
    image:
      "https://image.tmdb.org/t/p/original/hjki9weYYVABvkpZbX5jBOmKXXv.jpg",
    minutes: "133분",
    source: "TMDB",
  },
  {
    name: "스파이더맨 2 - 파 프롬 홈",
    image:
      "https://image.tmdb.org/t/p/original/742vR63T1AcXzYwHypQpzZd89vh.jpg",
    minutes: "129분",
    source: "TMDB",
  },
  {
    name: "스파이더맨 3 - 노 웨이 홈 (쿠플에있음)",
    image:
      "https://image.tmdb.org/t/p/original/voddFVdjUoAtfoZZp2RUmuZILDI.jpg",
    minutes: "148분",
    source: "TMDB",
  },
  {
    name: "어벤져스",
    image:
      "https://image.tmdb.org/t/p/original/1uHRkB2Q00Y4i7I7KNd0jGi4OmY.jpg",
    minutes: "143분",
    source: "TMDB",
  },
  {
    name: "에이지 오브 울트론",
    image:
      "https://image.tmdb.org/t/p/original/sTUiA9zY6O4qFlmRC69nG6dngTh.jpg",
    minutes: "141분",
    source: "TMDB",
  },
  {
    name: "인피니티 워",
    image:
      "https://image.tmdb.org/t/p/original/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg",
    minutes: "149분",
    source: "TMDB",
  },
  {
    name: "엔드게임",
    image:
      "https://image.tmdb.org/t/p/original/z7ilT5rNN9kDo8JZmgyhM6ej2xv.jpg",
    minutes: "181분",
    source: "TMDB",
  },
  {
    name: "앤트맨 1",
    image:
      "https://image.tmdb.org/t/p/original/3EFdR4QG1bJ7sxH7E1EhZF1LNZ0.jpg",
    minutes: "117분",
    source: "TMDB",
  },
  {
    name: "엔트맨과 와스프 2",
    image:
      "https://image.tmdb.org/t/p/original/9CxERE6O8hh9QL0UDIJpcq4BVaj.jpg",
    minutes: "118분",
    source: "TMDB",
  },
  {
    name: "캡틴마블",
    image:
      "https://image.tmdb.org/t/p/original/nAdrLDJmYsGs9FWDa5wRs9MYSq3.jpg",
    minutes: "123분",
    source: "TMDB",
  },
  {
    name: "토르1 - 천둥의신",
    image:
      "https://image.tmdb.org/t/p/original/9muV2hpfmPYPqVBDwr906tAQKG1.jpg",
    minutes: "115분",
    source: "TMDB",
  },
  {
    name: "토르2 - 다크월드",
    image:
      "https://image.tmdb.org/t/p/original/3yeRaapSOrupYvzQfITl20ME9T0.jpg",
    minutes: "112분",
    source: "TMDB",
  },
  {
    name: "토르3 - 라그나로크",
    image:
      "https://image.tmdb.org/t/p/original/uuaulIwA2AncJ8NfgBim6RzxXJT.jpg",
    minutes: "130분",
    source: "TMDB",
  },
  {
    name: "인크레더블1, 2004",
    image: "https://image.tmdb.org/t/p/original/11Byg6rHkKIvSehlW3R4pcUj8J.jpg",
    minutes: "121분",
    source: "TMDB",
  },
  {
    name: "인크레더블2, 2018",
    image:
      "https://image.tmdb.org/t/p/original/eLayVsrnIScNuZRjEiMeJo5Z0Ly.jpg",
    minutes: "125분",
    source: "TMDB",
  },
  {
    name: "라따뚜이",
    image:
      "https://image.tmdb.org/t/p/original/sDwCBLWHFebxgkqlfm0SwdD9vIn.jpg",
    minutes: "115분",
    source: "TMDB",
  },
  {
    name: "라푼젤",
    image:
      "https://image.tmdb.org/t/p/original/sT1vLH38iaezVgoFqmaiihbnTUy.jpg",
    minutes: "100분",
    source: "TMDB",
  },
  {
    name: "모아나",
    image:
      "https://image.tmdb.org/t/p/original/5mNqevqqxODTAGxg00MmxN35xtn.jpg",
    minutes: "113분",
    source: "TMDB",
  },
  {
    name: "뮬란",
    image:
      "https://image.tmdb.org/t/p/original/k22FdyuZGP084qflNJB8brkQh1H.jpg",
    minutes: "88분",
    source: "TMDB",
  },
  {
    name: "업(Up)",
    image:
      "https://image.tmdb.org/t/p/original/lL2WzkjLZP0RkPgUhybBjb9x9SL.jpg",
    minutes: "101분",
    source: "TMDB",
  },
  {
    name: "보스베이비",
    image:
      "https://image.tmdb.org/t/p/original/oh9s6RxoeX1Tr4wL1gQFbeH5X1r.jpg",
    minutes: "97분",
    source: "TMDB",
  },
  {
    name: "나, 다니엘 블레이크",
    image:
      "https://image.tmdb.org/t/p/original/bC0CmUZ9s5zdvW2CEWK6sPXXp8V.jpg",
    minutes: "100분",
    source: "TMDB",
  },
  {
    name: "트루스",
    image: "https://image.tmdb.org/t/p/original/6h80rZZdTc13sVFyCigZLN6zOo.jpg",
    minutes: "125분",
    source: "TMDB",
  },
  {
    name: "말레피센트1, 2014",
    image:
      "https://image.tmdb.org/t/p/original/e1XEV04HrfSSrE82dUZDy1c3Aq5.jpg",
    minutes: "97분",
    source: "TMDB",
  },
  {
    name: "말레피센트2, 2019",
    image:
      "https://image.tmdb.org/t/p/original/7GwTLq3VfYndJnThmtZLmZr5JHC.jpg",
    minutes: "119분",
    source: "TMDB",
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
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  const movieObj = {
    name: randomMovie.name,
    minutes: randomMovie.minutes,
    image: randomMovie.image,
    sources: randomMovie.source,
    id: Date.now(),
  };

  movieName.innerText = randomMovie.name;
  movieMin.innerText = randomMovie.minutes;
  source.innerText = `이미지출처: ${randomMovie.source}`;
  IMG.src = `${randomMovie.image}`;

  imgHidden.classList.remove(OFF);
  console.log(movieObj);
  // paintList(movieObj);
}

btn.addEventListener("click", moviesClick);
