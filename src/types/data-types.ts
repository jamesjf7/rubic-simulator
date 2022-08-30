interface Time {
  timems: number;
  timer: any;
  running: boolean;
}

interface History {
  time: number;
  scramble: string;
}

export { Time, History };
