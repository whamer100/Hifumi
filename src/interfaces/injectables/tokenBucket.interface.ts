export interface Ticket {
    tokens: number;
    lastRequest: Date | undefined;
}

export interface BucketCommand {
    tokenRefillRate: number;
    tokenCap: number;
    cost: number;
}

export interface ITokenBucket {
    cleverbotBucket: BucketCommand;
    registry: {[command: string]: BucketCommand};
    cleverbot: {[user: string]: Ticket};
    commands: {[user: string]: Ticket};
    registerCommand(commandName: string,tokenFlow: number,err: (msg: string) => any): any;
    isCleverbotRateLimited(user: string): boolean;
}
