import { TextChannel } from "discord.js";
import chalk from "chalk";
import firestore from "./firestore";
import { LogData } from "../";

class log {
  private getTsp(): string {
    return new Date().toLocaleString("ko-KR", {
      timeZone: "Asia/Seoul",
    });
  }
  // Error
  public e(str: any): void {
    console.error(`[${this.getTsp()}] ${chalk.red(str)}`);
  }
  // Warning
  public w(str: any): void {
    console.log(`[${this.getTsp()}] ${chalk.yellow(str)}`);
  }
  // Info
  public i(str: any): void {
    console.log(`[${this.getTsp()}] ${chalk.cyan(str)}`);
  }
  // Success
  public s(str: any): void {
    console.log(`[${this.getTsp()}] ${chalk.green(str)}`);
  }
  // Verbose
  public v(str: any): void {
    console.log(`[${this.getTsp()}] ${chalk.white(str)}`);
  }
  // Debug
  public d(str: any): void {
    console.log(`[${this.getTsp()}] ${chalk.blue(str)}`);
  }
  // Publish
  public async p(payload: LogData): Promise<void> {
    try {
      const logChannel = (await firestore.collection(payload.guild.id).doc("config").get()).data().log;
      const channel: TextChannel = (await payload.guild.channels.cache.get(logChannel)) as TextChannel;
      await channel.send({ embed: payload.embed });
    } catch (err) {
      this.e(`Log Publish > ${err}`);
    }
  }
}

export default new log();
