import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResults';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      // Mapping each record to MatchData
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, // 'H' , 'A' , 'D' // *But TS won't know if there's a 'G'
          row[6],
        ];
      }
    );
  }
}
