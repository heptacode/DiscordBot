import { Locale } from "../";

export default {
  on: "켜졌어요.",
  off: "꺼졌어요.",
  manager: "[매니저]",
  scope: "범위",
  role: "역할",
  textChannel: "채팅채널",
  voiceChannel: "음성채널",
  messageID: "메시지 ID",
  embed: "임베드",
  emoji: "이모지",
  minute: "분",

  locale: {
    locale: "언어",
    code: "ko",
    name: "한국어",
    noChange: "변경된 사항이 없어요.",
    pending: "언어를 변경하는 중이예요. 잠시만 기다려주세요.",
    changed: "언어가 변경됐어요.",
  },
  usage: {
    help: "[manager]",
    play: "[query|URL]",
    volume: "<1~10>",
    //
    alarm: "<subscribe|unsubscribe|test>",
    autorole: "<view|add|purge> [user|bot] [역할]",
    delete: "<개수>",
    disconnect: "<음성채널>",
    edit: "<채팅채널> <메시지ID> <임베드>",
    embed: "<채팅채널> <임베드>",
    locale: "<언어 코드>",
    log: "<채팅채널>",
    move: "<음성채널> <타겟 음성채널>",
    reactionrole: "<view|add|remove|purge> <채팅채널> <메시지ID> [이모지] [역할]",
    setafktimeout: "<분>",
    userrole: "<view|add|remove|purge> <역할>",
    voicerole: "<view|add|remove|purge> <음성채널> <역할> [채팅채널]",
  },
  help: {
    help: "도움말",
    description: "사용 가능한 명령어와 도움말 목록이예요!\n(관리자 명령어를 보려면 [manager]를 인자로 붙여주세요)\n<필수 인자> [선택적 인자]",
    description_manager: "관리자가 사용 가능한 명령어와 도움말 목록이예요!\n<필수 인자> [선택적 인자]",
    join: "음성채널에 접속시키기",
    leave: "음성채널에서 내보내기",
    loop: "반복 재생 활성화/비활성화",
    pause: "재생 중인 노래 일시중지",
    play: "노래 재생/대기열에 추가",
    queue: "대기열 보기",
    repeat: "한 곡 반복 활성화/비활성화",
    skip: "재생 중인 곡 건너뛰기",
    stop: "재생 중인 곡 중지하기",
    volume: "음량 변경하기",
    // manager
    alarm: "음성 채널에 정각 알람 송출",
    autorole: "서버에 접속하는 멤버/봇에게 자동 역할 부여",
    delete: "메시지 일괄 삭제",
    disconnect: "음성채널 멤버 일괄 연결 끊기",
    edit: "메시지 수정",
    embed: "임베드 만들기",
    locale: "서버의 기본 언어 설정",
    log: "로그채널 설정하기",
    move: "음성채널 멤버 일괄 이동",
    privateroom: "개인방 초기화하기",
    reactionrole: "이모지 반응에 따른 역할 부여",
    setafktimeout: "자리 비움 연결 해제 시간 설정",
    userrole: "대시보드를 통해 할당 가능한 역할 설정",
    voicerole: "음성채널 접속자에게 역할 부여",
  },
  insufficientPerms: {
    administrator: "이 명령어를 실행하려면 관리자 권한이 필요해요.",
    manage_guild: "이 명령어를 실행하려면 서버를 관리할 수 있는 권한이 필요해요.",
    manage_channels: "이 명령어를 실행하려면 채널을 관리할 수 있는 권한이 필요해요.",
    manage_roles: "이 명령어를 실행하려면 역할을 관리할 수 있는 권한이 필요해요.",
    manage_messages: "이 명령어를 실행하려면 메시지를 관리할 수 있는 권한이 필요해요.",
    move_members: "이 명령어를 실행하려면 멤버를 이동할 권한이 필요해요.",
    connect: "이 명령어를 실행하려면 저에게 [연결], [말하기] 권한을 부여해주세요.",
  },

  afkTimeout: {
    afkTimeout: "자리비움 연결 해제",
    set: "자리비움 연결 해제 시간이 업데이트 됐어요: ",
    disconnected: "님께서 일정시간 자리를 비워서 연결 해제됐어요.",
    disconnected_dm: "일정시간 자리를 비우셨기에 음성 채널에서 연결 해제됐어요.",
    countdownStarted: "자리비움 연결 해제 카운트다운",
    options: {
      minutesToDisconnect: "자동 연결 해제까지 대기 시간(분)",
    },
  },
  alarm: {
    options: {
      subscribe: "알람 구독",
      unsubscribe: "알람 구독취소",
      test: "알람 테스트",
    },
  },
  autoRole: {
    autoRole: "자동 역할",
    empty: "설정된 역할이 없어요.",
    roleAppended: "역할 추가 [자동 역할]",
    options: {
      view: "설정된 자동 역할 보기",
      add: "자동 역할 추가",
      purge: "자동 역할 초기화",
    },
  },
  delete: {
    deleted: "개의 메시지를 삭제했어요!",
  },
  disconnect: {
    disconnect: "연결 해제",
    disconnected: "{voiceChannel}에서 {cnt}명의 연결을 끊었어요.",
    notVoiceChannel: "입력하신 채널은 음성 채널이 아니에요.",
  },
  log: {
    log: "로그",
    set: "로그채널이 변경됐어요: ",
    guildMemberAdd: "멤버 입장",
    guildMemberAdded: "님이 새로운 멤버가 되었어요.",
    guildMemberRemove: "멤버 떠남/퇴출됨",
    guildMemberRemoved: "님은 더 이상 이 서버의 멤버가 아니에요.",
    messageEdit: "메시지 수정됨",
    messageDelete: "메시지 삭제됨",
  },
  music: {
    joinVoiceChannel: "이 명령어를 실행하려면 음성 채널에 접속해주세요.",
    currentlyPlaying: "현재 재생중인 곡이 있어요.",
    noResult: "검색 결과가 없어요.",
    enqueued: "추가됨",
    nowPlaying: "현재 재생중",
    length: "길이",
    remaining: "남은 곡",
    position: "재생까지 남은 곡",
    queue: "대기열",
    queueEmpty: "대기열이 비어있어요.",
    loopToggled: "반복 재생이 ",
    repeatToggled: "1곡 반복 재생이 ",
    noSongToSkip: "건너뛸 곡이 없어요!",
    skipped: "건너뛰었어요!",
    volumeChanged: "음량이 변경됐어요: ",
    options: { query: "검색할 문자열 또는 URL" },
  },
  move: {
    move: "멤버 이동",
    moved: "명의 멤버가 이동됐어요: ",
    notVoiceChannel: "입력하신 채널은 음성 채널이 아니에요.",
  },
  privateRoom: {
    privateRoom: "개인방",
    create: "개인방 만들기",
    set: "개인방이 초기화됐어요.",
    waitingRoom: "대기실",
    waitingForMove: "님이 개인방 대기실에 입장하여 이동을 기다리고 있어요.",
    privateTextCreated: "개인방 채팅채널이 생성됐어요.\n이 채널은 개인방에 참가한 멤버들과 서버 매니저만 볼 수 있어요.\n늦게 참가한 멤버는 먼저 보낸 메시지를 읽을 수 없다는 점을 알아두세요.",
  },
  reactionRole: {
    roleAppended: "역할 추가됨 [이모지 역할]",
    roleRemoved: "역할 제거됨 [이모지 역할]",
    options: {
      view: "설정된 이모지 역할 보기",
      add: "이모지 역할 추가",
      remove: "이모지 역할 삭제",
      purge: "이모지 역할 초기화",
    },
  },
  voiceDisconnect: {
    notInVoiceChannel: "저는 지금 음성채널에 있지 않아요!",
  },
  userRole: {
    userRole: "대시보드 역할",
    empty: "설정된 역할이 없어요.",
    options: {
      view: "대시보드 역할 보기",
      add: "대시보드 역할 추가",
      remove: "대시보드 역할 삭제",
      purge: "대시보드 역할 초기화",
    },
  },
  voiceRole: {
    voiceRole: "음성채널 역할",
    updated: "{cnt}개의 음성채널 역할을 업데이트했어요.",
    noChanges: "아무일도 일어나지 않았어요.",
    empty: "설정된 역할이 없어요.",
    roleAppended: "역할 추가됨 [음성채널]",
    roleRemoved: "역할 제거됨 [음성채널]",
    options: {
      view: "설정된 음성채널 역할 보기",
      add: "음성채널 역할 추가",
      remove: "음성채널 역할 삭제",
      purge: "음성채널 역할 초기화",
      update: "음성채널 역할 업데이트",
      channelToSendLogs: "로그를 기록할 채팅채널",
    },
  },
} as Locale;
