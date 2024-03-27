export type lt = {
  status: string;
  message: string;
  totalSolved: Number;
  totalQuestions: Number;
  easySolved: Number;
  totalEasy: Number;
  mediumSolved: Number;
  totalMedium: Number;
  hardSolved: Number;
  totalHard: Number;
  acceptanceRate: Number;
  ranking: Number;
  contributionPoints: Number;
  reputation: Number;
  submissionCalendar: Object;
};

export type cf = {
  status: string;
  result: [
    {
      contribution: Number;
      lastOnlineTimeSeconds: Number;
      rating: Number;
      friendOfCount: Number;
      titlePhoto: string;
      rank: string;
      handle: string;
      maxRating: Number;
      avatar: string;
      registrationTimeSeconds: Number;
      maxRank: string;
    }
  ];
};

export type cf_check = {
  status: string;
  result: [
    {
      id: Number;
      contestId: Number;
      creationTimeSeconds: Number;
      relativeTimeSeconds: Number;
      problem: Object;
      author: Object;
      programmingLanguage: string;
      verdict: string;
      testset: string;
      passedTestCount: Number;
      timeConsumedMillis: Number;
      memoryConsumedBytes: Number;
    }
  ];
};
